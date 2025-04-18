import jalaali from "jalaali-js";
import { DateService } from "@/services/DateService";
import { TDayPickerDay, TWheelPickerOption } from "./../common/Form/FormUtils.types";

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
export const getNowDate = () => DateService.replaceSlashWithDash(new Date().toLocaleDateString());

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

const generateJalaliYears = () => {
  const { jy } = jalaali.toJalaali(new Date());

  const before: TWheelPickerOption[] = new Array(90)
    .fill("")
    .map((_, index) => {
      const value = (jy - (index + 1)).toString();
      return toLabelValue(value);
    })
    .reverse();

  const after: TWheelPickerOption[] = new Array(5).fill("").map((_, index) => {
    const value = (jy + (index + 1)).toString();
    return toLabelValue(value);
  });

  const current: TWheelPickerOption = toLabelValue(jy.toString());

  return [...before, current, ...after];
};

export const jalaliYears = generateJalaliYears();

export const generateJalaliDays = (year: number, month: number): TWheelPickerOption[] => {
  const days = jalaali.jalaaliMonthLength(year, month);
  return new Array(days).fill("").map((_, index) => toLabelValue((index + 1).toString()));
};
