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
    let temp = this.top.val;
    this.top = this.top.next;
    this.length--;
    return temp;
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

  enqueue(val) {
    if (!val) return 'No value';
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack1.length) {
      while (this.stack1.length) {
        let temp = this.stack1.pop();
        this.stack2.push(temp);
      }
    }

    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
