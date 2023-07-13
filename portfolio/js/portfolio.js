// clone 추가
// design 바꾸기

import { projects } from "../description.js";

let title = document.querySelector("#project-subject-title");
let subTitle = document.querySelector("#project-subject-subtitle");
let meaning = document.querySelector("#project-meaning");
let background = document.querySelector("#project-background");
let prev = document.querySelector("#prev-button");
let next = document.querySelector("#next-button");
let prevSubject = document.querySelector("#prev-subject");
let nextSubject = document.querySelector("#next-subject");
let spec = document.querySelector("#project-spec-part");
let language = document.querySelector("#project-spec-language");
let viewButton = document.querySelector("#project-button");
let sourcecode = document.querySelector("#project-code-address");
let implementation = document.querySelector("#project-implementation");
let achivement = document.querySelector("#project-achivement");

let now = 0;
let total = projects["basic"].length - 1;

const prevPage = () => {
  now === 0 ? (now = total) : now--;
  drawProject(now);
};

const nextPage = () => {
  now === total ? (now = 0) : now++;
  drawProject(now);
};

prev.addEventListener("click", prevPage);
next.addEventListener("click", nextPage);
viewButton.addEventListener("click", (event) => {
  event.preventDefault();
});

const drawProject = (index) => {
  let project = projects["basic"][index];
  title.innerHTML = project.title;
  subTitle.innerHTML = project.subTitle;
  meaning.innerHTML = project.detail[0];
  background.innerHTML = project.detail[1];
  spec.innerHTML = project.detail[2];
  language.innerHTML = project.detail[3];
  sourcecode.href = project.sourcecode;
  implementation.innerHTML = project.detail[4];
  achivement.innerHTML = project.detail[5];

  prevSubject.innerHTML =
    index === 0
      ? projects["basic"][total].title
      : projects["basic"][index - 1].title;
  nextSubject.innerHTML =
    index === total
      ? projects["basic"][0].title
      : projects["basic"][index + 1].title;

  viewButton.addEventListener("click", () => {
    location.href = project.code;
  });
};

window.onload = () => {
  drawProject(0);
};

/* 
TODO 
- landing page 
  https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0
https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE
- job listing
  https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt
- clone coding
  노마드코더
https://dev.to/frontendmentor/16-front-end-projects-with-designs-to-help-improve-your-coding-skills-5ajl
*/
