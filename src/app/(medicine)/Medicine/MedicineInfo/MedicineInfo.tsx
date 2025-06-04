import { routes } from "@/routes/routes";
import PillIcon from "@/assets/svg/Pill.svg";
import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import styles from "./MedicineInfo.module.scss";
import { Button } from "@/common/Button/Button";
import { useMedicineInfo } from "./useMedicineInfo";
import { DateService } from "@/services/DateService";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { TMedicineSlice } from "@/store/medicine/medicineSlice.types";

export const MedicineInfo = () => {
  const { getData, status, data, canEdit, id, backwardHandler } = useMedicineInfo();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <button onClick={backwardHandler} className={styles.icon}>
            <ArrowRight />
          </button>
          <h1 className={styles.title}>اطلاعات دارو</h1>
        </div>
        {canEdit && (
          <Link to={routes.editMedicine.href(id)} className={styles.link}>
            ویرایش اطلاعات
          </Link>
        )}
      </header>
      <StatusHandler status={status} onClick={getData} className={styles.status}>
        {data && (
          <>
            <Info {...data} id={id} />
            <Outlet />
          </>
        )}
      </StatusHandler>
    </main>
  );
};

type TInfo = NonNullable<TMedicineSlice["medicineInfo"]["data"]> & { id: number };
const Info = ({
  id,
  drug,
  days,
  dose,
  doses,
  end_date,
  usage_type,
  start_date,
  is_expired,
  total_doses,
  taken_doses,
  is_completed,
  completion_date,
  drug_timing_type,
  description
}: TInfo) => {
  const percent = ((taken_doses ?? 0) * 100) / (total_doses ?? 0);

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
              {dose.amount?.label} {dose.unit?.label}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>نوع مصرف</div>
            <div>{usage_type?.label}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>زمانبندی</div>
            <div>{drug_timing_type.value === "ALL_DAY" ? "هر روز" : `${days.length} روز در هفته`}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>ساعات مصرف</div>
            <div>
              {doses?.map(({ value }) => {
                const time = `${value.hour.label}:${value.minute.label}`;
                return (
                  <Fragment key={time}>
                    <span>{time}</span>
                    <span className={styles.divider}>-</span>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>تاریخ شروع مصرف</div>
            <div>{DateService.getDate(DateService.jalaliToGregorian(start_date!))}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>تاریخ اتمام مصرف</div>
            <div>{DateService.getDate(DateService.jalaliToGregorian(end_date!))}</div>
          </div>
          {completion_date && (
            <div className={styles.option}>
              <div className={styles.title}>تاریخ تکمیل مصرف</div>
              <div>{DateService.getDate(completion_date)}</div>
            </div>
          )}
          <div className={styles.option}>
            <div className={styles.title}>توضیحات</div>
            <div>{description ?? "-"}</div>
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
      <Link to={routes.medicineInfo.modals.delete.href()} replace className={styles.delete}>
        <Button variant="borderedRed">حذف دارو</Button>
      </Link>
      <footer className={styles.footer}>
        {is_expired || is_completed ? (
          <Link className={styles.link} to={routes.retakeMedicine.href(id)}>
            <Button>باز مصرف دارو</Button>
          </Link>
        ) : (
          <Link replace className={styles.link} to={routes.medicineInfo.modals.complete.href()}>
            <Button>تکمیل مصرف دارو</Button>
          </Link>
        )}
      </footer>
    </>
  );
};
