import type { Session, User } from "@supabase/supabase-js";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { signInWithPassword, signOut } from "./thunk";

interface AuthState {
  user: User | null;
  session: Session | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  session: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ user: User | null; session: Session | null }>,
    ) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInWithPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.session = action.payload.session;
      })
      .addCase(signInWithPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.session = null;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setAuth, clearError } = authSlice.actions;
export default authSlice.reducer;
