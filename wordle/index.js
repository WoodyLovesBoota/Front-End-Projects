let wordRows = document.querySelectorAll(".word-row");
let wordCells = document.querySelectorAll(".word-row__cell");

const answer = "abcde";
let history = [];
//자동 커서 넘기기
const moveCursor = (element) => {
  element.addEventListener("keyup", () => {
    if (element.value.length === +element.getAttribute("maxlength")) {
      if (element.nextElementSibling.getAttribute("type") === "text")
        element.nextElementSibling.focus({ focusVisible: false });
    }
  });
};

// 마지막은 다음 형제노드가 submit 이여서 submit 할 때 focus넘겨야 함
const moveCursorToNextRow = (element) => {
  element.nextElementSibling.firstElementChild.focus();
};

// 성공했을 때 실행되는 함수
const winTheGame = () => {};

// 실패했을 때 실행되는 함수
const loseTheGame = () => {};

//submit 되면 실행시킬 함수 : 단어 확인
const checkAnswer = (words) => {
  let wordsArr = [];
  let green = 0;
  let yellow = 0;
  let cnt = 0;
  for (let i = 0; i < 5; i++) {
    wordsArr.push(words.children[i].value);
  }
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    history.push(wordsArr[i]);
    if (wordsArr[i] === answer[i]) {
      green++;
      words.children[i].classList.add("word-green");
    } else if (answer.includes(wordsArr[i])) {
      yellow++;
      words.children[i].classList.add("word-yellow");
      cnt++;
    } else cnt++;
    if (green === 5) {
      winTheGame();
    }
    if (cnt === 5) {
      loseTheGame();
    }
  }
};

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
