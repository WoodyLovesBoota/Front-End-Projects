import * as todo from "./todo.js";
import * as dday from "./dday.js";
import * as clock from "./clock.js";
import * as location from "./location-weather.js";
import "./timer.js";

let todoInput = document.querySelector(".todo-insert__input");
todoInput.addEventListener("change", todo.addTodo);

todo.drawTodos();

location.getLocation();

setInterval(() => {
  clock.drawClock();
}, 1000);

dday.drawDday();
