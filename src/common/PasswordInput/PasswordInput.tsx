import type { ComponentProps } from "react";
// types
import { Input } from "@/common/Input/Input";
// icons
import EyeIcon from "@/assets/svg/eye.svg";
import EyeSlashIcon from "@/assets/svg/eyeSlash.svg";
// hooks
import { usePasswordInput } from "./usePasswordInput";

export const PasswordInput = (props: ComponentProps<typeof Input>) => {
  const { type, toggleHandler } = usePasswordInput();

  return (
    <Input
      {...props}
      type={type}
      endContentHandler={toggleHandler}
      endContent={type === "text" ? <EyeSlashIcon /> : <EyeIcon />}
    />
  );
};
