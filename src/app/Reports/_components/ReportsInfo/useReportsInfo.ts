import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { reportTypes } from "../../useReports";
import { jalaliMonths } from "@/helper/helper";
import { DateService } from "@/services/DateService";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { severityOptions } from "@/app/(epilepsy)/_common/epilepsyForm";
import { getAnalyticsAction } from "@/store/report/actions/getAnalytics/getAnalytics.action";

const DEFAULT_MAX_BAR_CHART_VALUE = 4;

const weekLabels = ["شنبه", "1شنبه", "2شنبه", "3شنبه", "4شنبه", "5شنبه", "جمعه"];
const monthLabels = (items: any[]) => new Array(items.length).fill("").map((_, index) => String(index + 1));
const yearLabels = new Array(12).fill("").map((_, index) => String(index + 1));

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { left: -10 } },
  plugins: {
    title: { display: false },
    legend: { display: false },
    tooltip: { callbacks: { title: () => "", label: (props: any) => `${props.raw}` } },
  },
  scales: {
    x: { reverse: true, grid: { display: false }, border: { display: false } },
    y: { min: 0, max: DEFAULT_MAX_BAR_CHART_VALUE, ticks: { stepSize: 1, padding: 10 }, border: { display: false } },
  },
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
    { data: [], max: DEFAULT_MAX_BAR_CHART_VALUE },
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
  barChartOptions.plugins.tooltip.callbacks.label = ({ dataIndex, raw }) => {
    if (type === reportTypes[2].value) {
      return `${jalaliMonths[dataIndex].label} ماه ${raw} مورد`;
    } else {
      const date = new Date(start!);
      date.setDate(date.getDate() + dataIndex);
      return `${DateService.customTranslate(date, { weekday: "long", day: "numeric", month: "long" })} ${raw} مورد`;
    }
  };

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

  const termor = state.data?.selected_period.physical_state_distribution.tremor_shaking.present?.percentage ?? 0;
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
