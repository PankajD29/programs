// console.log(a);
// if (true) {
//   var a=10;
//   let b= 20;
// }
// console.log(a);
// console.log(b);

// var arr =[1,2,3];
// arr.forEach((item, i) => {
//   console.log(item,i);
// });

// let iterable = new Set([1, 1, 2, 2, 3, 3]);
// iterable =[...iterable];
// console.log(iterable);

// let arr=[1,2,3];
// arr.splice(1,0,100);
// console.log(arr);
// let squareArr=arr.map(cVal=>{
//   if (cVal<=2) {
//     return cVal*2;
//   }
// });

// var hasValueLessThanTen = arr.some(function (val) { 
//   return val;
// });
// console.log(hasValueLessThanTen);

// let i=10;
// function display(){
//   console.log(i);
//   var j=10;
// }
// {
//   var p=10;
// }
// // {
// //   console.log("in scope",i);
// // }
// console.log(p);
// display();

//test();
// function test(){
//   console.log("test");
// }

// var test = function(){
//   console.log("test");
// }

// const test=()=>{
//   console.log("test");
// }
//test();

// let arr=['car','bike'];
// let [car1,bike]= arr;
// console.log(car1);


// let obj ={
//   fname:"Pankaj",
//   lname:"Dhumal"
// }

// let {fname,lname}=obj;
// console.log(fname,lname);

// class vehical{
//   constructor(){
//     console.log("Vehical constructor called");
//     this.pName='constructorName'
//   }
//   start(){
//     console.log(`Engine started ${this.pName}`);
//   }
// }

// class bike extends vehical{
//   constructor(){
//     super();
//     console.log("Bike constructor called");
//   }
//   ignite(){
//     super.start();
//   }
// }

// let bikeobj = new bike();
// //let vehicalobj = new vehical();
// bikeobj.ignite();


// class staticVehical{
//   static pName='pankaj'
// }

// console.log(staticVehical.pName);

// class childStrig extends String{
//   constructor(a){
//     super(a)
//   }
//   // noc(str){
//   //   //console.log(super.toLocaleUpperCase(str));
//   //   return super.toLocaleUpperCase(str) 
//   // }
// }

// let objChildString= new childStrig('pankaj');
// console.log(objChildString.toLocaleUpperCase());
//console.log(objChildString.noc('pankaj'));


// const genFunction = function* (){
//   try {
//     yield "hello";
//   //console.log("World");
//   yield "World";
//   //console.log("from Pankaj");
//   yield "from Pankaj";
//   } catch (error) {
//     console.log(error);
//   }
//   //console.log("Hello");
  
// }

// const obj = genFunction();

// console.log(obj.next());
// //console.log(obj.throw());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// // if (obj.next().value==undefined) {
// //   console.log(obj.throw());
// // }
// //console.log(obj.return());
// for (const iterator of obj) {
//   console.log(iterator);
// }


// function fetchData(callback){
//   setTimeout(function(){
//     console.log("Fetching data.......");
//     callback("JSON Data");
//   },0)
//   // console.log("Fetching data.......");
//   // callback("JSON Data");
// }

// function displayData(data){
//   console.log(`This is ${data}`);
// }

// console.log("Start");
// //var jsonData=fetchData(displayData);
// var jsonData=fetchData(function(data){
//   console.log(data);
// });
// //displayData(jsonData);
// console.log("End");


// function square(num,cb){
//   if (typeof num !== "number") {
//     return cb(new Error("Must be number"));
//   }
//     return cb(null,num*num);
// }

// square('5',function(err,data){
//   if (err) {
//     console.log(err);
//   }
//   //console.log("iihih");
//   console.log(data);
// })

// a=11;
// const pr =new Promise((resolve,reject)=>{
//   if(a==10) resolve("Yes it is 10")
//   reject("Sorry 10 is not received");
// });

// // console.log(pr);
// pr.then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

// function square(num){
//   return new Promise((resolve,reject)=>{
//     if (typeof num !== "number") {
//     reject ({msg:"Must be number"});
//   }
//     setTimeout(()=>{
//        resolve (num*num);
//     },3000)
//   })
// }

// function multiplyby3(num){
//   return new Promise((resolve,reject)=>{
//     if (typeof num !== "number") {
//     reject (new Error({msg:"Must be number"}));
//   }
//     setTimeout(()=>{
//        resolve (num*3);
//     },3000)
//   })
// }

// //console.log(square(2));

// // square(2).then((result)=>{
// //   console.log(result); 
// //   return multiplyby3(result);
// // }).then((result)=>{
// //   console.log(result);
// // })
// // .catch((err)=>{
// //   console.log(err);
// // });
// const calculate=async()=>{
//   try {
//     let result = await square(2);
//     console.log(result);
//     let result2=await multiplyby3(result);
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
//   // let result = await square("ghfhgf");
//   // console.log("result:-",result);
//   // if (result=="Error") {
//   //   console.log("sdsa");
//   // }
// }

// calculate();


// function cube(num,cb){
//   if (typeof num!='number') {
//     throw new Error("Must be number")
//   }
//   else{
//     return cb(null,num**3);
//   }
// }

// function cube(num,cb){
//   return new Promise((resolve,reject)=>{
//     if (typeof num!='number') {
//       reject( new Error("Must be number"));
//     }
//     else{
//       resolve(num**3)
//     }
//   })
  
// }

// const calc = async ()=>{
//   try {
//     console.log(await cube('5'));
//   } catch (error) {
//     console.log(error);
//   }
// }

// calc();

// cube(5).then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

// cube(5,function(err,data){
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });