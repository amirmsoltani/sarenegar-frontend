import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./EpilepsyModal.module.scss";
import { DateService } from "@/services/DateService";
import { useEpilepsyModal } from "./useEpilepsyModal";
import { Flash } from "@wandersonalwes/iconsax-react";
import { EpilepsyChart } from "@/common/EpilepsyChart/EpilepsyChart";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { severityOptionTranslator, severityTranslator } from "@/app/(epilepsy)/_common/epilepsyForm";

export const EpilepsyModal = () => {
  const { onClose, state, getData } = useEpilepsyModal();

  return (
    <Modal title={`رخدادهای صرع ${DateService.getDate()}`} onClose={onClose} wrapperClassName={styles.modal}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <StatusHandler status={state.status} onClick={getData}>
            <div className={styles.list}>
              {state.data?.results?.length ? (
                state.data!.results.map((item) => (
                  <Link to={routes.epilepsyEventInfo.href(item.id)} key={item.id} className={styles.card}>
                    <div className={styles.header}>
                      <div className={styles.info}>
                        <EpilepsyChart size="md" value={severityTranslator(item.severity)} theme="white" />
                        <div className={styles.wrapper}>
                          <div className={styles.severity}>{`حمله ${severityOptionTranslator(item.severity).label}`}</div>
                          <div className={styles.time}>{DateService.getTime(item.time_of_occurrence)}</div>
                        </div>
                      </div>
                      <Flash className={styles.icon} />
                    </div>
                    <div>
                      <span className={styles.durationTitle}>مدت صرع :</span>
                      &nbsp;
                      <span className={styles.durationValue}>{item.duration}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className={styles.emptyList}>رخدادی در این تاریخ وجود ندارد !</p>
              )}
            </div>
          </StatusHandler>
        </div>
        <Link to={routes.addEpilepsyEvent.href()} className={styles.button}>
          <Button>ایجاد رخداد صرع</Button>
        </Link>
      </div>
    </Modal>
  );
};
