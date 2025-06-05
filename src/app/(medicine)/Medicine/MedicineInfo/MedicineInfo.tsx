import { routes } from "@/routes/routes";
import PillIcon from "@/assets/svg/Pill.svg";
import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import styles from "./MedicineInfo.module.scss";
import { Button } from "@/common/Button/Button";
import { useMedicineInfo } from "./useMedicineInfo";
import { DateService } from "@/services/DateService";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { TMedicineSlice } from "@/store/medicine/medicineSlice.types";
import { weekdays } from "@/helper/helper.ts";

export const MedicineInfo = () => {
  const { getData, status, data, canEdit, id, backwardHandler,useText } = useMedicineInfo();

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
            <Info {...data} id={id} useText={useText} />
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
  description,
  day_counts,
  useText
}: TInfo&{useText:string}) => {
  const percent = ((taken_doses ?? 0) * 100) / (total_doses ?? 0);

  return (
    <>
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.coverContainer}>
            <img src={drug?.image ? drug.image : "/drug-placeholder.png"} className={styles.cover} />
          </div>
          <div className={styles.textsContainer}>
            <span className={styles.faTitle}>{drug?.fa_name ?? "-"}</span>
            <span className={styles.enTitle}>{drug?.en_name ?? "-"}</span>
            {/*<div className={styles.detail}>*/}
            {/*  <TextOverflow>{drug?.producer ? drug.producer : "-"}</TextOverflow>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <PillIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <div className={styles.option}>
            <div className={styles.title}>مقدار در هر بار مصرف</div>
            <div>
              {useText}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>نوع مصرف دارو</div>
            <div>{usage_type?.label}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>روز های مصرف دارو</div>
            <div>{drug_timing_type.value === "ALL_DAY" ? "هر روز" : `${days.length} روز در هفته`}</div>
            <div className={styles.warp}>
              {days
                ?.map((day) => weekdays.find((wd)=>wd.value === day)?.label).join(" - ")
              }
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>دفعات مصرف در روز</div>
            <div>{doses.length} بار در روز</div>
            <div className={styles.warp}>
              {doses
                ?.map(({ value }) => {
                  const time = `${value.hour.label}:${value.minute.label}`;
                  return (
                    <Fragment key={time}>
                      <span>{time}</span>
                      <span className={styles.divider}>-</span>
                    </Fragment>
                  );
                })
                .reverse()}
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>تاریخ شروع مصرف</div>
            <div>{DateService.getDate(DateService.jalaliToGregorian(start_date!))}</div>
          </div>
          <div className={styles.option}>
            <div className={styles.title}>تاریخ اتمام مصرف</div>
            <div>({day_counts?.value} روز) {DateService.getDate(DateService.jalaliToGregorian(end_date!))} </div>
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
