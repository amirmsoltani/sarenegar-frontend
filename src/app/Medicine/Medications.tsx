import styles from './Medications.module.scss';
import Shadow from '@/assets/svg/shadow.svg';
import {Navbar} from "@/app/_common/Navbar/Navbar.tsx";
import {Link, Outlet} from "react-router-dom";


export const Medications = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Shadow className={styles.shadow}/>
                <div className={styles.title}>دارونگار</div>
            </div>
            <div className={styles.main}>

                <div className={styles.section}>
                    <Link to='' className={styles.linkSelected}>داروهای جاری</Link>
                    <Link to='completed' className={styles.link}>داروهای تکمیل شده</Link>
                </div>

                <Outlet />

                <Navbar/>
            </div>


        </div>
    );
};