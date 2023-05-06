let numbers = document.querySelectorAll(".number");
let atirhs = document.querySelectorAll(".arith");

let resultNumber = document.querySelector("#result-num");

let result = "";
let now = "";

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    now = now + e.innerHTML;
    resultNumber.innerText = now;
  });
});
