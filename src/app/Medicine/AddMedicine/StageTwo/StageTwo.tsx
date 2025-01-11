import styles from './StageTwo.module.scss';
import {Outlet} from "react-router-dom";
import {InputRadio} from "@/app/_common/InputRadio/InputRadio.tsx";
import {Dropdown} from "@/app/_common/Dropdown/Dropdown.tsx";
import {AddCircle, Trash} from "iconsax-react";


export const StageTwo = () => {

    return (
        <div className={styles.wrapper}>
            <Outlet />
            <div className={styles.title}>زمانبندی دارو</div>
            <div className={styles.underline}/>
            <div className={styles.inputBox}>
                <div className={styles.main}>

                    <InputRadio week={true} name='daily' label='زمانبندی داروی شما در هفته چگونه است ؟' item='هر روز'
                                item2='انتخاب روز'/>
                    <Dropdown title='تاریخ شروع مصرف دارو را انتخاب کنید' placeholder='امروز ۱۳ بهمن ۱۴۰۳'
                              link='start'/>
                    <div>
                        <InputRadio name='setTime' label='اتمام مصرف دارو را انتخاب کنید' item='به تاریخ'
                                    item2='به روز'/>
                        <Dropdown title='' placeholder='تاریخ اتمام مصرف دارو' link='endNumber'/>

                    </div>
                    <div className={styles.doseSection}>
                        <div className={styles.dose}>
                            <Dropdown title='زمان مصرف دوز دارو در روز را انتخاب کنید' placeholder='اولین دوز مصرف'
                                      time='۰۸:۰۰' link='time'/>
                        </div>
                        <div className={styles.dose}>
                            <Dropdown title='' placeholder='دومین دوز مصرف'
                                      time='۱۲:۰۰' link='time'/>
                            <div className={styles.btnTrash}>
                                <Trash className={styles.icon}/>
                            </div>
                        </div>
                        <div className={styles.dose}>
                            <Dropdown title='' placeholder='سومین دوز مصرف'
                                      time='۱۶:۰۰' link='time'/>
                            <div className={styles.btnTrash}>
                                <Trash className={styles.icon}/>
                            </div>
                        </div>
                        <div className={styles.dose}>
                            <Dropdown title='' placeholder='چهارمین دوز مصرف'
                                      time='۱۲:۰۰' link='time'/>
                            <div className={styles.btnTrash}>
                                <Trash className={styles.icon}/>
                            </div>
                        </div>

                        <div className={styles.btnAddDose}>
                            <AddCircle className={styles.icon}/>
                            <div>افزودن دوز سوم</div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};