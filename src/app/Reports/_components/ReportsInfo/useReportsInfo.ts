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
const monthLabels = (count: number) => new Array(count).fill("").map((_, index) => String(index + 1));
const yearLabels = new Array(12).fill("").map((_, index) => String(index + 1));

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { left: -10 } },
  plugins: {
    title: { display: false },
    legend: { display: false },
    tooltip: {
      padding: 8,
      cornerRadius: 12,
      titleColor: "#fff",
      displayColors: false,
      backgroundColor: "rgba(from #1d2742 r g b / 60%)",
      callbacks: { title: () => "", label: (props: any) => `${props.raw}` },
    },
    datalabels: { offset: 0, align: "end", color: "#000", anchor: "end", textAlign: "center", formatter: Math.floor },
  },
  scales: {
    x: {
      reverse: true,
      grid: { display: false },
      border: { display: false },
      ticks: { minRotation: 0, maxRotation: 0, autoSkip: false, callback: (_: number, __: number) => {} },
    },
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
    datalabels: { color: "transparent" },
    tooltip: {
      padding: 8,
      cornerRadius: 12,
      titleColor: "#fff",
      displayColors: false,
      backgroundColor: "rgba(from #1d2742 r g b / 60%)",
      callbacks: { title: () => "", label: (props: any) => `حمله ${props.label} ${props.raw}%` },
    },
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

  const daysCount = (state.data?.selected_period.events_distribution ?? []).length;

  const replacementValue = (1.5 * barChartDataset.max) / 100;
  barChartDataset.data = barChartDataset.data.map((count) => (count === 0 ? replacementValue : count));

  const barChartData = {
    labels: type === reportTypes[0].value ? weekLabels : type === reportTypes[1].value ? monthLabels(daysCount) : yearLabels,
    datasets: [{ borderRadius: 4, backgroundColor: "#00c9af", data: barChartDataset.data, padding: "50px" }],
  };

  barChartOptions.plugins.datalabels.color = type === reportTypes[1].value ? "transparent" : "#000";
  barChartOptions.scales.x.ticks.callback = (_: number, index: number) => {
    if (type === reportTypes[1].value) {
      if (index === 0) return 1;
      else if (index < 27) return (index + 1) % 5 ? "" : index + 1;
      else return daysCount - 1 === index ? daysCount : "";
    } else return barChartData.labels[index];
  };

  barChartOptions.scales.y.max = barChartDataset.max;
  barChartOptions.plugins.tooltip.callbacks.label = ({ dataIndex, raw }) => {
    if (type === reportTypes[2].value) {
      return `${jalaliMonths[dataIndex].label} ماه ${Math.floor(raw)} مورد`;
    } else {
      const date = new Date(DateService.GD(start!));
      date.setDate(date.getDate() + dataIndex);
      return `${DateService.customTranslate(date, { weekday: "long", day: "numeric", month: "long" })} ${Math.floor(raw)} مورد`;
    }
  };

  const doughnutChartData = {
    labels: [...severityOptions].reverse().map((option) => option.label),
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
