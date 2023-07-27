let wordRow = document.querySelectorAll(".word-row");
let wordCell = document.querySelectorAll(".word-row__cell");

//자동 커서 넘기기
const moveCursor = (element) => {
  element.addEventListener("keyup", () => {
    // 수정 필요 : submit 도 type 이 INPUT 임
    if (element.nextElementSibling.tagName === "INPUT")
      element.nextElementSibling.focus();
  });
};

wordRow.forEach((e) => {
  e.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("a");
  });
});

wordCell.forEach((e) => {
  moveCursor(e);
});
