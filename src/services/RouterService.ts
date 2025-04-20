import { getNowDate } from "@/helper/helper";
import { NavigateFunction, Location } from "react-router-dom";

class Router {
  public location!: Location;
  public navigate!: NavigateFunction;
  public params!: Readonly<Partial<Record<string, string>>>;

  public setDate = (_date?:string) => {
    const date =_date || this.params.date;
    return date ? `/${date}` : `/${getNowDate()}`;
  };

  public updateDate = (date: string) => {
    const pathname = this.location.pathname.replace(`/${this.params.date!}`, "");
    return this.navigate(`/${date}${pathname}`, { replace: true });
  };
}

export const RouterService = new Router();
