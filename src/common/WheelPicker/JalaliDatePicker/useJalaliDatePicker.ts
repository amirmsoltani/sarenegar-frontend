import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { generateJalaliDays } from "@/helper/helper";
import { TJalaliDatePicker } from "./JalaliDatePicker";

type TUseJalaliDatePicker = Pick<TJalaliDatePicker, "name">;
export const useJalaliDatePicker = ({ name }: TUseJalaliDatePicker) => {
  const { watch, setValue } = useFormContext();
  const [year, month, day] = watch([`${name}.year`, `${name}.month`, `${name}.day`]);

  const daysList = generateJalaliDays(year.value, month.value);

  useEffect(() => {
    if (day.value > daysList.length) setValue(`${name}.day`, daysList[0]);
  }, [day.value, daysList, name, setValue]);

  return { daysList };
};
