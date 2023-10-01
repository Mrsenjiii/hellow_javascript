// 1.


// const a = {'a':3,'b':4,'c':function (){return true}}
// const b = {__proto__:a , 'd':34}
// const e = {'a':3,'b':3}
// console.log(a.length )
// console.log(a.c())
// console.log(b.c())
// console.log(e.length) // do not have direct way to get length.



// // 2.
class A{

    constructor(name){
        this.name=name;
    }
    get output(){
        return this.name;
    }
    set input(name){
        this.name = name;
    }

}

const obj = new A();
obj.input = 'rohit';
const jsonstrg = JSON.stringify(obj)
console.log(typeof(JSON.parse(jsonstrg)))



// x = [1,2,3,4,5]
// x[0] =34
// console.log(x) // shallow copy
// y = [...x,8,9]
// console.log(y)


// x = [1, 2, 2, 4, 5, -2, -7, -9]
// console.log(x.sort((a, b) => a - b)) // a-b if negative then a comes first means ascending order