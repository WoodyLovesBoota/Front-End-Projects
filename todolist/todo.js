let todos = localStorage.length === 0 ? {} : JSON.parse(localStorage.getItem("todos"));
let date = new Date()

setTodo = () => {
  let todoItem = document.getElementById("todo-input").value;
  todos[date.getTime()] = todoItem;
  localStorage.setItem("todos", JSON.stringify(todos));
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
  
  todoList.appendChild(item);
  item.append(checkBox, content, button);
})

// TODO : delete todo
