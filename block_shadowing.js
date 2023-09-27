

{
    // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization 
    let a = 3 ; 
    var b = 4 ; 
    const c = 5 ; 
    console.log(a);
    console.log(b);
    console.log(c);
    // this block variable will exists until the scope is active after that they disappear or delteed 
}


console.log(b);
console.log(a); // will throw error a is not defined coz it is deleted .
console.log(c);