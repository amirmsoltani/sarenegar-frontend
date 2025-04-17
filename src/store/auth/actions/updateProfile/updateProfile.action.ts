import { updateProfile } from "../../authSlice";
import { StoreUtils } from "@/store/Store.utils.ts";
import { TProfileForm } from "../../authSlice.types";
import { DateService } from "@/services/DateService";
import { apiProfileAuthProfileUpdate, UserProfileUpdateRequest } from "@/services/api.ts";

export const updateProfileAction = StoreUtils.createAsyncThunk("auth/updateProfile", async (form: TProfileForm, thunk) => {
  const { name, gender, birth_date, city, state } = form;

  const data: UserProfileUpdateRequest = {
    full_name: name,
    city: city?.value,
    state: state?.value,
    gender: gender?.value,
    date_of_birth: birth_date ? DateService.setToGlobalFormat(DateService.jalaliToGregorian(birth_date)) : undefined,
  };

  const response = await apiProfileAuthProfileUpdate(data);

  thunk.dispatch(updateProfile(response.data));

  return response.data;
});
