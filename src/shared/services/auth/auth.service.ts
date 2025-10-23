import { supabase } from "@/config/supabase/supabase";
import type { SB_SingUp, SB_SingIn} from "@/shared/models/auth.model";

export async function signUpUser({first_name, last_name, email, phone, password}: SB_SingUp) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if (authError) throw new Error(authError.message);

  const userId = authData.user?.id

  const { data: userData, error: insertError } = await supabase
        .from('users')
        .insert([
            {
                id: userId,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                rol:'user'
            }
        ])
    
    if(insertError) throw new Error(insertError.message);
  
    return {auth:authData, user:userData}
}


export async function signInWithEmail({email, password}: SB_SingIn) {
    const {data:userData, error:userError} = await supabase
    .from('users')
    .select("*")
    .eq("email", email)
    .maybeSingle()

    if (userError) throw Error(userError.message)

   if (!userData){
    console.log("Este usuario no existe", userData)
    return{error: "Este usuario no existe en la base de datos"}
   }

  const { data:authData, error:authError } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if(authError) throw new Error(authError.message);
  
  return {auth:authData.session, user: userData}
}


export async function getUserById(userId:number) {
    
    const {data: userData, error: userError} = await supabase
     .from('users')
     .select("*")
     .eq("id", userId)
     .single()

     if(userError) throw Error(userError.message)
    return userData
}


export async function updatePasswordForEmail(email:string){
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://example.com/account/update-password',
    })
}


export const supabaseGetCurrentSession = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);

    return session;
};