import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  token: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.status = "idle";
      state.token = action.payload;
    },
    loginFailed: (state) => {
      state.status = "failed";
      state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;

export default authSlice.reducer;
