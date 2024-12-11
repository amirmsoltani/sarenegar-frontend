import { Profile, Rank, Setting2 } from "iconsax-react";

// ? route options documentation

// ! href: route pathname
// ! name: route name to display
// ! icon: route icon for sidebar

// ! modals: on object, containing a page modals info

type TId = string | number;
const ID = ":id" as const;

export const routes = {
  home: {
    href: "/",
    icon: <></>,
    name: "Home",
    modals: {
      add: { name: "Add", href: "/add" },
      edit: { name: "Edit", href: (id: TId = ID) => `/edit/${id}` },
      delete: { name: "Delete", href: (id: TId = ID) => `/delete/${id}` },
    },
  },
  login: {
    href: "/login",
    icon: <></>,
    name: "Login",
  },
  match: {
    href: "/match",
    icon: Rank,
    name: "Match",
  },
  users: {
    href: "/user",
    icon: Profile,
    name: "User",
  },
  setting: {
    href: "/setting",
    icon: Setting2,
    name: "Setting",
  },
};
