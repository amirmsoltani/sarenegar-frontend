import styles from './UserInfo.module.scss';
import {Link, Outlet} from "react-router-dom";
import {ArrowRight} from "iconsax-react";
import {Input} from "@/app/_common/Input/Input.tsx";
import {Dropdown} from "@/app/_common/Dropdown/Dropdown.tsx";

export const UserInfo = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet/>

            <div>
                <div className={styles.header}>
                    <Link to='/profile' className={styles.btnBack}>
                        <ArrowRight className={styles.icon}/>
                    </Link>
                    <div className={styles.title}>اطلاعات کاربری</div>
                </div>

                <div className={styles.main}>
                    <Input title='نام و نام‌خانوادگی' placeholder='نام و نام خانوادگی خود را وارد نمایید'
                           value='آرش زرگری سامانی'/>
                    <Input title='شماره موبایل' value='09136864454' disabled={true}/>
                    <Dropdown title='جنسیت' placeholder='جنسیت خود را وارد کنید' link='gender'/>
                    <Dropdown title='تاریخ تولد' placeholder='تاریخ تولد خود را وارد نمایید' link='brith'/>
                    <Dropdown title='استان' placeholder='انتخاب استان سکونت شما' link='province'/>
                    <Dropdown title='شهرستان' placeholder='انتخاب شهرستان سکونت شما' link='city'/>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.btn}>ذخیره</div>
            </div>
        </div>
    );
};