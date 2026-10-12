const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");

const storageKey = "todos";

let todos = loadTodos();


function loadTodos() {
    const savedTodos = localStorage.getItem(storageKey);

    if (savedTodos) {
        return JSON.parse(savedTodos);
    }

    return [];
}


function saveTodos() {
    localStorage.setItem(storageKey, JSON.stringify(todos));
}


function render() {
    list.innerHTML = "";

    emptyMessage.style.display =
        todos.length === 0 ? "block" : "none";

    todos.forEach(function(todo, index) {

        const item = document.createElement("li");
        item.className = "todo-item";

        if (todo.completed) {
            item.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", function() {
            toggleTodo(index);
        });


        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = todo.text;


        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteTodo(index);
        });


        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(deleteButton);

        list.appendChild(item);
    });
}


function addTodo(text) {
    todos.push({
        text: text,
        completed: false
    });

    saveTodos();
    render();
}


function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;

    saveTodos();
    render();
}


function deleteTodo(index) {
    todos.splice(index, 1);

    saveTodos();
    render();
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addTodo(text);

    input.value = "";
});


render();
