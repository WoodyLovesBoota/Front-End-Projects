// Get number cell
let numbers = document.querySelectorAll(".number");

// Get arith cell
let plus = document.querySelector("#add");
let minus = document.querySelector("#substract");
let multi = document.querySelector("#multiplier");
let divider = document.querySelector("#divide");
let rootArith = document.querySelector("#root");
let powArith = document.querySelector("#pow");
let reciporal = document.querySelector("#reciporal");
let plusMinus = document.querySelector("#plus-minus");
let spot = document.querySelector("#spot");
let equal = document.querySelector("#equal");
let backspace = document.querySelector("#backspace");
let cancelAll = document.querySelector("#cancel-all");
let cancelNow = document.querySelector("#cancel-now");

// Get result cell
let resultNumber = document.querySelector("#result-num");
let pastNumber = document.querySelector("past-num");

let result = "";
let now = "";
// let temp = [];

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    now = now + e.innerHTML;
    resultNumber.innerText = now;
  });
});

plus.addEventListener("click", () => {});
minus.addEventListener("click", () => {});
multi.addEventListener("click", () => {});
divider.addEventListener("click", () => {});
rootArith.addEventListener("click", () => {});
powArith.addEventListener("click", () => {});
reciporal.addEventListener("click", () => {});

plusMinus.addEventListener("click", () => {
  let temp = [...now];
  temp[0] === "-" ? temp.shift() : temp.unshift("-");
  now = temp.join("");
  resultNumber.innerText = now;
});

spot.addEventListener("click", () => {
  let temp = [...now];
  if (temp.indexOf(".") === -1) temp.push(".");
  now = temp.join("");
  resultNumber.innerText = now;
});

equal.addEventListener("click", () => {});
backspace.addEventListener("click", () => {});
cancelAll.addEventListener("click", () => {});
cancelNow.addEventListener("click", () => {});
