import { editEvent } from "../../epilepsySlice";
import { StoreUtils } from "@/store/Store.utils";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { apiEpilepsyEpilepsyUpdate, EpilepsyCreate } from "@/services/api";

type TEditEpilepsyEventAction = { id: number; form: TEpilepsyEventForm };

export const editEpilepsyEventAction = StoreUtils.createAsyncThunk(
  "epilepsy/editEpilepsyEvent",
  async ({ id, form }: TEditEpilepsyEventAction, thunk) => {
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

    // this should be fixed
    const response = await apiEpilepsyEpilepsyUpdate(id, data);

    thunk.dispatch(editEvent({ id, data: response.data }));

    return response.data;
  },
);
