import { createReducer } from "@reduxjs/toolkit";
import { TDrugReducer } from "./drugReducer.types";
import { StoreUtils } from "../Store.utils";
import { getDrugsListAction } from "./actions/getDrugsList/getDrugsList.action";

const init: TDrugReducer = {
  list: StoreUtils.normalActionInitState,
};

const drugReducer = createReducer(init, (builder) => {
  StoreUtils.normalAction(getDrugsListAction, builder, "list");
});

export default drugReducer;
