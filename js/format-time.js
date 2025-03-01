export function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function addLeadingZero(timer) {
  return Object.entries(timer).reduce((acc, [key, value]) => {
    let str = value.toString();
    acc[key] = str.padStart(2, '0');
    return acc;
  }, {});
}
