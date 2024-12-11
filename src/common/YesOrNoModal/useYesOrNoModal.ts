import { useState } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// types
import { TUseYesOrNoModal } from "./YesOrNoModal.types";

export const useYesOrNoModal = ({ onSubmit }: TUseYesOrNoModal) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeHandler = () => {
    setOpen(false);
    setTimeout(() => navigate(-1), 200);
  };

  const submitHandler = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
    closeHandler();
  };

  return { open, loading, closeHandler, submitHandler };
};
