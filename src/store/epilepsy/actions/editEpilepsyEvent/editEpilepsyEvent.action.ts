import { editEvent } from "../../epilepsySlice";
import { StoreUtils } from "@/store/Store.utils";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { resetSummaryReport } from "@/store/report/reportSlice";
import { apiEpilepsyEpilepsyEventUpdate, EpilepsyCreateRequest } from "@/services/api";
import { DateService } from "@/services/DateService.ts";

type TEditEpilepsyEventAction = { id: number; form: TEpilepsyEventForm };

export const editEpilepsyEventAction = StoreUtils.createAsyncThunk(
  "epilepsy/editEpilepsyEvent",
  async ({ id, form }: TEditEpilepsyEventAction, thunk) => {
    const { duration, severity, state_of_consciousness, time_of_occurrence, tremor_and_shaking } = form;

    const _date = new Date(DateService.GD(time_of_occurrence.date));

    const date = new Date(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      +time_of_occurrence.time.hour.value,
      +time_of_occurrence.time.minute.value,
    ).toISOString();

    const data: Omit<EpilepsyCreateRequest, "id"> = {
      time_of_occurrence: date,
      tremor_and_shaking: tremor_and_shaking.value,
      state_of_consciousness: state_of_consciousness.value,
      duration: `${duration.hour.value}:${duration.minute.value}:${duration.second.value}`,
      severity: severity.value === "1" ? "Mild" : severity.value === "2" ? "Moderate" : "Severe",
    };

    const response = await apiEpilepsyEpilepsyEventUpdate(id, data);

    thunk.dispatch(editEvent({ id, data: response.data }));
    thunk.dispatch(resetSummaryReport());

    return response.data;
  },
);
