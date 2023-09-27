// const x = function (a, b) {return a * b}
// document.getElementById("demo").innerHTML = x(4, 3)


// anonymous function 


// (function(){
//     let x = "hellow";
//     console.log(x)
// })();


// // # arrow function 
// const fun = (x,y)=>{
//    return x*y*y
// }
// let c = fun(3,3)
// console.log(c)



function sum(...args){
    for (let x of args){
        console.log(x*x)
    }
}

sum(1,2,3,4)

function hellow(name){
    console.log("hellow", name)
}
hellow("neha kakkar")



function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    console.log(this)
  }
  
  const myObj = new myFunction("John","Doe")
  document.getElementById("demo").innerHTML = myObj.firstName; 