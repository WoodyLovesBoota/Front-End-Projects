let chatComponent = document.querySelectorAll(".chat-component");
console.log(chatComponent);

chatComponent.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    let name = ele.getElementsByTagName("h4")[0].textContent;
    document.querySelector(".alt-header__title")[0].innerText = name;
  });
});
