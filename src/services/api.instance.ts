import { toast } from "react-toastify";
import { appStore } from "@/store/store.ts";
import axios, { AxiosResponse } from "axios";
import { CookieRepository } from "@/helper/cookie";
import { TOptions, TOrvalOptions } from "./api.type";
import { logoutAction } from "@/store/auth/actions/logout/logout.action.ts";

const apiInstance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL, paramsSerializer: { indexes: null } });

apiInstance.interceptors.request.use((config) => {
  const access_token = CookieRepository.get("access_token");
  access_token && config.headers.set("Authorization", `Token ${access_token}`);
  config.headers.set("Accept-Language", "fa");
  return config;
});

export const api = async <T>(
  { method, url, data, headers, params }: TOrvalOptions<T>,
  options?: TOptions,
): Promise<AxiosResponse<T, any>> => {
  return apiInstance<T>({ url, method, data, headers, params, ...options })
    .catch(async (err) => {
      const message = err?.response?.data?.detail ?? err?.response?.data?.message;
      if (message && typeof message === "string") toast.error(message);

      const status = err?.response?.status;
      if (status === 401 && url !== "/auth/logout/") await appStore.dispatch(logoutAction(undefined));

      return Promise.reject(err);
    })
    .then((res: any) => {
      const message = res.data?.detail ?? res.data?.message;
      if (message && typeof message === "string") toast.success(message);

      return res as AxiosResponse<T, any>;
    });
};
