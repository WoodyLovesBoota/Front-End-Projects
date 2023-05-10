import projects from "../portfolio/projects.js";

let target = new Date(2024, 1, 1);
let main = document.getElementById("clock");
let content = document.createElement("p");
let content2 = document.createElement("p");

const padInt = (n) => {
  let res = String(n);
  if (String(n).length === 1) {
    let arr = String(n).split("");
    arr.unshift("0");
    res = arr.join("");
  }
  return res;
};

const calcTime = () => {
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

  let clockMessage = lestDate + "일";

  let clockMessage2 = lestHour + " : " + lestMinute + " : " + lestSecond;

  content.innerHTML = clockMessage;
  main.appendChild(content);
  content2.innerHTML = clockMessage2;
  main.appendChild(content2);
};

// let desc = projects.basic[1].detail;
// let descDiv = document.querySelector("#description");
// let due = document.createElement("p");
// let dueLabel = document.createElement("span");
// let dueContent = document.createElement("span");
// dueLabel.innerText = "구현 기간 : ";
// dueContent.innerText = desc[0];
// due.append(dueLabel, dueContent);
// let hour = document.createElement("p");
// let hourLabel = document.createElement("span");
// let hourContent = document.createElement("span");
// hourLabel.innerText = "소모 시간 : ";
// hourContent.innerText = desc[1];
// hour.append(hourLabel, hourContent);
// let skill = document.createElement("p");
// let skillLabel = document.createElement("span");
// let skillContent = document.createElement("span");
// skillLabel.innerText = "사용한 기능 : ";
// skillContent.innerText = desc[2];
// skill.append(skillLabel, skillContent);
// let detail = document.createElement("p");
// let detailContent = document.createElement("span");
// detailContent.innerHTML = desc[3];
// detail.append(detailContent);
// descDiv.append(due, hour, skill, detail);

setInterval(calcTime, 1000);
