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
    tabs: {
      current: {
        path: "current",
        href: () => `${RouterService.setDate()}/medicine/current`,
      },
      completed: {
        path: "completed",
        href: () => `${RouterService.setDate()}/medicine/completed`,
      },
    },
  },
  medicineInfo: {
    path: "medicine-info/:id",
    href: (id: TId) => `${RouterService.setDate()}/medicine-info/${id}`,
    modals: {
      delete: {
        path: "delete",
        href: () => `${RouterService.setDate()}/medicine-info/${RouterService.params.id}/delete`,
      },
      complete: {
        path: "complete",
        href: () => `${RouterService.setDate()}/medicine-info/${RouterService.params.id}/complete`,
      },
    },
  },
  addMedicine: {
    path: "add-medicine",
    href: () => `${RouterService.setDate()}/add-medicine`,
    modals: {
      startDate: {
        path: "start-date",
        href: () => `${RouterService.setDate()}/add-medicine/start-date`,
      },
      endDate: {
        path: "end-date",
        href: () => `${RouterService.setDate()}/add-medicine/end-date`,
      },
      dayCounts: {
        path: "day-counts",
        href: () => `${RouterService.setDate()}/add-medicine/day-counts`,
      },
      drugs: {
        path: "drugs",
        href: () => `${RouterService.setDate()}/add-medicine/drugs`,
      },
      dose: {
        path: "dose",
        href: () => `${RouterService.setDate()}/add-medicine/dose`,
      },
      usageType: {
        path: "usage-type",
        href: () => `${RouterService.setDate()}/add-medicine/usage-type`,
      },
      doseTime: {
        path: "dose-time/:dose",
        href: (id: TId) => `${RouterService.setDate()}/add-medicine/dose-time/${id}`,
      },
    },
  },
  editMedicine: {
    path: "edit-medicine",
    href: (id: TId) => `${RouterService.setDate()}/edit-medicine/${id}`,
    modals: {
      startDate: {
        path: "start-date",
        href: () => `${RouterService.setDate()}/edit-medicine/start-date`,
      },
      endDate: {
        path: "end-date",
        href: () => `${RouterService.setDate()}/edit-medicine/end-date`,
      },
      dayCounts: {
        path: "day-counts",
        href: () => `${RouterService.setDate()}/edit-medicine/day-counts`,
      },
      drugs: {
        path: "drugs",
        href: () => `${RouterService.setDate()}/edit-medicine/drugs`,
      },
      dose: {
        path: "dose",
        href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/dose`,
      },
      usageType: {
        path: "usage-type",
        href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/usage-type`,
      },
      doseTime: {
        path: "dose-time",
        href: (id: TId) => `${RouterService.setDate()}/edit-medicine/dose-time/${id}`,
      },
    },
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
