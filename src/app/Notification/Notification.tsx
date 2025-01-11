import styles from './Notification.module.scss';
import {ArrowRight} from "iconsax-react"
import DoubleTick from '@/assets/svg/double-tick-svgrepo-com 1.svg';
import {Message} from "@/app/_common/Message/Message.tsx";
import {Link} from "react-router-dom";


export const Notification = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.sectionRight}>
                    <Link className={styles.btnBack} to='/'>
                        <ArrowRight className={styles.icon}/>
                    </Link>
                    <div className={styles.title}>اعلانات</div>
                </div>
                <div className={styles.sectionLeft}>
                    <div className={styles.title}>خواندن همه</div>
                    <DoubleTick className={styles.icon}/>
                </div>
            </div>

            <div className={styles.main}>
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={false} />
                <Message message='مصرف  دوز شب داروی اتوسوکسیمید هنوز ثبت نشده است. لطفاً در صورت مصرف، ثبت آن را فراموش نکنید' title='یادآوری ثبت مصرف دارو' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={false} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />
                <Message message='اکنون زمان مصرف دوز صبح داروی کاربامازپین است. لطفاً نسبت به مصرف آن اقدام فرمایید.' title='یادآوری زمان مصرف' date='۱۳ بهمن ۱۴۰۳' time='۸: ۰۰' status={true} />

            </div>
        </div>
    );
};

