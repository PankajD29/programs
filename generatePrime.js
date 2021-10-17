function isPrime(n){
  for (let i = 2; i < n; i++) {
    if (n%i===0) {
      return false;
    }
  }
  return true;
}

function generatePrime(n){
  let outPutPrimeArr=[];
  let i=2;
  while (outPutPrimeArr.length<n) {
    if (isPrime(i)) {
      outPutPrimeArr.push(i)
    }
    i++;
  }
  return outPutPrimeArr;
}

console.log(generatePrime(5));
