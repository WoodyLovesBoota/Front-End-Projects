let wordRow = document.querySelectorAll(".word-row");
wordRow.forEach((e) => {
  e.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("a");
  });
});
