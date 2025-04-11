import { StoreUtils } from "@/store/Store.utils.ts";
import { apiAuthenticationAuthRequestotpCreate, RequestOTPRequest } from "@/services/api.ts";

export const requestOtpAction = StoreUtils.createAsyncThunk("auth/requestOtp", async (loginData: RequestOTPRequest) => {
  const response = await apiAuthenticationAuthRequestotpCreate(loginData);

  return response.data;
});
