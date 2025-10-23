import { supabase } from "@/config/supabase/supabase";
import type { SB_SignUpModel, SB_SignInModel} from "@/shared/models/auth.model";

export async function supabaseSignUpUser({
    first_name,
    last_name,
    email,
    phone,
    password
}: SB_SignUpModel) {
  
    const { data: authData, error:authError } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if (authError) throw new Error(authError.message);

  const { data: userData, error: insertError } = await supabase
        .from('users')
        .insert([
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                rol:'user'
            }
        ])
    
    if(insertError) throw new Error(insertError.message);
  
    return {auth:authData, user:userData};
}


export async function supabaseSignInWithEmail({email, password}: SB_SignInModel) {
    const {data:userData, error:userError} = await supabase
    .from('users')
    .select("*")
    .eq("email", email)
    .maybeSingle();

    if (userError) throw Error(userError.message);

   if (!userData){
    console.log("Este usuario no existe", userData);
    return{error: "Este usuario no existe en la base de datos"};
   }

  const { data:authData, error:authError } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if(authError) throw new Error(authError.message);
  return {auth:authData.session, user: userData};
}


export async function supabaseGetUserById(userId:number) {
    
    const {data: userData, error: userError} = await supabase
     .from('users')
     .select("*")
     .eq("id", userId)
     .single();

     if(userError) throw Error(userError.message);
    return userData;
}


export const supabaseCloseSession = async () =>{
    const { error:outError } = await supabase.auth.signOut();
    if (outError) throw new Error(outError.message);
}

export async function supabaseGetUserAll() {
    const {data: userData, error: userError} = await supabase
     .from('users')
     .select("*")
     .single();

     if(userError) throw Error(userError.message);
    return userData;
}