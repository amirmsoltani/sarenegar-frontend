import { NavigateFunction, Location } from "react-router-dom";

class Router {
  public location!: Location;
  public navigate!: NavigateFunction;
  public params!: Readonly<Partial<Record<string, string>>>;
}

export const RouterService = new Router();
