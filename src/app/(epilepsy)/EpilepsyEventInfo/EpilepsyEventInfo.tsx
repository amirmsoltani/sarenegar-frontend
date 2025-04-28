import { routes } from "@/routes/routes";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/common/Button/Button";
import styles from "./EpilepsyEventInfo.module.scss";
import { DateService } from "@/services/DateService";
import { useEpilepsyEventInfo } from "./useEpilepsyEventInfo";
import { ArrowRight, Flash } from "@wandersonalwes/iconsax-react";
import { EpilepsyChart } from "@/common/EpilepsyChart/EpilepsyChart";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const EpilepsyEventInfo = () => {
  const { id, state, getInfo, backwardHandler } = useEpilepsyEventInfo();

  const data = state.data;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button onClick={backwardHandler} className={styles.iconWrapper}>
            <ArrowRight className={styles.icon} />
          </button>
          <h1 className={styles.title}>اطلاعات رخداد تشنج</h1>
        </div>
        <Link to={routes.editEpilepsyEvent.href(id)} className={styles.navigateLink}>
          ویرایش اطلاعات
        </Link>
      </header>
      <StatusHandler status={state.status} onClick={getInfo} className={styles.statusContainer}>
        {data && (
          <>
            <div className={styles.wrapper}>
              <div className={styles.topHeader}>
                <div className={styles.info}>
                  <EpilepsyChart size="md" theme="white" value={data.severity.value} />
                  <div className={styles.title}>{`حمله ${data.severity.label}`}</div>
                </div>
                <div className={styles.iconWrapper}>
                  <Flash className={styles.icon} />
                </div>
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.box}>
                  <div className={styles.title}>تاریخ</div>
                  <div className={styles.value}>{DateService.getDate(data.time_of_occurrence.date)}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>زمان حمله</div>
                  <div className={styles.value}>
                    {data.time_of_occurrence.time.hour.value}:{data.time_of_occurrence.time.minute.value}
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>مدت زمان حمله</div>
                  <div className={styles.value}>
                    {data.duration.hour.value}:{data.duration.minute.value}:{data.duration.second.value}
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>هوشیاری خود را از دست داده اید ؟</div>
                  <div className={styles.value}>{data.state_of_consciousness.value ? "بله" : "خیر"}</div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>آیا تکان و لرزش وجود داشت ؟</div>
                  <div className={styles.value}>{data.tremor_and_shaking.value ? "بله" : "خیر"}</div>
                </div>
              </div>
            </div>
            <Link to={routes.epilepsyEventInfo.modals.deleteEpilepsyEvent.href()} className={styles.buttonContainer} replace>
              <Button variant="red">حذف رخداد</Button>
            </Link>
          </>
        )}
      </StatusHandler>
      <Outlet />
    </main>
  );
};
