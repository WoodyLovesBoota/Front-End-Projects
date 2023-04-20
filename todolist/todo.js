let todos = localStorage.length === 0 ? {} : JSON.parse(localStorage.getItem("todos"));
let date = new Date()

setTodo = () => {
  let todoItem = document.getElementById("todo-input").value;
  todos[date.getTime()] = todoItem;
  localStorage.setItem("todos", JSON.stringify(todos));
}

