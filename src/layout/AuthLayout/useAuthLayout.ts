import { useParams } from "react-router-dom";
import { isDateValid } from "@/helper/helper";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { profileAction } from "@/store/auth/actions/profile/profile.action";
import { getEpilepsyEventListAction } from "@/store/epilepsy/actions/getEpilepsyEventList/getEpilepsyEventList.action";

export const useAuthLayout = () => {
  const { date } = useParams();

  const isValid = isDateValid(date as string);

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.auth.profile);

  const getProfile = useCallback(() => dispatch(profileAction(undefined)), [dispatch]);

  const getInfo = useCallback(() => dispatch(getEpilepsyEventListAction({ date: date as string })), [date, dispatch]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    state.status === "success" && getInfo();
  }, [getInfo, state.status]);

  return { state, getProfile, isValid };
};
