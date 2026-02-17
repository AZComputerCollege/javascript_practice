// How to target classes and Id and tags selectors

// ==== Method 1 ====
// let containerDiv = document.getElementById("container");

// console.log(containerDiv);

// containerDiv.style.backgroundColor = "red";

// containerDiv.lastElementChild.style.background = "yellow";


// === Method 2 ===
// let boxes = containerDiv.getElementsByClassName("box");

// console.log(boxes);
// // boxes[2].style.backgroundColor = "blue";

// [...boxes].forEach((element,key) => {
//     // console.log(element,key);
//     element.style.color = "white";
// });


// === Method 3 ===
// let boxes = document.getElementById("container").getElementsByTagName("div");

// console.log(boxes);


// === Method 4 ===

let containerDiv = document.querySelector("#container");


// console.log(containerDiv);

containerDiv.style.background = "orange";

// === Method 5 ===
// let boxes = document.querySelector(".box");

// console.log(boxes);


// ==== Method 6 ====
// let boxes = document.querySelectorAll('.box');

// console.log(boxes);

// Array.from(boxes).forEach((element)=>{
//     element.style.background = "skyblue";
// })


// ==== Method 7 ====
// let attributeDiv = document.querySelector("[custom]")


let attributeName = '[custom="check2"]';
let attributeDiv = document.querySelector(attributeName);






console.log(attributeDiv);

