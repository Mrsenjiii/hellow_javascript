const p = 10000;
const interest = 5;
let startingDate = '20.5';
let endingDate = '2023-10-20';

function validateDate(start,end){

    if (start != 'Invalid Date' && end != 'Invalid Date'){
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
  let startingDate = new Date(start);
  let endingDate = new Date(end);
  if(validateDate(startingDate,endingDate)){
    return true
  }
  return false
//   return Math.floor(interest);
  }
console.log(calculateSimpleInterest(100,5,startingDate, endingDate))
