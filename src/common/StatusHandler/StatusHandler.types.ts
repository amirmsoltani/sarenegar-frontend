import { ReactNode } from "react";
import { INormalState } from "@/store/store.types";
import { TSpinner } from "../Spinner/Spinner.types";

export type TStatusHandler = { children: ReactNode; onClick: () => void; className?: string } & Pick<
  INormalState<any>,
  "status"
> &
  TSpinner;
