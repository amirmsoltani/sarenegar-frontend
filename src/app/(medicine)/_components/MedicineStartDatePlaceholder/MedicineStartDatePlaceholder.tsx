import { Validate } from "@/helper/validate";
import { DateService } from "@/services/DateService";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { InputController } from "@/common/InputController/InputController";
import { useMedicineStartDatePlaceholder } from "./useMedicineStartDatePlaceholder";

export const MedicineStartDatePlaceholder = () => {
  const { onClick } = useMedicineStartDatePlaceholder();

  return (
    <InputController
      name="start_date"
      onClick={onClick}
      Placeholder={Placeholder}
      validate={Validate.gen().required()}
      label="تاریخ شروع مصرف دارو را انتخاب کنید"
    />
  );
};

type TPlaceholder = { value: TMedicineForm["start_date"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return <div>{value ? DateService.getDate(DateService.jalaliToGregorian(value)) : "تاریخ شروع"}</div>;
};
