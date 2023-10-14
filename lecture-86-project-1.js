// const container = document.querySelector(".container");
const todoFrom = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.querySelector("#lists");
//create todo

const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoId;

    todoElement.classList.add("li-style");
    todoElement.innerHTML = `<span>${todoValue}</span>
    <span><button class="btn" id="deleteButton"><i class="fa  fa-trash">    </i> </button></span>`;



    todoLists.appendChild(todoElement);
}



//todo function

const addTodo = (event) => {
    event.preventDefault();

    const todoValue = todoInput.value;

    // unique id

    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);

    // console.log(todoInput.value);
}
// ading listener

todoFrom.addEventListener("submit", addTodo);


// todoFrom.addEventListener("submit", (event) => {

//     event.preventDefault();
//     console.log(todoInput.value);
// });