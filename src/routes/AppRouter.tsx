import { routes } from "./routes";
import { Login } from "@/app/Login/Login";
import { Reports } from "@/app/Reports/Reports";
import { Dashboard } from "@/app/Dashboard/Dashboard";
import { Profile } from "@/app/(profile)/Profile/Profile";
import { Support } from "@/app/(profile)/Support/Support";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
import { Medicine } from "@/app/(medicine)/Medicine/Medicine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Current } from "@/app/(medicine)/Medicine/Current/Current";
import { PrimaryLayout } from "@/layout/PrimaryLayout/PrimaryLayout";
import { ReportsLayout } from "@/layout/ReportsLayout/ReportsLayout";
import { ProfileInfo } from "@/app/(profile)/ProfileInfo/ProfileInfo";
import { AddMedicine } from "@/app/(medicine)/AddMedicine/AddMedicine";
import { Completed } from "@/app/(medicine)/Medicine/Completed/Completed";
import { EditMedicine } from "@/app/(medicine)/EditMedicine/EditMedicine";
import { EpilepsyModal } from "@/app/Dashboard/EpilepsyModal/EpilepsyModal";
import { CityModal } from "@/app/(profile)/ProfileInfo/CityModal/CityModal";
import { LogoutModal } from "@/app/(profile)/Profile/LogoutModal/LogoutModal";
import { StateModal } from "@/app/(profile)/ProfileInfo/StateModal/StateModal";
import { RetakeMedicine } from "@/app/(medicine)/RetakeMedicine/RetakeMedicine";
import { GenderModal } from "@/app/(profile)/ProfileInfo/GenderModal/GenderModal";
import { MedicineInfo } from "@/app/(medicine)/Medicine/MedicineInfo/MedicineInfo";
import { AddEpilepsyEvent } from "@/app/(epilepsy)/AddEpilepsyEvent/AddEpilepsyEvent";
import { NotTakeDoseModal } from "@/app/(medicine)/NotTakeDoseModal/NotTakeDoseModal";
import { RouterStateManager } from "./components/RouterStateManager/RouterStateManager";
import { EpilepsyEventInfo } from "@/app/(epilepsy)/EpilepsyEventInfo/EpilepsyEventInfo";
import { DurationTimeModal } from "@/app/(epilepsy)/DurationTimeModal/DurationTimeModal";
import { EditEpilepsyEvent } from "@/app/(epilepsy)/EditEpilepsyEvent/EditEpilepsyEvent";
import { MedicineDoseModal } from "@/app/(medicine)/MedicineDoseModal/MedicineDoseModal";
import { BirthdateModal } from "@/app/(profile)/ProfileInfo/BirthdateModal/BirthdateModal";
import { MedicineDrugsModal } from "@/app/(medicine)/MedicineDrugsModal/MedicineDrugsModal";
import { OccurrenceTimeModal } from "@/app/(epilepsy)/OccurrenceTimeModal/OccurrenceTimeModal";
import { MedicineEndDateModal } from "@/app/(medicine)/MedicineEndDateModal/MedicineEndDateModal";
import { RedirectToCurrentMedicines, RedirectToDashboard } from "./components/Redirects/Redirects";
import { MedicineDrugDoseModal } from "@/app/(medicine)/MedicineDrugDoseModal/MedicineDrugDoseModal";
import { MedicineUsageTypeModal } from "@/app/(medicine)/MedicineUsageTypeModal/MedicineUsageTypeModal";
import { MedicineStartDateModal } from "@/app/(medicine)/MedicineStartDateModal/MedicineStartDateModal";
import { MedicineEndDayCountsModal } from "@/app/(medicine)/MedicineEndDayCountsModal/MedicineEndDayCountsModal";
import { DeleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/DeleteMedicineModal/DeleteMedicineModal";
import { CompleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/CompleteMedicineModal/CompleteMedicineModal";
import { DeleteEpilepsyEventModal } from "@/app/(epilepsy)/EpilepsyEventInfo/DeleteEpilepsyEventModal/DeleteEpilepsyEventModal";
import { useAppRouter } from "@/routes/useAppRouter.ts";

const AppRouter = () => {
  const { isLogin } = useAppRouter();

  return (
    <PrimaryLayout>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={RouterStateManager}>
            <Route path={routes.login.path} Component={AppRouterUtils.withCondition(!isLogin, Login, RedirectToDashboard)} />
            <Route path=":date?" Component={AppRouterUtils.withCondition(isLogin, AuthLayout)}>
              <Route path="" Component={RedirectToDashboard} />
              <Route path={routes.dashboard.path} Component={Dashboard}>
                <Route path={routes.dashboard.modals.epilepsy.path} Component={EpilepsyModal} />
                <Route path={routes.dashboard.modals.notTakeDoseModal.path} Component={NotTakeDoseModal} />
              </Route>
              <Route path={routes.addEpilepsyEvent.path} Component={AddEpilepsyEvent}>
                <Route path={routes.addEpilepsyEvent.modals.occurrenceTimeModal.path} Component={OccurrenceTimeModal} />
                <Route path={routes.addEpilepsyEvent.modals.durationTimeModal.path} Component={DurationTimeModal} />
              </Route>
              <Route path={routes.editEpilepsyEvent.path} Component={EditEpilepsyEvent}>
                <Route path={routes.editEpilepsyEvent.modals.occurrenceTimeModal.path} Component={OccurrenceTimeModal} />
                <Route path={routes.editEpilepsyEvent.modals.durationTimeModal.path} Component={DurationTimeModal} />
              </Route>
              <Route path={routes.epilepsyEventInfo.path} Component={EpilepsyEventInfo}>
                <Route path={routes.epilepsyEventInfo.modals.deleteEpilepsyEvent.path} Component={DeleteEpilepsyEventModal} />
              </Route>
              <Route path={routes.medicine.path} Component={Medicine}>
                <Route path="" Component={RedirectToCurrentMedicines} />
                <Route path={routes.medicine.tabs.current.path} Component={Current} />
                <Route path={routes.medicine.tabs.completed.path} Component={Completed} />
              </Route>
              <Route path={routes.medicineInfo.path} Component={MedicineInfo}>
                <Route path={routes.medicineInfo.modals.delete.path} Component={DeleteMedicineModal} />
                <Route path={routes.medicineInfo.modals.complete.path} Component={CompleteMedicineModal} />
              </Route>
              <Route path={routes.addMedicine.path} Component={AddMedicine}>
                <Route path={routes.addMedicine.modals.startDate.path} Component={MedicineStartDateModal} />
                <Route path={routes.addMedicine.modals.endDate.path} Component={MedicineEndDateModal} />
                <Route path={routes.addMedicine.modals.dayCounts.path} Component={MedicineEndDayCountsModal} />
                <Route path={routes.addMedicine.modals.drugs.path} Component={MedicineDrugsModal} />
                <Route path={routes.addMedicine.modals.dose.path} Component={MedicineDoseModal} />
                <Route path={routes.addMedicine.modals.usageType.path} Component={MedicineUsageTypeModal} />
                <Route path={routes.addMedicine.modals.doseTime.path} Component={MedicineDrugDoseModal} />
              </Route>
              <Route path={routes.editMedicine.path} Component={EditMedicine}>
                <Route path={routes.editMedicine.modals.startDate.path} Component={MedicineStartDateModal} />
                <Route path={routes.editMedicine.modals.endDate.path} Component={MedicineEndDateModal} />
                <Route path={routes.editMedicine.modals.dayCounts.path} Component={MedicineEndDayCountsModal} />
                <Route path={routes.editMedicine.modals.drugs.path} Component={MedicineDrugsModal} />
                <Route path={routes.editMedicine.modals.dose.path} Component={MedicineDoseModal} />
                <Route path={routes.editMedicine.modals.usageType.path} Component={MedicineUsageTypeModal} />
                <Route path={routes.editMedicine.modals.doseTime.path} Component={MedicineDrugDoseModal} />
              </Route>
              <Route path={routes.retakeMedicine.path} Component={RetakeMedicine}>
                <Route path={routes.retakeMedicine.modals.startDate.path} Component={MedicineStartDateModal} />
                <Route path={routes.retakeMedicine.modals.endDate.path} Component={MedicineEndDateModal} />
                <Route path={routes.retakeMedicine.modals.dayCounts.path} Component={MedicineEndDayCountsModal} />
                <Route path={routes.retakeMedicine.modals.drugs.path} Component={MedicineDrugsModal} />
                <Route path={routes.retakeMedicine.modals.dose.path} Component={MedicineDoseModal} />
                <Route path={routes.retakeMedicine.modals.usageType.path} Component={MedicineUsageTypeModal} />
                <Route path={routes.retakeMedicine.modals.doseTime.path} Component={MedicineDrugDoseModal} />
              </Route>
              <Route path={routes.profile.path} Component={Profile}>
                <Route path={routes.profile.modals.path} Component={LogoutModal} />
              </Route>
              <Route path={routes.profileInfo.path} Component={ProfileInfo}>
                <Route path={routes.profileInfo.modals.genderModal.path} Component={GenderModal} />
                <Route path={routes.profileInfo.modals.birthdateModal.path} Component={BirthdateModal} />
                <Route path={routes.profileInfo.modals.stateModal.path} Component={StateModal} />
                <Route path={routes.profileInfo.modals.cityModal.path} Component={CityModal} />
              </Route>
              <Route path={routes.support.path} Component={Support} />
              <Route path={routes.reports.path} Component={ReportsLayout}>
                <Route path={routes.reportsInfo.path} Component={Reports} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimaryLayout>
  );
};

export default AppRouter;
