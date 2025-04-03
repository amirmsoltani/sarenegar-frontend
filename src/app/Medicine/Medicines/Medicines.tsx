import styles from "./Medicines.module.scss";
import { SearchNormal1 } from "@wandersonalwes/iconsax-react";
import { Link } from "react-router-dom";
import { Pill } from "@/common/_common/Pill/Pill";
import { Modal } from "@/common/Modal/Modal";
import { Button } from "@/common/Button/Button";
import { RouterService } from "@/services/RouterService";

export const Medicines = () => {
  return (
    <Modal
      title="داروی خود را انتخاب کنید"
      onClose={() => RouterService.navigate(`/${RouterService.params.date}/medicine/add/1`)}
    >
      <div className={styles.section}>
        <div className={styles.searchBox}>
          <input type="text" className={styles.input} placeholder="جستجوی نام دارو یا شرکت دارویی" />
          <Link to="/medicine/add/1/empty" className={styles.link}>
            <SearchNormal1 className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>انتخاب برند دارو</div>
        <Pill nameFa="اتوسوکسیمید" nameEn="Ethosuximide" company="شرکت فایزر" imgSrc="/Ethosuximide.png" />
        <Pill nameFa="اکس‌کاربازپین" nameEn="Oxcarbazepine" company="شرکت نووارتیس" imgSrc="/Oxcarbazepine.png" />
        <Pill nameFa="اسید والپروئیک" nameEn="Valproic Acid" company="شرکت سانوفی" imgSrc="/Valproic Acid.png" />
        <Pill nameFa="بریواراستام" nameEn="Brivaracetam" company="شرکت یو سی بی" imgSrc="/Brivaracetam.png" />
        <Pill nameFa="بنزوباربیتال" nameEn="Benzobarbital" company="بی نام" imgSrc="/Benzobarbital.png" />
        <Pill nameFa="پرامپانل" nameEn="Perampanel" company="شرکت ای سای" imgSrc="/Perampanel.png" />
        <Pill nameFa="اکس‌کاربازپین" nameEn="Oxcarbazepine" company="شرکت نووارتیس" imgSrc="/Oxcarbazepine.png" />
        <Pill nameFa="اتوسوکسیمید" nameEn="Ethosuximide" company="شرکت فایزر" imgSrc="/Ethosuximide.png" />
        <Pill nameFa="اسید والپروئیک" nameEn="Valproic Acid" company="شرکت سانوفی" imgSrc="/Valproic Acid.png" />
        <Pill nameFa="بریواراستام" nameEn="Brivaracetam" company="شرکت یو سی بی" imgSrc="/Brivaracetam.png" />
        <Pill nameFa="بنزوباربیتال" nameEn="Benzobarbital" company="بی نام" imgSrc="/Benzobarbital.png" />
        <Pill nameFa="پرامپانل" nameEn="Perampanel" company="شرکت ای سای" imgSrc="/Perampanel.png" />
      </div>
      <div className={styles.button}>
        <Button>slam</Button>
      </div>
    </Modal>
  );
};
