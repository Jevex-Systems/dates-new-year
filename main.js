import refs from './js/refs.js';
import { convertMs, addLeadingZero } from './js/format-time.js';
import { addTimer, getNewYearTimer } from './js/timer-utils.js';
import { seasons, img } from './js/season-data.js';

const { body, titleEl, styleBtn, seasonElements, autorLink } = refs.elements;

export function timer() {
  const { timer } = getNewYearTimer();

  const formattedTimer = addLeadingZero(convertMs(timer));
  addTimer(formattedTimer, refs.timerRefs);
}

function getSeason(month, day) {
  if (month === 11 && day === 31) return 'newYear';
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
}

function setSeason(season) {
  body.style.backgroundImage = `url(${img[season]})`;

  seasonElements.forEach((el) => {
    el.classList.remove(...seasons);
    el.classList.add(season);
  });

  styleBtn.classList.remove(...seasons);
  styleBtn.classList.add(season);

  autorLink.classList.remove(...seasons);
  autorLink.classList.add(season);

  const nextYear = new Date().getFullYear() + 1;
  if (season === 'newYear') {
    titleEl.innerHTML = `Hooray! Today is the New <span class="year value" data-year>${nextYear}</span> Year! We celebrate!`;
  }
  if (season !== 'newYear') {
    titleEl.innerHTML = `Until the new <span class="year value" data-year>${nextYear}</span> year
          remained`;
  }
}

const now = new Date();
const currentSeason = getSeason(now.getMonth(), now.getDate());
setSeason(currentSeason);

let currentSeasonIndex = seasons.indexOf(currentSeason);

styleBtn.addEventListener('click', () => {
  currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
  setSeason(seasons[currentSeasonIndex]);
});

setInterval(timer, 1000);
