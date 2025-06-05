import { Modal } from "@/common/Modal/Modal.tsx";
import styles from "./MedicineModal.module.scss";
import { DateService } from "@/services/DateService.ts";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler.tsx";
import { Link, Outlet } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";
import { Button } from "@/common/Button/Button.tsx";
import { useMedicineModal } from "./useMedicineModal.ts";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow.tsx";
import { Spinner } from "@/common/Spinner/Spinner.tsx";
import TickIcon from "@/assets/svg/tick.svg";
import {  medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm.ts";

export const MedicineModal = () => {
  const medicineModal = useMedicineModal();
  return (
    <Modal
      title={`دارو های ${DateService.getDate(medicineModal.date)}`}
      onClose={medicineModal.closeHandler}
      wrapperClassName={styles.modal}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <StatusHandler status={medicineModal.reminders.status} onClick={medicineModal.getRemindersHandler}>
            <div className={styles.list}>
              {medicineModal.reminders.data?.map(({ drug_dosage_info, taken, reminder_time, reminder_id }) => (
                <div key={reminder_id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.detail}>
                      <div className={styles.coverWrapper}>
                        <img
                          src={drug_dosage_info?.drug_image || "/drug-placeholder.png"}
                          alt={"image not found"}
                          className={styles.cover}
                        />
                      </div>
                      <div className={styles.info}>
                        <TextOverflow className={styles.faTitle}>{drug_dosage_info?.drug_fa_name}</TextOverflow>
                        <TextOverflow className={styles.enTitle}>{drug_dosage_info?.drug_name}</TextOverflow>
                      </div>
                    </div>
                    <div className={styles.action} data-active={taken}>
                      <button
                        type="button"
                        className={styles.button}
                        disabled={medicineModal.completed.status === "loading"}
                        onClick={
                          taken ? medicineModal.openModalHandler(reminder_id) : medicineModal.completeDoseHandler(reminder_id)
                        }
                      >
                        {medicineModal.completed.status === "loading" &&
                        medicineModal.completed.requestData?.id === reminder_id ? (
                          <Spinner size="sm" />
                        ) : (
                          <TickIcon className={styles.icon} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div>
                      {[
                        (drug_dosage_info.dose as any).amount!,
                        (drug_dosage_info.dose as any).unit!,
                        "|",
                        medicineUsageTypeTranslator(drug_dosage_info!.type_of_usage!)?.label,
                      ].join(" ")}
                    </div>
                    <div>{reminder_time.slice(0, 5)}</div>
                  </div>
                </div>
              ))}
            </div>
          </StatusHandler>
        </div>
        <Link to={routes.addMedicine.href()} className={styles.button}>
          <Button>ثبت داروی جدید</Button>
        </Link>
      </div>
      <Outlet />
    </Modal>
  );
};
