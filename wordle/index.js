const wordRows = document.querySelectorAll(".word-row");
const wordCells = document.querySelectorAll(".word-row__cell");
const restartButton = document.querySelector(".restart__button");
const keyboards = document.querySelectorAll(".keyboard__cell");
const answerWord = document.querySelector(".answer-word");

let win = false;
let history = [];
let cnt = 0;

const generateAnswer = async () => {
  const url = `https://random-word-api.herokuapp.com/word?length=5`;

  const response = await fetch(url);
  const data = await response.json();

  return data[0];
};

const answer = await generateAnswer();

answerWord.innerText = 'The answer is... "' + answer.toUpperCase() + '"';

restartButton.addEventListener("click", () => {
  location.reload();
});

// 자동 커서 넘기기
const moveCursor = (element) => {
  element.addEventListener("keyup", () => {
    if (element.value.length === +element.getAttribute("maxlength")) {
      if (element.nextElementSibling.getAttribute("type") === "text") element.nextElementSibling.focus({ focusVisible: false });
    }
  });
};

// 입력하면 테두리 색 변경하기
const paintWord = (element) => {
  element.addEventListener("keyup", () => {
    if (element.value.length === +element.getAttribute("maxlength")) {
      element.classList.add("done");
    }
  });
};

// 마지막은 다음 형제노드가 submit 이여서 submit 할 때 focus넘겨야 함
const moveCursorToNextRow = (element) => {
  if (element.nextElementSibling.firstElementChild !== null) element.nextElementSibling.firstElementChild.focus();
};

// history 확인해서 keyboard 색칠
const paintKeyboard = () => {
  keyboards.forEach((e) => {
    if (history.includes(e.textContent)) e.classList.add("selected");
  });
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

// 6번만에 정답 못맞추면 fail
const loseWhenOverSix = () => {
  cnt++;
  if (cnt === 6 && !win) {
    loseTheGame();
  }
};

// submit 되면 실행시킬 함수 : 단어 확인
const checkAnswer = (words) => {
  let wordsArr = [];
  let green = 0;

  for (let i = 0; i < 5; i++) {
    wordsArr.push(words.children[i].value);
  }

  for (let i = 0; i < wordsArr.length; i++) {
    history.push(wordsArr[i].toUpperCase());
    words.children[i].classList.remove("done");

    if (wordsArr[i] === answer[i]) {
      green++;
      words.children[i].classList.add("word-green");
    } else if (answer.includes(wordsArr[i])) {
      words.children[i].classList.add("word-yellow");
    } else {
      words.children[i].classList.add("word-gray");
    }

    if (green === 5) {
      winTheGame();
    }
  }
};

// 한줄 submit 되었을 때 action
wordRows.forEach((wordRow) => {
  wordRow.addEventListener("submit", (event) => {
    event.preventDefault();

    moveCursorToNextRow(wordRow);
    checkAnswer(wordRow);
    paintKeyboard();
    loseWhenOverSix();
  });
});

// 한칸 submit 되었을 때 action
wordCells.forEach((wordCell) => {
  paintWord(wordCell);
  moveCursor(wordCell);
});
