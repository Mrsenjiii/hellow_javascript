// const obj ={
//     name:'rohit',
//     changeName:function (name) {
//         this.name=name;
//         console.log(this, 'obj object')
//     },
// }


// obj.changeName('rohan')
// console.log(obj.name)


// const person={
//     name:'mohan',
//     changeName:(name)=>{ // this will refer to the global object not the current object so no change in the javascripts.
//         this.name=name
//         console.log(this , "obj")
//     }
// }


// person.changeName('neha')
// // console.log(person.name)

// const obj = {
//     name:'rohit',
//     arrowFunction:null,
//     normalfunction : function(){
//         this.arrowFunction = ()=>{
//             console.log(this.name)
//         }
//     },
// }
// obj.normalfunction() // this should change normalfunction null to arrow function
// obj.arrowFunction() // this should return because in normal function this is obj so obj.name is 'rohit'

// document.getElementById('demo').style.backgroundColor='yellow';
// setTimeout(()=>{ document.getElementById('demo').style.backgroundColor='yellow' } , 0)  // this will run asynchornously
// setInterval(()=> console.log('in the time interval one'),0) /// with 0 second timeout it will put it into waiting and when the glogal stack is empty it will  pop out and run so global one will run first then priority will be given to timeout.
// console.log('first one ') // timout waale ye dekhenge ki khud ka time poora hua ya nahi then wo fir wo global stack dekhenge 
// setInterval(() => console.log('in the time interval 2nd'),0)// khaaali hai ya nahi.
// console.log('2nd one')



let startNamePrinter = (name)=>{
    let x = name.split('').reverse()
    let handeler =  setInterval(()=>{
        let y = x.pop()
        console.log(y)
    } , 1000)
    setTimeout(()=>{
        clearInterval(handeler)
    } , (name.length + 1)*1000)
}

startNamePrinter('orange')