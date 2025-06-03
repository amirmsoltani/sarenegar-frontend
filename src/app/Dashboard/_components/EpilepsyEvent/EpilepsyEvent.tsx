import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./EpilepsyEvent.module.scss";
import { useEpilepsyEvent } from "./useEpilepsyEvent";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler.tsx";
import { Fragment } from "react";
import PlusIcon from "@/assets/svg/plus.svg";

export const EpilepsyEvent = () => {
  const { state } = useEpilepsyEvent();

  return (
    <section className={styles.container}>
      <Link
        className={styles.link}
        data-loading={state.status === "loading"}
        to={state.data?.count ? routes.dashboard.modals.epilepsy.href() : routes.addEpilepsyEvent.href()}
      >
        <StatusHandler onClick={() => {}} status={state.status} variant={"white"}>
          {state.data?.count ? (
            <Fragment>
              <div className={styles.reportedHeader}>
                <span className={styles.reportedTitle}>تشنج ثبت شده</span>
                <span className={styles.reportedCount}>{state.data?.count} مورد</span>
              </div>
              <div className={styles.footer}>
                <div className={styles.border} />
                <PlusIcon />
                <span className={styles.addEventText}>افزودن رخداد</span>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <img src="/add-event.png" alt={"noting"} className={styles.cover} />
              <span className={styles.addEventText}>افزودن رخداد</span>
            </Fragment>
          )}
        </StatusHandler>
      </Link>
    </section>
  );
};
