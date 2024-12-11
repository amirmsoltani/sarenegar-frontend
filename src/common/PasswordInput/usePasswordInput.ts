import { useState } from "react";

export const usePasswordInput = () => {
  const [type, setType] = useState<"text" | "password">("password");

  const toggleHandler = () => setType((prev) => (prev === "text" ? "password" : "text"));

  return { type, toggleHandler };
};
