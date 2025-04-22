import { useCalendarEvents } from "./useCalendarEvents.ts";
import { EpilepsyModal } from "@/app/Dashboard/EpilepsyModal/EpilepsyModal.tsx";
import { MedicineModal } from "@/app/Calendar/_components/MedicineModal/MedicineModal.tsx";

export const CalendarEvents = () => {
  const { mode,date } = useCalendarEvents();

  if (mode === "attack") return <EpilepsyModal key={date}/>;
  if (mode === "medicine") return <MedicineModal key={date}/>;
  return null;
};
