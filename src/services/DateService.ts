import { TDate } from "@/common/Form/FormUtils.types.ts";

class DateInstant {
  protected static readonly dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
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
    this.dateFormatter = new Intl.DateTimeFormat("en-CA", DateInstant.dateOptions);
    this.timeFormatter = new Intl.DateTimeFormat("en-CA", DateInstant.timeOptions);
  }

  public setTimeZone(timeZone: string) {
    this.dateFormatter = new Intl.DateTimeFormat("en-CA", { ...DateInstant.dateOptions, timeZone });
    this.timeFormatter = new Intl.DateTimeFormat("en-CA", { ...DateInstant.timeOptions, timeZone });
  }

  public formatString2Date(date?: string) {
    return this.dateFormatter.format((date?new Date(date):new Date())).replace(/-/g, "/");
  }

  public formatString2Time(date?: string) {
    return this.timeFormatter.format((date?new Date(date):new Date()));
  }

  public formatString2DateTime(dateTime?: string) {
    const date = dateTime?new Date(dateTime):new Date();
    return `${this.dateFormatter.format(date).replace(/-/g, "/")} | ${this.timeFormatter.format(date)}`;
  }

  public formatDateTime2TDate(dateTime: string): TDate {
    const time = this.formatString2Time(dateTime);
    return { date: this.formatString2Date(dateTime), time: { value: time, label: time } };
  }

  public formatTDate2ISOS({ date, time }: TDate) {
    let dateTime: Date = new Date();
    if (typeof date === "string") dateTime = new Date(date);
    else if (date instanceof Date) dateTime = date;

    if (time) {
      const splitTime = time.label.split(":");
      dateTime.setHours(+splitTime[0], +splitTime[1]);
    }
    return dateTime.toISOString();
  }
}

export const DateService = new DateInstant();
