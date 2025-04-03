import { DateService } from "@/services/DateService";

export const withPadStart = (number: number) => (number >= 10 ? `${number}` : `0${number}`);

const generateTimesList = () => {
  const hours = new Array(23)
    .fill("")
    .map((_, index) => withPadStart(index + 1))
    .concat("00");
  const minutes = new Array(59)
    .fill("")
    .map((_, index) => withPadStart(index + 1))
    .concat("00");

  return { hoursList: hours, minutesList: minutes, secondsList: minutes };
};

export const { hoursList, minutesList, secondsList } = generateTimesList();

export const timeToSecond = (time: number) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  return `${withPadStart(minute)}:${withPadStart(second)}`;
};

export const isDateValid = (date: string) => !isNaN(Date.parse(date));

export const getNowDate = () => DateService.replaceSlashWithDash(new Date().toLocaleDateString());

export const getNowTime = () => {
  const date = new Date();
  return {
    hour: withPadStart(date.getHours()),
    minute: withPadStart(date.getMinutes()),
    second: withPadStart(date.getSeconds()),
  };
};
