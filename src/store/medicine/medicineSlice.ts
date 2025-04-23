import { StoreUtils } from "../Store.utils";
import { DrugDosageRetrieve } from "@/services/api";
import { TMedicineSlice } from "./medicineSlice.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDosesList } from "./actions/getDosesList/getDosesList.action";
import { addMedicineAction } from "./actions/addMedicine/addMedicine.action";
import { getDoseInfoAction } from "./actions/getDoseInfo/getDoseInfo.action";
import { editMedicineAction } from "./actions/editMedicine/editMedicine.action";
import { completeDoseAction } from "./actions/completeDose/completeDose.action";
import { notTakingDoseAction } from "./actions/notTakingDose/notTakingDose.action";
import { deleteMedicineAction } from "./actions/deleteMedicine/deleteMedicine.action";
import { getMedicineInfoAction } from "./actions/getMedicineInfo/getMedicineInfo.action";
import { completeMedicineAction } from "./actions/completeMedicine/completeMedicine.action";
import { getCurrentMedicinesListAction } from "./actions/getCurrentMedicinesList/getCurrentMedicinesList.action";
import { getCompletedMedicinesListAction } from "./actions/getCompletedMedicinesList/getCompletedMedicinesList.action";

const initialState: TMedicineSlice = {
  doseInfo: StoreUtils.normalActionInitState,
  dosesList: StoreUtils.normalActionInitState,
  completeDose: StoreUtils.normalActionInitState,
  notTakingDose: StoreUtils.normalActionInitState,

  currentMedicinesList: StoreUtils.normalActionInitState,
  completedMedicinesList: StoreUtils.normalActionInitState,

  medicineInfo: StoreUtils.normalActionInitState,

  addMedicine: StoreUtils.normalActionInitState,
  editMedicine: StoreUtils.normalActionInitState,
  deleteMedicine: StoreUtils.normalActionInitState,
  completeMedicine: StoreUtils.normalActionInitState,
};

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    addMedicine(state, action: PayloadAction<DrugDosageRetrieve>) {
      const currentList = action.payload.is_expired ? "completedMedicinesList" : "currentMedicinesList";
      if (state[currentList].data) {
        state[currentList].data.results.unshift(action.payload);
        state[currentList].data.count++;
      }
      state.dosesList = StoreUtils.normalActionInitState;
    },
    deleteMedicine: (state, action: PayloadAction<{ id: number; is_expired: boolean }>) => {
      const currentList = action.payload.is_expired ? "completedMedicinesList" : "currentMedicinesList";
      if (state[currentList].data) {
        state[currentList].data.results = state[currentList].data!.results.filter((item) => item.id !== action.payload.id);
        state[currentList].data.count--;
      }
      state.dosesList = StoreUtils.normalActionInitState;
    },
    completeMedicine: (state, action: PayloadAction<DrugDosageRetrieve>) => {
      if (state.currentMedicinesList.data) {
        state.currentMedicinesList.data.results = state.currentMedicinesList.data!.results.filter(
          (item) => item.id !== action.payload.id,
        );
        state.currentMedicinesList.data.count--;
      }
      if (state.completedMedicinesList.data) {
        state.completedMedicinesList.data.results.unshift(action.payload);
        state.completedMedicinesList.data.count++;
      }
      state.dosesList = StoreUtils.normalActionInitState;
    },
    editMedicine: (state, action: PayloadAction<DrugDosageRetrieve>) => {
      const oppositeList = action.payload.is_expired ? "currentMedicinesList" : "completedMedicinesList";
      if (state[oppositeList].data) {
        const find = state[oppositeList].data.results.find((item) => item.id === action.payload.id);
        if (find) {
          state[oppositeList].data.results = state[oppositeList].data.results.filter((item) => item.id !== action.payload.id);
          state[oppositeList].data.count--;
        }
      }
      const currentList = action.payload.is_expired ? "completedMedicinesList" : "currentMedicinesList";
      if (state[currentList].data) {
        state[currentList].data.results = state[currentList].data.results.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
      }
      state.dosesList = StoreUtils.normalActionInitState;
    },
    changeDoseStatus: (state, action: PayloadAction<number>) => {
      if (state.dosesList.data) {
        state.dosesList.data.results = state.dosesList.data.results.map((dose) => {
          return dose.reminder_id === action.payload ? { ...dose, taken: !dose.taken } : dose;
        });
      }
      state.currentMedicinesList = StoreUtils.normalActionInitState;
      state.completedMedicinesList = StoreUtils.normalActionInitState;
    },
  },
  extraReducers: (builder) => {
    StoreUtils.normalAction(getDosesList, builder, "dosesList");
    StoreUtils.normalAction(getDoseInfoAction, builder, "doseInfo");
    StoreUtils.normalAction(completeDoseAction, builder, "completeDose");
    StoreUtils.normalAction(notTakingDoseAction, builder, "notTakingDose");

    StoreUtils.normalAction(getCurrentMedicinesListAction, builder, "currentMedicinesList");
    StoreUtils.normalAction(getCompletedMedicinesListAction, builder, "completedMedicinesList");

    StoreUtils.normalAction(getMedicineInfoAction, builder, "medicineInfo");

    StoreUtils.normalAction(addMedicineAction, builder, "addMedicine");
    StoreUtils.normalAction(editMedicineAction, builder, "editMedicine");
    StoreUtils.normalAction(deleteMedicineAction, builder, "deleteMedicine");
    StoreUtils.normalAction(completeMedicineAction, builder, "completeMedicine");

    StoreUtils.clearState(builder, "medicine");
  },
});

const medicineReducer = medicineSlice.reducer;

export const { addMedicine, editMedicine, deleteMedicine, completeMedicine, changeDoseStatus } = medicineSlice.actions;

export default medicineReducer;
