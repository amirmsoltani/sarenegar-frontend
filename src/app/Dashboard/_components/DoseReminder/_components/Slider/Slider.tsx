import { useSlider } from "./useSlider";
import styles from "./Slider.module.scss";
import TickIcon from "@/assets/svg/tick.svg";
import { Spinner } from "@/common/Spinner/Spinner";
import {  medicineUsageTypeTranslator } from "@/app/(medicine)/_common/medicineForm";

export const Slider = () => {
  const { sliderRef, listState, completeHandler, completeState, navigateHandler } = useSlider();

  return (
    <div className={styles.sliderContainer} data-with-limit={(listState.data?.results.length ?? 0) > 1} ref={sliderRef}>
      <div className={styles.sliderWrapper}>
        {listState.data!.results.map(({ reminder_id, drug_dosage_info, reminder_time, taken }) => (
          <div key={reminder_id} className={styles.sliderSlide}>
            <div className={styles.cardHeader}>
              <div className={styles.detail}>
                <div className={styles.coverWrapper}>
                  <img src={drug_dosage_info?.drug_image ?? "/drug-placeholder.png"} className={styles.cover} />
                </div>
                <div className={styles.info}>
                  <span  className={styles.faTiqtle}>{drug_dosage_info?.drug_fa_name}</span>
                  {/*<TextOverflow className={styles.enTitle}>{drug_dosage_info?.drug_name}</TextOverflow>*/}
                </div>
              </div>
              <div className={styles.action} data-active={taken}>
                <button
                  type="button"
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
                <span className={styles.used}>
                مصرف شـــــده
                </span>
              </div>
            </div>
            <div className={styles.body}>
              <div>
                {
                  [
                    (drug_dosage_info.dose as any).amount!,
                    (drug_dosage_info.dose as any).unit!,
                    "|",
                    medicineUsageTypeTranslator(drug_dosage_info!.type_of_usage!)?.label

                  ].join(" ")
                }
              </div>
              <div>{reminder_time.slice(0, 5)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
