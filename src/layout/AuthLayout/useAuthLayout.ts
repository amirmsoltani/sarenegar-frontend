import { routes } from "@/routes/routes";
import { CALENDAR_RANGE } from "@/constants/constants";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { profileAction } from "@/store/auth/actions/profile/profile.action";
import { DateService } from "@/services/DateService.ts";

export const useAuthLayout = () => {
  const { date } = useParams();
  const { pathname } = useLocation();

  const isValid = useMemo(() => {
    if (pathname.includes(routes.dashboard.path)) {
      const today = new Date();
      const now = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

      const activeDate = new Date(DateService.GD(date!));

      return (
        activeDate.setDate(activeDate.getDate() + CALENDAR_RANGE) >= now &&
        now >= activeDate.setDate(activeDate.getDate() - CALENDAR_RANGE * 2)
      );
    } else return !isNaN(Date.parse(DateService.GD(date!)));
  }, [date, pathname]);

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.auth.profile);

  const getProfile = useCallback(() => dispatch(profileAction(undefined)), [dispatch]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return { state, getProfile, isValid };
};
