//Given a 32 bit integer to reverse digit an integer

//Input 123
//output 321

const reverseNum =(x)=>{
  if (x<0) return -1 * reverseNum(-x);
    const solution = (x+"").split('').reverse().join('');
    return (solution>2**31 -1)?0:solution;
}

console.log(reverseNum(-120));
