let p = 10000;
let interest = 5;
let startingDate = '2023-10-15';
let endingDate = '2023-10-20';

function validateDate(s,e){
    if (s != 'Invalid Date' && e != 'Invalid Date'){
        return true;
    }
    else{
        return false;
    }
}

// console.log(validateDate(startingDate,endingDate))

function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ){
  // Add your code here
  let s = new Date(startingDate);
  let e = new Date(endingDate);
  if(validateDate(s,e)){
    let days = (e - s)/(1000*60*60*24);
    let interest = (principal*dailyInterest/100)*days
    return  Math.floor(interest);
  }
  else{
  return -1;
//   
  }}

console.log(calculateSimpleInterest(20000,1,'2020-12-27', '2021-08-27'))

function calculateCompoundInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    let s = new Date(startingDate);
    let e = new Date(endingDate);
    let days = (e - s)/(1000*60*60*24);
    if (validateDate(s,e)){
        let interest = principal*(Math.pow(1+(dailyInterest/100) ,days ) -1 )
        return Math.floor(interest);
    }
    else{
        return -1
    }
  }

  console.log(calculateCompoundInterest(20000,1,'2020-12-27', '2021-08-27'))