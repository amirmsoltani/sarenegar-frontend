import { TAppStore } from "@/store/store";
import { addEvent } from "../../epilepsySlice";
import { StoreUtils } from "@/store/Store.utils";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { apiEpilepsyEpilepsyCreate, EpilepsyCreate } from "@/services/api";

export const addEpilepsyEventAction = StoreUtils.createAsyncThunk(
  "epilepsy/addEpilepsyEvent",
  async (form: TEpilepsyEventForm, thunk) => {
    const { duration, severity, state_of_consciousness, time_of_occurrence, tremor_and_shaking } = form;

    const [month, day, year] = time_of_occurrence.date.split("-");
    const date = new Date(+year, +month - 1, +day, +time_of_occurrence.time.hour, +time_of_occurrence.time.minute).toISOString();

    const data: Omit<EpilepsyCreate, "id"> = {
      time_of_occurrence: date,
      tremor_and_shaking: tremor_and_shaking.value,
      state_of_consciousness: state_of_consciousness.value,
      duration: `${duration.hour}:${duration.minute}:${duration.hour}`,
      severity: severity.value === "1" ? "Mild" : severity.value === "2" ? "Moderate" : "Severe",
    };

    const response = await apiEpilepsyEpilepsyCreate(data);

    const store = thunk.getState() as TAppStore;

    if (store.epilepsy.epilepsyEventList.data?.date === time_of_occurrence.date) {
      thunk.dispatch(addEvent(response.data));
    }

    return response.data;
  },
);
