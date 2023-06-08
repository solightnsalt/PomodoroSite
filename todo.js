const addBtn = document.querySelector(".add-btns");
const todoInput = document.querySelector(".input-todo");
const saves = document.querySelector(".todo-text");
const inputBtn = document.querySelector(".input-btn");
// const todoCard = document.querySelector("todo-card");

let data = JSON.parse(localStorage.getItem("data"));
if (data === null) {
  localStorage.setItem("data", JSON.stringify([]));
}
// 현재 페이지 첫입성시 data = null > [] 로직 진행 후 새로고침 필요

console.log("get성공!", data);

const postApi = (newContent) => {
  const date = new Date();
  let data = JSON.parse(localStorage.getItem("data"));

  // 임의의 Id값을 만들기
  const createId = () => {
    const idDate =
      `${date.getFullYear()}` +
      `${date.getMonth() + 1}` +
      `${date.getDate()}` +
      `${date.getHours()}` +
      `${date.getMinutes()}`;
    const id = Math.floor(Number(idDate) + Math.random() * Number(idDate));
    return id;
  };

  const newData = {
    id: createId(),
    content: newContent,
  };
  data.push(newData);

  localStorage.setItem("data", JSON.stringify(data));
};

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
  postApi(newTodo);
}

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   // todoCard.innerText = newTodo
//   todoList.appendChild(li);
// }

addBtn.addEventListener("click", clickInput);
inputBtn.addEventListener("click", saveTodo);
