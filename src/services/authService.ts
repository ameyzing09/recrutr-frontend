import { AxiosError } from 'axios';
import axiosInstance from '../api';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  resetState,
} from '../features/auth/authSlice';
import { AppThunk } from '../store';
import Cookies from 'js-cookie';
// import { useState } from 'react';

type ShowToastType = (message: string, type: 'success' | 'error') => void;

export const login =
  (username: string, password: string, showToast: ShowToastType): AppThunk =>
  async (dispatch) => {
    // const [loading, setLoading] = useState(false);
    try {
      dispatch(loginStart());
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });
      console.log(response.data.data);
      const { token } = response.data.data;
      dispatch(loginSuccess(token));
      Cookies.set('token', token, { expires: 1 });
    } catch (error: unknown) {
      let errorMessage = 'An error occurred, please try again!';
      if (error.code === 'ERR_NETWORK') {
        errorMessage =
          "We're having trouble connecting to our servers. Please try refreshing the page or come back in a few minutes.";
      } else if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data.error.message;
      }
      dispatch(loginFailed(errorMessage));
      showToast(errorMessage, 'error');
    } finally {
      dispatch(resetState());
    }
  };
