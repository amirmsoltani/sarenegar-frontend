import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/store/store";
import { verifyOtpAction } from "@/store/auth/actions/verifyOtp/verifyOtp.action";
import { requestOtpAction } from "@/store/auth/actions/requestOtp/requestOtp.action";

export type TLoginDefaultValues = { phone_number: string; otp: string[] };
const defaultValues: TLoginDefaultValues = { phone_number: "", otp: new Array(6).fill("") };

export const useLogin = () => {
  const [step, setStep] = useState(2);

  const methods = useForm({ defaultValues });

  const dispatch = useAppDispatch();

  const changeStepHandler = (step: number) => setStep(step);

  const submitFirstStep = async ({ phone_number }: TLoginDefaultValues) =>
    await dispatch(requestOtpAction({ phone_number }))
      .unwrap()
      .then(() => changeStepHandler(2));

  const submitSecondStep = async ({ otp, phone_number }: TLoginDefaultValues) => {
    await dispatch(verifyOtpAction({ phone_number, otp: otp.join("") }));
  };

  const onSubmit = step === 1 ? submitFirstStep : submitSecondStep;

  return { step, changeStepHandler, methods, onSubmit };
};
