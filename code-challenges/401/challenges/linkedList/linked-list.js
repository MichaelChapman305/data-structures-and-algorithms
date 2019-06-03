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

  insertBefore(node, val) {
    let newNode = new Node();
    newNode.val = val;
    let current = this.head;

    while(current) {
      if (current.next.val === node) {
        newNode.next = current.next;
        current.next = newNode;
        return val;
      } else {
        current = current.next;
      }
    }

    return 'Node could not be found';
  }

  insertAfter(node, val) {
    let newNode = new Node();
    newNode.val = val;
    let current = this.head;

    while(current) {

      if (current.val === node) {
        newNode.next = current.next;
        current.next = newNode;
        return val;
      } else {
        current = current.next;
      }
    }

    return 'Node could not be found';
  }

  append(val) {
    let node = new Node();
    node.val = val;
    let current = this.head;

    while(current) {
      if (!current.next) {
        current.next = node;
        return val;
      } else {
        current = current.next;
      }
    }
  }

  print() {
    let current = this.head;
    let list = [];
    while (current) {
      console.log(current.val);
      list.push(current.val);
      current = current.next;
    }

    return list;
  }
};

module.exports = LinkedList;
