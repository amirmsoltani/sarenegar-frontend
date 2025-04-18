import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { reportTypes } from "../../useReports";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { severityOptions } from "@/app/(epilepsy)/_common/epilepsyForm";
import { getAnalyticsAction } from "@/store/report/actions/getAnalytics/getAnalytics.action";

const weekLabels = ["شنبه", "1شنبه", "2شنبه", "3شنبه", "4شنبه", "5شنبه", "جمعه"];
const monthLabels = (items: any[]) => new Array(items.length).fill("").map((_, index) => String(index + 1));
const yearLabels = new Array(12).fill("").map((_, index) => String(index + 1));

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: { callbacks: { label: ({ raw }: any) => `${raw} مورد` } },
  },
  scales: { x: { reverse: true, grid: { display: false } }, y: { min: 0, max: 0, ticks: { stepSize: 1 } } },
};

export const doughnutChartOptions = {
  cutout: "60%",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: { display: false },
    legend: { display: false },
    tooltip: { callbacks: { label: ({ raw }: any) => `${raw}%` } },
  },
};

export const useReportsInfo = () => {
  const { type, start, end } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.report.analytics);

  const getData = useCallback(() => {
    dispatch(getAnalyticsAction({ type: type!, start: start!, end: end! }));
  }, [dispatch, end, start, type]);

  useEffect(() => {
    getData();
  }, [getData]);

  const _type = type === reportTypes[0].value ? "هفته" : type === reportTypes[1].value ? "ماه" : "سال";

  const barChartDataset = (state.data?.selected_period.events_distribution ?? []).reduce<{ data: number[]; max: number }>(
    (prev, current) => {
      prev.data.push(current.count);
      current.count > prev.max && (prev.max = current.count);
      return prev;
    },
    { data: [], max: 4 },
  );
  const barChartData = {
    labels:
      type === reportTypes[0].value
        ? weekLabels
        : type === reportTypes[1].value
          ? monthLabels(state.data?.selected_period.events_distribution ?? [])
          : yearLabels,
    datasets: [{ borderRadius: 4, backgroundColor: "#00c9af", data: barChartDataset.data }],
  };

  barChartOptions.scales.y.max = barChartDataset.max;

  const doughnutChartData = {
    labels: severityOptions.map((option) => option.label),
    datasets: [
      {
        backgroundColor: ["#674188", "#B3A0C4", "#E1D9E7"],
        data: [
          state.data?.selected_period.severity_distribution.Severe.percentage,
          state.data?.selected_period.severity_distribution.Moderate.percentage,
          state.data?.selected_period.severity_distribution.Mild.percentage,
        ],
      },
    ],
  };

  // @ts-ignore
  const termor = state.data?.selected_period.physical_state_distribution.tremor_shaking.present?.percentage ?? 0;
  // @ts-ignore
  const consciousness = state.data?.selected_period.physical_state_distribution.consciousness.retained?.percentage ?? 0;

  const morning = state.data?.selected_period.time_of_day_distribution.morning.percentage ?? 0;
  const noon = state.data?.selected_period.time_of_day_distribution.noon.percentage ?? 0;
  const evening = state.data?.selected_period.time_of_day_distribution.evening.percentage ?? 0;
  const night = state.data?.selected_period.time_of_day_distribution.night.percentage ?? 0;

  const maxDistribution = Math.max(morning, noon, evening, night);

  const maxDistributionLabel =
    maxDistribution === morning ? "صبح" : maxDistribution === noon ? "ظهر" : maxDistribution === evening ? "عصر" : "شب";

  return {
    ...state,
    noon,
    night,
    termor,
    getData,
    morning,
    evening,
    type: _type,
    barChartData,
    consciousness,
    doughnutChartData,
    maxDistributionLabel,
  };
};
