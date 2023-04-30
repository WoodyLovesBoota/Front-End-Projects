import projects from "../projects.js";

projects["basic"].forEach((e, i) => {
  let cardArr = document.getElementsByClassName("project-cards")[0];
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let link = document.createElement("a");
  link.setAttribute("href", e["code"]);
  let text = document.createElement("p");
  text.innerText = e["name"];
  let image = document.createElement("img");
  image.setAttribute("src", e["image"]);
  link.append(text, image);
  card.appendChild(link);
  cardArr.appendChild(card);
});

/* 
TODO 
- survey form like google form
- landing page 
  https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0
- restaurant
  https://www.geeksforgeeks.org/design-a-webpage-for-online-food-delivery-system-using-html-and-css/
- portfolio (home aboutus projects achivement contact)
https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE
- weather app
- calculator
- sign up form
  https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1
- job listing
  https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt

  
https://dev.to/frontendmentor/16-front-end-projects-with-designs-to-help-improve-your-coding-skills-5ajl
*/
