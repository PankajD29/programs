// function LList(){
//   this.head=new Node("head");
//   this.find=find;
//   this.insert=insert;
//   //this.remove=remove;
//   this.display=display;
// }
//
//
// function Node(element){
//   this.element=element;
//   this.next=null;
// }
//
// function find(item){
//   var currNode=this.head;
//   while (currNode.element != item) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }
//
// function insert(newElement,item){
//   var newNode=new Node(newElement);
//   var current=this.find(item);
//   newNode.next=current.next;
//   //currNode=currNode.next;
// }
//
// function display(){
//   var currNode = this.head;
//   while (!currNode.next==null) {
//     console.log(currNode.next.element);
//     currNode=currNode.next;
//   }
// }
//
// var cities= new LList();
// cities.insert('Mumbai','head');
// cities.insert('Pune','Nagar');
// cities.insert('Klhaur','Satara');
// console.log(cities);

class Node {
  constructor(data) {
    this.data=data;
    this.next=null;
  }
}

class LinkedList {
  constructor() {
    this.head=null;
    this.size=0;
  }
  insert(data){
    let node = new Node(data);
    if (this.head==null) {
      this.head=node;
      this.size++;
    }
    else {
      let current=this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next=node;
      this.size++;
    }
  }
  remove(data){
    if (this.head==null) {
      return -1;
    }
    let current = this.head;
    let prev = null;
    while (current !=null) {
      if (current.data==data) {
        if (prev==null) {
          this.head=current.next;
        }else {
          prev.next=current.next;
        }
        this.size--;
        return current.data;
      }
      prev=current;
      current=current.next;
    }
    return -1;
  }
  printList(){
    while (this.head!=null) {
      console.log(this.head.data,this.head.next);
      this.head=this.head.next;    //current=current.next
    }
  }
}

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.printList();
