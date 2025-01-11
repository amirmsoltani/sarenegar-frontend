import styles from './EmptyPill.module.scss';
import {Link} from "react-router-dom";
import {Add, SearchNormal1} from "iconsax-react";
import Addres from "@/assets/image/not-pill.png";

export const EmptyPill = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.topHeader}>
                        <div className={styles.title}>داروی خود را انتخاب کنید</div>
                        <Link to='/medicine/add/1' className={styles.btnBack}>
                            <Add className={styles.icon}/>
                        </Link>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.searchBox}>
                            <input type="text" className={styles.input} placeholder='جستجوی نام دارو یا شرکت دارویی'/>
                            <SearchNormal1 className={styles.icon}/>
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <img className={styles.img} src={Addres} alt=""/>
                    <div className={styles.text}>دارویی با این نام موجود نمی‌باشد</div>


                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.btn}>تایید</div>
            </div>

        </div>
    );
};