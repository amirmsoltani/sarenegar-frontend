import { useParams } from "react-router-dom";

export const useReportsHeader = () => {
  const { type } = useParams();

  return { type };
};
