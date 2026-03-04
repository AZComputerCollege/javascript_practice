let tasks = ["My first Task"];
let taskForm = document.getElementById("taskForm");
let submitBtn =  document.getElementById("subBtn");

function addTask(taskInputValue){
    tasks.unshift(taskInputValue);
}

function renderTasks(){
    let taskList =  document.getElementById("taskList");
    taskList.innerHTML = '';

    tasks.forEach((task,index)=>{
       let newLi = ` <li id="${index}-item" class="taskItem list-group-item bg-info p-3 d-flex justify-content-between align-items-center">
                    <span class="taskContent fs-5">${task}</span>
                    <div>
                    <a href="#" onclick="editTask(this,${index})"
                           class="taskEditBtn btn btn-sm btn-primary">Edit</a>
                    <a href="#"  onclick="deleteTask(this,${index})"
                       class="taskDeleteBtn btn btn-sm btn-danger">Delete</a>
                       </div>
                </li>`;

       
        taskList.innerHTML+=newLi;
    });

    console.log(tasks);

  

}



function deleteTask(element,indexToRemove){

    tasks.splice(indexToRemove,1);

    renderTasks();

}

function editTask(element, indexToEdit){
    let editIndexValue = tasks[indexToEdit];

    document.querySelector("#editIndex").value = indexToEdit;
    document.querySelector("#taskVal").value = editIndexValue;

    let subBtn = document.querySelector("#subBtn");
    subBtn.textContent = "Update";
    // subBtn.style.backgroundColor = "green";
    subBtn.classList.remove("btn-primary");
    subBtn.classList.add("btn-success");
}

function updateTask(taskValue, indexToUpdate){

    tasks[indexToUpdate] = taskValue;
    // subBtn.style.backgroundColor = "green";
    subBtn.textContent = "Submit";
     subBtn.classList.remove("btn-success");
    subBtn.classList.add("btn-primary");
}



taskForm.onsubmit = function(event){
    event.preventDefault();
   let taskInput = document.getElementById("taskVal");
    let taskInputValue = taskInput.value.trim();
    let editIndex = document.getElementById("editIndex");
    let editIndexValue = editIndex.value.trim();

    if(taskInputValue == ""){
        alert("Please enter valid task value");
    }


    console.log(editIndex);

    if(editIndexValue==null || editIndexValue==""){
        addTask(taskInputValue);
    }else{
        updateTask(taskInputValue, editIndexValue);
    }

      taskInput.value = "";
      editIndex.value="";
     renderTasks();
}

renderTasks();


