import { routes } from "./routes";
import { Home } from "@/app/Home2/Home";
import { Login } from "@/app/Login/Login";
import { useAppSelector } from "@/store/store.ts";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RedirectToHome } from "./components/Redirects/Redirects";
import { PrimaryLayout } from "@/layout/PrimaryLayout/PrimaryLayout";
import { RouterStateManager } from "./components/RouterStateManager/RouterStateManager";

const AppRouter = () => {
  const isLogin = useAppSelector((state) => state.auth.token.status === "success");

  return (
    <PrimaryLayout>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={RouterStateManager}>
            <Route path={routes.login.path} Component={AppRouterUtils.withCondition(!isLogin, Login, RedirectToHome)} />
            <Route path=":date?" Component={AppRouterUtils.withCondition(isLogin, AuthLayout)}>
              <Route path={routes.home.path} Component={Home} />
            </Route>
          </Route>

          {/* <Route path="" Component={AppRouterUtils.selectElement(true, Home)}>
          <Route path="empty" Component={EmptyHome} />
          <Route path="event" Component={Events}>
            <Route path=":id" Component={Event}>
              <Route path="delete" Component={DeleteEvent} />
            </Route>
          </Route>
        </Route>

        <Route path={routes.login.href} Component={AppRouterUtils.selectElement(!isLogin, Login, RedirectAfterLogin)} />

        <Route path="login" Component={Login} />
        <Route path="activation" Component={Activation} />
        <Route path="addEvent" Component={AddEvent}>
          <Route path="when" Component={WhenEvent} />
          <Route path="time" Component={TimeEvent} />
          <Route path="empty" Component={EmptyAddEvent} />
        </Route>
        <Route path="notification" Component={Notification} />
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
        <Route path="calender" Component={Calendar}>
          <Route path="event" Component={EventCalender}>
            <Route path="empty" Component={EmptyCalender} />
            <Route path=":id" Component={Events}></Route>
            <Route path=":id/:id" Component={Event}>
              <Route path="delete" Component={DeleteEvent} />
            </Route>
          </Route>
          <Route path="medicine" Component={MedicineCalender}>
            <Route path="empty" Component={EmptyMedicine} />
            <Route path=":id" Component={ModalMedicines}></Route>
            <Route path=":id/:id" Component={ModalUsage} />
          </Route>
        </Route>
        <Route path="reports" Component={Reports}>
          <Route path="week" Component={Week} />
          <Route path="month" Component={Month} />
          <Route path="year" Component={Year} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </PrimaryLayout>
  );
};

export default AppRouter;
