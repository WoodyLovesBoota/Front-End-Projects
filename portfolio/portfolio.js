import projects from "./projects.js";
console.log(projects);

projects["basic"].forEach((e,i) => {
    console.log(e)
    let cardArr = document.getElementsByClassName("project-cards")[0];
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let link = document.createElement("a");
    link.setAttribute("href", e['code']);
    let text = document.createElement("p");
    text.innerText = e["name"];
    let image = document.createElement('img');
    image.setAttribute("src", e["image"]);
    link.append(text, image);
    card.appendChild(link);
    cardArr.appendChild(card);
});

