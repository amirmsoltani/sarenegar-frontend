import { routes } from "@/routes/routes";
import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";

export const useDurationTimeModal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const _ref = useModalRef();

  const { setValue, getValues, formState } = useFormContext<TEpilepsyEventForm>();

  const onClose = () =>
    navigate(
      pathname.includes(routes.addEpilepsyEvent.href())
        ? routes.addEpilepsyEvent.href()
        : routes.editEpilepsyEvent.href(params.id!),
    );

  const submitHandler = () => {
    const duration = getValues("duration_placeholder");
    setValue("duration", duration, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  return { _ref, onClose, submitHandler };
};
