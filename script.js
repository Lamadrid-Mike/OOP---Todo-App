let todoInput = document.querySelector(".todoInput");
let todoBtn = document.querySelector(".todoBtn");
let todoTable = document.querySelector(".todoTable");
let removeBtn = document.querySelector(".removeBtn");

class App {
  inputValue = "";
  constructor() {
    todoInput.addEventListener("keypress", this.postTodoOnKeyPress.bind(this));
    todoBtn.addEventListener("click", this.postTodo.bind(this));
    removeBtn.addEventListener("click", this.removeTodo.bind(this));
  }

  postTodoOnKeyPress(e) {
    if (e.key === "Enter") this.postTodo();
  }

  postTodo() {
    this.inputValue = todoInput.value;
    if (this.inputValue === "") return alert("Invalid");
    const html = `
    <div class="form-check form-switch check-input">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
    <label class="form-check-label" for="flexSwitchCheckDefault"
      ><h3>${this.inputValue}</h3></label
    >
  </div>
    `;
    todoTable.insertAdjacentHTML("afterbegin", html);
    todoInput.value = "";
    removeBtn.style.display = "block";
  }

  removeTodo() {
    let toRemove = Array.from(document.querySelectorAll(".check-input"));
    if (toRemove.every((el) => el.children[0].checked))
      removeBtn.style.display = "none";

    toRemove.forEach((el) => {
      if (el.children[0].checked) el.remove();
    });
  }
}

const app = new App();
