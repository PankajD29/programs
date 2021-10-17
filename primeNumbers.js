let arr=[1,2,3,4,5,6,7,8,9,10];
// function(val,ind,arr){
//
// 		if(val === !false){
//     	return val
//     }
// }
//
// (element)=>{
//   if (element%2!=0) {
//     //console.log(element);
//     return (element);
//   }
//   return false;
// }
function primeNumbers(arr){
  let evenResult = arr.filter(element=>element%element==0)
  console.log(evenResult.sort(()=>{return -1}));

  // let oddResult = arr.filter(element=>element%2!=0)
  // console.log(oddResult.sort(()=>{return 1}));
}
//
// let abserdArray=[3,4,8,5,55,66,77,88,23,13];
// console.log(abserdArray.sort((a,b)=>{if(a<b){return -1}}));
// let oddResult = arr.map(function(val,ind,arr){
// 		if(val%2!=0){
//     	return val
//     }
//     return arr;
// })
// console.log(oddResult.sort());

console.log(primeNumbers(arr));
