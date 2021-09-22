// let inputNumber = 123;
//
// function checkPrimeNumber (inputNumber){
//   let isPrime= true;
//   if (inputNumber === 1) {
//     console.log("This is not prime number and composite number.");
//   }
//   else if (inputNumber > 1) {
//     for (let i = 2; i < inputNumber; i++) {
//       if (inputNumber % i  == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     return isPrime;
//   }
// }

let inputString= 'aabacad'

const uniqueChar = (inputString) =>{
  let isUnique=true;
  for (let i = 0; i < inputString.length -1 ; i++) {
    for (let j = i+1; j < inputString.length; j++) {
    if (inputString[i]===inputString[j]) {
        return false;
      }
      return true;
    }
  }
  // return isUnique;
}


console.log(uniqueChar(inputString));

//console.log(checkPrimeNumber(inputNumber));
