window.onload=function(){ //Wait for DOM to load before loading scripts
//OBJECTS
    const addTasks = document.querySelector(".add-tasks");
    const taskList = document.querySelector(".tasks");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const uncheckAll = document.getElementsByClassName(".uncheckAll");
    const checkAll = document.getElementsByClassName(".checkAll");
    const deleteAll = document.getElementsByClassName(".deleteAll");

    const options = document.getElementsByClassName(".option");

//EVENT LISTENERS
addTasks.addEventListener("submit", addTask);

//FUNCTIONS
function addTask(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=task]")).value;
    const item = {
        text,
        done: false
    };
    tasks.push(item);
    populateVisualList(tasks,taskList);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.reset();
}

function populateVisualList(todos = [], todoList) {
    todoList.innerHTML = todos.map((todo, i) => {
        return `
      </tr>
        <tr>
        <td> 
        <input type="checkbox" data-index=${i} id="item${i}" ${todo.done ? "checked" : ""}/>
        </td>
        <td>
        <label for="item${i}">${todo.text}</label>
        </td>
        <td><div class="form-group"> 
    <div class="col-md-6 selectContainer">
    <div class="input-group">
    <select name="topic" class="form-control selectpicker optionList" >
      <option value=" " >Choose Topic</option>
          <option class="option">Exercise</option>
          <option class="option">Education</option>
          <option class="option">Hobby</option>
          <option class="option">Family</option>
          <option class="option">Pets</option>
          <option class="option">Cleaning</option>
          <option class="option">Career</option>
          <option class="option">Recreational</option>
          <option class="option">Health</option>
          <option class="option">Other</option>
         </select>
     </div>
    </div>
  </td>
        `;
    }).join("");

}

function isDone(e) {
    //skip this unless it is an input type
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    populateVisualList(tasks, taskList);

}

function changingAll(e) {
    e.preventDefault();
    if(!e.target.matches("input")) return;
    //uncheck all
    console.log(e.target);
    const le = e.target;
    //check all
    //delete all
    //FINISH!
}

function saveOption(e) {
    console.log(e);
}

addTasks.addEventListener("submit", addTask);
taskList.addEventListener("click", isDone);
populateVisualList(tasks, taskList);

uncheckAll.addEventListener("click", changingAll);
checkAll.addEventListener("click", changingAll);
deleteAll.addEventListener("click", changingAll);

options.addEventListener("click", saveOption)

}


// FUNCTION MODEL FOR changingAll
//     function science()
//     {
//         var c1 = document.getElementById('c1'), // Checkbox 1
//             c2 = document.getElementById('c2'), // Checkbox 2
//             c3 = document.getElementById('c3'), // Checkbox 3
//             total = 0; // Our starting total
             
//         if (c1.checked) total += c1.value; // If checked, add c1 value
//         if (c2.checked) total += c2.value; // If checked, add c2 value
//         if (c3.checked) total += c3.value; // If checked, add c3 value
         
//         alert(total); // Alert total
//     }
// </script>


// <input type="checkbox" id="c1" value="50"/>
// <input type="checkbox" id="c2" value="50"/>
// <input type="checkbox" id="c3" value="50"/>
// <input type="button" onclick="science()"/>