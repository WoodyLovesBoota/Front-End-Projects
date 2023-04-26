import projects from "../portfolio/projects.js";

let date = new Date()
let todos = localStorage.length === 0 ? {} : JSON.parse(localStorage.getItem("todos"));

const setTodo = () => {
  let todoItem = document.getElementById("todo-input").value;
  todos[date.getTime()] = todoItem;
  localStorage.setItem("todos", JSON.stringify(todos));
}

let input = document.querySelector("#todo-input");
input.addEventListener("change", setTodo);

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const deleteTodo = (item) => {
  let target = item.querySelector("span").innerText;
  let key = getKeyByValue(todos, target);
  delete todos[key];
  localStorage.setItem("todos", JSON.stringify(todos));
  drawTodos();
  drawChecked();
}

let checkedTodo = [];

const drawTodos = () => {
  let list = document.getElementById("todos");
  while(list.children.length >0) {
    list.removeChild(list.lastChild);
  }
  Object.values(todos).forEach(e =>{
    let todoList = document.getElementById("todos");
    let item = document.createElement("li");
    let content = document.createElement("span");
    let button = document.createElement("button");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", getKeyByValue(todos, e));
    checkBox.setAttribute("class", "check-box");

    let label = document.createElement("label")
    label.setAttribute("for", getKeyByValue(todos, e));
    content.innerText = e;
    button.innerHTML = "X"
    checkBox.addEventListener("change", (event) => {
      if(event.currentTarget.checked) checkedTodo.push(e);
      else checkedTodo.splice(checkedTodo.indexOf(e),1);
      drawChecked();
    })
    todoList.appendChild(item);
    item.append(checkBox, label,  content, button);
    button.addEventListener("click", () => {deleteTodo(item)});
  });
};

const drawChecked = () => {
  let item = document.querySelectorAll(".check-box");
  item.forEach(e => {
    let text = e.parentElement.children[2];
    if(checkedTodo.indexOf(text.innerText)!==-1) {
      text.classList.add("checked");
      e.parentElement.firstChild.classList.add("v");
    }
  })
}

const drawDescription = () => {
  let desc = projects.basic[2].detail;
  let descDiv = document.querySelector("#description");
  let due = document.createElement('p');
  let dueLabel = document.createElement('span');
  let dueContent = document.createElement('span');
  dueLabel.innerText = "구현 기간 : ";
  dueContent.innerText = desc[0];
  due.append(dueLabel, dueContent);
  let hour = document.createElement('p');
  let hourLabel = document.createElement('span');
  let hourContent = document.createElement('span');
  hourLabel.innerText = "소모 시간 : ";
  hourContent.innerText = desc[1];
  hour.append(hourLabel, hourContent);
  let skill = document.createElement('p');
  let skillLabel = document.createElement('span');
  let skillContent = document.createElement('span');
  skillLabel.innerText = "사용한 기능 : ";
  skillContent.innerText = desc[2];
  skill.append(skillLabel, skillContent);
  let detail = document.createElement('p');
  let detailContent = document.createElement('span');
  detailContent.innerHTML = desc[3];
  detail.append(detailContent);
  descDiv.append(due, hour, skill, detail);
};


// window.onload = () => {
  console.log('start')
  drawTodos();
  drawDescription();
  drawChecked();
// }

