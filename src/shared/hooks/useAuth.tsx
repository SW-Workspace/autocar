import {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
} from "react";
import type { SB_UserModel } from "../models/auth/user.model";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase/supabase";

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  token: string | null;
  isAuthenticated: boolean;

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
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [session, setSession] = useState<AuthContextType["session"]>(null);
  const [token, setToken] = useState<AuthContextType["token"]>(null);

  const isAuthenticated = session !== null && token !== null;

  const supabaseSignUpUser = async (signUpInfo: Partial<SignType>) => {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: signUpInfo.email!,
      password: signUpInfo.password!,
    });

    if (authError) throw new Error(authError.message);

    const { data: userData, error: insertError } = await supabase
      .from("users")
      .insert([
        {
          first_name: signUpInfo.first_name,
          last_name: signUpInfo.last_name,
          email: signUpInfo.email,
          phone: signUpInfo.phone,
          rol: "user",
        },
      ]);

    if (insertError) throw new Error(insertError.message);

    setUser(authData.session?.user!);
    setSession(authData.session);
    setToken(authData.session?.access_token!);

    return { auth: authData, user: userData };
  };

  const supabaseSignInWithEmail = async (
    signInInfo: Pick<SignType, "email" | "password">,
  ) => {
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", signInInfo.email)
      .maybeSingle();

    if (userError) throw Error(userError.message);

    if (!userData) {
      console.log("Este usuario no existe", userData);
      return { error: "Este usuario no existe en la base de datos" };
    }

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: signInInfo.email,
        password: signInInfo.password,
      });

    if (authError) throw new Error(authError.message);

    setUser(userData.session?.user);
    setSession(userData.session);
    setToken(userData.session?.token);

    return { auth: authData.session, user: userData };
  };

  const supabaseCloseSession = async () => {
    const { error: outError } = await supabase.auth.signOut();
    if (outError) throw new Error(outError.message);

    setUser(null);
    setSession(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        token,
        isAuthenticated,
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
