import { withPadStart } from "@/helper/helper";
import { StoreUtils } from "@/store/Store.utils";
import { DateService } from "@/services/DateService";
import { apiEpilepsyEpilepsyRetrieve2 } from "@/services/api";
import { TEpilepsyEventForm } from "../../epilepsySlice.types";
import { consciousnessTranslator, severityOptionTranslator, shakingTranslator } from "@/app/(epilepsy)/_common/epilepsyForm";

type TGetEpilepsyEventInfo = { id: number };

export const getEpilepsyEventInfo = StoreUtils.createAsyncThunk(
  "epilepsy/epilepsyEventInfo",
  async ({ id }: TGetEpilepsyEventInfo) => {
    const { data } = await apiEpilepsyEpilepsyRetrieve2(id);

    const [hour, minute, second] = data.duration.split(":");
    const date = new Date();

    const _data: TEpilepsyEventForm = {
      duration: { hour, minute, second },
      severity: severityOptionTranslator(data.severity),
      tremor_and_shaking: shakingTranslator(data.tremor_and_shaking),
      state_of_consciousness: consciousnessTranslator(data.state_of_consciousness),
      time_of_occurrence: {
        date: DateService.replaceSlashWithDash(date.toLocaleDateString()),
        time: { hour: withPadStart(date.getHours()), minute: withPadStart(date.getMinutes()) },
      },
    };

    return _data;
  },
);
