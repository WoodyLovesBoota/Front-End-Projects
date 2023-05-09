import projects from "../projects.js";

// Get HTML element
let title = document.querySelector("#project-subject-title");
let subTitle = document.querySelector("#project-subject-subtitle");
let meaning = document.querySelector("#project-meaning");
let background = document.querySelector("#project-background");
let desc = document.querySelector("#project-desc");
let prev = document.querySelector("#prev-button");
let next = document.querySelector("#next-button");
let prevSubject = document.querySelector("#prev-subject");
let nextSubject = document.querySelector("#next-subject");
let spec = document.querySelector("#project-spec-part");
let language = document.querySelector("#project-spec-language");

// Set project number : now
let now = 0;
let total = projects["basic"].length - 1;

// Implement functions
const prevPage = () => {
  now === 0 ? (now = total) : now--;
  drawProject(now);
};

const nextPage = () => {
  now === total ? (now = 0) : now++;
  drawProject(now);
};

// Set EventListener
prev.addEventListener("click", prevPage);
next.addEventListener("click", nextPage);

const drawProject = (index) => {
  let project = projects["basic"][index];
  title.innerHTML = project.title;
  subTitle.innerHTML = project.subTitle;
  meaning.innerHTML = project.detail[0];
  background.innerHTML = project.detail[1];
  spec.innerHTML = project.detail[2];
  language.innerHTML = project.detail[3];

  prevSubject.innerHTML =
    index === 0
      ? projects["basic"][total].title
      : projects["basic"][index - 1].title;
  nextSubject.innerHTML =
    index === total
      ? projects["basic"][0].title
      : projects["basic"][index + 1].title;
};

window.onload = () => {
  drawProject(0);
};

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
