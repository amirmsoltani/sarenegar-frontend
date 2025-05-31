import Home from "@/assets/svg/home.svg";
import Pill from "@/assets/svg/PillMenu.svg";
import { DateService } from "@/services/DateService";
import PillActive from "@/assets/svg/pill-active.svg";
import HomeActive from "@/assets/svg/home-active.svg";
import { reportTypes } from "@/app/Reports/useReports";
import { RouterService } from "@/services/RouterService";
import ClipboardText from "@/assets/svg/clipboard-text.svg";
import ClipboardTextActive from "@/assets/svg/clipboard-text-active.svg";
import { Calendar } from "@wandersonalwes/iconsax-react";

// ? route options documentation

// ! href: route pathname
// ! name: route name to display
// ! icon: route icon for navbar
// ! activeIcon: route active icon for navbar

// ! tabs: page tabs
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
      notTakeDoseModal: {
        path: "not-take-dose/:id",
        href: (id: TId) => `${RouterService.setDate()}/dashboard/not-take-dose/${id}`,
      },
    },
  },
  addEpilepsyEvent: {
    path: "add-epilepsy",
    href: (date?: string) => `${RouterService.setDate(date)}/add-epilepsy`,
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
    href: (date?: string) => `${RouterService.setDate(date)}/add-medicine`,
    tabs: {
      firstStep: {
        path: "first-step",
        href: (date?: string) => `${RouterService.setDate(date)}/add-medicine/first-step`,
        modals: {
          drugs: {
            path: "drugs",
            href: () => `${RouterService.setDate()}/add-medicine/first-step/drugs`,
          },
          dose: {
            path: "dose",
            href: () => `${RouterService.setDate()}/add-medicine/first-step/dose`,
          },
          usageType: {
            path: "usage-type",
            href: () => `${RouterService.setDate()}/add-medicine/first-step/usage-type`,
          },
        },
      },
      secondStep: {
        path: "second-step",
        href: (date?: string) => `${RouterService.setDate(date)}/add-medicine/second-step`,
        modals: {
          startDate: {
            path: "start-date",
            href: () => `${RouterService.setDate()}/add-medicine/second-step/start-date`,
          },
          endDate: {
            path: "end-date",
            href: () => `${RouterService.setDate()}/add-medicine/second-step/end-date`,
          },
          dayCounts: {
            path: "day-counts",
            href: () => `${RouterService.setDate()}/add-medicine/second-step/day-counts`,
          },
          doseTime: {
            path: "dose-time/:dose",
            href: (id: TId) => `${RouterService.setDate()}/add-medicine/second-step/dose-time/${id}`,
          },
        },
      },
    },
  },
  editMedicine: {
    path: "edit-medicine/:id",
    href: (id?: TId) => `${RouterService.setDate()}/edit-medicine/${id ?? RouterService.params.id}`,
    tabs: {
      firstStep: {
        path: "first-step",
        href: (date?: string) => `${RouterService.setDate(date)}/edit-medicine/${RouterService.params.id}/first-step`,
        modals: {
          drugs: {
            path: "drugs",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/first-step/drugs`,
          },
          dose: {
            path: "dose",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/first-step/dose`,
          },
          usageType: {
            path: "usage-type",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/first-step/usage-type`,
          },
        },
      },
      secondStep: {
        path: "second-step",
        href: (date?: string) => `${RouterService.setDate(date)}/edit-medicine/${RouterService.params.id}/second-step`,
        modals: {
          startDate: {
            path: "start-date",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/second-step/start-date`,
          },
          endDate: {
            path: "end-date",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/second-step/end-date`,
          },
          dayCounts: {
            path: "day-counts",
            href: () => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/second-step/day-counts`,
          },
          doseTime: {
            path: "dose-time/:dose",
            href: (id: TId) => `${RouterService.setDate()}/edit-medicine/${RouterService.params.id}/second-step/dose-time/${id}`,
          },
        },
      },
    },
  },
  retakeMedicine: {
    path: "retake-medicine/:id",
    href: (id?: TId) => `${RouterService.setDate()}/retake-medicine/${id ?? RouterService.params.id}`,
    tabs: {
      firstStep: {
        path: "first-step",
        href: (date?: string) => `${RouterService.setDate(date)}/retake-medicine/${RouterService.params.id}/first-step`,
        modals: {
          drugs: {
            path: "drugs",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/first-step/drugs`,
          },
          dose: {
            path: "dose",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/first-step/dose`,
          },
          usageType: {
            path: "usage-type",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/first-step/usage-type`,
          },
        },
      },
      secondStep: {
        path: "second-step",
        href: (date?: string) => `${RouterService.setDate(date)}/retake-medicine/${RouterService.params.id}/second-step`,
        modals: {
          startDate: {
            path: "start-date",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/second-step/start-date`,
          },
          endDate: {
            path: "end-date",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/second-step/end-date`,
          },
          dayCounts: {
            path: "day-counts",
            href: () => `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/second-step/day-counts`,
          },
          doseTime: {
            path: "dose-time/:dose",
            href: (id: TId) =>
              `${RouterService.setDate()}/retake-medicine/${RouterService.params.id}/second-step/dose-time/${id}`,
          },
        },
      },
    },
  },
  reports: {
    path: "reports",
    icon: ClipboardText,
    activeIcon: ClipboardTextActive,
    href: () => `${RouterService.setDate()}/reports`,
  },
  reportsInfo: {
    icon: ClipboardText,
    path: ":type/:start/:end",
    activeIcon: ClipboardTextActive,
    href: (type?: string, _start?: string, _end?: string) => {
      const _type = type ?? reportTypes[0].value;
      const { start, end } =
        DateService[
          _type === reportTypes[0].value ? "getWeekRange" : _type === reportTypes[1].value ? "getMonthRange" : "getYearRange"
        ]();
      return `${RouterService.setDate()}/reports/${_type}/${_start ?? start}/${_end ?? end}`;
    },
  },
  profile: {
    path: "profile",
    href: () => `${RouterService.setDate()}/profile`,
    modals: {
      path: "logout",
      href: () => `${RouterService.setDate()}/profile/logout`,
    },
  },
  profileInfo: {
    path: "profile-info",
    href: () => `${RouterService.setDate()}/profile-info`,
    modals: {
      genderModal: {
        path: "gender",
        href: () => `${RouterService.setDate()}/profile-info/gender`,
      },
      birthdateModal: {
        path: "birthdate",
        href: () => `${RouterService.setDate()}/profile-info/birthdate`,
      },
      stateModal: {
        path: "state",
        href: () => `${RouterService.setDate()}/profile-info/state`,
      },
      cityModal: {
        path: "city",
        href: () => `${RouterService.setDate()}/profile-info/city`,
      },
    },
  },
  support: {
    path: "support",
    href: () => `${RouterService.setDate()}/support`,
  },
  notification: {
    path: "notification",
    href: () => `${RouterService.setDate()}/notification`,
  },
  calendarWrapper: {
    path: "calendar",
    href: (date?: string) => `${RouterService.setDate(date)}/calendar`,
    icon: Calendar,
    activeIcon: (props: any) => <Calendar variant={"Bold"} {...props} />,
  },
  calendar: {
    path: ":mode",
    href: (date?: string, mode: "attack" | "medicine" = "attack") => `${RouterService.setDate(date)}/calendar/${mode}`,
    modals: {
      events: {
        path: "events",
        href: (date: string, mode: "attack" | "medicine") => `${RouterService.setDate(date)}/calendar/${mode}/events`,

        modals: {
          takeDose: {
            path: ":reminderID",
            href: (reminderID: number, date?: string) => `${RouterService.setDate(date)}/calendar/medicine/events/${reminderID}`,
          },
        },
      },
    },
  },
};
