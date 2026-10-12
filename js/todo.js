const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = document.querySelectorAll("#filter-buttons button");

const storageKey = "todos";

let todos = loadTodos();
let currentFilter = "all";


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

    let visibleTasks = 0;

    todos.forEach(function(todo, index) {

        if (currentFilter === "open" && todo.completed) {
            return;
        }

        if (currentFilter === "done" && !todo.completed) {
            return;
        }

        visibleTasks++;

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


    if (visibleTasks === 0) {
        emptyMessage.style.display = "block";

        if (currentFilter === "open") {
            emptyMessage.textContent = "No open tasks.";
        } else if (currentFilter === "done") {
            emptyMessage.textContent = "No completed tasks.";
        } else {
            emptyMessage.textContent = "No tasks yet.";
        }

    } else {
        emptyMessage.style.display = "none";
    }
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


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(function(otherButton) {
            otherButton.classList.remove("active-filter");
        });

        button.classList.add("active-filter");

        render();
    });

});


render();
