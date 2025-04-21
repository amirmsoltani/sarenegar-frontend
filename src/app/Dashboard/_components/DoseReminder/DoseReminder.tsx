import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { Pagination } from "swiper/modules";
import TickIcon from "@/assets/svg/tick.svg";
import styles from "./DoseReminder.module.scss";
import { Spinner } from "@/common/Spinner/Spinner";
import { useDoseReminder } from "./useDoseReminder";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { medicineUnitTranslator, medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const DoseReminder = () => {
  const { swiperRef, listState, completeHandler, completeState, navigateHandler } = useDoseReminder();

  return (
    <section className={styles.container}>
      {listState.status === "idle" || listState.status === "loading" ? (
        <div className={styles.status}>
          <Spinner />
        </div>
      ) : listState.status === "success" ? (
        listState.data!.results.length ? (
          <Swiper
            spaceBetween={20}
            modules={[Pagination]}
            className={styles.wrapper}
            pagination={{ dynamicBullets: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {listState.data!.results.map(({ reminder_id, drug_dosage_info, reminder_time, taken }) => (
              <SwiperSlide key={reminder_id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.detail}>
                    <div className={styles.coverWrapper}>
                      <img src={drug_dosage_info?.drug_image ?? "/drug-placeholder.png"} className={styles.cover} />
                    </div>
                    <div className={styles.info}>
                      <TextOverflow className={styles.faTitle}>{drug_dosage_info?.drug_fa_name}</TextOverflow>
                      <TextOverflow className={styles.enTitle}>{drug_dosage_info?.drug_name}</TextOverflow>
                    </div>
                  </div>
                  <div className={styles.action}>
                    <button
                      type="button"
                      data-active={taken}
                      className={styles.button}
                      disabled={completeState.status === "loading"}
                      onClick={() => (taken ? navigateHandler(reminder_id) : completeHandler(reminder_id))}
                    >
                      {completeState.status === "loading" && completeState.requestData?.id === reminder_id ? (
                        <Spinner size="sm" />
                      ) : (
                        <TickIcon className={styles.icon} />
                      )}
                    </button>
                  </div>
                </div>
                <div className={styles.body}>
                  <div>
                    {(drug_dosage_info?.dose as any)?.amount}{" "}
                    {medicineUnitTranslator((drug_dosage_info?.dose as any)?.unit)?.label} |
                    {medicineUsageTypeTranslator(drug_dosage_info!.type_of_usage!)?.label}
                  </div>
                  <div>{reminder_time.slice(0, 5)}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <LinkNavigation />
        )
      ) : (
        <LinkNavigation />
      )}
    </section>
  );
};

const LinkNavigation = () => {
  return (
    <Link to={routes.addMedicine.href()} className={styles.status}>
      <img className={styles.cover} src="/add-pill.png" />
    </Link>
  );
};
