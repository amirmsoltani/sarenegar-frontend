// ? route options documentation

import Home2 from "@/assets/svg/home-2.svg";
import Pill from "@/assets/svg/PillMenu.svg";
import { RouterService } from "@/services/RouterService";
import { CalendarTick, ClipboardText } from "iconsax-react";

// ! href: route pathname
// ! name: route name to display
// ! icon: route icon for sidebar

// ! modals: on object, containing a page modals info

// type TId = string | number;
// const ID = ":id" as const;

export const routes = {
  login: {
    icon: <></>,
    path: "login",
    name: "Login",
    href: () => "/login",
  },
  home: {
    path: "",
    icon: Home2,
    name: "Home",
    href: () => RouterService.setDate(),
  },
  medicine: {
    icon: Pill,
    path: "medicine",
    name: "Medicine",
    href: () => `${RouterService.setDate()}/medicine`,
  },
  calender: {
    icon: CalendarTick,
    path: "calender",
    name: "Calender",
    href: () => `${RouterService.setDate()}/calender`,
  },
  reports: {
    icon: ClipboardText,
    path: "reports",
    name: "Reports",
    href: () => `${RouterService.setDate()}/reports`,
  },
};
