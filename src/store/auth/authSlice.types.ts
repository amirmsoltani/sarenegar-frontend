import { INormalState } from "@/store/store.types.ts";
import { Message, Token, UserProfile } from "@/services/api";
import { TDatePicker, TWheelPickerOption } from "@/common/Form/FormUtils.types";

export type TAuthReducer = {
  profile: INormalState<UserProfile>;
  updateProfile: INormalState<UserProfile>;

  logout: INormalState<void>;
  verifyOtp: INormalState<Token>;
  requestOtp: INormalState<Message>;
  token: INormalState<string | undefined>;
};

export type TProfileForm = {
  name: string;
  phone: string;

  gender: null | TWheelPickerOption;
  gender_placeholder: TWheelPickerOption;

  birth_date: null | TDatePicker;
  birth_date_placeholder: TDatePicker;

  state: null | TWheelPickerOption;
  state_placeholder: TWheelPickerOption;

  city: null | TWheelPickerOption;
  city_placeholder: null | TWheelPickerOption;
};
