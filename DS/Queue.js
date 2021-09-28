function Queue(){
  this.dataStore=[];
  this.enqueue =enqueue;
  this.dequeue=dequeue;
  this.front=front;
  this.back=back;
  this.toString=toString;
  this.empty=empty;
}

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
  this.dataStore.shift();
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length-1];
}

function toString(){
  var retString="";
  for (var i = 0; i < this.dataStore.length; i++) {
    retString+=this.dataStore[i] +'\n';
  }
  return retString;
}

function empty(){
  if (this.dataStore.length==0) {
    return true;
  }
  else {
    return false;
  }
}

var q = new Queue();
q.enqueue('pankaj')
q.enqueue('ashwini')
q.enqueue('dhumal')
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(q.front());
console.log(q.back());
