// IF
// IF-ELSE
// IF_ELSE_IF


// String Concatination
// +

// === Arithematic Operators ===
// + - * / %

// === Comparison Operators ===
// > , < , >= , <= , == , ===

// === Logical Operators ===
// AND = &&, OR = || , not = !

// === Assignment Operator ===
// =



// let age = prompt("Enter Your Age");
// if(age>=18){
//     alert("You are adult");
//     // license
//     // ID
//     // phone
//     // email
// }else{
//     alert("you are child");
// }





// let isstudent = confirm("Are you student?");

// if(isstudent){
//     let marks = prompt("Enter Your Marks");

//     if(marks>=90){
//         alert("You got A+ GRADE");
//     }
//     else if(marks>=80){
//         alert("You got A GRADE");
//     }
//     else if(marks>=70){
//         alert("You got B GRADE");
//     }
//     else if(marks>=60){
//         alert("You got C GRADE");
//     }
//     else if(marks>=50){
//         alert("You got D GRADE");
//     }
//     else if(marks>=40){
//         alert("You got E GRADE");
//     }else{
//         alert("You are Fail");
//     }
// }else{
//     alert("Sorry! you are not eligible");
// }




// Program to find even or odd number
// let num = prompt("Enter Your Numebr");
// if(num%2==0){
//     alert("This is EVEN Number");
// }else{
//     alert("This is ODD Number");    
// }


// Program to find Leap Year
// let year = prompt("Enter Year");
// if(year%4==0){
//     alert("This is Leap Year");
// }else{
//     alert("This is not Leap Year");    
// }


// 2.5% of 175000 

// 175000 * (2.5/100)







// Find the smallest number;
// let a =Number(prompt("enter value of a"));
// let b =Number(prompt("enter value of b"));
// let c =Number(prompt("enter value of c"));



// if((a<b) && (a<c)){
//     console.log("Yes a is the smallest: "+a);
// }else if((b<a) && (b<c)){
//     console.log("Yes b is the smallest: "+b);
// }else if((c<a)&&(c<b)){
//     console.log("Yes c is the smallest: "+c);
// }



// Find the vowels

// let c = prompt("Enter the character");

// if(c=="a" || c=="A" || c=="e" || c=="E" || c=="i" || c=="I" || c=="o" || c=="O" || c=="u" || c=="U"){
//     alert("Your character is vowel");
// }else{
//     alert("your character is consonant");
// }






// Program statement:

// Take username and password from user. Match it with system stored username and password if match then get them login otherwise say "Sorry! Your attempt is unseccessfull".


let admin_username= "admin";
let admin_password = 1234;


let username= prompt("Enter your username");
let password = prompt ("Enter your password");

if(username==admin_username && password == admin_password){
    alert("You are successfully logged in");
}else{
    alert("Sorry! Your attempt is unseccessfull");
}


