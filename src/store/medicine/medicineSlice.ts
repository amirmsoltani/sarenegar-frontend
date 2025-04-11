import { StoreUtils } from "../Store.utils";
import { DrugDosageRetrieve } from "@/services/api";
import { TMedicineSlice } from "./medicineSlice.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addMedicineAction } from "./actions/addMedicine/addMedicine.action";
import { deleteMedicineAction } from "./actions/deleteMedicine/deleteMedicine.action";
import { getMedicineInfoAction } from "./actions/getMedicineInfo/getMedicineInfo.action";
import { completeMedicineAction } from "./actions/completeMedicine/completeMedicine.action";
import { getCurrentMedicinesListAction } from "./actions/getCurrentMedicinesList/getCurrentMedicinesList.action";
import { getCompletedMedicinesListAction } from "./actions/getCompletedMedicinesList/getCompletedMedicinesList.action";

const initialState: TMedicineSlice = {
  currentMedicinesList: StoreUtils.normalActionInitState,
  completedMedicinesList: StoreUtils.normalActionInitState,

  medicineInfo: StoreUtils.normalActionInitState,

  addMedicine: StoreUtils.normalActionInitState,
  deleteMedicine: StoreUtils.normalActionInitState,
  completeMedicine: StoreUtils.normalActionInitState,
};

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    addMedicine(state, action: PayloadAction<DrugDosageRetrieve>) {
      if (state.currentMedicinesList.data) {
        state.currentMedicinesList.data.results.unshift(action.payload);
        state.currentMedicinesList.data.count++;
      }
    },
    deleteMedicine: (state, action: PayloadAction<number>) => {
      if (state.currentMedicinesList.data) {
        state.currentMedicinesList.data.results = state.currentMedicinesList.data!.results.filter(
          (item) => item.id !== action.payload,
        );
        state.currentMedicinesList.data.count--;
      }
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(getCurrentMedicinesListAction, builder, "currentMedicinesList");
    StoreUtils.normalAction(getCompletedMedicinesListAction, builder, "completedMedicinesList");

    StoreUtils.normalAction(getMedicineInfoAction, builder, "medicineInfo");

    StoreUtils.normalAction(addMedicineAction, builder, "addMedicine");
    StoreUtils.normalAction(deleteMedicineAction, builder, "deleteMedicine");
    StoreUtils.normalAction(completeMedicineAction, builder, "completeMedicine");

    StoreUtils.clearState(builder, "medicine");
  },
});

const medicineReducer = medicineSlice.reducer;

export const { addMedicine, deleteMedicine } = medicineSlice.actions;

export default medicineReducer;
