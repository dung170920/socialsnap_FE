import { store } from "@/store";
import { message } from "antd";

import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 2000,
});

api.interceptors.request.use((config) => {
  const accessToken = store.getState().auth.accessToken;
  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status !== 400) {
      const data: any = error.response?.data;
      message.error({
        content: data?.message || error.message,
        duration: 3,
      });
    }

    return Promise.reject(error);
  }
);
