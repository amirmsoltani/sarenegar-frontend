import { routes } from "@/routes/routes";
import { removeProfile } from "../../authSlice";
import { StoreUtils } from "@/store/Store.utils";
import { CookieRepository } from "@/helper/cookie.ts";
import { RouterService } from "@/services/RouterService";
import { apiAuthenticationAuthLogoutCreate } from "@/services/api";

export const logoutAction = StoreUtils.createAsyncThunk("auth/logout", async (_, thunk) => {
  try {
    const access_token = CookieRepository.get("access_token");
    access_token && (await apiAuthenticationAuthLogoutCreate());
  } catch (err) {
    //
  }

  thunk.dispatch(removeProfile());

  CookieRepository.delete("access_token");

  RouterService.navigate(routes.login.href(), { replace: true });

  return null;
});
