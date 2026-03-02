// Array to store tasks
let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    // Add task into array
    tasks.push(taskValue);

    // Clear input
    input.value = "";

    // Re-render list
    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = ""; // clear old list

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}