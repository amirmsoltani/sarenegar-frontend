import { routes } from "./routes";
import { Login } from "@/app/Login/Login";
import { Week } from "@/app/Reports/week/Week";
import { Year } from "@/app/Reports/Year/Year";
import { City } from "@/app/Profile/City/City";
import { Reports } from "@/app/Reports/Reports";
import { ProFile } from "@/app/Profile/Profile";
import { useAppSelector } from "@/store/store.ts";
import { Month } from "@/app/Reports/month/Month";
import { Calendar } from "@/app/Calendar/Calendar";
import { Logout } from "@/app/Profile/Logout/Logout";
import { Gender } from "@/app/Profile/Gender/Gender";
import { Dashboard } from "@/app/Dashboard/Dashboard";
import { Support } from "@/app/Profile/Support/Support";
import { UserInfo } from "@/app/Profile/UserInfo/UserInfo";
import { Province } from "@/app/Profile/Province/Province";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
import { Medicine } from "@/app/(medicine)/Medicine/Medicine";
import { Notification } from "@/app/Notification/Notification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DateOfBirth } from "@/app/Profile/DateOfBirth/DateOfBirth";
import { Current } from "@/app/(medicine)/Medicine/Current/Current";
import { PrimaryLayout } from "@/layout/PrimaryLayout/PrimaryLayout";
import { AddMedicine } from "@/app/(medicine)/AddMedicine/AddMedicine";
import { Completed } from "@/app/(medicine)/Medicine/Completed/Completed";
import { EventCalender } from "@/app/Calendar/EventCalender/EventCalender";
import { EpilepsyModal } from "@/app/Dashboard/EpilepsyModal/EpilepsyModal";
import { ModalUsage } from "@/app/Calendar/MedicineCalender/ModalUsage/ModalUsage";
import { MedicineInfo } from "@/app/(medicine)/Medicine/MedicineInfo/MedicineInfo";
import { MedicineCalender } from "@/app/Calendar/MedicineCalender/MedicineCalender";
import { AddEpilepsyEvent } from "@/app/(epilepsy)/AddEpilepsyEvent/AddEpilepsyEvent";
import { RouterStateManager } from "./components/RouterStateManager/RouterStateManager";
import { EpilepsyEventInfo } from "@/app/(epilepsy)/EpilepsyEventInfo/EpilepsyEventInfo";
import { DurationTimeModal } from "@/app/(epilepsy)/DurationTimeModal/DurationTimeModal";
import { EditEpilepsyEvent } from "@/app/(epilepsy)/EditEpilepsyEvent/EditEpilepsyEvent";
import { EmptyCalender } from "@/app/Calendar/EventCalender/EmptyCalender/EmptyCalender";
import { MedicineDoseModal } from "@/app/(medicine)/MedicineDoseModal/MedicineDoseModal";
import { EmptyMedicine } from "@/app/Calendar/MedicineCalender/EmptyMedicine/EmptyMedicine";
import { MedicineDrugsModal } from "@/app/(medicine)/MedicineDrugsModal/MedicineDrugsModal";
import { OccurrenceTimeModal } from "@/app/(epilepsy)/OccurrenceTimeModal/OccurrenceTimeModal";
import { ModalMedicines } from "@/app/Calendar/MedicineCalender/ModalMedicines/ModalMedicines";
import { MedicineEndDateModal } from "@/app/(medicine)/MedicineEndDateModal/MedicineEndDateModal";
import { RedirectToCurrentMedicines, RedirectToDashboard } from "./components/Redirects/Redirects";
import { MedicineDrugDoseModal } from "@/app/(medicine)/MedicineDrugDoseModal/MedicineDrugDoseModal";
import { MedicineUsageTypeModal } from "@/app/(medicine)/MedicineUsageTypeModal/MedicineUsageTypeModal";
import { MedicineStartDateModal } from "@/app/(medicine)/MedicineStartDateModal/MedicineStartDateModal";
import { MedicineEndDayCountsModal } from "@/app/(medicine)/MedicineEndDayCountsModal/MedicineEndDayCountsModal";
import { DeleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/DeleteMedicineModal/DeleteMedicineModal";
import { CompleteMedicineModal } from "@/app/(medicine)/Medicine/MedicineInfo/CompleteMedicineModal/CompleteMedicineModal";
import { DeleteEpilepsyEventModal } from "@/app/(epilepsy)/EpilepsyEventInfo/DeleteEpilepsyEventModal/DeleteEpilepsyEventModal";

const AppRouter = () => {
  const isLogin = useAppSelector((state) => state.auth.token.status === "success");

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

              {/* not refactored routes */}
              <Route path="profile" Component={ProFile}>
                <Route path="logout" Component={Logout} />
              </Route>
              <Route path="info" Component={UserInfo}>
                <Route path="brith" Component={DateOfBirth} />
                <Route path="gender" Component={Gender} />
                <Route path="province" Component={Province} />
                <Route path="city" Component={City} />
              </Route>
              <Route path="support" Component={Support} />
              <Route path="notification" Component={Notification} />
              <Route path="reports" Component={Reports}>
                <Route path="week" Component={Week} />
                <Route path="month" Component={Month} />
                <Route path="year" Component={Year} />
              </Route>
              <Route path="calender" Component={Calendar}>
                <Route path="event" Component={EventCalender}>
                  <Route path="empty" Component={EmptyCalender} />
                </Route>
                <Route path="medicine" Component={MedicineCalender}>
                  <Route path="empty" Component={EmptyMedicine} />
                  <Route path=":id" Component={ModalMedicines}></Route>
                  <Route path=":id/:id" Component={ModalUsage} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimaryLayout>
  );
};

export default AppRouter;
