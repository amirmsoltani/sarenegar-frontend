import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { TProfileForm } from "@/store/auth/authSlice.types";

export const useBirthdateModal = () => {
  const _ref = useModalRef();

  const navigate = useNavigate();

  const { setValue, getValues } = useFormContext<TProfileForm>();

  const onSubmit = () => {
    const birthdate = getValues("birth_date_placeholder");
    setValue("birth_date", birthdate);
    _ref.current?.close();
  };

  const onClose = () => navigate(routes.profileInfo.href());

  return { _ref, onSubmit, onClose };
};
