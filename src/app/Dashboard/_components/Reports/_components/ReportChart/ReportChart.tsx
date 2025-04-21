import { barChartData, barChartOptions, useReportChart } from "./useReportChart";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ArcElement } from "chart.js";

ChartJS.defaults.font.family = "Yekan Bakh FaNum";
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

export const ReportChart = () => {
  useReportChart();

  return <Bar options={barChartOptions} data={barChartData} />;
};
