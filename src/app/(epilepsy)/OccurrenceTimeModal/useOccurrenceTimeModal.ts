import { routes } from "@/routes/routes";
import { useFormContext } from "react-hook-form";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";

export const useOccurrenceTimeModal = () => {
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
      { replace: true },
    );

  const submitHandler = () => {
    const time_of_occurrence = getValues("time_of_occurrence_placeholder");
    setValue("time_of_occurrence", time_of_occurrence, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  return { _ref, onClose, submitHandler };
};
