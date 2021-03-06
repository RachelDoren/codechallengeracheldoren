//OBJECTS
const addTasks = document.querySelector(".add-tasks");
const taskList = document.querySelector(".tasks");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const uncheckAll = document.getElementById("uncheckAll");
const checkAll = document.getElementById("checkAll");
const deleteAll = document.getElementById("deleteAll");

//FUNCTIONS
//Adds task data to local storage
function addTask(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=task]")).value;
    const item = {
        text,
        done: false
    };
    tasks.push(item);
    populateVisualList(tasks, taskList);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.reset();
}

//Populates list 
function populateVisualList(todos = [], todoList) {
    todoList.innerHTML = todos.map((todo, i) => {
        return `
      </tr>
        <tr>
        <td> 
        <label for="item${i}">${todo.text}</label>
        </td>
        <td>
        <input type="checkbox" data-index=${i} id="item${i}" ${todo.done ? "checked" : ""}/>
        </td>
        `;
    }).join("");
}

function isDone(e) {
    //skip this unless it is an input type
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    populateVisualList(tasks, taskList);
}

function uncheckingAll(e) {
    var getInputs = document.getElementsByTagName("input");
    for (var i = 0, max = getInputs.length; i < max; i++) {
        if (getInputs[i].type === 'checkbox') {
            getInputs[i].checked = false;
          }
    }
}

function checkingAll(e) {
    var getInputs = document.getElementsByTagName("input");
    for (var i = 0, max = getInputs.length; i < max; i++) {
        if (getInputs[i].type === 'checkbox') {
            getInputs[i].checked = true;
          }
    }
}

// function deletingAll(e) {

//     localStorage.removeItem("tasks", JSON.stringify(tasks));
// }


addTasks.addEventListener("submit", addTask);
taskList.addEventListener("click", isDone);
populateVisualList(tasks, taskList);

uncheckAll.addEventListener("click", uncheckingAll);
checkAll.addEventListener("click", checkingAll);
// deleteAll.addEventListener("click", deletingAll);
