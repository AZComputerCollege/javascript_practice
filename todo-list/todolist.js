let tasks = [];
let taskForm = document.getElementById("taskForm");
let submitBtn =  document.getElementById("subBtn");

function addTask(){
    
    let taskInput = document.getElementById("taskVal");
    let taskInputValue = taskInput.value.trim();

    if(taskInputValue == ""){
        alert("Please enter your task");
    }


    tasks.unshift(taskInputValue);

    taskInput.value = "";
    renderTasks();
}

function renderTasks(){
    let taskList =  document.getElementById("taskList");
    taskList.innerHTML = '';

    tasks.forEach((task,index)=>{
       let newLi = ` <li id="${index}-item" class="taskItem list-group-item bg-info p-3 d-flex justify-content-between align-items-center">
                    <span class="taskContent fs-5">${task}</span>
                    <a href="#"  onclick="deleteTask(this,${index})"
                       class="taskDeleteBtn btn btn-sm btn-danger">Delete</a>
                </li>`;

       
        taskList.innerHTML+=newLi;
    });

    console.log(tasks);

  

}


function deleteTask(element,indexToRemove){

    tasks.splice(indexToRemove,1);

    renderTasks();

}



taskForm.onsubmit = function(event){
    event.preventDefault();
    addTask();
}



