import { useGenderInput } from "./useGenderInput";
import { TProfileForm } from "@/store/auth/authSlice.types";
import { InputController } from "@/common/InputController/InputController";

export const GenderInput = () => {
  const { onClick } = useGenderInput();

  return <InputController name="gender" label="جنسیت" onClick={onClick} Placeholder={Placeholder} />;
};

type TPlaceholder = { value: TProfileForm["gender"] };

const Placeholder = ({ value }: TPlaceholder) => (value ? value.label : "جنسیت خود را انتخاب کنید");
