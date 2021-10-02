// const {add,sub}=require('./calc.js')
// var a1 = [1,2,3];
// var a2 = [1,2];
// console.log(a1==a2);    // Returns false
// console.log(JSON.stringify(a1)==JSON.stringify(a2));
// console.log("Addition"+add(3,5));
// function digital_root(n) {
//   // ...
//   return (n - 1) % 9 + 1;
// }
// console.log(digital_root(16));

// function descendingOrder(n){
//   var intArr = n.toString().split('');
//   return Number(intArr.sort().reverse().join(''));
// }
//
// function isPrime(num) {
//   var i, flag = true;
//   if(num==0){
//     return false;
//   }
//   else if (num==1){
//    return false;
//   }
//    else if(num+''<0){
//      return false;
//    }
//   else if(num>1){
//     let count=0;
//      for(i = 2; i <= num - 1; i++){
//        count++;
//        console.log(count);
//        if (num % i == 0) {
//            flag = false;
//            break;
//        }
//
//      }
//      console.log(count);
//
//
//                 // Check and display alert message
//             if (flag == true)
//                 return true;
//             else
//                 return false
//   }
//
// }
//
// isPrime(5099);
//
//
//
// var maxSequence = function(arr){
//   // ...
//   if(arr.length==0){
//     return 0;
//   }
//   else{
//     var maxint = Math.pow(2, 53)
//     var max_so_far = -maxint - 1
//     var max_ending_here = 0
//     var size= arr.length;
//     for (var i = 0; i < size; i++)
//     {
//         max_ending_here = max_ending_here + arr[i]
//         if (max_so_far < max_ending_here)
//             max_so_far = max_ending_here
//
//         if (max_ending_here < 0)
//             max_ending_here = 0
//     }
//     return max_so_far
//   }
//
// }
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]
//
//   function duplicateEncode(word){
//       // ...
//     var letterCount = {};
//     var letters = word.toLowerCase().split('');
//
//     letters.forEach(function(letter) {
//       letterCount[letter] = (letterCount[letter] || 0) + 1;
//     });
//
//     return letters.map(function(letter) {
//       return letterCount[letter] === 1 ? '(' : ')';
//     }).join('');
//   }
// duplicateEncode("recede");


// function expandedForm(num) {
//   return num.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
//
// }

function rgb(r, g, b){
  // complete this function
  let resultR = r. toString(16);
  let resultG = g.toString(16);
  let resultB = b.toString(16);
  let finalResult = resultR+resultG+resultB;
  return finalResult;
}
//rgb(0, 0, 0)
console.log("rgb",rgb(0, 0, 0));


// function highAndLow(numbers){
//   //console.log(numbers.split(' '));
//   let arr = numbers.split(' ').filter(word => word!= ' ');
//   console.log(arr);
//   console.log(Math.min(...arr));
//   console.log(Math.max(...arr));
//
//   //console.log(arr.sort()[0]);
//   //console.log(arr.sort().reverse()[0]);
//   // let smallest = arr.sort()[0];
//   // let largest = arr.sort().reverse()[0];
//   return `${largest} ${smallest}`;
//   // ...
// }
// //highAndLow("1 2 -3 4 5")
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// function getMiddle(s)
// {
//   var length = s.length;
// var middle = length / 2;
// let floor = Math.floor(middle);
// console.log("floor:-",floor);
// const middleNumber = Number(middle);
// console.log("middleNumber:-",middleNumber);
// const floorNumber = Number(floor);
// console.log("floorNumber:-",floorNumber);
// const mathNumber = middleNumber - floorNumber;
// console.log("mathNumber:-",mathNumber);
// if (mathNumber > 0) {
//   console.log("In");
// let finalMiddle = s[floorNumber];
// return finalMiddle;
// } else {
//   console.log("In else");
//   console.log(floorNumber-1);
// let finalMiddle1 = s[floorNumber - 1];
// let finalMiddle2 = s[floorNumber];
// return finalMiddle1 + finalMiddle2;
// }
// }

// function getMiddle(s){
//   let len1 = (s.length-1)/2;
//   let len2 = (s.length-1)/2+1;
//   console.log(len1);
//   console.log(len2);
//   console.log(s.slice(len1,len2));
//   return s.slice((s.length-1)/2, (s.length/2)+1);
// }
// //getMiddle('test')
// console.log(getMiddle('tet'));
//descendingOrder(42145);
//console.log(descendingOrder(42145));
// function likes(names) {
//   if(names.length==0){
//    return `no one likes this`;
// }
//   else if(names.length==1){
//     return `${names[0]} likes this`;
// }
// else if(names.length==2){
//   return `${names[0]} and ${names[1]} like this`;
// }
//   else if(names.length==3){
//    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// }
//   else if(names.length>=4){
//    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }
// }

// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }
// console.log(likes(['Max', 'John', 'Mark']));
// let obj={
//     a:10,
//     b:20
// }
// //let obj1=JSON.parse(JSON.stringify(obj));

// //let obj1=Object.assign(obj,{c:10});
// obj={...obj,c:10}
// //obj.a=20;

// console.log(obj);



// let str="Pankaj Rupa Pankaj Rupa akshay";
// let wordArray=str.split(" ");
//console.log(wordArray);
// var count = {};
// wordArray.forEach(function(i)
//             {
//                 count[i] = (count[i]||0) + 1;
//             });
// console.log(count);



// array.forEach((element,index) => {
//     console.log(index);
// });


// function vehical (color,type){
//     this.color=color;
//     this.type=type;
// }


// const car = new vehical('red','car');
// car.location={x:20,y:20}
// console.log(car);


// let person={name:'pankaj'}

// Object.defineProperty(person,'name',{
//     writable:false,
//     enumerable:true,
//     configurable:false
// })

// person.name='ashwini';
// delete person.name;
// console.log(person);


// Array.prototype.push("virus");
// let arr=[];
// console.log(arr);
