let nowTimer = 0;
let startTimer = 0;
let startTime;
let isPaused = false;
let isStarted = false;

let timerBackground = document.querySelector(".timer");
let startButton = document.querySelector(".timer-buttons__start");

const padInt = (n) => {
  let res = String(n);
  if (String(n).length === 1) {
    let arr = String(n).split("");
    arr.unshift("0");
    res = arr.join("");
  }
  return res;
};

startButton.addEventListener("click", () => {
  if (!isStarted) {
    timerBackground.style.backgroundColor =
      "rgba(" + 247 + "," + 157 + "," + 157 + "," + 0.8 + ")";
    if (!isPaused) {
      startTimer = new Date().getTime();
      startTime = setInterval(() => {
        calcTimer();
      }, 1000);
    } else {
      let nowClock = document.querySelector(".timer__time").textContent;
      let nowClockToTimestamp =
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
  let diff = nowTimer - startTimer;
  let diffToSec = Math.floor(diff / 1000);
  let hourPart = padInt(Math.floor(diffToSec / 3600));
  let minPart = padInt(Math.floor((diffToSec - hourPart * 3600) / 60));
  let secPart = padInt(diffToSec - hourPart * 3600 - minPart * 60);
  let timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = hourPart + " : " + minPart + " : " + secPart;
};

const calcTimerWhenPaused = (saved) => {
  nowTimer = new Date().getTime();
  let diff = nowTimer - startTimer;
  let diffToSec = Math.floor(diff / 1000) + saved;
  let hourPart = padInt(Math.floor(diffToSec / 3600));
  let minPart = padInt(Math.floor((diffToSec - hourPart * 3600) / 60));
  let secPart = padInt(diffToSec - hourPart * 3600 - minPart * 60);
  let timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = hourPart + " : " + minPart + " : " + secPart;
};

let stopButton = document.querySelector(".timer-buttons__stop");
stopButton.addEventListener("click", () => {
  clearInterval(startTime);
  timerBackground.style.backgroundColor =
    "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.7 + ")";
  let timerValue = document.querySelector(".timer__time");
  timerValue.innerHTML = "00 : 00 : 00";
  isPaused = false;
  isStarted = false;
});

let pauseButton = document.querySelector(".timer-buttons__pause");
pauseButton.addEventListener("click", () => {
  if (!isPaused) {
    timerBackground.style.backgroundColor =
      "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.7 + ")";
    let nowClock = document.querySelector(".timer__time").textContent;
    document.querySelector(".timer__time").innerHTML = nowClock;
    clearInterval(startTime);
    isPaused = true;
    isStarted = false;
  }
});
