// const user = {
// name: {
// firstName: 'Prasanth',
// lastName: 'Kumar',
// },
// age: 23,
// gender: 'male',
// };
//
// const copy = Object.assign({}, user);
//
// copy.name.firstName = 'Yash';
//
// console.log(user.name.firstName);
// console.log(copy.name.firstName);
//
// let number = 0;
//  console.log(number++);
//  console.log(++number);
//  console.log(number);


 // var foo = { a : "a" };
 // var boo = Object.assign(foo);
 //  foo.a = "b"
 //
 //  console.log(boo.a)


 //

 // function idHandler() {
 // var id = 1;
 //
 // var _getId = function() {
 // return id;
 // }
 //
 // var _setId = function(newId) {
 // id = newId;
 // }
 //
 // return {
 // getId: _getId,
 // setId: _setId
 // }
 // }
 //
 // var idH = idHandler();
 // console.log(idH.getId());
 // console.log(idH.setId(2));
 // console.log(idH.getId());

 // const myPromise = Promise.resolve(Promise.resolve('Promise!'));
 //
 // function funcOne() {
 // myPromise.then(res => res).then(res => console.log(res));
 // setTimeout(() => console.log('Timeout!'));
 // console.log('Last line!');
 // }
 //
 // async function funcTwo() {
 // const res = await myPromise;
 // console.log(await res);
 // setTimeout(() => console.log('Timeout!'));
 // console.log('Last line!');
 // }
 //
 // funcOne();
 // funcTwo();

 // const userDetails = {
 // firstName: 'Nik',
 // lastName: 'Brown',
 //
 // get something() {
 // return this.firstName + ' ' + this.lastName
 // },
 //
 // set age(value) {
 // if(isNaN(value)) throw Error('Age should be a number')
 // this._age = Number(value)
 // },
 // get age() {
 // return this._age
 // }
 // }
 //
 // console.log(userDetails.something)
 // userDetails.firstName = 'Bobby'
 // console.log(userDetails.something)
 // userDetails.age = ''
 // console.log(userDetails.age)
 // userDetails.age = '21'
 // console.log(userDetails.age)

//  const createMember = ({ email, address = {}}) => {
// const validEmail = /.+\@.+\..+/.test(email)
// if (!validEmail) throw new Error("Valid email pls")
//
// return {
// email,
// address: address ? address : null
// }
// }
//
// const member = createMember({ email: "my@email.com" })
// console.log(member)


// console.log(process.argv);
// console('type : ' + os.type());
// var obj = Object.create([]);
// obj.push(5)
// console.log(obj+"string")

// var map = function() {
//         emit(this._id, {'count': this.count});
//     };
// var reduce = function(key, values) {
//         return {'testing':1};
//     };
// collection.mapReduce(
//     map,
//     reduce,
//     {
//         query:{ '_id': /s.*/g },
//         sort: {'count': -1},
//         limit: 10,
//         jsMode: true,
//         verbose: false,
//         out: { inline: 1 }
//     },
//     function(err, results) {
//         logger.log(results);
//     }
// );

// const EventEmitter = require('events');
//
// let emitter = new EventEmitter();
//
// emitter.on('myEvent', () => {
// 	console.log('hi 1');
// });
//
// emitter.on('myEvent', () => {
// 	console.log('hi 2');
// });
//
// emitter.emit('myEvent');

// let arr = [];
// while(true)
// 	arr.push(1);

// var square1 = { x: 2, y: 3, area: () => this.x * this.y };
//
// function Square(x, y) {
//  this.x = x; this.y = y;
//  this.area = () => this.x * this.y;
// }
//
// var square2 = new Square(2, 3);
//
// console.log(square1.area(), square2.area())

// let c=1;
//
// function test(c) {
//  c=2;
// }
//
// test(c);
//
// console.log(c);
//
// let obj = {"a":1}
//
// function objTest(obj) {
//  obj.a=2;
// }
//
// objTest(obj);
//
// console.log(obj.a);
//
// let obj1 = {"a":1}
//
// function objTest1(...obj1) {
//  obj1.a=2;
// }
//
// objTest1(obj1);
//
// console.log(obj1.a);

// function Employee(name, dept) {
//  this.name = name;
//  this.dept = dept;
// }
//
// var emp = Object.create(Employee);
// console.log(emp.length)


const key = {"a":"b"};
let obj = {"a":"b"};
obj[key] = "obj";
for(let c of obj) {
 console.log(c);
}
