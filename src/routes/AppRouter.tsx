import { routes } from "./routes";
import { Login } from "@/app/Login/Login";
import { Reports } from "@/app/Reports/Reports";
import { Dashboard } from "@/app/Dashboard/Dashboard";
import { Calendar } from "@/app/Calendar/Calendar.tsx";
import { useAppRouter } from "@/routes/useAppRouter.ts";
import { Profile } from "@/app/(profile)/Profile/Profile";
import { Support } from "@/app/(profile)/Support/Support";
import { NotFound } from "./components/NotFound/NotFound";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
import { Medicine } from "@/app/(medicine)/Medicine/Medicine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Current } from "@/app/(medicine)/Medicine/Current/Current";
import { PrimaryLayout } from "@/layout/PrimaryLayout/PrimaryLayout";
import { ReportsLayout } from "@/layout/ReportsLayout/ReportsLayout";
import { ProfileInfo } from "@/app/(profile)/ProfileInfo/ProfileInfo";
import { AddMedicine } from "@/app/(medicine)/AddMedicine/AddMedicine";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
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
import { CalendarEvents } from "@/app/Calendar/_components/CalendarEvents/CalendarEvents.tsx";
import { OccurrenceTimeModal } from "@/app/(epilepsy)/OccurrenceTimeModal/OccurrenceTimeModal";
import { CalendarWrapper } from "@/app/Calendar/_components/CalendarWrapper/CalendarWrapper.tsx";
import { MedicineEndDateModal } from "@/app/(medicine)/MedicineEndDateModal/MedicineEndDateModal";
import { RedirectToCurrentMedicines, RedirectToDashboard } from "./components/Redirects/Redirects";
import { MedicineDrugDoseModal } from "@/app/(medicine)/MedicineDrugDoseModal/MedicineDrugDoseModal";
import { MedicineFormFirstStep } from "@/app/(medicine)/MedicineFormFirstStep/MedicineFormFirstStep";
import { MedicineUsageTypeModal } from "@/app/(medicine)/MedicineUsageTypeModal/MedicineUsageTypeModal";
import { MedicineStartDateModal } from "@/app/(medicine)/MedicineStartDateModal/MedicineStartDateModal";
import { MedicineFormSecondStep } from "@/app/(medicine)/MedicineFormSecondStep/MedicineFormSecondStep";
import { MedicineEndDayCountsModal } from "@/app/(medicine)/MedicineEndDayCountsModal/MedicineEndDayCountsModal";
import { DeleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/DeleteMedicineModal/DeleteMedicineModal";
import { CompleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/CompleteMedicineModal/CompleteMedicineModal";
import { CalendarNotTakeDoseModal } from "@/app/Calendar/_components/CalendarNotTakeDoseModal/CalendarNotTakeDoseModal.tsx";
import { DeleteEpilepsyEventModal } from "@/app/(epilepsy)/EpilepsyEventInfo/DeleteEpilepsyEventModal/DeleteEpilepsyEventModal";
import { Notification } from "@/app/Notification/Notification.tsx";

const AppRouter = () => {
  const { isLogin } = useAppRouter();

  return (
    <PrimaryLayout>
      <BrowserRouter>
        <ErrorBoundary>
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
                  <Route path={routes.addMedicine.tabs.firstStep.path} Component={MedicineFormFirstStep}>
                    <Route path={routes.addMedicine.tabs.firstStep.modals.drugs.path} Component={MedicineDrugsModal} />
                    <Route path={routes.addMedicine.tabs.firstStep.modals.dose.path} Component={MedicineDoseModal} />
                    <Route path={routes.addMedicine.tabs.firstStep.modals.usageType.path} Component={MedicineUsageTypeModal} />
                  </Route>
                  <Route path={routes.addMedicine.tabs.secondStep.path} Component={MedicineFormSecondStep}>
                    <Route path={routes.addMedicine.tabs.secondStep.modals.startDate.path} Component={MedicineStartDateModal} />
                    <Route path={routes.addMedicine.tabs.secondStep.modals.endDate.path} Component={MedicineEndDateModal} />
                    <Route
                      path={routes.addMedicine.tabs.secondStep.modals.dayCounts.path}
                      Component={MedicineEndDayCountsModal}
                    />
                    <Route path={routes.addMedicine.tabs.secondStep.modals.doseTime.path} Component={MedicineDrugDoseModal} />
                  </Route>
                </Route>
                <Route path={routes.editMedicine.path} Component={EditMedicine}>
                  <Route path={routes.editMedicine.tabs.firstStep.path} Component={MedicineFormFirstStep}>
                    <Route path={routes.editMedicine.tabs.firstStep.modals.drugs.path} Component={MedicineDrugsModal} />
                    <Route path={routes.editMedicine.tabs.firstStep.modals.dose.path} Component={MedicineDoseModal} />
                    <Route path={routes.editMedicine.tabs.firstStep.modals.usageType.path} Component={MedicineUsageTypeModal} />
                  </Route>
                  <Route path={routes.editMedicine.tabs.secondStep.path} Component={MedicineFormSecondStep}>
                    <Route path={routes.editMedicine.tabs.secondStep.modals.startDate.path} Component={MedicineStartDateModal} />
                    <Route path={routes.editMedicine.tabs.secondStep.modals.endDate.path} Component={MedicineEndDateModal} />
                    <Route
                      path={routes.editMedicine.tabs.secondStep.modals.dayCounts.path}
                      Component={MedicineEndDayCountsModal}
                    />
                    <Route path={routes.editMedicine.tabs.secondStep.modals.doseTime.path} Component={MedicineDrugDoseModal} />
                  </Route>
                </Route>
                <Route path={routes.retakeMedicine.path} Component={RetakeMedicine}>
                  <Route path={routes.retakeMedicine.tabs.firstStep.path} Component={MedicineFormFirstStep}>
                    <Route path={routes.retakeMedicine.tabs.firstStep.modals.drugs.path} Component={MedicineDrugsModal} />
                    <Route path={routes.retakeMedicine.tabs.firstStep.modals.dose.path} Component={MedicineDoseModal} />
                    <Route path={routes.retakeMedicine.tabs.firstStep.modals.usageType.path} Component={MedicineUsageTypeModal} />
                  </Route>
                  <Route path={routes.retakeMedicine.tabs.secondStep.path} Component={MedicineFormSecondStep}>
                    <Route
                      path={routes.retakeMedicine.tabs.secondStep.modals.startDate.path}
                      Component={MedicineStartDateModal}
                    />
                    <Route path={routes.retakeMedicine.tabs.secondStep.modals.endDate.path} Component={MedicineEndDateModal} />
                    <Route
                      path={routes.retakeMedicine.tabs.secondStep.modals.dayCounts.path}
                      Component={MedicineEndDayCountsModal}
                    />
                    <Route path={routes.retakeMedicine.tabs.secondStep.modals.doseTime.path} Component={MedicineDrugDoseModal} />
                  </Route>
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
                <Route path={routes.calendarWrapper.path} Component={CalendarWrapper}>
                  <Route path={routes.calendar.path} Component={Calendar}>
                    <Route path={routes.calendar.modals.events.path} Component={CalendarEvents}>
                      <Route path={routes.calendar.modals.events.modals.takeDose.path} Component={CalendarNotTakeDoseModal} />
                    </Route>
                  </Route>
                </Route>

                <Route path={routes.notification.path} Component={Notification} />

                
                <Route path="*" Component={NotFound} />
              </Route>
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </PrimaryLayout>
  );
};

export default AppRouter;
