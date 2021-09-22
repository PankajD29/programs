function Queue(){
  this.dataStore=[];
  this.enqueue =enqueue;
  this.dequeue=dequeue;
  this.front=front;
  this.back=back;
  this.toString=toString;
  this.empty=empty;
}

function Patient(name,code){
  this.name=name;
  this.code=code;
}

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
  var priority = this.dataStore[0].code;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i]<priority) {
      priority=i;
    }
  }
  return this.dataStore.splice(priority,1);
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
