import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import styles from "./MedicineDoses.module.scss";
import { toOrderedNumber } from "@/helper/helper";
import { useMedicineDoses } from "./useMedicineDoses";
import { AddCircle, ArrowLeft2, Trash } from "@wandersonalwes/iconsax-react";

type TMedicineDoses = { type: "ADD" | "EDIT" | "RETAKE" };
export const MedicineDoses = ({ type }: TMedicineDoses) => {
  const { fields, appendHandler, removeHandler } = useMedicineDoses();

  return (
    <div className={styles.container}>
      <label className={styles.label}>زمان مصرف دوز دارو در روز را انتخاب کنید</label>
      <div className={styles.list}>
        {fields.map((field, index) => (
          <div key={index} className={styles.optionWrapper}>
            <div className={styles.option}>
              <div className={styles.title}>{toOrderedNumber(index)} دوز مصرف</div>
              <div className={styles.actions}>
                <div className={styles.time}>
                  {field.value.hour.value}:{field.value.minute.value}
                </div>
                <Link
                  className={styles.iconWrapper}
                  to={
                    type === "ADD"
                      ? routes.addMedicine.modals.doseTime.href(index)
                      : type === "EDIT"
                        ? routes.editMedicine.modals.doseTime.href(index)
                        : routes.retakeMedicine.modals.doseTime.href(index)
                  }
                >
                  <ArrowLeft2 className={styles.icon} />
                </Link>
              </div>
            </div>
            <button type="button" className={styles.delete} onClick={() => removeHandler(index)}>
              <Trash />
            </button>
          </div>
        ))}
      </div>
      {fields.length < 4 && (
        <button type="button" className={styles.addButton} onClick={appendHandler}>
          <AddCircle />
          <div>افزودن {toOrderedNumber(fields.length)} دوز</div>
        </button>
      )}
    </div>
  );
};
