export function addTimer(timer, htmlObj) {
  Object.keys(htmlObj).forEach((key) => {
    htmlObj[key].textContent = timer[key];
  });
}

export function getNewYearTimer() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(currentYear, 11, 31, 23, 59, 59).getTime();
  const remainingTime = newYear - Date.now();

  return {
    timer: remainingTime,
  };
}
