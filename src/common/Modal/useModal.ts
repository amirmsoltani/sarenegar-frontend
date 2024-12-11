import { useState } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";

export const useModal = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const closeHandler = () => {
    setOpen(false);
    setTimeout(() => navigate(-1), 200);
  };

  return { open, closeHandler };
};
