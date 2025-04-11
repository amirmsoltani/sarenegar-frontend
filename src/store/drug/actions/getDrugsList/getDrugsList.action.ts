import { StoreUtils } from "@/store/Store.utils";
import { apiDrugsDosemanagerDrugsRetrieve, ApiDrugsDosemanagerDrugsRetrieveParams } from "@/services/api";

export const getDrugsListAction = StoreUtils.createAsyncThunk(
  "drugs/list",
  async (props?: ApiDrugsDosemanagerDrugsRetrieveParams) => {
    const response = await apiDrugsDosemanagerDrugsRetrieve({ page_size: 100, ...(props ?? {}) });

    return response.data;
  },
);
