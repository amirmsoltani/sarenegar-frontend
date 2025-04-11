import { PaginatedDrug } from "@/services/api";
import { INormalState } from "../store.types";

export type TDrugReducer = {
  list: INormalState<PaginatedDrug>;
};
