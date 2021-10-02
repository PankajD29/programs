function Stack(){
  this.dataStore=[];
  this.top=0;
  this.push=push;
  this.pop=pop;
  this.peek=peek;
  this.clear=clear;
}

// class Stack {
//   constructor() {
//     this.dataStore=[],
//     this.top=0;
//   }
//   push=push;
//   pop=pop;
//   peek=peek;
//   clear=clear;
// }

function push(element){
  this.dataStore[this.top++]=element;
}

function peek() {
  return this.dataStore[this.top-1]
}

function pop(){
  this.dataStore.pop();
  this.top--;
}

function clear(){
  this.top = 0;
}


var stackobj = new Stack();
stackobj.push('pankaj');
stackobj.push('ashwini');
console.log(stackobj.dataStore);
console.log(stackobj.peek());
stackobj.pop()
console.log(stackobj.dataStore.length);
console.log(stackobj.peek());
