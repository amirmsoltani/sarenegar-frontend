import { Validate } from "@/helper/validate";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { InputController } from "@/common/InputController/InputController";
import { useMedicineFirstUsageTimePlaceholder } from "./useMedicineFirstUsageTimePlaceholder.ts";

export const MedicineFirstUsageTimePlaceholder = () => {
  const { onClick } = useMedicineFirstUsageTimePlaceholder();

  return (
    <InputController
      name="start_time"
      onClick={onClick}
      Placeholder={Placeholder}
      validate={Validate.gen().required()}
      label="زمان مصرف اولین دوز دارو"
    />
  );
};

type TPlaceholder = { value: TMedicineForm["start_time"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return <div>{value && value.value ? `${value.value.hour.value}:${value.value.minute.value}` : "انتخاب کنید"}</div>;
};
