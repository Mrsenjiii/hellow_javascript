// class Person {
//     constructor(name){
//         this.name=name;
//         this.age=23;
//     }

//     static fromJson(obj){
//         let new_obj = new Person(obj.name);
//         new_obj.sound = obj.sound;
//         return new_obj;
//     }
// }

// result = new Person('Abhi');
// console.log(Person.fromJson(JSON.parse(JSON.stringify(result))))

var y = 33 
let x = 50;
const obj1 = {
    x:10,
    func : function(){
        console.log(this.x)
    }
}

const obj2 = {
    x:20,
    func:()=>{
        function abc(){
            console.log(x , "and" ,this.x)
            console.log(this)
            obj1.func.call(this)
        }
        abc()
    },
    // func2:()=>{
    //     console.log(x)
    //     console.log(this)
    //     console.log(x)
    // }
}
obj2.func()



// let name='ruhi';

// const myObject = {
//     value: 42,
//     getValue: function() {
//       return this.value; // 'this' refers to myObject
//     }
//   };

// function Person(name) {
//     this.name = name;
//     console.log(this)
// }
  
//   const john = new Person('John');

//   function greet() {
//     console.log(`Hello, ${this}`);
//   }
  
//   const person = { name: 'Alice' };
//   greet.call(person); // 'this' in greet refers to the 'person' object
// const human = {
//     name: 'Bob',
//     greet: () => {
//       console.log(`Hello, ${this.name}`); // 'this' refers to the outer scope (global or parent function)
//     }
//   }




// const hellowobj = {
//     let sach = 'do not exist',
//     myMethod: () => {
//       console.log(this)
//     },
//  }