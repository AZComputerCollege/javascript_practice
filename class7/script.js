// console.log("js initalized");

// how to target form
// let form = document.forms[0];
// let form = document.forms.uform;



// console.log(form.elements.uname.value);


// let radioElement = form.elements.gender;
// let radioElement = form.elements["gender"];
// let userName = form.elements["uname"];

// console.log(radioElement);
// console.log(form.elements);

// let fieldset = form.elements.userFields;


// form.elements.uname.value = "Tanveer";

// form.elements.uname.name = "firstname";


// console.log(form.elements[3]);


// console.log(radioElement.value);


// console.log(radioElement);

// radioElement.value = "other";

// radioElement[1].checked = true;


// let message = document.querySelector("#message");



// console.log(message.value);




// ====== Focus/Blur =======

// console.log(input, error);

// input.onblur = function () {
//     if (!this.value.includes('@')) { // not email
//         input.classList.add('invalid');
//         error.innerHTML = 'Please enter a correct email.'

//         input.focus();
//     }
// };

//   input.onblur = function() {
//     if (!this.value.includes('@')) { // not email
//       // show the error
//       this.classList.add("error");
//       // ...and put the focus back
//       input.focus();
//     } else {
//       this.classList.remove("error");
//     }
//   };

// input.onfocus = function () {
//     if (this.classList.contains('invalid')) {
//         // remove the "error" indication, because the user wants to re-enter something
//         this.classList.remove('invalid');
//         error.innerHTML = "";
//     }
// };




// form Elements Events

let form = document.forms[0];

let inputElement = form.elements.uname;
console.log(inputElement);

// inputElement.addEventListener("change",(event)=>{
//     alert("Value Changed");
// });



// inputElement.addEventListener("input",(event)=>{
//     console.log(inputElement.value);
// });


// inputElement.addEventListener("copy",(event)=>{
//     console.log("copied==>",document.getSelection());
// });





form.onsubmit = (event)=>{
    event.preventDefault();
    // console.log("submitting");

    console.log(form.elements.uname.value);

}