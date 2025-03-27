import { StoreUtils } from "@/store/Store.utils";
import { CookieRepository } from "@/helper/cookie.ts";
import { RouterService } from "@/services/RouterService";
import { apiAuthenticationAuthLogoutCreate } from "@/services/api";

export const logoutAction = StoreUtils.createAsyncThunk("auth/logout", async () => {
  const response = await apiAuthenticationAuthLogoutCreate();

  CookieRepository.delete("access_token");

  RouterService.navigate("");

  return response;
});
