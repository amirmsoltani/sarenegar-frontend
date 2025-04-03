import { EpilepsyChart } from "@/common/EpilepsyChart/EpilepsyChart";
import { useEpilepsyChartContainer } from "./useEpilepsyChartContainer";

export const EpilepsyChartContainer = () => {
  const { value } = useEpilepsyChartContainer();

  return <EpilepsyChart size="lg" theme="purple" value={value} />;
};
