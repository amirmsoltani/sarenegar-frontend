// js-cookie
import Cookies from "js-cookie";

type TCookieKeys = keyof typeof CookieRepository.keys;

export abstract class CookieRepository {
  static keys = {
    access_token: "access_token",
  };

  static get(key: TCookieKeys) {
    return Cookies.get(key);
  }

  static getMany<T extends TCookieKeys[]>(keys: T): Record<T[number], string> {
    const selectedCookies = keys.reduce((prev, current) => {
      const value = Cookies.get(current);
      return value ? { ...prev, [current]: value } : prev;
    }, {});
    return selectedCookies as Record<T[number], string>;
  }

  static set(key: TCookieKeys, value: string, options?: Cookies.CookieAttributes) {
    Cookies.set(key, value, { sameSite: "lax", secure: process.env.NODE_ENV === "production", ...options });
  }

  static delete(key: TCookieKeys) {
    Cookies.remove(key);
  }
}
