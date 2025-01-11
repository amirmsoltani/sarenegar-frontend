import styles from './Calendar.module.scss';
import Shadow from '@/assets/svg/shadow.svg'
import {Navbar} from "@/app/_common/Navbar/Navbar.tsx";
import ArrowSquare from "@/assets/svg/arrow-square-left.svg";
import {Link, Outlet} from "react-router-dom";



export const Calendar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Shadow className={styles.shadow}/>
                <div className={styles.title}>تقویم رویدادها</div>
                <div className={styles.btnBox}>
                    <Link to='event' className={styles.btnSelected}>حمله</Link>
                    <Link to='medicine'  className={styles.btn}>دارو</Link>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.topSec}>
                        <ArrowSquare className={styles.iconRight}/>
                        <div className={styles.title}>شهریور ۱۴۰۱</div>
                        <ArrowSquare className={styles.iconLeft}/>
                    </div>

                    <Outlet />

                </div>
                <Navbar/>
            </div>
        </div>
    );
};