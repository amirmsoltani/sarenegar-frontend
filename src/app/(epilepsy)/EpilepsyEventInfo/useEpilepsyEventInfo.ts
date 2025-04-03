import { routes } from "@/routes/routes";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useStatusHandler } from "@/common/useStatusHandler/useStatusHandler";
import { getEpilepsyEventInfo } from "@/store/epilepsy/actions/getEpilepsyEventInfo/getEpilepsyEventInfo.action";

export const useEpilepsyEventInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.epilepsy.epilepsyEventInfo);

  const getInfo = () => dispatch(getEpilepsyEventInfo({ id: +id! as number }));

  useStatusHandler({ state, onComponentDidMount: getInfo });

  const navigateToDeleteModal = () => navigate(routes.epilepsyEventInfo.modals.deleteEpilepsyEvent.href());

  return { id: id!, state, getInfo, navigateToDeleteModal };
};
