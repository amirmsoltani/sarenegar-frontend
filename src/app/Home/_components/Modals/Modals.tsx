// routes
import { routes } from "@/routes/routes";
// react-router-dom
import { NavLink } from "react-router-dom";

export const Modals = () => {
  return (
    <section style={{ marginTop: "30px", display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "450px" }}>
      <NavLink to={routes.home.modals.add.href}>Open modal</NavLink>
      <NavLink to={routes.home.modals.edit.href("unique-id")}>Open drawer</NavLink>
      <NavLink to={routes.home.modals.delete.href("unique-id")}>Open Yes or no modal</NavLink>
    </section>
  );
};
