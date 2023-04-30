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

// TODO : Lightbox 안에 full content 넣고 보이게 하기.
const openLightBox = (event, content) => {
  let key = getKeyByValue(memos, content);
  if (memos[key] !== undefined) {
    let box = document.querySelector("#light-box");
    let formArea = document.createElement("form");
    let text = document.createElement("textarea");
    text.innerText = content;
    let saveButton = document.createElement("button");
    saveButton.setAttribute("type", "submit");
    saveButton.classList.add("save-button");
    saveButton.innerText = "v";
    text.addEventListener("change", (event) => {
      saveMemo(event, key, box);
    });
    formArea.append(text, saveButton);
    box.appendChild(formArea);
    box.classList.add("show");
  }
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const deleteMemo = (content) => {
  let key = getKeyByValue(memos, content.innerText);
  delete memos[key];
  localStorage.setItem("memos", JSON.stringify(memos));
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
    //TODO : deletebutton click 하면 삭제시키기
    exit.classList.add("delete-button");
    exit.innerText = "X";
    exit.addEventListener("click", () => {
      deleteMemo(content);
    });
    memoCard.append(content, exit);
    section.appendChild(memoCard);

    memoCard.addEventListener("click", (event) => {
      openLightBox(event, e);
    });
  });
};

// TODO : delteMemo 기능 추가 / 그에따른 삭제 버튼 추가.

window.onload = () => {
  drawMemos();
};
