import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TProfileForm } from "@/store/auth/authSlice.types";

export const useGenderModal = () => {
  const _ref = useModalRef();

  const navigate = useNavigate();

  const { setValue, getValues } = useFormContext<TProfileForm>();

  const onSubmit = () => {
    const gender = getValues("gender_placeholder");
    setValue("gender", gender);
    _ref.current?.close();
  };

  const onClose = () => navigate(routes.profileInfo.href());

  return { _ref, onSubmit, onClose };
};
