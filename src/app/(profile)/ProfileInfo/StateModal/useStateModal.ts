import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { getStateCities } from "@/helper/citiesList";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TProfileForm } from "@/store/auth/authSlice.types";

export const useStateModal = () => {
  const _ref = useModalRef();

  const navigate = useNavigate();

  const { setValue, getValues } = useFormContext<TProfileForm>();

  const onSubmit = () => {
    const [state_placeholder, state] = getValues(["state_placeholder", "state"]);
    setValue("state", state_placeholder);
    if (state?.value !== state_placeholder?.value) {
      setValue("city", null);
      setValue("city_placeholder", getStateCities(state_placeholder.value)[0]);
    }
    _ref.current?.close();
  };

  const onClose = () => navigate(routes.profileInfo.href());

  return { _ref, onSubmit, onClose };
};
