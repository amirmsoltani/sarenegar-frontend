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
      label="مقدار و واحد مصرف هر دوز دارو را انتخاب کنید"
      validate={Validate.gen().custom((value: TMedicineForm["dose"]) =>
        value.unit && value.amount ? false : "این فیلد اجباری می باشد",
      )}
    />
  );
};

type TPlaceholder = { value: TMedicineForm["dose"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return (
    <div>{value.unit && value.amount ? `${value.unit.label} - ${value.amount.label}` : "مقدار و واحد مصرف هر دوز دارو"}</div>
  );
};
