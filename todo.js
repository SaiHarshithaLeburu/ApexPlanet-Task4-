const taskInput =
    document.getElementById("taskInput");

const addTaskButton =
    document.getElementById("addTask");

const taskList =
    document.getElementById("taskList");

const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const clearTasks =
    document.getElementById("clearTasks");

const emptyMessage =
    document.getElementById("emptyMessage");


/* Get saved tasks */

let tasks =
    JSON.parse(
        localStorage.getItem("apexTasks")
    ) || [];


/* Display tasks */

function displayTasks() {

    taskList.innerHTML = "";


    if (tasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }


    tasks.forEach(
        (task, index) => {

            const li =
                document.createElement("li");


            const taskText =
                document.createElement("span");


            taskText.textContent =
                task.text;


            taskText.classList.add(
                "task-content"
            );


            if (task.completed) {

                taskText.classList.add(
                    "completed"
                );
            }


            /* Complete task */

            taskText.addEventListener(
                "click",
                function() {

                    tasks[index].completed =
                        !tasks[index].completed;

                    saveTasks();

                    displayTasks();
                }
            );


            /* Delete button */

            const deleteButton =
                document.createElement("button");


            deleteButton.textContent =
                "Delete";


            deleteButton.classList.add(
                "delete-task"
            );


            deleteButton.addEventListener(
                "click",
                function() {

                    tasks.splice(index, 1);

                    saveTasks();

                    displayTasks();
                }
            );


            li.appendChild(taskText);

            li.appendChild(deleteButton);

            taskList.appendChild(li);

        }
    );


    updateStats();
}


/* Add task */

function addTask() {

    const text =
        taskInput.value.trim();


    if (text === "") {

        alert("Please enter a task.");

        return;
    }


    tasks.push({

        text: text,

        completed: false

    });


    saveTasks();


    taskInput.value = "";

    taskInput.focus();


    displayTasks();
}


/* Save tasks */

function saveTasks() {

    localStorage.setItem(
        "apexTasks",
        JSON.stringify(tasks)
    );
}


/* Update counters */

function updateStats() {

    totalTasks.textContent =
        tasks.length;


    const completed =
        tasks.filter(
            task => task.completed
        ).length;


    completedTasks.textContent =
        completed;
}


/* Add button */

addTaskButton.addEventListener(
    "click",
    addTask
);


/* Enter key */

taskInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            addTask();
        }
    }
);


/* Clear all */

clearTasks.addEventListener(
    "click",
    function() {

        if (tasks.length === 0) {

            return;
        }


        const confirmation =
            confirm(
                "Are you sure you want to delete all tasks?"
            );


        if (confirmation) {

            tasks = [];

            saveTasks();

            displayTasks();
        }
    }
);


/* Initial display */

displayTasks();