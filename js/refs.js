export default {
  timerRefs: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
  elements: {
    titleEl: document.querySelector('.title'),
    yearEl: document.querySelector('[data-year]'),
    body: document.querySelector('body'),
    seasonElements: document.querySelectorAll('[data="season"]'),
    styleBtn: document.querySelector('[data-styleBtn]'),
    autorLink: document.querySelector('[data-link]'),
  },
};
