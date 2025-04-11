import type { HTMLAttributes, ReactNode } from "react";

export type TTextOverflow = { children?: ReactNode } & Omit<HTMLAttributes<HTMLSpanElement>, "tag" | "text" | "children">;
