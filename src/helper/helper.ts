import jalaali from "jalaali-js";
import { DateService } from "@/services/DateService";
import { TDayPickerDay, TWheelPickerOption } from "./../common/Form/FormUtils.types";

export const isObject = (value: any) => typeof value === "object" && value !== null && !Array.isArray(value);

export const toLabelValue = <T>(value: T) => ({ label: value, value });

export const withPadStart = (number: number) => (number >= 10 ? `${number}` : `0${number}`);

export const secondToMinute = (time: number) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  return `${withPadStart(minute)}:${withPadStart(Math.floor(second))}`;
};

export const secondToTime = (time: number) => {
  const hour = Math.floor(time / (60 * 60));
  const minute = Math.floor((time - hour * 60 * 60) / 60);
  const second = time % 60;
  return `${withPadStart(hour)}:${withPadStart(minute)}:${withPadStart(Math.floor(second))}`;
};

export const isDateValid = (date: string) => !isNaN(Date.parse(date));

const orderedNumbers = ["اولین", "دومین", "سومین", "چهارمین"];
export const toOrderedNumber = (index: number) => orderedNumbers[index];

export const formOptionTranslator = <T>(list: T[], value: any): T => {
  return list.find((option) => (option as any).value == value) as T;
};

// ? time helper
const generateTimesList = () => {
  const hours = new Array(23)
    .fill("")
    .map((_, index) => toLabelValue(withPadStart(index + 1)))
    .concat(toLabelValue("00"));
  const minutes = new Array(59)
    .fill("")
    .map((_, index) => toLabelValue(withPadStart(index + 1)))
    .concat(toLabelValue("00"));

  return { hoursList: hours, minutesList: minutes, secondsList: minutes };
};

export const { hoursList, minutesList, secondsList } = generateTimesList();

export const getNowTime = () => {
  const date = new Date();
  return {
    hour: toLabelValue(withPadStart(date.getHours())),
    minute: toLabelValue(withPadStart(date.getMinutes())),
    second: toLabelValue(withPadStart(date.getSeconds())),
  };
};

// ? week helper
export const weekdays: TDayPickerDay[] = [
  { value: "SAT", label: "شنبه" },
  { value: "SUN", label: "1شنبه" },
  { value: "MON", label: "2شنبه" },
  { value: "TUE", label: "3شنبه" },
  { value: "WED", label: "4شنبه" },
  { value: "THU", label: "5شنبه" },
  { value: "FRI", label: "جمعه" },
];

// ? date helper
export const getNowDate = () => DateService.setToGlobalFormat(new Date());

export const jalaliMonths: TWheelPickerOption[] = [
  { value: "1", label: "فروردین" },
  { value: "2", label: "اردیبهشت" },
  { value: "3", label: "خرداد" },
  { value: "4", label: "تیر" },
  { value: "5", label: "مرداد" },
  { value: "6", label: "شهریور" },
  { value: "7", label: "مهر" },
  { value: "8", label: "آبان" },
  { value: "9", label: "آذر" },
  { value: "10", label: "دی" },
  { value: "11", label: "بهمن" },
  { value: "12", label: "اسفند" },
];

export const generateJalaliMonths = (year: number) => {
  const { jy, jm } = jalaali.toJalaali(new Date());
  return jy == year ? jalaliMonths.slice(0, jm) : jalaliMonths;
};

const generateJalaliYears = (removeFuture?: boolean) => {
  const { jy } = jalaali.toJalaali(new Date());

  const before: TWheelPickerOption[] = new Array(90)
    .fill("")
    .map((_, index) => {
      const value = (jy - (index + 1)).toString();
      return toLabelValue(value);
    })
    .reverse();

  const after: TWheelPickerOption[] = removeFuture
    ? []
    : new Array(90).fill("").map((_, index) => {
        const value = (jy + (index + 1)).toString();
        return toLabelValue(value);
      });

  const current: TWheelPickerOption = toLabelValue(jy.toString());

  return [...before, current, ...after];
};

export const allJalaliYears = generateJalaliYears();
export const tillNowJalaliYears = generateJalaliYears(true);

export const generateJalaliDays = (year: number, month: number, removeFuture?: boolean): TWheelPickerOption[] => {
  const { jy, jm, jd } = jalaali.toJalaali(new Date());

  let monthDays = jalaali.jalaaliMonthLength(year, month);

  if (removeFuture && jy == year && jm == month) monthDays = Math.min(monthDays, jd);

  return new Array(monthDays).fill("").map((_, index) => toLabelValue((index + 1).toString()));
};

// ? number helper
const mapEnglishNumber2PersianNumber = {
  "0": "۰",
  "1": "۱",
  "2": "۲",
  "3": "۳",
  "4": "۴",
  "5": "۵",
  "6": "۶",
  "7": "۷",
  "8": "۸",
  "9": "۹",
};
type TMapEnglishNumber2PersianNumber = keyof typeof mapEnglishNumber2PersianNumber;

const mapPersianNumber2EnglishNumber = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};
type TMapPersianNumber2EnglishNumber = keyof typeof mapPersianNumber2EnglishNumber;

export const e2p = (english?: string | number | null) => {
  if (english) {
    return english
      .toString()
      .replace(/[1-9]/g, (char) => mapEnglishNumber2PersianNumber[char as TMapEnglishNumber2PersianNumber]);
  } else return "";
};

export const p2e = (persian?: string | number | null) => {
  if (persian) {
    return persian
      .toString()
      .replace(/[۰-۹]/g, (char) => mapPersianNumber2EnglishNumber[char as TMapPersianNumber2EnglishNumber]);
  } else return "";
};
