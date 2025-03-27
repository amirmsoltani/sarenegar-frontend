import { createReducer } from "@reduxjs/toolkit";
import { TAuthReducer } from "./authReducer.types";
import { CookieRepository } from "@/helper/cookie";
import { StoreUtils } from "@/store/Store.utils.ts";
import { logoutAction } from "./actions/logout/logout.action";
import { profileAction } from "./actions/profile/profile.action";
import { verifyOtpAction } from "./actions/verifyOtp/verifyOtp.action";
import { requestOtpAction } from "./actions/requestOtp/requestOtp.action";

const init = (): TAuthReducer => {
  const token = CookieRepository.get("access_token");

  return {
    logout: StoreUtils.normalActionInitState,
    profile: StoreUtils.normalActionInitState,
    verifyOtp: StoreUtils.normalActionInitState,
    requestOtp: StoreUtils.normalActionInitState,
    token: { status: token ? "success" : "error", data: token },
  };
};

const authReducer = createReducer(init, (builder) => {
  StoreUtils.normalAction(profileAction, builder, "profile");

  StoreUtils.normalAction(logoutAction, builder, "logout");
  StoreUtils.normalAction(verifyOtpAction, builder, "verifyOtp");
  StoreUtils.normalAction(requestOtpAction, builder, "requestOtp");
});

export default authReducer;
