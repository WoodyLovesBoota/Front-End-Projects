import * as todo from "./todo.js";
import * as dday from "./dday.js";

let todoInput = document.querySelector(".todo-insert__input");
todoInput.addEventListener("change", todo.setTodo);

todo.drawTodos();

let addButton = document.querySelector(".dday-add-button");
let addDdayBox = document.querySelector(".add-dday");
let ddayInput = document.querySelector(".add-dday-input__date");
let ddayName = document.querySelector(".add-dday-input__name");
let ddaySubmit = document.querySelector(".add-dday__form");
let ddayReset = document.querySelector(".add-dday__reset-button");

addButton.addEventListener("click", () => {
  addDdayBox.classList.add("show");
});

ddaySubmit.addEventListener("submit", (e) => {
  let ddays =
    localStorage.getItem("ddays") === null
      ? {}
      : JSON.parse(localStorage.getItem("ddays"));
  let ddaySubject = ddayName.value;
  let ddayTarget = ddayInput.value;
  ddays[ddaySubject] = ddayTarget;
  localStorage.setItem("ddays", JSON.stringify(ddays));
  addDdayBox.classList.remove("show");
  dday.drawDday();
});

ddayReset.addEventListener("click", () => {
  addDdayBox.classList.remove("show");
  dday.drawDday();
});

const padInt = (n) => {
  let res = String(n);
  if (String(n).length === 1) {
    let arr = String(n).split("");
    arr.unshift("0");
    res = arr.join("");
  }
  return res;
};

const drawClock = () => {
  let now = new Date();
  let nowDay;
  if (now.getDay() === 1) nowDay = "MON";
  else if (now.getDay() === 2) nowDay = "TUE";
  else if (now.getDay() === 3) nowDay = "WED";
  else if (now.getDay() === 4) nowDay = "THU";
  else if (now.getDay() === 5) nowDay = "FRI";
  else if (now.getDay() === 6) nowDay = "SAT";
  else nowDay = "SUN";
  let nowMonth = padInt(now.getMonth() + 1);
  let nowYear = now.getFullYear();
  let nowDate = padInt(now.getDate());
  let nowHour = padInt(now.getHours());
  let nowMinute = padInt(now.getMinutes());
  let nowSecond = padInt(now.getSeconds());

  let nowYearMonthDate =
    nowYear + " / " + nowMonth + " / " + nowDate + " " + nowDay;
  let nowHourMinutesSecond = nowHour + " : " + nowMinute + " : " + nowSecond;
  let dateBox = document.querySelector(".clock__date");
  let hourBox = document.querySelector(".clock__time");

  dateBox.innerHTML = nowYearMonthDate;
  hourBox.innerHTML = nowHourMinutesSecond;
};

const getLocation = async () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

const drawLocation = async (location) => {
  let cityName = document.querySelector(".location__city");
  let temperature = document.querySelector(".weather-temp__temperature");
  let weatherIcon = document.querySelector(".weather__icon");

  let key = "a0da403921cabb72edbfc43c1abe7772";
  let [latitude, longitude] = [
    location.coords.latitude,
    location.coords.longitude,
  ];
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  let city = data.name;
  let temp = data.main.temp;
  let weatherCode = data.weather[0].icon;
  let weatherUrl = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  if (String(temp).length > 3) temp = String(temp).substring(0, 4);
  weatherIcon.src = weatherUrl;
  cityName.innerHTML = city;
  temperature.innerHTML = temp;
};

const successCallback = async (position) => {
  let nowGeo = await position;
  drawLocation(nowGeo);
};

const errorCallback = (error) => {
  console.log(error);
};

let nowTimer = 0;
let startTimer = 0;
let startTime;
let isPaused = false;
let isStarted = false;

let timerBackground = document.querySelector(".timer");
let startButton = document.querySelector(".timer-buttons__start");
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

getLocation();

setInterval(() => {
  drawClock();
}, 1000);

dday.drawDday();
