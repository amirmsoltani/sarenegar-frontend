import { StoreUtils } from "@/store/Store.utils";
import { apiProfileAuthProfileRetrieve } from "@/services/api";

export const profileAction = StoreUtils.createAsyncThunk("auth/profile", async () => {
  const response = await apiProfileAuthProfileRetrieve();

  return response.data;
});
