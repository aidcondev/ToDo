
// const name = 'Aidan';
// const age = 2;
// let message = `my name is ${name}` + " And I am " + age + " years old!";

// console.log(message);

// const lovesJavascript = true

// if (lovesJavascript) {
//     console.log(name + "loves javascript?")
// }

let tasks = []

function addTask () {
    let taskInput = document.getElementById("new-task");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        renderTaskList();
        taskInput.value = "";
    }
}


function renderTaskList() {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement("li");
        console.log(listItem);
        listItem.textContent = tasks[i];
        taskList.appendChild(listItem);
    }
}