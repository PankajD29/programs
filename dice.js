// function diceAPI(output){
//   return new Promise((resolve,reject)=>{
//     if (output=="error") {
//       reject(new Error("Something went wrong"));
//     }
//     else {
//       resolve(5)
//     }
//   })
// }
//
//
// diceAPI("error").then((result)=>{
//   console.log(result);
// }).catch(err)


// dice();
// var dice;
// //const dice = 5;
// var dice = function(){
//   console.log("This is dice");
// }


for(var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i)
  },0)
}


// function sumArrayElement(arr){
//   const target = 8;
//   let indexes=[];
//   let counter = 0;
//   while (target<8) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[counter]+arr[i+1]== target) {
//
//       }
//     }
//   }
//
// }

// function fun1(){
//   let name="Pankaj";
//   return function fun2(){
//     console.log(`My name is ${name}`);
//   }
//   // fun2();
// }
//
// let result = fun1();
// result();
