import { routes } from "@/routes/routes";
import { Params } from "react-router-dom";

export const medicineBackwardNavigation = (pathname: string, params: Readonly<Params<string>>) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.href()
    : pathname.includes(routes.editMedicine.href(params.id!))
      ? routes.editMedicine.href(params.id!)
      : routes.retakeMedicine.href(params.id!);
};

export const medicineForwardNavigation = (pathname: string, modal: keyof typeof routes.addMedicine.modals, id?: number) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.modals[modal].href(id!)
    : pathname.includes(routes.editMedicine.href())
      ? routes.editMedicine.modals[modal].href(id!)
      : routes.retakeMedicine.modals[modal].href(id!);
};
