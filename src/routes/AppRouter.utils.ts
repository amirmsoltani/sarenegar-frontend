import { ComponentType } from "react";
import { RedirectToLogin } from "./components/Redirects/Redirects";

export class AppRouterUtils {
  static withCondition = (auth: boolean, Component: ComponentType, redirect?: ComponentType) => {
    return auth ? Component : redirect || RedirectToLogin;
  };
}
