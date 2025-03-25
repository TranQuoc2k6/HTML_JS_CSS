
document.addEventListener("DOMContentLoaded", loadTodos);

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>`;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();
    if (todoText === "") return;

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    loadTodos();
}

function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}
