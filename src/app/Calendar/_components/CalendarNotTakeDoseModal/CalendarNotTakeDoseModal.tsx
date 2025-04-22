import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import styles from "./CalendarNotTakeDoseModal.module.scss";
import { DateService } from "@/services/DateService";
import { useCalendarNotTakeDoseModal } from "./useCalendarNotTakeDoseModal.ts";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { medicineUnitTranslator, medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm";

export const CalendarNotTakeDoseModal = () => {
  const { _ref, actionState,takeDose, infoState, closeHandler,  onClose, onSubmit } = useCalendarNotTakeDoseModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.title}>مصرف دارو</div>
        <div className={styles.description}>آیا داروی خود را مصرف کرده اید؟</div>
        <div className={styles.body}>

            {infoState && (
              <>
                <div className={styles.card}>
                  <div className={styles.topHeader}>
                    <div className={styles.info}>
                      <div className={styles.coverContainer}>
                        <img
                          className={styles.cover}
                          src={
                            infoState?.drug_dosage_info.drug_image
                              ? infoState.drug_dosage_info.drug_image
                              : "/drug-placeholder.png"
                          }
                        />
                      </div>
                      <div>
                        <div>
                          <TextOverflow className={styles.faTitle}>
                            {infoState.drug_dosage_info.drug_fa_name ?? "-"}
                          </TextOverflow>
                        </div>
                        <div>
                          <TextOverflow className={styles.enTitle}>
                            {infoState.drug_dosage_info.drug_name ?? "-"}
                          </TextOverflow>
                        </div>
                      </div>
                    </div>
                    <div className={styles.date}>{DateService.getDate(infoState.drug_dosage_info.start_date)}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      {(infoState.drug_dosage_info.dose as any)?.amount}{" "}
                      {medicineUnitTranslator((infoState.drug_dosage_info.dose as any)?.unit).label} |
                      {medicineUsageTypeTranslator(infoState.drug_dosage_info.type_of_usage!).label}
                    </div>
                    <div>{DateService.getTime(infoState.reminder_datetime)}</div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Button size="sm" variant="purple" onClick={closeHandler} loading={takeDose.status === "loading"}>
                    مصرف کرده ام
                  </Button>
                  <Button size="sm" variant="borderedPurple" onClick={onSubmit} loading={actionState.status === "loading"}>
                    مصرف نکرده ام
                  </Button>
                </div>
              </>
            )}
        </div>
      </div>
    </Modal>
  );
};
