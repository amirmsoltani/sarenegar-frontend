import styles from './Navbar.module.scss';
import HomeIcon from "@/assets/svg/home-2.svg";
import {Link} from "react-router-dom";
import PillMenu from "@/assets/svg/PillMenu.svg";
import {CalendarTick} from "iconsax-react";
import Clipboard from "@/assets/svg/clipboard-text.svg";


export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.itemSelected}>
                <HomeIcon className={styles.icon}/>
            </Link>
            <Link to='/medicine' className={styles.item}>
                <PillMenu className={styles.icon}/>
            </Link>
            <Link to='/calender/event' className={styles.item}>
                <CalendarTick className={styles.icon}/>
            </Link>
            <Link to='/reports/week' className={styles.item}>
                <Clipboard className={styles.icon}/>
            </Link>
        </div>
    );
};