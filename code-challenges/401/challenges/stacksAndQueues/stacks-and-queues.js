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
    let result = this.top.val;
    this.top = this.top.next;
    this.length--;

    return result;
  }

  peek() {
    return this.top.val;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    if (!val) return false;

    let node = new Node();
    node.val = val;

    if (!this.front) {
      this.front = node;
      this.back = node;
      this.length++;
      return node.val;
    }

    this.back.next = node;
    this.back = this.back.next;
    this.length++;
  }

  dequeue() {
    let result = this.front.val;
    this.front = this.front.next;
    this.length--;

    return result;
  }

  peek() {
    return this.front.val;
  }
}

exports.stack = Stack;
exports.queue = Queue;
