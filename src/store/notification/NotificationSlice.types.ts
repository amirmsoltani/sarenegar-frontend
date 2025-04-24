import { INormalState } from "@/store/store.types.ts";


export interface INotification  {
 notificationID:number;
 reminderID:number;
 isRead:boolean;
 title:string;
 message:string;
 time:string;
 date:string;
 dateTime:string;
}

export interface INotificationSlice {
 notificationList:INormalState<INotification[]>;
 notReadNotification:INormalState<number>;
 markAllAsRead:INormalState<null>;
 markAsRead:INormalState<null>;
}