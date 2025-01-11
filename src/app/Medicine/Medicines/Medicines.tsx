import styles from './Medicines.module.scss';
import {Add, SearchNormal1} from "iconsax-react";
import {Link} from "react-router-dom";
import {Pill} from "@/app/_common/Pill/Pill.tsx";

export const Medicines = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.topHeader}>
                        <div className={styles.title}>داروی خود را انتخاب کنید</div>
                        <Link to='/medicine/add/1' className={styles.btnBack}>
                            <Add className={styles.icon}/>
                        </Link>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.searchBox}>
                            <input type="text" className={styles.input} placeholder='جستجوی نام دارو یا شرکت دارویی'/>
                            <Link to='/medicine/add/1/empty' className={styles.link}>
                                <SearchNormal1 className={styles.icon}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.title}>انتخاب برند دارو</div>
                    <Pill nameFa='اتوسوکسیمید' nameEn='Ethosuximide' company='شرکت فایزر' imgSrc='/Ethosuximide.png' />
                    <Pill nameFa='اکس‌کاربازپین' nameEn='Oxcarbazepine' company='شرکت نووارتیس' imgSrc='/Oxcarbazepine.png' />
                    <Pill nameFa='اسید والپروئیک' nameEn='Valproic Acid' company='شرکت سانوفی' imgSrc='/Valproic Acid.png' />
                    <Pill nameFa='بریواراستام' nameEn='Brivaracetam' company='شرکت یو سی بی' imgSrc='/Brivaracetam.png' />
                    <Pill nameFa='بنزوباربیتال' nameEn='Benzobarbital' company='بی نام' imgSrc='/Benzobarbital.png' />
                    <Pill nameFa='پرامپانل' nameEn='Perampanel' company='شرکت ای سای' imgSrc='/Perampanel.png' />
                    <Pill nameFa='اکس‌کاربازپین' nameEn='Oxcarbazepine' company='شرکت نووارتیس' imgSrc='/Oxcarbazepine.png' />
                    <Pill nameFa='اتوسوکسیمید' nameEn='Ethosuximide' company='شرکت فایزر' imgSrc='/Ethosuximide.png' />
                    <Pill nameFa='اسید والپروئیک' nameEn='Valproic Acid' company='شرکت سانوفی' imgSrc='/Valproic Acid.png' />
                    <Pill nameFa='بریواراستام' nameEn='Brivaracetam' company='شرکت یو سی بی' imgSrc='/Brivaracetam.png' />
                    <Pill nameFa='بنزوباربیتال' nameEn='Benzobarbital' company='بی نام' imgSrc='/Benzobarbital.png' />
                    <Pill nameFa='پرامپانل' nameEn='Perampanel' company='شرکت ای سای' imgSrc='/Perampanel.png' />
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.btn}>تایید</div>
            </div>

        </div>
    );
};