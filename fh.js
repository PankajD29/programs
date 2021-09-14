// // var n=1;
// // while(n<=100){
// //   if (n%7==0) {
// //     console.log(n);
// //   }
// //   n++;
// // }
// // var number =20
// // for (var i = 0; i < number; i++) {
// //   if (i%2==0 || i%3==0 || i%6==0) {
// //       console.log(i);
// //     }
// // }
// //
// // var yearArr=[2000,2001,2002,2003,2004];
// // for (var i = 0; i < yearArr.length; i++) {
// //   console.log(yearArr[i]);
// // }
// //
// // forEach((item, i) => {
// //
// // });
// var itemsArr =["Milk","Bread","Potato"]
// // itemsArr consists of items - Milk, Bread, Potato

// // quantityArr consists of values - 5, 2, 3
// var quantityArr = [5, 2, 3]
// for (var i = 0; i < itemsArr.length; i++) {

//   for (var i = 0; i < quantityArr.length; i++) {
//     console.log(itemsArr[i]+":"+quantityArr[i]);
//   }
// }


// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr,true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month);



let racer = function() { setTimeout(() => console.log("timeout"), 0); setImmediate(() => console.log("immediate")); console.log("simple console"); process.nextTick(() => console.log("nextTick")); } racer();