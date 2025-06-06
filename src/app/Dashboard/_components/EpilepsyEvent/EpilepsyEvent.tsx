import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./EpilepsyEvent.module.scss";
import { useEpilepsyEvent } from "./useEpilepsyEvent";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler.tsx";
import { Fragment } from "react";
import PlusIcon from "@/assets/svg/plus.svg";
import FlashIcon from "@/assets/svg/flash.svg";
import { Box } from "@/app/Dashboard/_components/Box/Box.tsx";

export const EpilepsyEvent = () => {
  const { state, clickAddEpilepsyEventHandler, isDisable } = useEpilepsyEvent();

  return (
    <Box
      title="رخداد تشنج"
      icon={FlashIcon}
      variant="red"
      className={isDisable ? styles.disabled : undefined}
    >
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
                <div className={styles.footer} onClick={clickAddEpilepsyEventHandler}>
                  <div className={styles.border} />
                  <PlusIcon />
                  <span className={styles.addEventText}>افزودن رخداد</span>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <img src={isDisable?"/add-event-disable.png":"/add-event.png"} alt={"noting"} className={styles.cover} />
                <span className={styles.addEventText}>
                  {isDisable?"ثبت رخداد در آینده امکان پذیر نیست":"افزودن رخداد"}
                </span>
              </Fragment>
            )}
          </StatusHandler>
        </Link>
      </section>
    </Box>
  );
};
