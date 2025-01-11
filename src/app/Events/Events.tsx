import styles from "./Events.module.scss";
import {Add} from "iconsax-react";
import {Link, Outlet} from "react-router-dom";
import {EventCard} from "@/app/_common/EventCard/EventCard.tsx";


export const Events = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>رخدادهای صرع ۲۰ شهریور ۱۴۰۱</div>
                    <Link to='/' className={styles.link}>
                        <Add className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.main}>
                    <div className={styles.cards}>
                        <EventCard title='حمله شدید' intensity='type3' startTime='۰۹:۴۱' durationTime='۰۲:۵۳' link='1' />
                        <EventCard title='حمله متوسط' intensity='type2' startTime='۱۵:۳۲' durationTime='۰۰:۵۳' link='1' />
                        <EventCard title='حمله خفیف' intensity='type1' startTime='۱۸:۴۵' durationTime='۰۰:۲۸' link='1' />
                    </div>

                    <Link to='/addEvent'>
                    <div className={styles.btn}>ایجاد رخداد صرع</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};