import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./NotFound.module.scss";
import { Button } from "@/common/Button/Button";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/404.png" className={styles.cover} />
        <h1 className={styles.title}>صفحه مورد نظر پیدا نشد</h1>
        <p className={styles.description}>مشکلی پیش اومده لطفا مجدد تلاش کنید</p>
      </div>
      <Link to={routes.login.href()}>
        <Button>برو به خانه</Button>
      </Link>
    </div>
  );
};
