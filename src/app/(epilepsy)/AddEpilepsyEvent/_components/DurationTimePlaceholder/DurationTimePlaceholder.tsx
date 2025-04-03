import { useDurationTimePlaceholder } from "./useDurationTimePlaceholder";
import { InputController } from "@/common/InputController/InputController";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";

export const DurationTimePlaceholder = () => {
  const { onClick } = useDurationTimePlaceholder();

  return <InputController name="duration" onClick={onClick} Placeholder={Placeholder} label="مدت زمان حمله چقدر بوده است ؟" />;
};

type TDurationPlaceholder = { value: TEpilepsyEventForm["duration"] };
const Placeholder = ({ value }: TDurationPlaceholder) => {
  const { hour, minute, second } = value;

  return hour === "00" && minute === "00" && second === "00" ? (
    <div>انتخاب مدت زمان حمله</div>
  ) : (
    `${hour === "00" ? "" : `${hour} ساعت ${minute === "00" ? "" : "و"}`} ${minute === "00" ? "" : `${minute} دقیقه ${second === "00" ? "" : "و"}`} ${second === "00" ? "" : `${second} ثانیه`}`
  );
};
