import styles from './Navbar.module.scss';
import HomeIcon from "@/assets/svg/home-2.svg";
import {Link} from "react-router-dom";
import PillMenu from "@/assets/svg/PillMenu.svg";
import {CalendarTick} from "iconsax-react";
import Clipboard from "@/assets/svg/clipboard-text.svg";
import ClipboardWhite from "@/assets/svg/clipboard-text-white.svg";
import {useNavbar} from "./useNavbar.ts";


export const Navbar = () => {

    const navbarHook = useNavbar();
    console.log(navbarHook);

    return (
        <div className={styles.navbar}>
            <Link to='/' className={navbarHook === '' ? styles.itemSelected : styles.item}>
                <HomeIcon className={styles.icon}/>
            </Link>
            <Link to='/medicine' className={navbarHook === 'medicine' ? styles.itemSelected : styles.item}>
                <PillMenu className={styles.icon}/>
            </Link>
            <Link to='/calender/event' className={navbarHook === 'calender' ? styles.itemSelected : styles.item}>
                <CalendarTick variant={navbarHook === 'calender' ? 'Bold' : 'Outline'} color={navbarHook==='calender'? '#DF6A6A':'#FFFFFF'}
                              className={styles.icon}/>
            </Link>
            <Link to='/reports/week' className={navbarHook === 'reports' ? styles.itemSelected : styles.item}>
                {
                    navbarHook === 'reports' ?
                        <Clipboard className={styles.icon}/>
                        :
                        <ClipboardWhite className={styles.icon}/>
                }
            </Link>
        </div>
    );
};