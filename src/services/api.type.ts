import { AxiosRequestConfig } from "axios";

type TMethod = "PUT" | "GET" | "POST" | "PATCH" | "DELETE";

export type TOrvalOptions<T> = Pick<AxiosRequestConfig<T>, "url" | "headers" | "params"> & {
  data?: any;
  method: TMethod;
};

export type TOptions = AxiosRequestConfig<any>;
