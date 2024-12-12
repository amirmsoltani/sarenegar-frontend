// redux
import { useAppSelector } from "@/store/store.ts";
// routes
import { routes } from "@/routes/routes.tsx";
import { AppRouterUtils } from "@/routes/AppRouter.utils.ts";
// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import { Home } from "@/app/Home/Home";
import { Login } from "@/app/Login/Login.tsx";
import {Activation} from "@/app/Login/components/Activation/Activation.tsx";


import { AddModal } from "@/app/Home/_components/Modals/AddModal";
import { EditModal } from "@/app/Home/_components/Modals/EditDrawer";
import { DeleteModal } from "@/app/Home/_components/Modals/DeleteModal";
//layouts
import { PrimaryLayout } from "@/layouts/PrimaryLayout/PrimaryLayout.tsx";
//helpers
import { RedirectAfterLogin } from "./components/RedirectAfterLogin/RedirectAfterLogin.tsx";


const AppRouter = () => {
  const isLogin = useAppSelector((state) => state.auth.login.status === "success");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={AppRouterUtils.selectElement(true, Home)}>
        </Route>

        <Route path={routes.login.href} Component={AppRouterUtils.selectElement(!isLogin, Login, RedirectAfterLogin)} />

        <Route path='login' Component={Login} />
        <Route path='activation' Component={Activation} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
