// console.log(a);
// var a = 3 ; 
// console.log(a);

// all these things in global winodow is gloab object.
// arrow function works like a variable we will  get undefined in hoisting
// we may not able to call it better to use normal function whole function defination get hoisted in this case.
// let and const are block scope means {let a } and {let a } is completly valid and different.

var x = 3 ; // in the global scope 
let y = 'hii' // in the script scope
console.log(x,y);
a();
b();

function a(){
    var x = 4 ;  // locally available different form global
    let y = 'hellow'; // present locally in this function 
    console.log(x,y);
}

function b(){
    var x = 5; // in javascript var has function scope(function local scope)
    let y = 'hey' // var , let and const are function scope different from global one 
    console.log(x,y);
}
console.log(x,y)