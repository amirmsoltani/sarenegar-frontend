import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";

export type TRowCalendar = { current: string; active?: string; onChange?: (date: string) => void; variant: "DEFAULT" | "LIGHT" };

export type TFormRowCalendar<T extends FieldValues> = TFormOptions<T>;
