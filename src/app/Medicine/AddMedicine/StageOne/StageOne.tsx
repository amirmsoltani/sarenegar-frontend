import styles from './StageOne.module.scss';
import {Dropdown} from "@/app/_common/Dropdown/Dropdown.tsx";
import {Outlet} from "react-router-dom";

export const StageOne = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet />
            <div className={styles.title}>اطلاعات دارو</div>
            <div className={styles.underline}/>
            <div className={styles.inputBox}>
                <Dropdown title='داروی خود را انتخاب نمایید' placeholder='انتخاب دارو' link='medicines'/>
                <Dropdown title='مقدار و واحد مصرف هر دوز دارو را انتخاب کنید'
                          placeholder='مقدار  و واحد مصرف هر دوز دارو' link='dose'/>
                <Dropdown title='نوع مصرف دارو را انتخاب نمایید' placeholder='نوع مصرف دارو' link='type'/>
            </div>
        </div>
    );
};