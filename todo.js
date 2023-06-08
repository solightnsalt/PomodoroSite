const addBtn = document.querySelector(".add-btns");
const todoInput = document.querySelector(".input-todo");
const saves = document.querySelector(".todo-text");
const inputBtn = document.querySelector(".input-btn");
// const todoCard = document.querySelector("todo-card");

function clickInput() {
  document.querySelector(".add-btns").id = "hidden";
  document.querySelector(".submit-todo").removeAttribute("id");
}

function saveTodo(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  document.querySelector(".submit-todo").id = "hidden";
  document.querySelector(".add-btns").removeAttribute("id");
}

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   // todoCard.innerText = newTodo
//   todoList.appendChild(li);
// }

addBtn.addEventListener("click", clickInput);
inputBtn.addEventListener("click", saveTodo);
