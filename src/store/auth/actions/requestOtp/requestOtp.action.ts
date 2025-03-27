import { StoreUtils } from "@/store/Store.utils.ts";
import { apiAuthenticationAuthRequestotpCreate, RequestOTP } from "@/services/api.ts";

export const requestOtpAction = StoreUtils.createAsyncThunk("auth/requestOtp", async (loginData: RequestOTP) => {
  const response = await apiAuthenticationAuthRequestotpCreate(loginData);

  return response.data;
});
