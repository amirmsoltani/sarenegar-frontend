import { INormalState } from "../store.types";
import { EpilepsyDetail, PaginatedEpilepsyList } from "@/services/api";
import { TFullTimePicker, TRangeOption, TTimePicker, TToggleOption } from "@/common/Form/FormUtils.types";

export type TEpilepsySlice = {
  epilepsyEventList: INormalState<PaginatedEpilepsyList & { date: string }>;

  deleteEpilepsyEvent: INormalState<null>;
  addEpilepsyEvent: INormalState<EpilepsyDetail>;
  editEpilepsyEvent: INormalState<EpilepsyDetail>;
  epilepsyEventInfo: INormalState<TEpilepsyEventForm>;
};

export type TEpilepsyEventForm = {
  severity: TRangeOption;
  duration: TFullTimePicker;
  duration_placeholder: TFullTimePicker;
  tremor_and_shaking: TToggleOption<boolean>;
  state_of_consciousness: TToggleOption<boolean>;
  time_of_occurrence: { date: string; time: TTimePicker };
  time_of_occurrence_placeholder: { date: string; time: TTimePicker };
};
