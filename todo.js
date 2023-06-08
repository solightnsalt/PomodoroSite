// function javaScriptGo (){

const addBtn = document.querySelector(".add-btns");

function clickInput() {
  addBtn.innerHTML = `<input type="text" autofocus placeholder="할 일을 입력해주세요."/>`;
}

addBtn.addEventListener("click", clickInput);

// }
// javaScriptGo();
