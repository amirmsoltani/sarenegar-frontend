import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";

export type TRowCalendar = { active: string; onChange?: (date: string) => void };

export type TFormRowCalendar<T extends FieldValues> = TFormOptions<T>;
