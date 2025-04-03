import { routes } from "./routes";
import { Login } from "@/app/Login/Login";
import { Week } from "@/app/Reports/week/Week";
import { Year } from "@/app/Reports/Year/Year";
import { City } from "@/app/Profile/City/City";
import { Reports } from "@/app/Reports/Reports";
import { ProFile } from "@/app/Profile/Profile";
import { Type } from "@/app/Medicine/Type/Type";
import { useAppSelector } from "@/store/store.ts";
import { Month } from "@/app/Reports/month/Month";
import { Calendar } from "@/app/Calendar/Calendar";
import { Logout } from "@/app/Profile/Logout/Logout";
import { Gender } from "@/app/Profile/Gender/Gender";
import { Dashboard } from "@/app/Dashboard/Dashboard";
import { Support } from "@/app/Profile/Support/Support";
import { Medications } from "@/app/Medicine/Medications";
import { Current } from "@/app/Medicine/Current/Current";
import { UserInfo } from "@/app/Profile/UserInfo/UserInfo";
import { Province } from "@/app/Profile/Province/Province";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { DoseTime } from "@/app/Medicine/DoseTime/DoseTime";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
import { EndDate } from "@/app/Medicine/EndTime/Date/EndDate";
import { Notification } from "@/app/Notification/Notification";
import { Completed } from "@/app/Medicine/Completed/Completed";
import { Medicines } from "@/app/Medicine/Medicines/Medicines";
import { StartTime } from "@/app/Medicine/StartTime/StartTime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UnitAmount } from "@/app/Medicine/UnitAmount/UnitAmount";
import { DateOfBirth } from "@/app/Profile/DateOfBirth/DateOfBirth";
import { EndNumber } from "@/app/Medicine/EndTime/Number/EndNumber";
import { PrimaryLayout } from "@/layout/PrimaryLayout/PrimaryLayout";
import { AddMedicine } from "@/app/Medicine/AddMedicine/AddMedicine";
import { RedirectToDashboard } from "./components/Redirects/Redirects";
import { StageOne } from "@/app/Medicine/AddMedicine/StageOne/StageOne";
import { StageTwo } from "@/app/Medicine/AddMedicine/StageTwo/StageTwo";
import { EmptyPill } from "@/app/Medicine/Medicines/EmptyPill/EmptyPill";
import { EventCalender } from "@/app/Calendar/EventCalender/EventCalender";
import { EpilepsyModal } from "@/app/Dashboard/EpilepsyModal/EpilepsyModal";
import { ModalUsage } from "@/app/Calendar/MedicineCalender/ModalUsage/ModalUsage";
import { MedicineCalender } from "@/app/Calendar/MedicineCalender/MedicineCalender";
import { EmptyMedications } from "@/app/Medicine/EmptyMedications/EmptyMedications";
import { AddEpilepsyEvent } from "@/app/(epilepsy)/AddEpilepsyEvent/AddEpilepsyEvent";
import { MedicationDetails } from "@/app/Medicine/MedicationDetails/MedicationDetails";
import { RouterStateManager } from "./components/RouterStateManager/RouterStateManager";
import { EpilepsyEventInfo } from "@/app/(epilepsy)/EpilepsyEventInfo/EpilepsyEventInfo";
import { DurationTimeModal } from "@/app/(epilepsy)/DurationTimeModal/DurationTimeModal";
import { EditEpilepsyEvent } from "@/app/(epilepsy)/EditEpilepsyEvent/EditEpilepsyEvent";
import { EmptyCalender } from "@/app/Calendar/EventCalender/EmptyCalender/EmptyCalender";
import { EmptyMedicine } from "@/app/Calendar/MedicineCalender/EmptyMedicine/EmptyMedicine";
import { OccurrenceTimeModal } from "@/app/(epilepsy)/OccurrenceTimeModal/OccurrenceTimeModal";
import { ModalMedicines } from "@/app/Calendar/MedicineCalender/ModalMedicines/ModalMedicines";
import { ModalDeleteMedicine } from "@/app/Medicine/Current/ModalDeleteMedicine/ModalDeleteMedicine";
import { ModalCompletionMedicine } from "@/app/Medicine/Current/ModalCompletionMedicine/ModalCompletionMedicine";
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
              <Route path="medicine" Component={Medications}>
                <Route path="" Component={Current}></Route>
                <Route path="completed" Component={Completed}></Route>
              </Route>
              <Route path="medicine/empty" Component={EmptyMedications} />

              <Route path="medicine/:id" Component={MedicationDetails}>
                <Route path="delete" Component={ModalDeleteMedicine} />
                <Route path="completion" Component={ModalCompletionMedicine} />
              </Route>
              <Route path="medicine/completed/:id" Component={MedicationDetails}>
                <Route path="delete" Component={ModalDeleteMedicine} />
              </Route>

              <Route path="medicine/add" Component={AddMedicine}>
                <Route path="1" Component={StageOne}>
                  <Route path="medicines" Component={Medicines} />
                  <Route path="empty" Component={EmptyPill} />
                  <Route path="dose" Component={UnitAmount} />
                  <Route path="type" Component={Type} />
                </Route>
                <Route path="2" Component={StageTwo}>
                  <Route path="start" Component={StartTime} />
                  <Route path="endDate" Component={EndDate} />
                  <Route path="endNumber" Component={EndNumber} />
                  <Route path="time" Component={DoseTime} />
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
