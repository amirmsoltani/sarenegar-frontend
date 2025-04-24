import { ChangeEvent } from "react";
import { Drug } from "@/services/api";
import { useFormContext } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { useModalRef } from "@/common/Modal/useModalRef";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { medicineFirstStepBackwardNavigation } from "../_common/medicineNavigation";
import { getDrugsListAction } from "@/store/drug/actions/getDrugsList/getDrugsList.action";

export const useMedicineDrugsModal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const _ref = useModalRef();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.drug.list);

  const { setValue, formState } = useFormContext<TMedicineForm>();

  const onClose = () => navigate(medicineFirstStepBackwardNavigation(pathname, params));

  const onSubmit = (drug: Drug) => {
    setValue("drug", drug, { shouldValidate: formState.isSubmitted });
    _ref.current?.close();
  };

  const getData = (search?: string) => dispatch(getDrugsListAction({ search }));

  const onChangeDebouncedHandler = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    getData(e.target.value);
  }, 500);

  useStatusHandler({ state, onComponentDidMount: getData });

  return { _ref, onClose, onSubmit, getData, onChangeDebouncedHandler, ...state };
};
