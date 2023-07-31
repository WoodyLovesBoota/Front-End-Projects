let todos =
  localStorage.getItem("todos") === null
    ? {}
    : JSON.parse(localStorage.getItem("todos"));

let checkedTodo =
  localStorage.getItem("checks") === null
    ? []
    : localStorage.getItem("checks").split(",");

let cnt = Object.keys(todos).length;

const setTodo = () => {
  let todoItem = document.querySelector("#todo-input").value;
  document.querySelector("#todo-input").value = null;
  todos[cnt] = todoItem;
  cnt++;
  localStorage.setItem("todos", JSON.stringify(todos));
  drawTodos();
};

const setChecks = () => {
  localStorage.setItem("checks", checkedTodo);
  drawTodos();
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const deleteTodo = (item) => {
  let target = item.querySelector("span").innerText;
  let key = getKeyByValue(todos, target);
  delete todos[key];
  localStorage.setItem("todos", JSON.stringify(todos));
  if (checkedTodo.indexOf(target) !== -1)
    checkedTodo.splice(checkedTodo.indexOf(target), 1);
  localStorage.setItem("checks", checkedTodo);
  drawTodos();
};

const drawTodos = () => {
  let list = document.getElementById("todos");
  while (list.children.length > 0) {
    list.removeChild(list.lastChild);
  }

  Object.values(todos).forEach((e) => {
    let todoList = document.getElementById("todos");
    let item = document.createElement("li");
    let content = document.createElement("span");
    let button = document.createElement("button");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", getKeyByValue(todos, e));
    checkBox.setAttribute("class", "check-box");

    let label = document.createElement("label");
    label.setAttribute("for", getKeyByValue(todos, e));
    content.innerText = e;
    button.innerHTML = "X";

    if (checkedTodo.indexOf(e) !== -1) {
      item.classList.add("checked");
    }

    checkBox.addEventListener("change", () => {
      if (!item.classList.contains("checked")) checkedTodo.push(e);
      else checkedTodo.splice(checkedTodo.indexOf(e), 1);
      setChecks();
    });

    todoList.appendChild(item);
    item.append(checkBox, label, content, button);
    button.addEventListener("click", () => {
      deleteTodo(item);
    });
  });
};

let input = document.querySelector(".todo-input__form");
input.addEventListener("submit", (e) => {
  e.preventDefault();
  setTodo();
});

export {
  todos,
  checkedTodo,
  setTodo,
  setChecks,
  getKeyByValue,
  deleteTodo,
  drawTodos,
};
