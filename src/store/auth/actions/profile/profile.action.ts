import { StoreUtils } from "@/store/Store.utils";
import { apiUserAuthMeRetrieve } from "@/services/api";

export const profileAction = StoreUtils.createAsyncThunk("auth/profile", async () => {
  const response = await apiUserAuthMeRetrieve();

  return response;
});
