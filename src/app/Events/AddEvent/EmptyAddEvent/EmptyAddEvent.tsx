import styles from './EmptyAddEvent.module.scss';
import {Link, Outlet} from "react-router-dom";
import {ArrowRight} from "iconsax-react";
import {Dropdown} from "@/app/_common/Dropdown/Dropdown.tsx";
import {InputBtnBoolean} from "@/app/_common/InputBtnBoolean/InputBtnBoolean.tsx";

export const EmptyAddEvent = () => {
    return (
            <div className={styles.wrapper}>
                <Outlet />
                <div>
                    <div className={styles.header}>
                        <Link to='/AddEvent' className={styles.btnBack}>
                            <ArrowRight className={styles.icon}/>
                        </Link>
                        <div className={styles.title}>ثبت رخداد صرع</div>
                    </div>
                    <div className={styles.main}>

                        <Dropdown title='حمله چه زمانی اتفاق افتاده است ؟' placeholder='انتخاب زمان حمله' link='when'/>
                        <Dropdown title='مدت زمان حمله چقدر بوده است ؟' placeholder='انتخاب مدت زمان حمله' link='time'/>
                        <InputBtnBoolean label='آیا هوشیاری خود را از دست داده اید ؟' name='Vigilance'/>
                        <InputBtnBoolean label='آیا تکان و لرزش وجود داشت ؟' name='Vibration'/>

                        <div className={styles.inputSection}>
                            <div className={styles.label}>این تجربه برای شما چقدر شدید بود ؟</div>
                            <div className={styles.slider}>
                                <div className={styles.circleBox}>
                                    <div className={styles.circleMid}>
                                        <div className={styles.circle}></div>
                                    </div>
                                </div>
                                <div className={styles.radio}>
                                    <div className={styles.lineBox}>
                                        <div className={styles.line}/>
                                    </div>

                                    <input type="radio" className={styles.stage1} id="stage1" name="intensity" />
                                    <label htmlFor="stage1">خفیف</label>

                                    <input type="radio" className={styles.stage2} id="stage2" name="intensity"/>
                                    <label htmlFor="stage2">متوسط</label>

                                    <input type="radio" className={styles.stage3} id="stage3" name="intensity"/>
                                    <label htmlFor="stage3">شدید</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.btnBox}>
                    <div className={styles.btn}>ثبت حمله</div>
                </div>

            </div>

    );
};