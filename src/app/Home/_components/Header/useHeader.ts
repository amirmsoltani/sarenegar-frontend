import { useParams } from "react-router-dom";

export const useHeader = () => {
  const { date } = useParams();

  return { date };
};
