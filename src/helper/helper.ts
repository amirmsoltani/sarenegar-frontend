export const timeToSecond = (time: number) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  return `${minute >= 10 ? minute : `0${minute}`}:${second >= 10 ? second : `0${second}`}`;
};
