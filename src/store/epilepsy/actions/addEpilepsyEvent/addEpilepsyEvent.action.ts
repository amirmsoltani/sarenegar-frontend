import { TAppStore } from "@/store/store";
import { addEvent } from "../../epilepsySlice";
import { StoreUtils } from "@/store/Store.utils";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { apiEpilepsyEpilepsyEventCreate, EpilepsyCreateRequest } from "@/services/api";

export const addEpilepsyEventAction = StoreUtils.createAsyncThunk(
  "epilepsy/addEpilepsyEvent",
  async (form: TEpilepsyEventForm, thunk) => {
    const { duration, severity, state_of_consciousness, time_of_occurrence, tremor_and_shaking } = form;

    const _date = new Date(time_of_occurrence.date);

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

    const response = await apiEpilepsyEpilepsyEventCreate(data);

    const store = thunk.getState() as TAppStore;

    if (store.epilepsy.epilepsyEventList.data?.date === time_of_occurrence.date) {
      thunk.dispatch(addEvent(response.data));
    }

    return response.data;
  },
);
