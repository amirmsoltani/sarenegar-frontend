import { useAppSelector } from "@/store/store";

export const useEpilepsyEvent = () => {
  const state = useAppSelector((store) => store.epilepsy.epilepsyEventList);

  return { state };
};
