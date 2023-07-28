//TODO : 문제 random으로 내기

let wordRows = document.querySelectorAll(".word-row");
let wordCells = document.querySelectorAll(".word-row__cell");
let restartButton = document.querySelector(".restart__button");
let keyboards = document.querySelectorAll(".keyboard__cell");

let win = false;
let history = [];
let cnt = 0;

const answer = "abcde";

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
  if (element.nextElementSibling.firstElementChild !== null)
    element.nextElementSibling.firstElementChild.focus();
};

// 성공했을 때 실행되는 함수
const winTheGame = () => {
  document.querySelector(".result-screen").classList.remove("unshow");
  document.querySelector(".result__text").innerText = "Congratulations!!";
  win = true;
};

// 실패했을 때 실행되는 함수
const loseTheGame = () => {
  document.querySelector(".result-screen").classList.remove("unshow");
  document.querySelector(".result__text").innerText = "So Close...";
};

//submit 되면 실행시킬 함수 : 단어 확인
const checkAnswer = (words) => {
  let wordsArr = [];
  let green = 0;
  let yellow = 0;
  for (let i = 0; i < 5; i++) {
    wordsArr.push(words.children[i].value);
  }
  for (let i = 0; i < wordsArr.length; i++) {
    history.push(wordsArr[i].toUpperCase());
    if (wordsArr[i] === answer[i]) {
      green++;
      words.children[i].classList.add("word-green");
    } else if (answer.includes(wordsArr[i])) {
      yellow++;
      words.children[i].classList.add("word-yellow");
    }
    if (green === 5) {
      winTheGame();
    }
  }
};

wordRows.forEach((wordRow) => {
  wordRow.addEventListener("submit", (event) => {
    event.preventDefault();
    // submit 되면 뭐하는데
    moveCursorToNextRow(wordRow);
    checkAnswer(wordRow);

    // history 확인해서 keyboard 색칠
    keyboards.forEach((e) => {
      if (history.includes(e.textContent)) e.classList.add("selected");
    });

    // 6번만에 정답 못맞추면 fail
    cnt++;
    if (cnt === 6 && !win) {
      loseTheGame();
    }
  });
});

wordCells.forEach((wordCell) => {
  moveCursor(wordCell);
});

restartButton.addEventListener("click", () => {
  location.reload();
});
