import styles from './AddMedicine.module.scss';
import {ArrowRight} from "iconsax-react";
import {Link, Outlet} from "react-router-dom";


export const AddMedicine = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.secRight}>
                        <Link className={styles.link} to="/medicine">
                            <ArrowRight className={styles.btnBack}/>
                        </Link>
                        <div>ثبت دارو</div>
                    </div>
                    <div className={styles.stage}>
                        <div>مرحله</div>
                        <div>1</div>
                        <div>از</div>
                        <div>2</div>
                    </div>
                </div>

                <Outlet />
            </div>
            <div className={styles.footer}>
                <Link to='2' className={styles.btn}>مرحله بعد</Link>
            </div>

        </div>
    );
};