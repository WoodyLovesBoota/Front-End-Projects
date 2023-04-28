import projects from "../portfolio/projects.js";

// TODO : localStorage 로 checked 받아서 다시쓰는걸로 고치기
// 지금은 꼬여서 어쩔땐 localStorage로 가고 어쩔땐 그냥 input checked 로 감

let date = new Date()
let todos = localStorage.length === 0 ? {} : JSON.parse(localStorage.getItem("todos"));
let checkedTodo = localStorage.length > 0 ? [] : localStorage.getItem("checks");


const setTodo = () => {
  let todoItem = document.getElementById("todo-input").value;
  todos[date.getTime()] = todoItem;
  localStorage.setItem("todos", JSON.stringify(todos));
}

    // checkBox.addEventListener("change", (event) => {
    //   if(event.currentTarget.checked) checkedTodo.push(e);
    //   else checkedTodo.splice(checkedTodo.indexOf(e),1);
    //   setChecks();
      // drawChecked();

    // })
console.log(checkedTodo);
const setChecks = () => {
  localStorage.setItem("checks", checkedTodo);
  drawTodos();
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
  if(checkedTodo.indexOf(target)!==-1) checkedTodo.splice(checkedTodo.indexOf(target),1);
  localStorage.setItem("checks", checkedTodo);
  drawTodos();
}

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
      if(!item.classList.contains("checked")) checkedTodo.push(e);
      else checkedTodo.splice(checkedTodo.indexOf(e),1);
      setChecks();
    })

    if(checkedTodo.indexOf(e)!==-1) {
      item.classList.add("checked");
    }

    todoList.appendChild(item);
    item.append(checkBox, label,  content, button);
    button.addEventListener("click", () => {deleteTodo(item)});
  });
};

const drawChecked = () => {
  let item = document.querySelectorAll(".check-box");
  item.forEach(e => {
    let text = e.parentElement.children[2];
    if(checkedTodo.indexOf(String(text.innerText))!==-1) {
      text.classList.add("checked");
      e.parentElement.firstChild.classList.add("v");
    }
  })
}

const drawCheckedWhenRefresh = () => {
  let item = document.querySelectorAll(".check-box");
  item.forEach(e => {
    let text = e.parentElement.children[2];
    let checked = localStorage.getItem("checks");
    if(checked.indexOf(String(text.innerText))!==-1) {
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


window.onload = () => {
  drawTodos();
  drawDescription();
  // drawChecked();
  // drawCheckedWhenRefresh();
}

