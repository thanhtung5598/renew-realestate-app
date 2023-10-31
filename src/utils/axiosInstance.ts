import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getLocalStorage } from "./localStorage";
import { AUTH_STORAGE } from "@/constants";

export interface IAuthStorage {
  accessToken: string;
}

const BASE_URL = "https://9e69-115-78-229-96.ngrok-free.app";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authStorage = getLocalStorage<IAuthStorage>(AUTH_STORAGE);
    config.headers["ngrok-skip-browser-warning"] = true;

    if (authStorage?.accessToken) {
      config.headers["x-access-token"] = authStorage.accessToken;
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
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
