import { routes } from "@/routes/routes";
import { setToken } from "../../authSlice";
import { StoreUtils } from "@/store/Store.utils.ts";
import { CookieRepository } from "@/helper/cookie.ts";
import { RouterService } from "@/services/RouterService";
import { apiAuthenticationAuthVerifyOtpCreate, VerifyOTPRequest } from "@/services/api.ts";
import { subscribeNotificationAction } from "@/store/auth/actions/subscribeNotification/subscribeNotification.action.ts";

export const verifyOtpAction = StoreUtils.createAsyncThunk("auth/verifyOtp", async (loginData: VerifyOTPRequest, thunk) => {
  const response = await apiAuthenticationAuthVerifyOtpCreate(loginData);

  const token = response.data.token;

  thunk.dispatch(setToken(token));
  CookieRepository.set("access_token", token, { expires: 365 });
  thunk.dispatch(subscribeNotificationAction(undefined));
  RouterService.navigate(routes.dashboard.href(), { replace: true });

  return response.data;
});
