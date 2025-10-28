import {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
} from "react";
import type { SB_UserModel } from "../models/auth/user.model";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase/supabase";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/config/store/store";
import { signInWithPassword, signOut } from "@/config/store/slices/auth/thunk";

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;

  // INFO: Functions
  supabaseSignUpUser: (signUpInfo: Partial<SignType>) => Promise<{
    auth: { user: User | null; session: Session | null };
    user: null;
  }>;
  supabaseSignInWithEmail: (
    signInInfo: Pick<SignType, "email" | "password">,
  ) => Promise<
    | { error: string; auth?: undefined; user?: undefined }
    | { auth: Session; user: any; error?: undefined }
  >;
  supabaseCloseSession: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export type SignType = SB_UserModel & { password: string };

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [session, setSession] = useState<AuthContextType["session"]>(null);
  const [token, setToken] = useState<AuthContextType["token"]>(null);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = session !== null && token !== null;

  const supabaseSignUpUser = async (signUpInfo: Partial<SignType>) => {
    try {
      setLoading(true);
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: signUpInfo.email!,
        password: signUpInfo.password!,
      });

      if (authError) {
        alert(authError.message);
        throw new Error(authError.message);
      }

      const { data: userData, error: insertError } = await supabase
        .from("users")
        .insert([
          {
            first_name: signUpInfo.first_name,
            last_name: signUpInfo.last_name,
            email: signUpInfo.email,
            phone: signUpInfo.phone,
            role: "user",
          },
        ]);

      if (insertError) {
        alert(insertError.message);
        throw new Error(insertError.message);
      }

      setUser(authData.session?.user!);
      setSession(authData.session);
      setToken(authData.session?.access_token!);

      alert("Se ha enviado un correo de confirmación");

      return { auth: authData, user: userData };
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const supabaseSignInWithEmail = async (
    signInInfo: Pick<SignType, "email" | "password">,
  ) => {
    try {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", signInInfo.email)
        .maybeSingle();

      if (userError) {
        throw Error(userError.message);
      }

      if (!userData) {
        alert("Este usuario no existe");
        console.log("Este usuario no existe", userData);
        return { error: "Este usuario no existe en la base de datos" };
      }

      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: signInInfo.email,
          password: signInInfo.password,
        });

      if (authError) {
        throw new Error(authError.message);
      }

      dispatch(signInWithPassword(signInInfo));

      setUser(userData.session?.user);
      setSession(userData.session);
      setToken(userData.session?.token);

      return { auth: authData.session, user: userData };
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const supabaseCloseSession = async () => {
    try {
      const { error: outError } = await supabase.auth.signOut();
      if (outError) throw new Error(outError.message);

      dispatch(signOut());

      setUser(null);
      setSession(null);
      setToken(null);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        token,
        isAuthenticated,
        loading,
        supabaseSignUpUser,
        supabaseSignInWithEmail,
        supabaseCloseSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be wrapped within AuthContextProvider");
  return context;
};
