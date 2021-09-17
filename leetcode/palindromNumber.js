let num=1222;

const checkPalindrom =(num)=>{
  let stringNum= Number(String(num).split('').reverse().join(''));
  if (stringNum===num) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkPalindrom(num));
