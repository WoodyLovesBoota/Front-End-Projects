import projects from "../portfolio/projects.js";

let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1;
let today = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

let calendarTable = document.getElementById("calendar-table");
let calendarBodyTable = document.querySelector("#calendar-table-body");
const getDateOfMonth = (year, month) => {
  let totalDate = new Date(year, month, 0).getDate();
  return totalDate;
};

const drawCalendar = () => {
  let firstDay = new Date(nowYear, nowMonth - 1, 1).getDay();
  let totalRow = Math.ceil((firstDay + getDateOfMonth(nowYear, nowMonth)) / 7);
  let past = 7 - firstDay;
  let monthToEng;
  if(nowMonth===1) monthToEng = "Jan";
  else if(nowMonth===2) monthToEng = "Feb";
  else if(nowMonth===3) monthToEng = "March";
  else if(nowMonth===4) monthToEng = "April";
  else if(nowMonth===5) monthToEng = "May";
  else if(nowMonth===6) monthToEng = "June";
  else if(nowMonth===7) monthToEng = "July";
  else if(nowMonth===8) monthToEng = "Aug";
  else if(nowMonth===9) monthToEng = "Sep";
  else if(nowMonth===10) monthToEng = "Oct";
  else if(nowMonth===11) monthToEng = "Nov";
  else monthToEng = "Dec";
  
  document.getElementById("year").innerText = nowYear.toString();
  document.getElementById("month").innerText = monthToEng;

  while (calendarBodyTable.rows.length > 0) {
    calendarBodyTable.deleteRow(calendarBodyTable.rows.length - 1);
  }

  let firstRow = calendarBodyTable.insertRow();

  for (let i = 0; i < firstDay; i++) {
    firstRow.insertCell();
  }

  for (let i = 1; i <= 7 - firstDay; i++) {
    let nowCols = firstRow.insertCell();
    let nowText = document.createElement("p");
    nowText.innerHTML = i;
    nowCols.appendChild(nowText);
    nowCols.onclick = () => {
      clicked(nowText);
    };
    if ([nowYear, nowMonth, i] === today) nowCols.classList.add("today");
  }

  for (let i = 1; i < totalRow; i++) {
    let nowRow = calendarBodyTable.insertRow();
    for (let j = 0; j < 7; j++) {
      let nowCols = nowRow.insertCell();
      let nowText = document.createElement("p");
      nowText.innerHTML = past + 1;
      nowCols.appendChild(nowText);
      past++;
      nowCols.onclick = () => {
        clicked(nowText);
      };

      if (nowYear === today[0] && nowMonth === today[1] && past === today[2])
        nowCols.classList.add("today");

      if (past >= getDateOfMonth(nowYear, nowMonth)) break;
    }
  }

  let nextPage = document.querySelector("#next");
  nextPage.addEventListener("click", next, false);
  let prevPage = document.querySelector("#prev");
  prevPage.addEventListener("click", prev, false);
};

const drawDescription = () => {
  let desc = projects.basic[0].detail;
  console.log(desc);
  let descDiv = document.querySelector("#description");
  let due = document.createElement('p');
  let dueLabel = document.createElement('span');
  let dueContent = document.createElement('span');
  dueLabel.innerText = "구현 기간 : ";
  dueContent.innerText = desc[0];
  due.append(dueLabel, dueContent);
  let hour = document.createElement('p');
  let hourLabel = document.createElement('span');
  let hourContent = document.createElement('span');
  hourLabel.innerText = "소모 시간 : ";
  hourContent.innerText = desc[1];
  hour.append(hourLabel, hourContent);
  let skill = document.createElement('p');
  let skillLabel = document.createElement('span');
  let skillContent = document.createElement('span');
  skillLabel.innerText = "사용한 기능 : ";
  skillContent.innerText = desc[2];
  skill.append(skillLabel, skillContent);
  let detail = document.createElement('p');
  let detailContent = document.createElement('span');
  detailContent.innerHTML = desc[3];
  detail.append(detailContent);
  descDiv.append(due, hour, skill, detail);
};

const prev = () => {
  if (nowMonth > 1) nowMonth--;
  else {
    nowYear--;
    nowMonth = 12;
  }
  drawCalendar();
};

const next = () => {
  if (nowMonth < 12) nowMonth++;
  else {
    nowYear++;
    nowMonth = 1;
  }
  drawCalendar();
};

window.onload = () => {
  drawCalendar();
  drawDescription();
};



const clicked = (cell) => {
  if (document.getElementsByClassName("choiced")[0])
    document.getElementsByClassName("choiced")[0].classList.remove("choiced");
  cell.classList.add("choiced");
};
