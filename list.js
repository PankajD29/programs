function List(){
   this.listSize = 0;
   this.pos = 0;
   this.dataStore=[];  //Initializes the store list elements
   this.toString = toString;
   this.append = append;
   //this.remove = remove;
   this.length =length;
}

//Length of the list

function length(){
  return this.listSize;
}

function append(element){
  this.dataStore[this.listSize++]=element;
}

function toString(){
  return this.dataStore;
}

var names = new List();
names.append('pankaj');
names.append('ashwini');

console.log(names);
console.log(names.toString());
