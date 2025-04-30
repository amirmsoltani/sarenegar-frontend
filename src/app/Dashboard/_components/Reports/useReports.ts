import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateService } from "@/services/DateService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAnalyticsSummaryAction } from "@/store/report/actions/getAnalyticsSummary/getAnalyticsSummary.action";

export const useReports = () => {
  const { date } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.report.analyticsSummary);

  useEffect(() => {
    let isValid = false;

    if (state.status === "idle") isValid = true;
    else if (state.data && state.data.date !== date) {
      const newYear = DateService.gregorianToJalali(date).month.value;
      const prevYear = DateService.gregorianToJalali(state.data!.date).month.value;
      if (newYear !== prevYear) isValid = true;
    }

    isValid && dispatch(getAnalyticsSummaryAction({ date: date as string }));
  }, [date, dispatch, state.data, state.status]);

  return { state, date: date! };
};
