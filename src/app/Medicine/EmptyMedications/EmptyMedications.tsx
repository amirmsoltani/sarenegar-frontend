import styles from './EmptyMedications.module.scss';
import Shadow from "@/assets/svg/shadow.svg";
import Pill from "@/assets/image/addPill2.png";
import {Link} from "react-router-dom";
import {Navbar} from "@/app/_common/Navbar/Navbar.tsx";

export const EmptyMedications = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Shadow className={styles.shadow}/>
                <div className={styles.title}>دارونگار</div>
            </div>
            <div className={styles.main}>
                <div className={styles.colEmpty}>
                    <img className={styles.logo} src={Pill} alt="Pill"/>
                    <div className={styles.text}>هنوز دارویی برای یادآوری وجود ندارد</div>
                    <Link to='/medicine/add/1' className={styles.btn}>ثبت داروی جدید</Link>
                </div>

                <Navbar/>
            </div>


        </div>
    );
};