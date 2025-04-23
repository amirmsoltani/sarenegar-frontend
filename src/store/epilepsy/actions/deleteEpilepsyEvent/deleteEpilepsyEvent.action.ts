import { StoreUtils } from "@/store/Store.utils";
import { deleteEvent } from "../../epilepsySlice";
import { resetSummaryReport } from "@/store/report/reportSlice";
import { apiEpilepsyEpilepsyEventDelete } from "@/services/api";

type TDeleteEpilepsyEventAction = { id: number };

export const deleteEpilepsyEventAction = StoreUtils.createAsyncThunk(
  "epilepsy/deleteEpilepsyEvent",
  async ({ id }: TDeleteEpilepsyEventAction, thunk) => {
    const response = await apiEpilepsyEpilepsyEventDelete(id);

    thunk.dispatch(deleteEvent(id));
    thunk.dispatch(resetSummaryReport());

    return response.data;
  },
);
