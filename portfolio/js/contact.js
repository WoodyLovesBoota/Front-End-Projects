let contactForm = document.querySelector("#contact-form");
let contactSubmit = document.querySelector("#submit-button");
let contactName = document.querySelector("#name");
let contactEmail = document.querySelector("#email");
let contactMessage = document.querySelector("#message");

contactSubmit.addEventListener("click", () => {
  let cName = contactName.value;
  let email = contactEmail.value;
  let message = contactMessage.value;
});
