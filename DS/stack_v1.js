class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  peek() {
    return this.items.slice(-1)[0];
  }

  print() {
    console.log(this.items);
  }
}

var stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(3);
console.log(stack.peek());
stack.push(2);
stack.pop();
stack.push(7);
stack.print();
