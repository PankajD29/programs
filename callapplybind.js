let name ={
  firstName:"Pankaj",
  lastName:"Dhumal",
}

let name2 = {
  firstName:"Ashwini",
  lastName:"Dhumal"
}

let printFullName = function(hometown){
  console.log(`${this.firstName} ${this.lastName} ${hometown}`);
}

printFullName.call(name,'Phaltan');
//Apply
printFullName.apply(name2,['Phaltan']);
//function borrowing
//polyfill for bind
//function curring
//bind
let printFullNameBind = printFullName.bind(name2,'Phaltan');
printFullNameBind();
