import { supabase } from "@/config/supabase/supabase";
import type { SB_UserModel } from "@/shared/models/auth/user.model";

export async function supabaseGetUserById(userId: Pick<SB_UserModel, "id">) {
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (userError) throw Error(userError.message);
  return userData;
}

// NOTE: Maybe we won't use this function

export async function supabaseGetAllUsers() {
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .single();

  if (userError) throw Error(userError.message);
  return userData;
}
