import jalaali from "jalaali-js";
import { p2e, toLabelValue } from "@/helper/helper";
import { TDatePicker } from "@/common/Form/FormUtils.types";
import { ReminderTimeRequest } from "@/services/api.ts";

class DateInstant {
  protected static readonly dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  protected static readonly monthYearOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  protected static readonly timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  protected static readonly  gregorianDateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  protected dateFormatter: Intl.DateTimeFormat;
  protected monthYearFormatter: Intl.DateTimeFormat;
  protected timeFormatter: Intl.DateTimeFormat;
  protected gregorianDateFormatter: Intl.DateTimeFormat;

  constructor() {
    this.dateFormatter = new Intl.DateTimeFormat("fa-IR", DateInstant.dateOptions);
    this.monthYearFormatter = new Intl.DateTimeFormat("fa-IR", DateInstant.monthYearOptions);
    this.timeFormatter = new Intl.DateTimeFormat("fa-IR", DateInstant.timeOptions);
    this.gregorianDateFormatter = new Intl.DateTimeFormat("en-CA",DateInstant.gregorianDateOptions);
  }

  public getDate(date?: string | number | Date) {
    return this.dateFormatter.format(date ? new Date(this.GD(date)) : new Date());
  }

  public getGregorianDate(date?: string | number | Date) {
    return this.gregorianDateFormatter.format(date ? new Date(this.GD(date)) : new Date());
  }

  public getTime(date?: string | number | Date) {
    return this.timeFormatter.format(date ? new Date(this.GD(date)) : new Date());
  }

  public getDateTime(date?: string | number | Date) {
    return `${this.getDate(this.GD(date))} ${this.getTime(this.GD(date))}`;
  }

  public customTranslate(date?: string | number | Date, options?: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("fa-IR", options).format(date ? new Date(this.GD(date)) : new Date());
  }

  public replaceSlashWithDash(date: string) {
    return date.replace(/\//g, "-");
  }

  public jalaliToGregorian({ year, month, day }: TDatePicker) {
    const gregorian = jalaali.toGregorian(+year.value, +month.value, +day.value);
    return new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd);
  }

  public gregorianToJalali(date?: string | Date): TDatePicker {
    const _date = date ? new Date(this.GD(date)) : new Date();
    const { jy, jm, jd } = jalaali.toJalaali(_date);
    return { year: toLabelValue(jy.toString()), month: toLabelValue(jm.toString()), day: toLabelValue(jd.toString()) };
  }

  public setToGlobalFormat(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  public getWeekRange(_date?: Date | string) {
    const date = _date ? new Date(this.GD(_date)) : new Date();
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
    const date = _date ? new Date(this.GD(_date)) : new Date();
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
    const date = new Date(this.GD(endMonth));
    date.setDate(date.getDate() + 1);
    return this.getMonthRange(date);
  }

  public backwardMonth(startMonth: string | Date) {
    const date = new Date(this.GD(startMonth));
    date.setDate(date.getDate() - 1);
    return this.getMonthRange(date);
  }

  public getYearRange(_date?: Date | string) {
    const date = _date ? new Date(this.GD(_date)) : new Date();

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
    const date = new Date(this.GD(endYear));
    date.setDate(date.getDate() + 1);
    return this.getYearRange(date);
  }

  public backwardYear(startYear: string | Date) {
    const date = new Date(this.GD(startYear));
    date.setDate(date.getDate() - 1);
    return this.getYearRange(date);
  }

  public createMonth = (date: Date = new Date()) => {
    const jDate = jalaali.toJalaali(this.GD(date));
    const jMonthLength = jalaali.jalaaliMonthLength(jDate.jy, jDate.jm);

    const start = new Date(this.GD(date));
    start.setDate(start.getDate() - (jDate.jd - 1));
    const weekStartDay = 7 - (start.getDay() + 1);

    const end = new Date(this.GD(date));
    end.setDate(end.getDate() + (jMonthLength - jDate.jd));
    const weekEndDay = 7 - (end.getDay() + 1);

    const days = Array.from(Array(7 - (weekStartDay || 7))).map(() => ({ type: "empty" }));

    days.push(
      ...Array.from(Array(jMonthLength).keys()).map((k) => ({
        type: "regular",
        date: this.getGregorianDate(jalaali.jalaaliToDateObject(jDate.jy, jDate.jm, k + 1)),
        text: `${k + 1}`,
      })),
    );

    days.push(...Array.from(Array((weekEndDay || 7)-1)).map(() => ({ type: "empty" })));


    return {
      days: days,
      monthStart: this.getGregorianDate(start),
      monthEnd: this.getGregorianDate(end),
      title: this.monthYearFormatter.format(start).split(" ").reverse().join(" "),
    };
  };

  public isBiggerThanToday(date:string){
    return new Date().getTime() < new Date(this.GD(date)).getTime();
  }

  public createReminders(startTime:string,times:number){
    const date = new Date();
    const splitTime = startTime.split(":");
    date.setHours(+splitTime[0],+splitTime[1]);
    const remindersTime :ReminderTimeRequest[] = []

    const step =24/times * 60 *60*1000;
    for (let i = 0; i < times; i++) {
      remindersTime.push({time:p2e(DateService.getTime(date)),name:i.toString()})
      date.setTime(date.getTime()+step);
    }

    return remindersTime.sort((a, b) => +a.time.split(":")[0]- +b.time.split(":")[0]);

  }

  public GD<T>(date:T):T{
    if(typeof date === "string" && !date.includes("T")){
      return date.replace(/-/g,"/") as T
    }
    return date

  }
}

export const DateService = new DateInstant();
