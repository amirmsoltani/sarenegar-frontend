import { ReactNode } from "react";

export type TModal = { children: ReactNode };

export type TModalHeader = { title: string; closeTitle?: string; children?: ReactNode };

export type TModalFooter = { children: ReactNode };
