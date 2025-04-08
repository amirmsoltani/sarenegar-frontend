import { Validate } from "@/helper/validate";
import { useDurationTimePlaceholder } from "./useDurationTimePlaceholder";
import { TEpilepsyEventForm } from "@/store/epilepsy/epilepsySlice.types";
import { InputController } from "@/common/InputController/InputController";

export const DurationTimePlaceholder = () => {
  const { onClick } = useDurationTimePlaceholder();

  return (
    <InputController
      name="duration"
      onClick={onClick}
      Placeholder={Placeholder}
      validate={Validate.gen().fullTime()}
      label="مدت زمان حمله چقدر بوده است ؟"
    />
  );
};

type TDurationPlaceholder = { value: TEpilepsyEventForm["duration"] };
const Placeholder = ({ value }: TDurationPlaceholder) => {
  const { hour, minute, second } = value;

  return hour.value === "00" && minute.value === "00" && second.value === "00" ? (
    <div>انتخاب مدت زمان حمله</div>
  ) : (
    `${hour.value === "00" ? "" : `${hour.value} ساعت ${minute.value === "00" ? "" : "و"}`} ${minute.value === "00" ? "" : `${minute.value} دقیقه ${second.value === "00" ? "" : "و"}`} ${second.value === "00" ? "" : `${second.value} ثانیه`}`
  );
};
