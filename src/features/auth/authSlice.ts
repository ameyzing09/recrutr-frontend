import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  status: 'idle' | 'loading' | 'failed';
  error?: string | null;
}

const initialState: AuthState = {
  token: null,
  status: 'idle',
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
      state.status = 'idle';
      state.token = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
      state.token = null;
    },
    resetState: () => initialState,
  },
});

export const { loginStart, loginSuccess, loginFailed, resetState } =
  authSlice.actions;

export default authSlice.reducer;
