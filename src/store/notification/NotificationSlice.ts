

import { createSlice } from "@reduxjs/toolkit";
import { INotificationSlice } from "@/store/notification/NotificationSlice.types.ts";
import { StoreUtils } from "@/store/Store.utils.ts";
import { getNotificationsAction } from "@/store/notification/actions/getNotifications/getNotifications.ts";
import { markAllAsReadAction } from "@/store/notification/actions/markAllAsRead/markAllAsRead.ts";
import { markAsReadAction } from "@/store/notification/actions/markAsRead/markAsRead.ts";
import { getNotReadNotificationAction } from "@/store/notification/actions/notReadNotification/notReadNotification.ts";

const initialState:INotificationSlice = {
  notificationList:StoreUtils.normalActionInitState,
  notReadNotification:StoreUtils.normalActionInitState,
  markAllAsRead:StoreUtils.normalActionInitState,
  markAsRead:StoreUtils.normalActionInitState,
};

const notificationSlice = createSlice({
  name:"notification",
  initialState:initialState,
  reducers:{},
  extraReducers:(builder)=>{
      StoreUtils.normalAction(getNotificationsAction, builder, "notificationList");
      StoreUtils.normalAction(getNotReadNotificationAction, builder, "notReadNotification");
      StoreUtils.normalAction(markAllAsReadAction, builder, "markAllAsRead");
      StoreUtils.normalAction(markAsReadAction, builder, "markAsRead");
  }
});


export const notificationReducer = notificationSlice.reducer;

// export const {} = notificationSlice.actions;
