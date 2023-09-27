// console.log(a);
// var a = 3 ; 
// console.log(a);

// all these things in global winodow is gloab object.
// arrow function works like a variable we will  get undefined in hoisting
// we may not able to call it better to use normal function whole function defination get hoisted in this case.



var x = 3 ;
let y = 'hii'
console.log(x,y);
a();
b();

function a(){
    var x = 4 ; 
    let y = 'hellow';
    console.log(x,y);
}

function b(){
    var x = 5; // in javascript var has function scope.
    let y = 'hey' // let and const are not global scope can't acess by global keyword they
    console.log(x,y);
}
console.log(x,y)