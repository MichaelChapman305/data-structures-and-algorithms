'use strict';

class Node {
  constructor() {
    this.val = null;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    let node = new Node();
    node.val = val;
    node.next = this.head;
    this.head = node;
    return this.head.val;
  }

  includes(val) {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
};
