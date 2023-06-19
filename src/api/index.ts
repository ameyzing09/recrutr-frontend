import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:8000/api/";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  /* See issue: https://github.com/axios/axios/issues/5573 
  Fix: https://github.com/axios/axios/issues/5573#issuecomment-1489596178 */
  (config: AdaptAxiosRequestConfig) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;