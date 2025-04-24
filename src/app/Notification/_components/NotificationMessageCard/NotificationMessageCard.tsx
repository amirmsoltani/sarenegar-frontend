import messageStyles from "@/app/Notification/Message.module.scss";
import Ellipse from "@/assets/svg/Ellipse.svg";

interface IProps {
  date: string;
  time: string;
  title: string;
  message: string;
  status: boolean;
  onClick:()=>void;
}

export const NotificationMessageCard = (props: IProps) => {
  return (
    <div className={messageStyles.wrapper} onClick={props.onClick}>
      <div className={props.status ? messageStyles.messageBox : messageStyles.messageBoxRead}>
        <div className={messageStyles.sectionTop}>
          {!props.status ? <Ellipse className={messageStyles.ellipse} /> : null}
          {props.title}
        </div>
        <div className={messageStyles.sectionMid}>{props.message}</div>
        <div className={messageStyles.sectionBottom}>
          <div className={messageStyles.date}>{props.date}</div>
          <div>|</div>
          <div className={messageStyles.time}>{props.time}</div>
        </div>
      </div>
    </div>
  );
};