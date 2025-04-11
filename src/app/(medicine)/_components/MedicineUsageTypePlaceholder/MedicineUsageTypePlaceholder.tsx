import { Validate } from "@/helper/validate";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { InputController } from "@/common/InputController/InputController";
import { useMedicineUsageTypePlaceholder } from "./useMedicineUsageTypePlaceholder";

export const MedicineUsageTypePlaceholder = () => {
  const { onClick } = useMedicineUsageTypePlaceholder();

  return (
    <InputController
      name="usage_type"
      onClick={onClick}
      Placeholder={Placeholder}
      validate={Validate.gen().required()}
      label="نوع مصرف دارو را انتخاب نمایید"
    />
  );
};

type TPlaceholder = { value: TMedicineForm["usage_type"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return <div>{value ? value.label : "نوع مصرف دارو"}</div>;
};
