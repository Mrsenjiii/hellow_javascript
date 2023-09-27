// var a = 3;
// {
//     var a = 4;
//     console.log(a); //  value 4 changed in the gloabal scope 

// }
// console.log(a); // 4 as it is changed in the gloabal scope.


let a = 3 ; // in the script


{
    let a = 4 ;  // in the block scope both a and b are in different sceop 
    console.log(a);
}


console.log(a); // will give the value 3 from script scope.f 