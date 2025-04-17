import { useStateInput } from "./useStateInput";
import { TProfileForm } from "@/store/auth/authSlice.types";
import { InputController } from "@/common/InputController/InputController";

export const StateInput = () => {
  const { onClick } = useStateInput();

  return <InputController name="state" label="استان" onClick={onClick} Placeholder={Placeholder} />;
};

type TPlaceholder = { value: TProfileForm["state"] };

const Placeholder = ({ value }: TPlaceholder) => (value ? value.label : "انتخاب استان سکونت شما");
