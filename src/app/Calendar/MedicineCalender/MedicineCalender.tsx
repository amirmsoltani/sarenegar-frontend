import styles from './MedicineCalender.module.scss';
import Pill from "@/assets/svg/pill-icon.svg";
import {Link, Outlet} from "react-router-dom";

export const MedicineCalender = () => {
    return (
        <div>
            <div className={styles.tableCalender}>
                <div className={styles.row}>
                    <div className={styles.col}>ج</div>
                    <div className={styles.col}>پ</div>
                    <div className={styles.col}>چ</div>
                    <div className={styles.col}>س</div>
                    <div className={styles.col}>د</div>
                    <div className={styles.col}>ی</div>
                    <div className={styles.col}>ش</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.day}></div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.day}></div>
                    </div>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۳</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۴</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۵</div>
                    </Link>
                </div>

                <div className={styles.row}>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۶</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۷</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۸</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۹</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۰</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۱</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۲</div>
                    </Link>
                </div>

                <div className={styles.row}>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۳</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۴</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۵</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۶</div>
                    </Link>
                    <Link to='id' className={styles.col}>
                        <div className={styles.day}>۱۷</div>
                        <div className={styles.item}>
                            <Pill className={styles.icon}/>
                            <div className={styles.number}>۲</div>
                        </div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۸</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۱۹</div>
                    </Link>
                </div>

                <div className={styles.row}>
                    <Link to='empty' className={styles.colSelected}>
                        <div className={styles.day}>۲۰</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۱</div>
                    </Link>
                    <Link to='id' className={styles.col}>
                        <div className={styles.day}>۲۲</div>
                        <div className={styles.item}>
                            <Pill className={styles.icon}/>
                            <div className={styles.number}>۲</div>
                        </div>
                    </Link>
                    <Link to='id' className={styles.col}>
                        <div className={styles.day}>۲۳</div>
                        <div className={styles.item}>
                            <Pill className={styles.icon}/>
                            <div className={styles.number}>۲</div>
                        </div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۴</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۵</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۶</div>
                    </Link>
                </div>

                <div className={styles.row}>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۷</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۸</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۲۹</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۳۰</div>
                    </Link>
                    <Link to='empty' className={styles.col}>
                        <div className={styles.day}>۳۱</div>
                    </Link>
                    <div className={styles.col}>
                        <div className={styles.day}></div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.day}></div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};