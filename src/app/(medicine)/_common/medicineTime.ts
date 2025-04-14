import { DrugDosageRetrieve } from "@/services/api";

const ONE_DAY = 1000 * 60 * 60 * 24;

type TCalcMedicineTimeData = Pick<DrugDosageRetrieve, "end_by_day" | "start_date" | "end_date">;
export const calcMedicineTimeData = ({ end_by_day, start_date, end_date }: TCalcMedicineTimeData) => {
  const start = new Date(start_date);
  const end = end_by_day ? new Date(start.getTime() + end_by_day * ONE_DAY) : new Date(end_date!);

  return { start, end };
};
