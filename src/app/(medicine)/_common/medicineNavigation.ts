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

export const medicineSecondStepForwardNavigation = (
  pathname: string,
  modal: keyof typeof routes.addMedicine.tabs.secondStep.modals,
  id?: number,
) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.tabs.secondStep.modals[modal].href(id!)
    : pathname.includes(routes.editMedicine.href())
      ? routes.editMedicine.tabs.secondStep.modals[modal].href(id!)
      : routes.retakeMedicine.tabs.secondStep.modals[modal].href(id!);
};

export const medicineFirstStepBackwardNavigation = (pathname: string, params: Readonly<Params<string>>) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.tabs.firstStep.href()
    : pathname.includes(routes.editMedicine.href(params.id!))
      ? routes.editMedicine.tabs.firstStep.href()
      : routes.retakeMedicine.tabs.firstStep.href(params.id!);
};

export const medicineSecondStepBackwardNavigation = (pathname: string, params: Readonly<Params<string>>) => {
  return pathname.includes(routes.addMedicine.href())
    ? routes.addMedicine.tabs.secondStep.href()
    : pathname.includes(routes.editMedicine.href(params.id!))
      ? routes.editMedicine.tabs.secondStep.href()
      : routes.retakeMedicine.tabs.secondStep.href(params.id!);
};
