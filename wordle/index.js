let wordRows = document.querySelectorAll(".word-row");
let wordCells = document.querySelectorAll(".word-row__cell");

//자동 커서 넘기기
const moveCursor = (element) => {
  element.addEventListener("keyup", () => {
    if (element.nextElementSibling.getAttribute("type") === "text")
      element.nextElementSibling.focus();
  });
};

// 마지막은 다음 형제노드가 submit 이여서 submit 할 때 focus넘겨야 함
const moveCursorToNextRow = (element) => {};

//submit 되면 실행시킬 함수 : 단어 확인
const checkAnswer = (words) => {};

wordRows.forEach((wordRow) => {
  wordRow.addEventListener("submit", (event) => {
    event.preventDefault();
    // submit 되면 뭐하는데
    moveCursorToNextRow(wordRow);
    checkAnswer(wordRow);
  });
});

wordCells.forEach((wordCell) => {
  moveCursor(wordCell);
});
