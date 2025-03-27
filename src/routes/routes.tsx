// ? route options documentation

// ! href: route pathname
// ! name: route name to display
// ! icon: route icon for sidebar

// ! modals: on object, containing a page modals info

type TId = string | number;
const ID = ":id" as const;

export const routes = {
  home: {
    path: "",
    href: "/",
    icon: <></>,
    name: "Home",
  },
  login: {
    icon: <></>,
    path: "login",
    name: "Login",
    href: "/login",
  },
};
