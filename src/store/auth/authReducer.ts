import { createReducer } from "@reduxjs/toolkit";
import { IAuthSlice } from "./authSlice.types";
import { loginAction } from "@/store/auth/actions/login/login.action.ts";
import { StoreUtils } from "@/store/Store.utils.ts";
import { CookieRepository } from "@/helper/cookie";

function init(): IAuthSlice {
  const accessToken = CookieRepository.get("access_token");
  const login: IAuthSlice["login"] = { status: "idle" };
  if (accessToken) {
    login.data = { access_token: accessToken };
    login.status = "success";
  }

  return {
    login,
  };
}

const authReducer = createReducer(init, (builder) => {
  StoreUtils.normalAction(loginAction, builder, "login");
});

export default authReducer;
