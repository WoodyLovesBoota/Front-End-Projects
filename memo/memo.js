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
  console.log(content);
};

const drawMemos = () => {
  Object.values(memos).forEach((e) => {
    let section = document.querySelector("#memo-lists");
    let memoCard = document.createElement("div");
    memoCard.classList.add("card");
    let content = document.createElement("p");
    content.innerText = e.length > 10 ? e.substr(0, 9) + "..." : e;
    memoCard.appendChild(content);
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
