import axiosInstance from "../api";
import { loginFailed, loginStart, loginSuccess } from "../features/auth/authSlice";
import { AppThunk } from "../store";
import Cookies from "js-cookie";

export const login = (username: string, password: string): AppThunk => async (dispatch) => {
    try {
        dispatch(loginStart());
        const response = await axiosInstance.post("auth/login/", {
            username,
            password,
        });
        const { token } = response.data;
        dispatch(loginSuccess(token));
        Cookies.set("token", token, { expires: 1 });
    } catch (error) {
        dispatch(loginFailed());
    }
}