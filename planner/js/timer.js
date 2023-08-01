import * as lib from "./library.js";

let nowTimer = 0;
let startTimer = 0;
let startTime;
let isPaused = false;
let isStarted = false;

const timerBackground = document.querySelector(".timer");
const startButton = document.querySelector(".timer-buttons__start");

startButton.addEventListener("click", () => {
  if (!isStarted) {
    timerBackground.classList.add("red");
    if (!isPaused) {
      startTimer = new Date().getTime();
      startTime = setInterval(() => {
        calcTimer();
      }, 1000);
    } else {
      const nowClock = document.querySelector(".timer__time").textContent;
      const nowClockToTimestamp =
        Number(nowClock.substring(0, 2)) * 3600 +
        Number(nowClock.substring(5, 7)) * 60 +
        Number(nowClock.substring(10, 12));
      startTimer = new Date().getTime();
      startTime = setInterval(() => {
        calcTimerWhenPaused(nowClockToTimestamp);
      }, 1000);
      isPaused = false;
    }
    isStarted = true;
  }
});

const calcTimer = () => {
  nowTimer = new Date().getTime();
  const diff = nowTimer - startTimer;
  const diffToSec = Math.floor(diff / 1000);
  const hourPart = lib.padInt(Math.floor(diffToSec / 3600));
  const minPart = lib.padInt(Math.floor((diffToSec - hourPart * 3600) / 60));
  const secPart = lib.padInt(diffToSec - hourPart * 3600 - minPart * 60);
  const timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = hourPart + " : " + minPart + " : " + secPart;
};

const calcTimerWhenPaused = (saved) => {
  nowTimer = new Date().getTime();
  const diff = nowTimer - startTimer;
  const diffToSec = Math.floor(diff / 1000) + saved;
  const hourPart = lib.padInt(Math.floor(diffToSec / 3600));
  const minPart = lib.padInt(Math.floor((diffToSec - hourPart * 3600) / 60));
  const secPart = lib.padInt(diffToSec - hourPart * 3600 - minPart * 60);
  const timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = hourPart + " : " + minPart + " : " + secPart;
};

document.querySelector(".timer-buttons__stop").addEventListener("click", () => {
  clearInterval(startTime);
  timerBackground.classList.remove("red");
  const timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = "00 : 00 : 00";
  isPaused = false;
  isStarted = false;
});

document
  .querySelector(".timer-buttons__pause")
  .addEventListener("click", () => {
    if (!isPaused) {
      timerBackground.classList.remove("red");
      const nowClock = document.querySelector(".timer__time").textContent;
      document.querySelector(".timer__time").innerHTML = nowClock;
      clearInterval(startTime);
      isPaused = true;
      isStarted = false;
    }
  });
