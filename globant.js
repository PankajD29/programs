// let user = {
//   name: 'pankaj',
//   tech: 'Nodejs',
//   experience: 3.4,
// };

// for (let key of user) {
//   console.log(key);
// }

// function testCall(obj) {
//   console.log(this);
// }

// testCall.apply({ a: 20 });

// function parentClousure() {
//   var a = 10;
//   return function childClousure() {
//     // console.log(a);
//     return a;
//   }
// }

// console.log(parentClousure());


// function makeFunc() {
//     var name = 'Mozilla';
//     return function displayName() {
//       console.log(name);
//     }
//     // return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

//op = ["name", "pankaj", "tech", "Nodejs", "experience", 3.6]

// let obj = {
//   name: 'pankaj',
//   designation: 'developer',
// };

// function empDetails(name, designation) {
//   this.name = name;
//   this.designation = designation;
// }

// let empObject =new empDetails('pankaj','developer');
// console.log(empObject)

// string, number, Boolean, null ,undefined
// function convertJsonToArray(user) {
//   let outputArr = [...user];
//   return outputArr;
// }

// console.log(convertJsonToArray(user));

// let obj1 = { a: 10 };
// obj2 = JSON.parse(JSON.stringify(obj1));

// obj1.a = 20;

// console.log(obj2); //

// {
//   a: 20;
// }




// const l=2;
// console.log(l); // please intialize VARIABLE with value beacuse it is const so we have to declare some value to it.
// //console.log(a); // a is not defined.
// console.log(b); // 2

// let a = 1; 
// var b = 2;


function test(a=10){
console.log(a);
}


test();