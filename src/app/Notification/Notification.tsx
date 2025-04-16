import styles from "./Notification.module.scss";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import DoubleTick from "@/assets/svg/double-tick-svgrepo-com 1.svg";
import { Link } from "react-router-dom";
import Ellipse from "@/assets/svg/Ellipse.svg";
import messageStyles from "./messageStyles.module.scss";

export const Notification = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.sectionRight}>
          <Link className={styles.btnBack} to="/">
            <ArrowRight className={styles.icon} />
          </Link>
          <div className={styles.title}>اعلانات</div>
        </div>
        <div className={styles.sectionLeft}>
          <div className={styles.title}>خواندن همه</div>
          <DoubleTick className={styles.icon} />
        </div>
      </div>

      <div className={styles.main}>
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={false}
        />
        <Message
          message="مصرف  دوز شب داروی اتوسوکسیمید هنوز ثبت نشده است. لطفاً در صورت مصرف، ثبت آن را فراموش نکنید"
          title="یادآوری ثبت مصرف دارو"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={false}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
        <Message
          message="اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید."
          title="یادآوری زمان مصرف"
          date="۱۳ بهمن ۱۴۰۳"
          time="۸: ۰۰"
          status={true}
        />
      </div>
    </div>
  );
};

interface IProps {
  date: string;
  time: string;
  title: string;
  message: string;
  status: boolean;
}

export const Message = (props: IProps) => {
  return (
    <div className={messageStyles.wrapper}>
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
