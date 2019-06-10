class Node {
  constructor() {
    this.val = null;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    if (!val) return false;

    let node = new Node();

    node.val = val;

    if (!this.top) {
      this.top = node;
      this.length++;
      return node.val;
    } 

    node.next = this.top;
    this.top = node;
    this.length++;

    return this.top.val;
  }

  pop() {
    this.top = this.top.next;
    this.length--;
  }

  peek() {
    return this.top.val;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

}
