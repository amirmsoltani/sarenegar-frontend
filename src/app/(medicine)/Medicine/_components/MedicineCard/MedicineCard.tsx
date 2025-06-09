import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import PillIcon from "@/assets/svg/Pill.svg";
import styles from "./MedicineCard.module.scss";
import { DrugDosageRetrieve } from "@/services/api";
import { DateService } from "@/services/DateService";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { calcMedicineTimeData } from "@/app/(medicine)/_common/medicineTime";
import { medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm";

type TMedicineCard = DrugDosageRetrieve & { timeline?: boolean };
export const MedicineCard = ({
  id,
  dose,
  drug,
  end_date,
  timeline,
  end_by_day,
  start_date,
  taken_doses,
  total_doses,
  type_of_usage,
}: TMedicineCard) => {
  const usageType = medicineUsageTypeTranslator(type_of_usage!);

  const { start, end } = calcMedicineTimeData({ end_by_day, start_date, end_date });

  const percent = (taken_doses * 100) / total_doses;

  return (
    <Link to={routes.medicineInfo.href(id!)} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.coverContainer}>
            <img src={drug?.image ? drug.image : "/drug-placeholder.png"} className={styles.cover} />
          </div>
          <div className={styles.textsContainer}>
            <TextOverflow className={styles.faTitle}>{drug?.fa_name}</TextOverflow>
            <TextOverflow className={styles.enTitle}>{drug?.en_name}</TextOverflow>
            <div className={styles.detail}>{[(dose as any).amount, (dose as any).unit!, "|", usageType.label].join(" ")}</div>
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <PillIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.detail}>
          <div className={styles.count}>
            {taken_doses} از {total_doses} دوز
          </div>
          <div className={styles.times}>
            {DateService.getDate(start)} - {DateService.getDate(end)}
          </div>
        </div>
        {timeline && (
          <div className={styles.timeline}>
            <div className={styles.inner} style={{ width: `${percent}%` }}></div>
          </div>
        )}
      </div>
    </Link>
  );
};
