import { Validate } from "@/helper/validate";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { InputController } from "@/common/InputController/InputController";
import { useMedicineDoseInputPlaceholder } from "./useMedicineDoseInputPlaceholder";

export const MedicineDoseInputPlaceholder = () => {
  const { onClick } = useMedicineDoseInputPlaceholder();

  return (
    <InputController
      name="dose"
      onClick={onClick}
      Placeholder={Placeholder}
      label="مقدار شربت در هر بار مصرف دارو"
      validate={Validate.gen().custom((value: TMedicineForm["dose"]) =>
        value.unit && value.amount ? false : "این فیلد اجباری می باشد",
      )}
    />
  );
};

type TPlaceholder = { value: TMedicineForm["dose"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return (
    <div>{value.unit && value.amount ? `${value.amount.value} ${value.unit.value}` : "انتخاب کنید"}</div>
  );
};
