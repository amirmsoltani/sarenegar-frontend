import { useStateInput } from "./useStateInput";
import { TProfileForm } from "@/store/auth/authSlice.types";
import { InputController } from "@/common/InputController/InputController";

export const CityInput = () => {
  const { onClick } = useStateInput();

  return <InputController name="city" label="شهرستان" onClick={onClick} Placeholder={Placeholder} />;
};

type TPlaceholder = { value: TProfileForm["city"] };

const Placeholder = ({ value }: TPlaceholder) => (value ? value.label : "انتخاب شهرستان سکونت شما");
