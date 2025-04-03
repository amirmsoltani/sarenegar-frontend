import { FieldValues } from "react-hook-form";
import { TFormOptions } from "../Form/Form.types";
import { TRangeOption } from "../Form/FormUtils.types";

export type TRange<T extends FieldValues> = { options: TRangeOption[] } & TFormOptions<T>;

export type TUseRange<T extends FieldValues> = Pick<TRange<T>, "options">;
