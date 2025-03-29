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

  public custom(date: string | number | Date, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("fa-IR", options).format(new Date(date));
  }
}

export const DateService = new DateInstant();
