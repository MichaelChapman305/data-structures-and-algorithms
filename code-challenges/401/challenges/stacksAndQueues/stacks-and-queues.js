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
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;

      return this.top.val;
    }
  }
}

exports.stack = Stack;
