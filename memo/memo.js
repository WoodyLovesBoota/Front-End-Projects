import projects from "../portfolio/projects.js";

let memos =
  localStorage.getItem("memos") === null
    ? {}
    : JSON.parse(localStorage.getItem("memos"));

let textArea = document.querySelector("#memo-content");
textArea.addEventListener("change", (event) => {
  setMemo(event);
});

const setMemo = (event) => {
  let now = new Date().getTime();
  let memoContent = event.target.value;
  memos[now] = memoContent;
  localStorage.setItem("memos", JSON.stringify(memos));
};

const openLightBox = (event, content) => {
  let key = getKeyByValue(memos, content);
  console.log(memos[key]);
  if (memos[key] !== undefined) {
    let box = document.querySelector(".light-box");
    let formArea = document.createElement("form");
    let text = document.createElement("textarea");
    text.innerText = content;
    text.setAttribute("spellcheck", "false");

    let saveButton = document.createElement("button");
    saveButton.setAttribute("type", "submit");
    saveButton.classList.add("save-button");
    saveButton.innerText = "v";
    text.addEventListener("change", (event) => {
      saveMemo(event, key, box);
    });
    formArea.append(text, saveButton);
    box.appendChild(formArea);
    box.classList.remove("unshow");
  }
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const deleteMemo = (content) => {
  let key = getKeyByValue(memos, content);
  delete memos[key];
  localStorage.setItem("memos", JSON.stringify(memos));
  drawMemos();
};

const saveMemo = (event, key, box) => {
  while (box.children.length > 0) box.removeChild(box.lastChild);

  let newCotent = event.target.value;
  memos[key] = newCotent;
  localStorage.setItem("memos", JSON.stringify(memos));
  box.classList.add("unshow");
  drawMemos();
};

const drawMemos = () => {
  let section = document.querySelector("#memo-lists");
  while (section.children.length > 0) section.removeChild(section.lastChild);
  Object.values(memos).forEach((e) => {
    let memoCard = document.createElement("div");
    memoCard.classList.add("card");
    let content = document.createElement("p");
    content.innerText = e.length > 10 ? e.substr(0, 9) + "..." : e;
    let exit = document.createElement("button");
    exit.classList.add("delete-button");
    exit.innerText = "X";
    exit.addEventListener("click", () => {
      deleteMemo(e);
    });
    memoCard.append(content, exit);
    section.appendChild(memoCard);

    memoCard.addEventListener("click", (event) => {
      openLightBox(event, e);
    });
  });
};

const drawDescription = () => {
  let desc = projects.basic[3].detail;
  let descDiv = document.querySelector("#description");
  let due = document.createElement("p");
  let dueLabel = document.createElement("span");
  let dueContent = document.createElement("span");
  dueLabel.innerText = "구현 기간 : ";
  dueContent.innerText = desc[0];
  due.append(dueLabel, dueContent);
  let hour = document.createElement("p");
  let hourLabel = document.createElement("span");
  let hourContent = document.createElement("span");
  hourLabel.innerText = "소모 시간 : ";
  hourContent.innerText = desc[1];
  hour.append(hourLabel, hourContent);
  let skill = document.createElement("p");
  let skillLabel = document.createElement("span");
  let skillContent = document.createElement("span");
  skillLabel.innerText = "사용한 기능 : ";
  skillContent.innerText = desc[2];
  skill.append(skillLabel, skillContent);
  let detail = document.createElement("p");
  let detailContent = document.createElement("span");
  detailContent.innerHTML = desc[3];
  detail.append(detailContent);
  descDiv.append(due, hour, skill, detail);
};

window.onload = () => {
  drawMemos();
  drawDescription();
};
