import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { getStateCities } from "@/helper/citiesList";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TProfileForm } from "@/store/auth/authSlice.types";

export const useCityModal = () => {
  const _ref = useModalRef();

  const navigate = useNavigate();

  const { setValue, getValues } = useFormContext<TProfileForm>();
  const state = getValues("state");

  const cities = getStateCities(state?.value);

  const onSubmit = () => {
    const city_placeholder = getValues("city_placeholder");
    city_placeholder && setValue("city", city_placeholder);
    _ref.current?.close();
  };

  const onClose = () => navigate(routes.profileInfo.href());

  return { _ref, onSubmit, onClose, cities };
};
