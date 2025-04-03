import { routes } from "@/routes/routes";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action";

export const useEpilepsyModal = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.epilepsyEventList);

  const getData = () => dispatch(getEpilepsyEventListAction({ date: date as string }));

  const onClose = () => navigate(routes.dashboard.href());

  return { onClose, state, getData };
};
