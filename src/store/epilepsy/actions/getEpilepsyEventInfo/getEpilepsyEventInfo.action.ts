import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import { toLabelValue, withPadStart } from "@/helper/helper";
import { apiEpilepsyEpilepsyEventRetrieve } from "@/services/api";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { consciousnessTranslator, severityOptionTranslator, shakingTranslator } from "@/app/(epilepsy)/_common/epilepsyForm";

type TGetEpilepsyEventInfo = { id: number };

export const getEpilepsyEventInfo = StoreUtils.createAsyncThunk(
  "epilepsy/epilepsyEventInfo",
  async ({ id }: TGetEpilepsyEventInfo) => {
    const { data } = await apiEpilepsyEpilepsyEventRetrieve(id);

    const [hour, minute, second] = data.duration.split(":");
    const date = new Date();

    const duration = { hour: toLabelValue(hour), minute: toLabelValue(minute), second: toLabelValue(second) };

    const time_of_occurrence = {
      date: DateService.replaceSlashWithDash(date.toLocaleDateString()),
      time: { hour: toLabelValue(withPadStart(date.getHours())), minute: toLabelValue(withPadStart(date.getMinutes())) },
    };

    const _data: TEpilepsyEventForm = {
      duration: { ...duration },
      duration_placeholder: { ...duration },

      time_of_occurrence: { ...time_of_occurrence },
      time_of_occurrence_placeholder: { ...time_of_occurrence },

      severity: severityOptionTranslator(data.severity),
      tremor_and_shaking: shakingTranslator(data.tremor_and_shaking),
      state_of_consciousness: consciousnessTranslator(data.state_of_consciousness),
    };

    return _data;
  },
);
