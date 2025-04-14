import jalaali from "jalaali-js";
import { toLabelValue } from "@/helper/helper";
import { TDatePicker } from "@/common/Form/FormUtils.types";

class DateInstant {
  protected static readonly dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  protected static readonly timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  protected dateFormatter: Intl.DateTimeFormat;
  protected timeFormatter: Intl.DateTimeFormat;

  constructor() {
    this.dateFormatter = new Intl.DateTimeFormat("fa-IR", DateInstant.dateOptions);
    this.timeFormatter = new Intl.DateTimeFormat("fa-IR", DateInstant.timeOptions);
  }

  public getDate(date?: string | number | Date) {
    return this.dateFormatter.format(date ? new Date(date) : new Date());
  }

  public getTime(date?: string | number | Date) {
    return this.timeFormatter.format(date ? new Date(date) : new Date());
  }

  public getDateTime(date?: string | number | Date) {
    return `${this.getDate(date)} ${this.getTime(date)}`;
  }

  public customTranslate(date: string | number | Date, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("fa-IR", options).format(new Date(date));
  }

  public replaceSlashWithDash(date: string) {
    return date.replace(/\//g, "-");
  }

  public jalaliToGregorian({ year, month, day }: TDatePicker) {
    const gregorian = jalaali.toGregorian(+year.value, +month.value, +day.value);
    return new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd);
  }

  public gregorianToJalali(date?: string | Date): TDatePicker {
    const _date = date ? new Date(date) : new Date();
    const { jy, jm, jd } = jalaali.toJalaali(_date);
    return { year: toLabelValue(jy.toString()), month: toLabelValue(jm.toString()), day: toLabelValue(jd.toString()) };
  }

  public setToGlobalFormat(date: Date) {
    const [month, day, year] = this.replaceSlashWithDash(date.toLocaleDateString()).split("-");
    return `${year}-${month}-${day}`;
  }
}

export const DateService = new DateInstant();
