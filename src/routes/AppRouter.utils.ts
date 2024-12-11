import {ComponentType} from 'react';
import { RedirectToLogin } from './components/RedirectToLogin/RedirectToLogin';

export class AppRouterUtils {

  static selectElement = (
    auth: boolean,
    Component: ComponentType,
    redirect?: ComponentType,
  ) => {
    return auth ? Component : redirect || RedirectToLogin;
  };
}
