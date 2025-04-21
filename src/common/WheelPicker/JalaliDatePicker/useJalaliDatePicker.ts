import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TJalaliDatePicker } from "./JalaliDatePicker";
import { allJalaliYears, generateJalaliDays, generateJalaliMonths, jalaliMonths, tillNowJalaliYears } from "@/helper/helper";

type TUseJalaliDatePicker = Pick<TJalaliDatePicker, "name" | "removeFuture">;
export const useJalaliDatePicker = ({ name, removeFuture }: TUseJalaliDatePicker) => {
  const { watch, setValue } = useFormContext();
  const [year, month, day] = watch([`${name}.year`, `${name}.month`, `${name}.day`]);

  const yearsList = removeFuture ? tillNowJalaliYears : allJalaliYears;
  const monthList = removeFuture ? generateJalaliMonths(year.value) : jalaliMonths;
  const daysList = generateJalaliDays(year.value, month.value, removeFuture);

  useEffect(() => {
    if (day.value > daysList.length) setValue(`${name}.day`, daysList[0]);
    if (month.value > monthList.length) setValue(`${name}.month`, monthList[0]);
  }, [day.value, daysList, month.value, monthList, name, setValue]);

  return { yearsList, monthList, daysList };
};
