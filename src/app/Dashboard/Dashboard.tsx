import { Outlet } from "react-router-dom";
import { Box } from "./_components/Box/Box";
import styles from "./Dashboard.module.scss";
import NoteIcon from "@/assets/svg/note.svg";
import PillIcon from "@/assets/svg/Pill.svg";
import BookIcon from "@/assets/svg/book.svg";
import { Header } from "./_components/Header/Header";
import { Navbar } from "../_components/Navbar/Navbar";
import { Reports } from "./_components/Reports/Reports";
import { DoseReminder } from "./_components/DoseReminder/DoseReminder";
import { EpilepsyEvent } from "./_components/EpilepsyEvent/EpilepsyEvent";
import { TodaysKnowledge } from "./_components/TodaysKnowledge/TodaysKnowledge";
import { useDashboard } from "@/app/Dashboard/useDashboard.ts";
import { ArrowDown } from "@wandersonalwes/iconsax-react";

export const Dashboard = () => {
  const { installHandler, showInstallCard } = useDashboard();
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        {showInstallCard ? (
          <div className={styles.thirdSection} onClick={installHandler}>
            <Box title="نصب وب اپلیکیشن" icon={ArrowDown} variant="green">
              <div>برای نصب وب اپلیکیشن کلیک فرمایید</div>
            </Box>
          </div>
        ) : null}
        <div className={styles.firstSection}>
          <EpilepsyEvent />
          <Box title="گزارشات" icon={NoteIcon} variant="yellow">
            <Reports />
          </Box>
        </div>
        <div className={styles.secondSection}>
          <Box title="یادآور دارو" icon={PillIcon} variant="green" className={styles.doseReminderContainer}>
            <DoseReminder />
          </Box>
        </div>
        <div className={styles.thirdSection}>
          <Box title="دانش روز" icon={BookIcon} variant="blue">
            <TodaysKnowledge />
          </Box>
        </div>
        <div className={styles.fourthSection}>
          <Navbar />
        </div>
      </div>
      <Outlet />
    </main>
  );
};
