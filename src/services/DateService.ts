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

  public customTranslate(date: string | number | Date, options?: Intl.DateTimeFormatOptions) {
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

  public getWeekRange(_date?: Date | string) {
    const date = _date ? new Date(_date) : new Date();
    const weekday = date.getDay();

    const diff = weekday === 6 ? 0 : weekday + 1;
    date.setDate(date.getDate() - diff);

    const start = DateService.setToGlobalFormat(date);

    date.setDate(date.getDate() + 6);

    const end = DateService.setToGlobalFormat(date);

    return { start, end };
  }

  public forwardWeek(endWeek: string) {
    const date = new Date(endWeek);
    date.setDate(date.getDate() + 1);
    return this.getWeekRange(date);
  }

  public backwardWeek(startWeek: string) {
    const date = new Date(startWeek);
    date.setDate(date.getDate() - 1);
    return this.getWeekRange(date);
  }

  public getMonthRange(_date?: Date | string) {
    const date = _date ? new Date(_date) : new Date();
    const { jy, jm } = jalaali.toJalaali(date);

    const { gy, gm, gd } = jalaali.toGregorian(jy, jm, 1);

    const startDate = new Date(gy, gm - 1, gd);

    const start = this.setToGlobalFormat(startDate);

    const monthDays = jalaali.jalaaliMonthLength(jy, jm);

    startDate.setDate(startDate.getDate() + monthDays - 1);

    const end = this.setToGlobalFormat(startDate);

    return { start, end };
  }

  public forwardMonth(endMonth: string | Date) {
    const date = new Date(endMonth);
    date.setDate(date.getDate() + 1);
    return this.getMonthRange(date);
  }

  public backwardMonth(startMonth: string | Date) {
    const date = new Date(startMonth);
    date.setDate(date.getDate() - 1);
    return this.getMonthRange(date);
  }

  public getYearRange(_date?: Date | string) {
    const date = _date ? new Date(_date) : new Date();

    const { jy } = jalaali.toJalaali(date);

    const { gy, gm, gd } = jalaali.toGregorian(jy, 1, 1);

    const startDate = new Date(gy, gm - 1, gd);

    const start = this.setToGlobalFormat(startDate);

    const yearDays = jalaali.isLeapJalaaliYear(jy) ? 366 : 365;

    startDate.setDate(startDate.getDate() + yearDays - 1);

    const end = this.setToGlobalFormat(startDate);

    return { start, end };
  }

  public forwardYear(endYear: string | Date) {
    const date = new Date(endYear);
    date.setDate(date.getDate() + 1);
    return this.getYearRange(date);
  }

  public backwardYear(startYear: string | Date) {
    const date = new Date(startYear);
    date.setDate(date.getDate() - 1);
    return this.getYearRange(date);
  }
}

export const DateService = new DateInstant();
