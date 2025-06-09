import { routes } from "@/routes/routes";
import { Params } from "react-router-dom";

export const medicineFirstStepForwardNavigation = (
  pathname: string,
  modal: keyof typeof routes.addMedicine.tabs.firstStep.modals,
) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.tabs.firstStep.modals[modal].href()
    : pathname.includes(routes.editMedicine.href())
      ? routes.editMedicine.tabs.firstStep.modals[modal].href()
      : routes.retakeMedicine.tabs.firstStep.modals[modal].href();
};



export const medicineFirstStepBackwardNavigation = (pathname: string, params: Readonly<Params<string>>) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.tabs.firstStep.href()
    : pathname.includes(routes.editMedicine.href(params.id!))
      ? routes.editMedicine.tabs.firstStep.href()
      : routes.retakeMedicine.tabs.firstStep.href();
};

