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
    this.length = 0;
  }

  insert(val) {
    let node = new Node();
    node.val = val;
    node.next = this.head;
    this.head = node;
    length++;
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

  insertBefore(value, newValue) {
    let newNode = new Node();
    newNode.val = newValue;
    let current = this.head;
    
    if (current.val === value) {
      newNode.next = this.head;
      this.head = newNode;
      length++;
      return newValue;
    } else {
      while(current) {
        if (current.next.val === value) {
          newNode.next = current.next;
          current.next = newNode;
          length++;
          return newValue;
        } else {
          current = current.next;
        }
      }
    }

    return 'Node could not be found';
  }

  insertAfter(value, newValue) {
    let newNode = new Node();
    newNode.val = newValue;
    let current = this.head;

    while(current) {
      if (current.val === value) {
        newNode.next = current.next;
        current.next = newNode;
        length++;
        return newValue;
      } else {
        current = current.next;
      }
    }

    return 'Node could not be found';
  }

  append(val) {
    let node = new Node();
    node.val = val;

    if (!this.head) {
      this.head = node;
      length++;
      return val;
    } 

    let current = this.head;

    while(current) {
      if (!current.next) {
        current.next = node;
        length++;
        return val;
      } else {
        current = current.next;
      }
    }
    return val;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
};

module.exports = LinkedList;
