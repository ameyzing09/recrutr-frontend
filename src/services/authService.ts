import { AxiosError } from 'axios';
import axiosInstance from '../api';
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from '../features/auth/authSlice';
import { AppThunk } from '../store';

export const login =
  (username: string, password: string): AppThunk =>
  async (dispatch) => {
    // const [loading, setLoading] = useState(false);
    try {
      dispatch(loginStart());
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });
      const { user: currentUser } = response.data.data;
      dispatch(loginSuccess(currentUser));
    } catch (error: any) {
      let errorMessage = 'An error occurred, please try again!';
      if (error.code === 'ERR_NETWORK') {
        errorMessage =
          "We're having trouble connecting to our servers. Please try refreshing the page or come back in a few minutes.";
      } else if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data.error.message;
      }
      dispatch(loginFailed(errorMessage));
    }
  };
