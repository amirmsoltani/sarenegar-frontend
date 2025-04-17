import { UserProfile } from "@/services/api";
import { TAuthReducer } from "./authSlice.types";
import { CookieRepository } from "@/helper/cookie";
import { StoreUtils } from "@/store/Store.utils.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logoutAction } from "./actions/logout/logout.action";
import { profileAction } from "./actions/profile/profile.action";
import { verifyOtpAction } from "./actions/verifyOtp/verifyOtp.action";
import { requestOtpAction } from "./actions/requestOtp/requestOtp.action";
import { updateProfileAction } from "./actions/updateProfile/updateProfile.action";

const init = (): TAuthReducer => {
  const token = CookieRepository.get("access_token");

  return {
    profile: StoreUtils.normalActionInitState,
    updateProfile: StoreUtils.normalActionInitState,

    logout: StoreUtils.normalActionInitState,
    verifyOtp: StoreUtils.normalActionInitState,
    requestOtp: StoreUtils.normalActionInitState,
    token: { status: token ? "success" : "error", data: token },
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token.status = "success";
      state.token.data = action.payload;
    },
    removeProfile: (state) => {
      state.token = StoreUtils.normalActionInitState;
      state.profile = StoreUtils.normalActionInitState;
    },
    updateProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(profileAction, builder, "profile");
    StoreUtils.normalAction(updateProfileAction, builder, "updateProfile");

    StoreUtils.normalAction(logoutAction, builder, "logout");
    StoreUtils.normalAction(verifyOtpAction, builder, "verifyOtp");
    StoreUtils.normalAction(requestOtpAction, builder, "requestOtp");
  },
});

const authReducer = authSlice.reducer;

export const { setToken, removeProfile, updateProfile } = authSlice.actions;

export default authReducer;
