import { DateService } from "@/services/DateService";
import { useBirthdateInput } from "./useBirthdateInput";
import { TProfileForm } from "@/store/auth/authSlice.types";
import { InputController } from "@/common/InputController/InputController";

export const BirthdateInput = () => {
  const { onClick } = useBirthdateInput();

  return <InputController name="birth_date" onClick={onClick} label="تاریخ تولد" Placeholder={Placeholder} />;
};

type TPlaceholder = { value: TProfileForm["birth_date"] };

const Placeholder = ({ value }: TPlaceholder) =>
  value ? DateService.getDate(DateService.jalaliToGregorian(value)) : "تاریخ تولد خود را وارد نمایید";
