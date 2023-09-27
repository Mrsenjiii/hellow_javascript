// 

var a = 3;
console.log(a);
x();
y();
function x(){
    console.log(a);
}

// first global execution context is created declear variables with undefined and function with its code
// then whenever function is called a seprate local execution context is created 
// in local execution local variable gets decleare with undefined 
// after end of function local execution code will pop out from stack.
function y(){
    var a = 5;
    console.log(a);
}
