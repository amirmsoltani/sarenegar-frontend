import { createAsyncThunk } from "@reduxjs/toolkit";
import { padelApiSession } from "@/sessions/padelApiSession.ts";
import { ILogin, LoginDataType } from "./login.types.ts";
import { CookieRepository } from "@/helper/cookie.ts";

export const loginAction = createAsyncThunk("auth/login", async (loginData: LoginDataType) => {
  const response = await padelApiSession.post<ILogin>("auth/login", loginData);
  CookieRepository.set("access_token", response.data.access_token, { expires: 1 });
  return response.data;
});
