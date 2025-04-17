import { useState } from "react";

export const useAccordion = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return { open, toggleOpen };
};
