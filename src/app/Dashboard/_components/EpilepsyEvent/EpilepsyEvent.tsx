import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./EpilepsyEvent.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { useEpilepsyEvent } from "./useEpilepsyEvent";

export const EpilepsyEvent = () => {
  const { state } = useEpilepsyEvent();

  return (
    <section className={styles.container}>
      <div className={styles.count}>
        {state.status === "loading" ? <Spinner /> : state.status === "success" ? `${state.data?.count} مورد` : ""}
      </div>
      <Link to={routes.dashboard.modals.epilepsy.href()} className={styles.link}>
        <img src="/event.png" className={styles.cover} />
      </Link>
    </section>
  );
};
