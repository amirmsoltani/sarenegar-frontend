import { useAppSelector } from "@/store/store";
import { severityOptions } from "@/app/(epilepsy)/_common/epilepsyForm";

const DEFAULT_MAX_BAR_CHART_VALUE = 3;

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { left: -8 } },
  plugins: {
    title: { display: false },
    legend: { display: false },
    datalabels: { color: "transparent" },
    tooltip: {
      padding: 8,
      cornerRadius: 12,
      titleColor: "#fff",
      displayColors: false,
      backgroundColor: "rgba(from #1d2742 r g b / 60%)",
      callbacks: { title: () => "", label: ({ raw }: any) => `${raw} مورد` },
    },
  },
  scales: {
    x: { ticks: { color: "#ffffff" }, grid: { display: false }, border: { display: false } },
    y: {
      min: 0,
      border: { display: false },
      grid: { color: "#ffffff4d" },
      max: DEFAULT_MAX_BAR_CHART_VALUE,
      ticks: { stepSize: 1, color: "#ffffff", padding: 8 },
    },
  },
};

export const barChartData = {
  labels: severityOptions.map((option) => option.label),
  datasets: [
    {
      data: [0, 0, 0],
      borderRadius: 4,
      maxBarThickness: 5,
      backgroundColor: (ctx: any) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;

        if (!chartArea) return "#fff";

        const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);

        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(0.6, "#fff");
        gradient.addColorStop(1, "rgba(255, 255, 255, 20%)");

        return gradient;
      },
    },
  ],
};

export const useReportChart = () => {
  const { Mild, Moderate, Severe } = useAppSelector((store) => store.report.analyticsSummary.data!.severity_distribution);

  barChartData.datasets[0].data = [Mild, Moderate, Severe];
  barChartOptions.scales.y.max = Math.max(...barChartData.datasets[0].data, DEFAULT_MAX_BAR_CHART_VALUE);
};
