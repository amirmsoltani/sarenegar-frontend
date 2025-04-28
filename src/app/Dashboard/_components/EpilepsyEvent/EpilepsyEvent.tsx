import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./EpilepsyEvent.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { useEpilepsyEvent } from "./useEpilepsyEvent";

export const EpilepsyEvent = () => {
  const { state } = useEpilepsyEvent();

  return (
    <section className={styles.container}>
      <Link
        className={styles.link}
        data-loading={state.status === "loading"}
        to={state.data?.count ? routes.dashboard.modals.epilepsy.href() : routes.addEpilepsyEvent.href()}
      >
        <div className={styles.count}>
          {state.status === "loading" ? <Spinner /> : state.status === "success" ? `${state.data?.count} مورد` : ""}
        </div>
        <img src="/add-event.png" className={styles.cover} />
      </Link>
    </section>
  );
};
