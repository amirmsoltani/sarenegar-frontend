import { getNowDate } from "@/helper/helper";
import { DateService } from "@/services/DateService";
import { useOccurrencePlaceholder } from "./useOccurrencePlaceholder";
import { InputController } from "@/common/InputController/InputController";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";

export const OccurrencePlaceholder = () => {
  const { onClick } = useOccurrencePlaceholder();

  return (
    <InputController
      onClick={onClick}
      name="time_of_occurrence"
      Placeholder={Placeholder}
      label="حمله چه زمانی اتفاق افتاده است ؟"
    />
  );
};

type TOccurrencePlaceholder = { value: TEpilepsyEventForm["time_of_occurrence"] };
const Placeholder = ({ value }: TOccurrencePlaceholder) => {
  const { date, time } = value;

  return (
    <div>
      {date === getNowDate() ? "امروز" : DateService.getDate(date)}، ساعت {time.hour}:{time.minute}
    </div>
  );
};
