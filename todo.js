function todo() {
  const addBtn = document.querySelector(".add-btns");
  const todoInput = document.querySelector(".input-todo");
  const saves = document.querySelector(".todo-text");
  const todoCards = document.querySelector(".todo-cards");
  let data = JSON.parse(localStorage.getItem("data"));
  if (data === null) {
    localStorage.setItem("data", JSON.stringify([]));
    window.location.reload();
  }

  function render() {
    todoCards.innerHTML = data
      .map((item) => {
        return `
      <div class="todo-card">    
        <div class="todo-text" >${item.content}</div>

        <div class="done-btn" data-id="${item.id}">
            <img src="img/tomato (5).png" alt="doneBtn" width="20px" height="20px" class="done-img">
            Done !
        </div>

      </div>`;
      })
      .join("");
  }
  // 현재 페이지 첫입성시 data = null > [] 로직 진행 후 새로고침 필요

  const postApi = (newContent) => {
    const date = new Date();
    // let data = JSON.parse(localStorage.getItem("data"));

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
      done: true,
    };

    data.push(newData);

    localStorage.setItem("data", JSON.stringify(data));
  };

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
    postApi(newTodo);
    render();
  }
  const inputBtn = document.querySelector(".input-btn");

  addBtn.addEventListener("click", clickInput);
  inputBtn.addEventListener("click", saveTodo);
  // saves.addEventListener('submit',saveTodo);

  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("done-btn")) {
      const remainContent = data.filter((item) => item.id !== Number(e.target.dataset.id));
      console.log(remainContent);
      data = remainContent;
      localStorage.setItem("data", JSON.stringify(data));
    }
    if (data !== null) {
      render();
    }
  });

  if (data !== null) {
    render();
  }
}

todo();
