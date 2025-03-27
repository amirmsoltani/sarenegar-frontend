import axios from "axios";
import { toast } from "react-toastify";
import { appStore } from "@/store/store.ts";
import { CookieRepository } from "@/helper/cookie";
import { TOptions, TOrvalOptions } from "./api.type";
import { logoutAction } from "@/store/auth/actions/logout/logout.action.ts";

const apiInstance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL, paramsSerializer: { indexes: null } });

apiInstance.interceptors.request.use((config) => {
  const access_token = CookieRepository.get("access_token");
  access_token && config.headers.set("Authorization", `Bearer ${access_token}`);
  return config;
});

export const api = async <T>({ method, url, data, headers, params }: TOrvalOptions<T>, options?: TOptions) => {
  return apiInstance<T>({ url, method, data, headers, params, ...options }).catch((err) => {
    const message = err?.response?.data?.detail;
    if (message && typeof message === "string") toast.error(message);

    const status = err?.response?.status;
    if (status === 401) appStore.dispatch(logoutAction(undefined));

    return Promise.reject(err);
  });
};
