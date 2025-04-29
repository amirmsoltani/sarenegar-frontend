import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { shallowEqual } from "react-redux";
import { DateService } from "@/services/DateService";
import { getStateCities } from "@/helper/citiesList";
import { TProfileForm } from "@/store/auth/authSlice.types";
import { states, stateTranslator } from "@/helper/statesList";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TWheelPickerOption } from "@/common/Form/FormUtils.types";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { updateProfileAction } from "@/store/auth/actions/updateProfile/updateProfile.action";

export const genderOptions: TWheelPickerOption[] = [
  { label: "مرد", value: "MAN" },
  { label: "زن", value: "WOMAN" },
  { label: "ترجیح میدهم نگویم!", value: "PREFER_NOT" },
];

export const genderTranslator = (value: string) => genderOptions.find((gender) => gender.value === value) ?? null;

const defaultValues: TProfileForm = {
  name: "",
  phone: "",

  gender: null,
  gender_placeholder: genderOptions[1],

  birth_date: null,
  birth_date_placeholder: DateService.gregorianToJalali(),

  state: null,
  state_placeholder: states[0],

  city: null,
  city_placeholder: null,
};

export const useProfileInfo = () => {
  const { reset, ...method } = useForm({ defaultValues });

  const dispatch = useAppDispatch();
  const { user, updateState } = useAppSelector(
    (store) => ({ user: store.auth.profile.data!, updateState: store.auth.updateProfile }),
    shallowEqual,
  );

  const submitHandler = async (form: TProfileForm) => await dispatch(updateProfileAction(form));

  useStatusHandler({
    state: updateState,
    onSuccess: () => {
      toast.success("پروفایل کاربری با موفقیت ویرایش شد");
    },
  });

  useEffect(() => {
    const name = user.full_name;
    const phone = user.phone_number;

    const gender = user.gender ? genderTranslator(user.gender) : null;

    const birthdate = user.date_of_birth ? DateService.gregorianToJalali(user.date_of_birth) : null;

    const state = user.state ? stateTranslator(user.state) : null;

    const citiesList = user.city && state ? getStateCities(state.value) : [];
    const city = user.city ? (citiesList.find((city) => city.value === user.city) ?? null) : null;

    reset({
      name,
      city,
      phone,
      state,
      gender,
      birth_date: birthdate,
      city_placeholder: city,
      state_placeholder: state ?? defaultValues.state_placeholder,
      gender_placeholder: gender ?? defaultValues.gender_placeholder,
      birth_date_placeholder: birthdate ?? defaultValues.birth_date_placeholder,
    });
  }, [reset, user]);

  return { method: { ...method, reset }, submitHandler };
};
