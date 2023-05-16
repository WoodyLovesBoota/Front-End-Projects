let ddays =
  localStorage.getItem("ddays") === null
    ? {}
    : JSON.parse(localStorage.getItem("ddays"));

const padInt = (n) => {
  let res = String(n);
  if (String(n).length === 1) {
    let arr = String(n).split("");
    arr.unshift("0");
    res = arr.join("");
  }
  return res;
};

const calcTime = (name, target) => {
  let main = document.getElementById("dday-list");
  let ddayElement = document.createElement("div");
  let content = document.createElement("p");
  let content2 = document.createElement("p");
  let ddayDelete = document.createElement("button");
  ddayDelete.innerHTML = "X";

  ddayElement.classList.add("dday-element");

  let now = new Date();
  let nowTime = now.getTime();
  let targetTime = target.getTime();
  let lest = Math.floor((targetTime - nowTime) / 1000);

  let lestDate = Math.floor(lest / (60 * 60 * 24));
  let lestHour = padInt(
    Math.floor((lest - lestDate * (60 * 60 * 24)) / (60 * 60))
  );
  let lestMinute = padInt(
    Math.floor((lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60)) / 60)
  );
  let lestSecond = padInt(
    Math.floor(
      lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60) - lestMinute * 60
    )
  );

  let clockMessage = name;
  content.innerHTML = clockMessage;

  let clockMessage2 =
    lestDate + "일 " + lestHour + " : " + lestMinute + " : " + lestSecond;
  content2.innerHTML = clockMessage2;

  ddayElement.appendChild(content);
  ddayElement.appendChild(ddayDelete);
  ddayElement.appendChild(content2);
  main.appendChild(ddayElement);
};

const drawDday = () => {
  Object.entries(ddays).forEach(([key, value]) => {
    let targetDay = new Date(
      value.substring(0, 4),
      value.substring(5, 7) - 1,
      value.substring(8, 10)
    );
    calcTime(key, targetDay);
  });
};

export { ddays, calcTime, drawDday };
