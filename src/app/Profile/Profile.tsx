import styles from './Profile.module.scss';
import Shadow from "@/assets/svg/shadow.svg";
import About from "@/assets/svg/about.svg";
import Logo from "@/assets/svg/copyright.svg";
import {ArrowRight, Profile, ArrowLeft2, Lifebuoy, Logout} from "iconsax-react";
import {Link, Outlet} from "react-router-dom";



export const ProFile = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet />
            <Shadow className={styles.shadow} />
            <div className={styles.header}>
                <div className={styles.topHeader}>
                    <Link to='/' className={styles.btnBack}>
                        <ArrowRight className={styles.icon}/>
                    </Link>
                    <div className={styles.title}>پروفایل کاربری</div>
                </div>

                <div className={styles.profileBox}>

                    <div className={styles.iconBox}>
                        <Profile className={styles.icon}/>
                    </div>
                    <div className={styles.name}>آرش زرگری سامانی</div>
                    <div className={styles.number}>۰۹۱۳۶۸۶۴۴۵۴</div>

                </div>

            </div>

            <div className={styles.main}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.section}>
                            <Profile className={styles.icon}/>
                            <div className={styles.title}>اطلاعات کاربری</div>
                        </div>
                        <Link className={styles.link} to='/info'>
                            <ArrowLeft2 className={styles.icon}/>
                        </Link>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.title}>دریافت اعلان برای مصرف دارو</div>
                        <div className={styles.toggle}>
                            <div className={styles.btn}/>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.section}>
                            <Lifebuoy className={styles.icon}/>
                            <div className={styles.title}>پشتیبانی</div>
                        </div>
                        <Link className={styles.link} to='/support'>
                            <ArrowLeft2 className={styles.icon}/>
                        </Link>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.section}>
                            <About className={styles.icon}/>
                            <div className={styles.title}>درباره ما</div>
                        </div>
                        <Link className={styles.link} to=''>
                            <ArrowLeft2 className={styles.icon}/>
                        </Link>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.section}>
                            <Logout className={styles.icon}/>
                            <div className={styles.title}>خروج از حساب</div>
                        </div>
                        <Link className={styles.link} to='logout'>
                            <ArrowLeft2 className={styles.icon}/>
                        </Link>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <Logo className={styles.icon} />
                    <div className={styles.text}>نسخه 1.02</div>

                </div>
            </div>
        </div>
    );
};