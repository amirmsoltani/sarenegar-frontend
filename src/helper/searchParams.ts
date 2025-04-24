import { RouterService } from "@/services/RouterService";

type TKeys<T extends string> = { key: T; default: any }[];
type TReturnType<T extends string> = { [Y in T]: any };

type TObject = { [key: string]: any };

export const parseSearchParams = <T extends string = any>(keys: TKeys<T>): TReturnType<T> => {
  const searchParams = new URLSearchParams(RouterService.location.search);

  return keys.reduce<{ [key: string]: any }>((prev, current) => {
    const value = searchParams.get(current.key);
    prev[current.key] = value ?? current.default;
    return prev;
  }, {}) as TReturnType<T>;
};

export const setSearchParams = (data: TObject, removeDefault?: boolean) => {
  const searchParams = new URLSearchParams(removeDefault ? undefined : RouterService.location.search);

  for (const key in data) {
    const value = data[key];
    value ? searchParams.set(key, data[key]) : searchParams.delete(key);
  }

  return searchParams.toString();
};

export const getSearchParams = () => {
  const searchParams = new URLSearchParams(RouterService.location.search);

  return searchParams.toString();
};
