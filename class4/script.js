// Creating an element using js

let containerDiv = document.getElementById("container");

// containerDiv.innerHTML+='<div class="box"><h2>Box 4</h2></div>';

let newDiv = document.createElement('div');
newDiv.className = "box";
newDiv.innerHTML = "<h2>Box 4</h2>";


let boxOne = document.querySelector(".box");

// containerDiv.prepend(newDiv);
// boxOne.replaceWith(newDiv);



const showAlert = (type,msg) => {
    let newAlertDiv = document.createElement('div');
    newAlertDiv.className = "alertBox";
    let bgColor = "blue";
    if(type=="success"){
        bgColor = "green";
    }else if(type=="warning"){
        bgColor = "orangered";
    }else if(type=="danger"){
        bgColor="red";
    }
    newAlertDiv.style.background=bgColor;
    newAlertDiv.innerHTML = "<h2>"+msg+"</h2>";
    document.body.prepend(newAlertDiv);

    setTimeout(()=>{
         newAlertDiv.remove();
    },2000);
}


// showAlert("warning","Message submitted successfully");
showAlert("danger","Message submitted failed!");


// const makeActive=(elem)=>{
//     elem.parentElementNode.array.forEach(element => {
//         element.classList.remove("active");
//     });

//     elem.classList.add("active");
// }

// let element = containerDiv.querySelectorAll('.box');

// makeActive(element[1]);


const makeActive = (elem) => {
    let parent = elem.parentElement;   // correct property
    let boxes = parent.querySelectorAll('.box');  // get all siblings

    boxes.forEach(element => {
        element.classList.remove("active");
    });

    elem.classList.add("active");
}

let element = containerDiv.querySelectorAll('.box');

makeActive(element[1]);


