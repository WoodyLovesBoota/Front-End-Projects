let date = new Date()
let todos = localStorage.length === 0 ? {} : JSON.parse(localStorage.getItem("todos"));

setTodo = () => {
  let todoItem = document.getElementById("todo-input").value;
  todos[date.getTime()] = todoItem;
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const deleteTodo = (item) => {
  let target = item.querySelector("span").innerText;
  let key = getKeyByValue(todos, target);
  delete todos[key];
  localStorage.setItem("todos", JSON.stringify(todos));
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
  
    content.innerText = e;
    button.innerHTML = "X"
    button.setAttribute("onclick", `deleteTodo(this.parentElement);`);
  
    todoList.appendChild(item);
    item.append(checkBox, content, button);
  });
};

window.onload = () => {
  drawTodos();
}

// TODO : delete todo
