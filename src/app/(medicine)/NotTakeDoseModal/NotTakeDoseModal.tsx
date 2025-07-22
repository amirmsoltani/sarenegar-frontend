import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./NotTakeDoseModal.module.scss";
import { DateService } from "@/services/DateService";
import { useNotTakeDoseModal } from "./useNotTakeDoseModal";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import {  medicineUsageTypeTranslator } from "../_common/medicineForm";

export const NotTakeDoseModal = () => {
  const { _ref, actionState, infoState, closeHandler, getData, onClose, onSubmit, imagePath } = useNotTakeDoseModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.title}>مصرف دارو</div>
        <div className={styles.description}>آیا داروی خود را مصرف کرده اید؟</div>
        <div className={styles.body}>
          <StatusHandler status={infoState.status} onClick={getData} className={styles.status}>
            {infoState.data && (
              <>
                <div className={styles.card}>
                  <div className={styles.topHeader}>
                    <div className={styles.info}>
                      <div className={styles.coverContainer}>
                        <img alt={"not found"} className={styles.cover} src={imagePath} />
                      </div>
                      <div>
                        <div>
                          <TextOverflow className={styles.faTitle}>
                            {infoState.data.drug_dosage_info.drug_fa_name ?? "-"}
                          </TextOverflow>
                        </div>
                        <div>
                          <TextOverflow className={styles.enTitle}>
                            {infoState.data.drug_dosage_info.drug_name ?? "-"}
                          </TextOverflow>
                        </div>
                        <div className={styles.date}>{DateService.getDate(infoState.data.drug_dosage_info.start_date)}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      {[
                        (infoState.data.drug_dosage_info.dose as any).amount!,
                        (infoState.data.drug_dosage_info.dose as any).unit!,
                        "|",
                        medicineUsageTypeTranslator(infoState.data.drug_dosage_info!.type_of_usage!)?.label,
                      ].join(" ")}
                    </div>
                    <div>{DateService.getTime(infoState.data.reminder_time)}</div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Button size="sm" variant="purple" onClick={closeHandler}>
                    بله
                  </Button>
                  <Button size="sm" variant="borderedPurple" onClick={onSubmit} loading={actionState.status === "loading"}>
                    خیر
                  </Button>
                </div>
              </>
            )}
          </StatusHandler>
        </div>
      </div>
    </Modal>
  );
};
