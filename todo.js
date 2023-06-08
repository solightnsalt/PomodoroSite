const addBtn = document.querySelector(".add-btns");
const todoInput = document.querySelector(".input-todo");
const saves = document.querySelector(".todo-text");

function clickInput() {
  //클릭하면, class="add-btns"가 id="hidden"으로 바뀐다 ⓐ
  //클릭하면, class='sumbit-todo'의 id='hidden'이 삭제된다. ⓑ
  document.querySelector(".add-btns").id = "hidden";
  document.querySelector(".submit-todo").removeAttribute("id");
}

function saveTodo(event) {
  event.preventDefault();
  console.log(todoInput.value); //test가 아니라 input한게 입력되도록 고치기 완료!
  const newTodo = todoInput.value;
  todoInput.value = "";
  document.querySelector(".submit-todo").id = "hidden";
  document.querySelector(".add-btns").removeAttribute("id");
}
const inputBtn = document.querySelector(".input-btn");

addBtn.addEventListener("click", clickInput);
inputBtn.addEventListener("click", saveTodo);
// saves.addEventListener('submit',saveTodo);
