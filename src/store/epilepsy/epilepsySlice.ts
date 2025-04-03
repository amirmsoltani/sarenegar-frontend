import { StoreUtils } from "../Store.utils";
import { EpilepsyDetail } from "@/services/api";
import { TEpilepsySlice } from "./epilepsySlice.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addEpilepsyEventAction } from "./actions/addEpilepsyEvent/addEpilepsyEvent.action";
import { editEpilepsyEventAction } from "./actions/editEpilepsyEvent/editEpilepsyEvent.action";
import { getEpilepsyEventInfo } from "./actions/getEpilepsyEventInfo/getEpilepsyEventInfo.action";
import { deleteEpilepsyEventAction } from "./actions/deleteEpilepsyEvent/deleteEpilepsyEvent.action";
import { getEpilepsyEventListAction } from "./actions/getEpilepsyEventList/getEpilepsyEventList.action";

const initialState: TEpilepsySlice = {
  epilepsyEventList: StoreUtils.normalActionInitState,

  addEpilepsyEvent: StoreUtils.normalActionInitState,
  epilepsyEventInfo: StoreUtils.normalActionInitState,
  editEpilepsyEvent: StoreUtils.normalActionInitState,
  deleteEpilepsyEvent: StoreUtils.normalActionInitState,
};

const epilepsySlice = createSlice({
  name: "epilepsy",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<EpilepsyDetail>) => {
      state.epilepsyEventList.data!.results.unshift(action.payload);
      state.epilepsyEventList.data!.count++;
    },
    editEvent: (state, action: PayloadAction<{ id: number; data: EpilepsyDetail }>) => {
      const index = state.epilepsyEventList.data!.results.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) state.epilepsyEventList.data!.results[index] = action.payload.data;
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.epilepsyEventList.data!.results = state.epilepsyEventList.data!.results.filter((item) => item.id !== action.payload);
      state.epilepsyEventList.data!.count--;
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(getEpilepsyEventListAction, builder, "epilepsyEventList");

    StoreUtils.normalAction(getEpilepsyEventInfo, builder, "epilepsyEventInfo");
    StoreUtils.normalAction(addEpilepsyEventAction, builder, "addEpilepsyEvent");
    StoreUtils.normalAction(editEpilepsyEventAction, builder, "editEpilepsyEvent");
    StoreUtils.normalAction(deleteEpilepsyEventAction, builder, "deleteEpilepsyEvent");

    StoreUtils.clearState(builder, "epilepsy");
  },
});

const epilepsyReducer = epilepsySlice.reducer;

export const { addEvent, editEvent, deleteEvent } = epilepsySlice.actions;

export default epilepsyReducer;
