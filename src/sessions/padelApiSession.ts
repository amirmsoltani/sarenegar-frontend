// axios
import axios from "axios";
// helper
import { CookieRepository } from "@/helper/cookie";

export const padelApiSession = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

padelApiSession.interceptors.request.use((config) => {
  const accessToken = CookieRepository.get("access_token");
  config.headers.set("authorization", `Bearer ${accessToken}`);
  return config;
});
