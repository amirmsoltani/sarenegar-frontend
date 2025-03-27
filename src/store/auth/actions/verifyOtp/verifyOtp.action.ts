import { routes } from "@/routes/routes";
import { StoreUtils } from "@/store/Store.utils.ts";
import { CookieRepository } from "@/helper/cookie.ts";
import { RouterService } from "@/services/RouterService";
import { apiAuthenticationAuthVerifyOtpCreate, VerifyOTP } from "@/services/api.ts";

export const verifyOtpAction = StoreUtils.createAsyncThunk("auth/verifyOtp", async (loginData: VerifyOTP) => {
  const response = await apiAuthenticationAuthVerifyOtpCreate(loginData);

  CookieRepository.set("access_token", response.data.token, { expires: 1 });

  RouterService.navigate(routes.home.href, { replace: true });

  return response.data;
});
