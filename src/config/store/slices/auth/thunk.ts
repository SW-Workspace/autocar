import { supabase } from "@/config/supabase/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInWithPassword = createAsyncThunk(
  "auth/signInWithPassword",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    const { data, error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      console.log(error.message);
      alert(error.message);
      rejectWithValue(error.message);
    }

    return data;
  },
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      rejectWithValue(error);
    }

    return;
  },
);
