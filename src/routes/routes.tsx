// ? route options documentation

import Home from "@/assets/svg/home.svg";
import Pill from "@/assets/svg/PillMenu.svg";
import PillActive from "@/assets/svg/pill-active.svg";
import HomeActive from "@/assets/svg/home-active.svg";
import { RouterService } from "@/services/RouterService";
import CalendarTick from "@/assets/svg/calendar-tick.svg";
import ClipboardText from "@/assets/svg/clipboard-text.svg";
import CalendarTickActive from "@/assets/svg/calendar-tick-active.svg";
import ClipboardTextActive from "@/assets/svg/clipboard-text-active.svg";

// ! href: route pathname
// ! name: route name to display
// ! icon: route icon for navbar
// ! activeIcon: route active icon for navbar

// ! modals: on object, containing a page modals info

type TId = string | number;

export const routes = {
  login: {
    path: "login",
    href: () => "/login",
  },
  dashboard: {
    icon: Home,
    path: "dashboard",
    activeIcon: HomeActive,
    href: () => `${RouterService.setDate()}/dashboard`,
    modals: {
      epilepsy: {
        path: "epilepsy",
        href: () => `${RouterService.setDate()}/dashboard/epilepsy`,
      },
    },
  },
  addEpilepsyEvent: {
    path: "add-epilepsy",
    href: () => `${RouterService.setDate()}/add-epilepsy`,
    modals: {
      occurrenceTimeModal: {
        path: "occurrence-time",
        href: () => `${RouterService.setDate()}/add-epilepsy/occurrence-time`,
      },
      durationTimeModal: {
        path: "duration-time",
        href: () => `${RouterService.setDate()}/add-epilepsy/duration-time`,
      },
    },
  },
  editEpilepsyEvent: {
    path: "edit-epilepsy/:id",
    href: (id: TId) => `${RouterService.setDate()}/edit-epilepsy/${id}`,
    modals: {
      occurrenceTimeModal: {
        path: "occurrence-time",
        href: () => `${RouterService.setDate()}/edit-epilepsy/${RouterService.params.id}/occurrence-time`,
      },
      durationTimeModal: {
        path: "duration-time",
        href: () => `${RouterService.setDate()}/edit-epilepsy/${RouterService.params.id}/duration-time`,
      },
    },
  },
  epilepsyEventInfo: {
    path: "epilepsy/:id",
    href: (id: TId) => `${RouterService.setDate()}/epilepsy/${id}`,
    modals: {
      deleteEpilepsyEvent: {
        path: "delete",
        href: () => `${RouterService.setDate()}/epilepsy/${RouterService.params.id}/delete`,
      },
    },
  },
  medicine: {
    icon: Pill,
    path: "medicine",
    activeIcon: PillActive,
    href: () => `${RouterService.setDate()}/medicine`,
  },
  calender: {
    path: "calender",
    icon: CalendarTick,
    activeIcon: CalendarTickActive,
    href: () => `${RouterService.setDate()}/calender`,
  },
  reports: {
    path: "reports",
    icon: ClipboardText,
    activeIcon: ClipboardTextActive,
    href: () => `${RouterService.setDate()}/reports`,
  },
  profile: {
    path: "profile",
    href: () => `${RouterService.setDate()}/profile`,
  },
  notification: {
    path: "notification",
    href: () => `${RouterService.setDate()}/notification`,
  },
};
