// How to change html or text inside a html tag

let containerDiv = document.getElementById("container");


let boxOne = containerDiv.querySelector(".box");


console.log(boxOne.textContent);

boxOne.hidden = true;
// boxOne.innerHTML = "<h1>Checking One</h1>";

// boxOne.innerHTML += "<h1>Checking One</h1>";


// console.log(boxOneHeading);
// [boxOneHeading][0].text = "checking";

// boxOne.textContent += " Check";

// console.log(boxOne.nodeValue);


// console.log(boxOne.querySelector("h2").nodeType);




