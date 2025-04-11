import { toLabelValue, withPadStart } from "@/helper/helper";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TMedicineForm } from "@/store/medicine/medicineSlice.types";

export const useMedicineDoses = () => {
  const { control, watch } = useFormContext<TMedicineForm>();

  const { remove, replace } = useFieldArray({ control, name: "doses" });
  const fields = watch("doses");

  const appendHandler = () => {
    const newHour = ((fields.length * 4 + 8) % 24).toString();
    const value = { hour: toLabelValue(newHour), minute: toLabelValue(withPadStart(0)) };

    const _fields = [...fields, { value, placeholder: { ...value } }].sort((a, b) => {
      const hour1 = a.value.hour.value === "00" ? 24 : +a.value.hour.value;
      const hour2 = b.value.hour.value === "00" ? 24 : +b.value.hour.value;
      if (hour1 === hour2) {
        const minute1 = a.value.minute.value === "00" ? 0 : +a.value.minute.value;
        const minute2 = b.value.minute.value === "00" ? 0 : +b.value.minute.value;
        return minute1 - minute2;
      } else return hour1 - hour2;
    });

    replace(_fields);
  };

  const removeHandler = (index: number) => remove(index);

  return { fields, appendHandler, removeHandler };
};
