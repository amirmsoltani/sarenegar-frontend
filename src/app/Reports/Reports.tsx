import styles from './Reports.module.scss';
import Shadow from "@/assets/svg/shadow.svg";
import {Link, Outlet} from "react-router-dom";
import ArrowSquare from "@/assets/svg/arrow-square-left.svg";
import {Navbar} from "@/app/_common/Navbar/Navbar.tsx";

export const Reports = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Shadow className={styles.shadow}/>
                <div className={styles.title}>گزارشات رخداد صرع</div>
                <div className={styles.btnBox}>
                    <Link to='week' className={styles.btnSelected}>هفتگی</Link>
                    <Link to='month' className={styles.btn}>ماهیانه</Link>
                    <Link to='year' className={styles.btn}>سالیانه</Link>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.topSec}>
                    <ArrowSquare className={styles.iconRight}/>
                    <div className={styles.title}>شهریور ۱۴۰۱</div>
                    <ArrowSquare className={styles.iconLeft}/>
                </div>
                <div className={styles.content}>

                    <Outlet />
                    <div className={styles.footer}>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
    );
};