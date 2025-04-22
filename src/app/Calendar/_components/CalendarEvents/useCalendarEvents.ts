import { useParams } from "react-router-dom";

export function useCalendarEvents() {
  const { mode,date } = useParams<{ date: string; mode: "attack" | "medicine" }>();

  return { mode,date };
}
