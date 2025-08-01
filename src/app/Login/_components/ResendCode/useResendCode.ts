import { useEffect, useState } from "react";
import { secondToMinute } from "@/helper/helper";
import { useFormContext } from "react-hook-form";
import { TLoginDefaultValues } from "../../useLogin";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { requestOtpAction } from "@/store/auth/actions/requestOtp/requestOtp.action";

const defaultTime = 120;

export const useResendCode = () => {
  const [time, setTime] = useState(defaultTime);

  const { getValues } = useFormContext<TLoginDefaultValues>();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((store) => store.auth.requestOtp.status === "loading");

  useEffect(() => {
    if (time) {
      const timeout = setTimeout(() => setTime((prev) => prev - 1), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [time]);

  const submitHandler = () => {
    const { phone_number } = getValues();
    dispatch(requestOtpAction({ phone_number }))
      .unwrap()
      .then(() => setTime(defaultTime));
  };

  const timer = secondToMinute(time);

  return { timer, time, isLoading, submitHandler };
};
