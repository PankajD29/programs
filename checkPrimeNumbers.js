const isPrime = (n) => {
   for(let i = 2; i < n; i++){
     console.log(i);
      if(n % i === 0){
         return false;
      }
   };
   return true;
};
const generatePrime = num => {
   const arr = [];
   let i = 2;
   while(arr.length < num){
     console.log(isPrime(i));
      if(isPrime(i)){
         arr.push(i);
      };
      i++;
      //i = i === 2 ? i+1 : i+2;
   };
   return arr;
};

console.log(generatePrime(5));
