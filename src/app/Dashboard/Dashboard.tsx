import { Outlet } from "react-router-dom";
import { Box } from "./_components/Box/Box";
import styles from "./Dashboard.module.scss";
import NoteIcon from "@/assets/svg/note.svg";
import PillIcon from "@/assets/svg/pill.svg";
import BookIcon from "@/assets/svg/book.svg";
import FlashIcon from "@/assets/svg/flash.svg";
import { Header } from "./_components/Header/Header";
import { Navbar } from "../_components/Navbar/Navbar";
import { Reports } from "./_components/Reports/Reports";
import { PillReminder } from "./_components/PillReminder/PillReminder";
import { EpilepsyEvent } from "./_components/EpilepsyEvent/EpilepsyEvent";
import { TodaysKnowledge } from "./_components/TodaysKnowledge/TodaysKnowledge";

export const Dashboard = () => {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.firstSection}>
          <Box title="رخداد صرع" icon={FlashIcon} variant="red">
            <EpilepsyEvent />
          </Box>
          <Box title="گزارشات" icon={NoteIcon} variant="yellow">
            <Reports />
          </Box>
        </div>
        <div className={styles.secondSection}>
          <Box title="یادآور دارو" icon={PillIcon} variant="green">
            <PillReminder />
          </Box>
        </div>
        <div className={styles.thirdSection}>
          <Box title="دانش روز" icon={BookIcon} variant="blue">
            <TodaysKnowledge />
          </Box>
        </div>
        <span className={styles.fade}></span>
        <div className={styles.fourthSection}>
          <Navbar />
        </div>
      </div>
      <Outlet />
    </main>
  );
};
