import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// instead of token we can use currentUser to store it's information and token into the httpOnly cookie form backend
export interface AuthState {
  currentUser: string | null; //for now as string but we can use interface for it
  status: 'loading' | 'signedIn' | 'notSignedIn';
  error?: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  status: 'notSignedIn',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.status = 'signedIn';
      state.currentUser = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.status = 'notSignedIn';
      state.error = action.payload;
      state.currentUser = null;
    },
    resetState: () => initialState,
  },
});

export const { loginStart, loginSuccess, loginFailed, resetState } =
  authSlice.actions;

export default authSlice.reducer;
