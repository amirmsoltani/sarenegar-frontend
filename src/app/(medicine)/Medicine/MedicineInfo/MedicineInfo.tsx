import { routes } from "@/routes/routes";
import PillIcon from "@/assets/svg/Pill.svg";
import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import styles from "./MedicineInfo.module.scss";
import useMedicineInfo from "./useMedicineInfo";
import { Button } from "@/common/Button/Button";
import { DrugDosageRetrieve } from "@/services/api";
import { DateService } from "@/services/DateService";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { calcMedicineTimeData } from "../../_common/medicineTime";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { medicineUnitTranslator, medicineUsageTypeTranslator } from "../../_common/medicineForm";

export const MedicineInfo = () => {
  const { getData, status, data } = useMedicineInfo();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link to={routes.medicine.tabs.current.href()} className={styles.icon}>
            <ArrowRight />
          </Link>
          <h1 className={styles.title}>اطلاعات دارو</h1>
        </div>
        <Link to="" className={styles.link}>
          ویرایش اطلاعات
        </Link>
      </header>
      <StatusHandler status={status} onClick={getData} className={styles.status}>
        {data && (
          <>
            <Info {...data} />
            <Outlet />
          </>
        )}
      </StatusHandler>
    </main>
  );
};

const Info = ({
  dose,
  drug,
  end_date,
  is_daily,
  end_by_day,
  start_date,
  usage_days,
  total_doses,
  taken_doses,
  type_of_usage,
  reminder_times,
}: DrugDosageRetrieve) => {
  const unit = medicineUnitTranslator((dose as any).unit);
  const usageType = medicineUsageTypeTranslator(type_of_usage!);

  const { start, end } = calcMedicineTimeData({ end_by_day, start_date, end_date });

  const percent = (taken_doses * 100) / total_doses;

  return (
    <>
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.coverContainer}>
            <img src={drug?.image ? drug.image : "/drug-placeholder.png"} className={styles.cover} />
          </div>
          <div className={styles.textsContainer}>
            <TextOverflow className={styles.faTitle}>{drug?.fa_name ?? "-"}</TextOverflow>
            <TextOverflow className={styles.enTitle}>{drug?.en_name ?? "-"}</TextOverflow>
            <div className={styles.detail}>
              <TextOverflow>{drug?.producer ? drug.producer : "-"}</TextOverflow>
            </div>
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <PillIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <div className={styles.option}>
            <div className={styles.title}>مقدار هر دوز</div>
            <div>
              {(dose as any).amount} {unit.label}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>نوع مصرف</div>
            <div>{usageType.label}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>زمانبندی</div>
            <div>{is_daily ? "هر روز" : `${usage_days?.length ?? 0} روز در هفته`}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>ساعات مصرف</div>
            <div>
              {reminder_times?.map((item) => (
                <Fragment key={item.time}>
                  <span>{item.time}</span>
                  <span className={styles.divider}>-</span>
                </Fragment>
              ))}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>ناریخ شروع مصرف</div>
            <div>{DateService.getDate(start)}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>تاریخ اتمام مصرف</div>
            <div>{DateService.getDate(end)}</div>
          </div>
        </div>
        <div className={styles.chart}>
          <div
            className={styles.chartInner}
            style={{ background: `conic-gradient(var(--secondary) ${percent}%, transparent ${percent}%)` }}
          >
            <div className={styles.content}>
              <div className={styles.counts}>
                {taken_doses} از {total_doses}
              </div>
              <div className={styles.countsTitle}>دوز مصرف</div>
            </div>
          </div>
        </div>
      </div>
      <Link to={routes.medicineInfo.modals.delete.href()} className={styles.delete}>
        <Button variant="borderedRed">حذف دارو</Button>
      </Link>
      <footer className={styles.footer}>
        <Link to={routes.medicineInfo.modals.complete.href()} className={styles.link}>
          <Button>{percent === 100 ? "باز مصرف دارو" : "تکمیل مصرف دارو"}</Button>
        </Link>
      </footer>
    </>
  );
};
