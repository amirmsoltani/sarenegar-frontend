import { toast } from "react-toastify";
import { isObject } from "@/helper/helper";
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
  const { disableErrorToast, disableSuccessToast, ..._options } = options ?? {};

  return apiInstance<T>({ url, method, data, headers, params, ..._options })
    .catch(async (err) => {
      const response = err?.response?.data;
      if (!disableErrorToast) {
        const message = response?.error ?? response?.message;
        if (message && typeof message === "string") toast.error(message);
        else if (isObject(response)) {
          const errors = Object.values(response);
          if (errors.length) {
            errors.forEach(
              (group) => Array.isArray(group) && (group as string[]).forEach((message: string) => toast.error(message)),
            );
            return;
          }
        }
      }

      const status = err?.response?.status;
      if (status === 401 && url !== "/auth/logout/") await appStore.dispatch(logoutAction(undefined));

      return Promise.reject(err);
    })
    .then((res: any) => {
      if (!disableSuccessToast) {
        const message = res.data?.detail ?? res.data?.message;
        if (message && typeof message === "string") toast.success(message);
      }

      return res as AxiosResponse<T, any>;
    });
};
