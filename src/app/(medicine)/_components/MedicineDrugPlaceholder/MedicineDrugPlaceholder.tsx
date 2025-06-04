import { useMedicineDrugPlaceholder } from "./useMedicineDrugPlaceholder";
import styles from "./MedicineDrugPlaceholder.module.scss";
import PlusGreenIcon from "@/assets/svg/plus-green.svg";
import { Edit2 } from "@wandersonalwes/iconsax-react";

export const MedicineDrugPlaceholder = () => {
  const { onClick, drug,times ,usageType,useText} = useMedicineDrugPlaceholder();

  if (!drug)
    return (
      <div className={styles.emptyCard} onClick={onClick}>
        <PlusGreenIcon />
        <span className={styles.emptyTitle}>انتخاب دارو</span>
        <span className={styles.emptyDescription}>اطلاعات دارو در این بخش قابل مشاهده خواهد بود</span>
      </div>
    );

  return (
    <div className={styles.drugCard} onClick={onClick}>
      <div className={styles.body}>
        <img src={drug.image ?? "/drug-placeholder.png"} alt="not found" className={styles.cardImage} />
        <div className={styles.leftBox}>
          <div className={styles.headerBox}>
            <span>{drug.fa_name}</span>
            <Edit2 />
          </div>
          <span className={styles.englishName}>{drug.en_name}</span>
          <span className={styles.detail}>{useText} | {usageType}</span>
        </div>
      </div>
      <span className={styles.timeUse}>ساعات مصرف : {times}</span>
    </div>
  );
};

