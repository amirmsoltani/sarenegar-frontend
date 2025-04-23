import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TUseWheelPicker } from "./WheelPicker.types";
import { TWheelPickerOption } from "../Form/FormUtils.types";
import { FieldValues, useFormContext } from "react-hook-form";

export const useWheelPicker = <T extends FieldValues>({ name, options }: TUseWheelPicker<T>) => {
  const { control, setValue, formState, watch } = useFormContext<T>();
  const value: TWheelPickerOption | null = watch(name);

  const loop = options.length > 3;

  const [ref, innerApi] = useEmblaCarousel({ loop, axis: "y", dragFree: true });

  useEffect(() => {
    if (innerApi) {
      if (value) {
        const index = options.findIndex((option) => option.value === value.value);
        ~index && innerApi.scrollTo(index);
      }

      const onSelect = () => {
        const index = innerApi.selectedScrollSnap();
        innerApi.scrollTo(index);
        setValue(name, options[index] as any, { shouldValidate: formState.isSubmitted });
      };

      innerApi.on("select", onSelect);
      innerApi.on("pointerUp", onSelect);

      return () => {
        innerApi.off("select", onSelect);
        innerApi.off("pointerUp", onSelect);
      };
    }
  }, [formState.isSubmitted, innerApi, name, options, setValue, value]);

  return { control, ref, loop };
};
