let wordRows = document.querySelectorAll(".word-row");
let wordCells = document.querySelectorAll(".word-row__cell");

//자동 커서 넘기기
const moveCursor = (element) => {
  element.addEventListener("keyup", () => {
    // 수정 필요 : submit 도 type 이 INPUT 임
    if (element.nextElementSibling.tagName === "INPUT")
      element.nextElementSibling.focus();
  });
};

//submit 되면 실행시킬 함수 : 단어 확인
const checkAnswer = () => {};

wordRows.forEach((wordRow) => {
  wordRow.addEventListener("submit", (event) => {
    event.preventDefault();
    // submit 되면 뭐하는데
    checkAnswer(wordRow);
  });
});

wordCells.forEach((wordCell) => {
  moveCursor(wordCell);
});
