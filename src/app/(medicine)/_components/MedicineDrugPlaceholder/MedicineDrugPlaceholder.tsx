import { Validate } from "@/helper/validate";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";
import { useMedicineDrugPlaceholder } from "./useMedicineDrugPlaceholder";
import { InputController } from "@/common/InputController/InputController";

export const MedicineDrugPlaceholder = () => {
  const { onClick } = useMedicineDrugPlaceholder();

  return (
    <InputController
      name="drug"
      onClick={onClick}
      Placeholder={Placeholder}
      label="داروی خود را انتخاب نمایید"
      validate={Validate.gen().required()}
    />
  );
};

type TPlaceholder = { value: TMedicineForm["drug"] };
const Placeholder = ({ value }: TPlaceholder) => {
  return <TextOverflow>{value ? `${value.en_name} - ${value.fa_name}` : "انتخاب دارو"}</TextOverflow>;
};
