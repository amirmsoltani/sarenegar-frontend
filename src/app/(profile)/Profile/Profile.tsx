import { routes } from "@/routes/routes";
import User from "@/assets/svg/user.svg";
import styles from "./Profile.module.scss";
import { useAppSelector } from "@/store/store";
import { Link, Outlet } from "react-router-dom";
import SupportIcon from "@/assets/svg/support.svg";
import { VERSION_ID } from "@/constants/constants";
import AboutUsIcon from "@/assets/svg/about-us.svg";
import { ArrowLeft2, ArrowRight, Logout, NotificationBing, Profile as ProfileIcon } from "@wandersonalwes/iconsax-react";

export const Profile = () => {
  const user = useAppSelector((store) => store.auth.profile.data!);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.topWrapper}>
          <Link to={routes.dashboard.href()} className={styles.link}>
            <ArrowRight className={styles.icon} />
          </Link>
          <h1 className={styles.title}>پروفایل کاربری</h1>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.info}>
            <div className={styles.cover}>
              <User />
            </div>
            {user.full_name && <div className={styles.name}>{user.full_name}</div>}
            <div className={styles.phone} dir="ltr">
              {user.phone_number}
            </div>
          </div>
        </div>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <Link to={routes.profileInfo.href()} className={styles.row}>
              <div className={styles.rowWrapper}>
                <ProfileIcon className={styles.icon} />
                <div className={styles.title}>اطلاعات کاربری</div>
              </div>
              <ArrowLeft2 className={styles.icon} />
            </Link>
          </div>
          <div className={styles.box}>
            <Link to="" className={styles.row}>
              <div className={styles.rowWrapper}>
                <NotificationBing className={styles.icon} />
                <div className={styles.title}>تنطیمات اعلان</div>
              </div>
              <ArrowLeft2 className={styles.icon} />
            </Link>
          </div>
          <div className={styles.box}>
            <Link to={routes.support.href()} className={styles.row}>
              <div className={styles.rowWrapper}>
                <SupportIcon className={styles.icon} />
                <div className={styles.title}>پشتیبانی</div>
              </div>
              <ArrowLeft2 className={styles.icon} />
            </Link>
            <Link to="" className={styles.row}>
              <div className={styles.rowWrapper}>
                <AboutUsIcon className={styles.icon} />
                <div className={styles.title}>درباره ما</div>
              </div>
              <ArrowLeft2 className={styles.icon} />
            </Link>
          </div>
          <div className={styles.box}>
            <Link to={routes.profile.modals.href()} className={styles.row}>
              <div className={styles.rowWrapper}>
                <Logout className={styles.icon} />
                <div className={styles.title}>خروج از حساب</div>
              </div>
              <ArrowLeft2 className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo.png" />
        </div>
        <div className={styles.version}>نسخه {VERSION_ID}</div>
      </div>
      <Outlet />
    </main>
  );
};
