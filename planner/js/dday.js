// TODO : refactor

import * as lib from "./library.js";

let ddays =
  localStorage.getItem("ddays") === null
    ? {}
    : JSON.parse(localStorage.getItem("ddays"));

const ddayInsertionScreen = document.querySelector(".add-dday");
const newDdayDate = document.querySelector(".add-dday-input__date");
const newDdaySubject = document.querySelector(".add-dday-input__name");

document.querySelector(".dday-add-button").addEventListener("click", () => {
  ddayInsertionScreen.classList.add("show");
});

document.querySelector(".add-dday__form").addEventListener("submit", () => {
  let ddays =
    localStorage.getItem("ddays") === null
      ? {}
      : JSON.parse(localStorage.getItem("ddays"));
  ddays[newDdaySubject.value] = newDdayDate.value;
  localStorage.setItem("ddays", JSON.stringify(ddays));
  ddayInsertionScreen.classList.remove("show");
  drawDday();
});

document
  .querySelector(".add-dday__reset-button")
  .addEventListener("click", () => {
    ddayInsertionScreen.classList.remove("show");
    drawDday();
  });

const drawDday = () => {
  const ddayList = document.querySelector(".dday-list");
  while (ddayList.children.length > 0) {
    ddayList.removeChild(ddayList.lastChild);
  }
  Object.entries(ddays).forEach(([key, value]) => {
    const targetDay = new Date(
      value.substring(0, 4),
      value.substring(5, 7) - 1,
      value.substring(8, 10)
    );
    calcTime(key, targetDay);
  });
};

const deleteDday = (element) => {
  const target = element.firstChild.firstChild.innerText;
  delete ddays[target];
  localStorage.setItem("ddays", JSON.stringify(ddays));
  drawDday();
};

const calcTime = (name, target) => {
  const main = document.querySelector(".dday-list");
  const ddayContent = document.createElement("div");
  const ddayElement = document.createElement("div");
  const content = document.createElement("p");
  const content2 = document.createElement("p");
  const ddayDelete = document.createElement("button");
  const ddayDate = document.createElement("p");
  ddayDelete.innerHTML = "X";

  ddayElement.classList.add("dday-element");

  ddayDelete.addEventListener("click", () => {
    deleteDday(ddayDelete.parentNode);
  });

  let now = new Date();
  let nowTime = now.getTime();
  let targetTime = target.getTime();
  let lest = Math.floor((targetTime - nowTime) / 1000);

  let lestDate = Math.floor(lest / (60 * 60 * 24));

  ddayDate.innerHTML =
    lib.padInt(target.getFullYear()) +
    "-" +
    lib.padInt(Number(target.getMonth()) + 1) +
    "-" +
    lib.padInt(target.getDate());

  let clockMessage = name;
  content.innerHTML = clockMessage;

  let clockMessage2 = "D - " + String(Number(lestDate) + 1);
  content2.innerHTML = clockMessage2;
  ddayContent.appendChild(content);
  ddayContent.appendChild(ddayDate);
  ddayElement.appendChild(ddayContent);

  ddayElement.appendChild(ddayDelete);
  ddayElement.appendChild(content2);
  main.appendChild(ddayElement);
};

export { ddays, calcTime, drawDday };
