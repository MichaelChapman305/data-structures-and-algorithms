'use strict';

module.exports = exports = {};

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

class Queue {
  constructor() {
    this.front = null;
    this.length = 0;
  }

  enqueue(val) {
    if (!val) return false;

    let node = new Node();
    node.val = val;

    if (!this.front) {
      this.front = node;
      this.length++;
      return node.val;
    }

    let current = this.front;

    while(current) {
      if (!current.next) {
        current.next = node;
        this.length++;
        return node.val;
      }

      current = current.next;
    }
  }

  dequeue() {
    this.front = this.front.next;
    this.length--;
  }

  peek() {
    return this.front.val;
  }
}

exports.stack = Stack;
exports.queue = Queue;
