// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  
// closure is (function and the its lexcial enviroment in which it it defined here displayName + lexical enviroment of dispalayName is 
// is just execution context of makeFunc that has variable "name" that's it lexical enviroment is just execution context of the 

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }

//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12


// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.
  