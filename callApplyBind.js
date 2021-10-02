let person1={
  name:'Pankaj',
  age:30
};

let person2={
  name:'Ashwini',
  age:22
};

function personInfo(greeting1,greeting2){
  console.log(`${greeting1} ${this.name} ${greeting2} ${this.age}`);
}

personInfo.call(person1,'hey','your age is');
personInfo.apply(person1,['hey','your age is']);
let ashwiniInfo= personInfo.bind(person2);
ashwiniInfo('hey','your age is');
