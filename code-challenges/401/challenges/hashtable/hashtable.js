'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    if(!value) throw new Error('Invalid value');

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }

  getWithKey(key) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value[0] === key) return current.value[1]; 
      current = current.next;
    }

    return;
  }

  values() {
    let values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size || 5,
    this.buckets = new Array(this.size);
  }

  hash(key) {
    // This is the actual hash function controling where the values get placed
    let hash = key.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0) * 599 % this.size;

    return hash;
  }

  add(key, value) {
    if (!key) throw new Error('Invalid key provided');
    // if (this.contains(key)) throw new Error('Key already being used');

    let index = this.hash(key);

    if (!this.buckets[index])  { this.buckets[index] = new LinkedList(); }

    try{
      // this.buckets is an array
      // this.buckets[index] is a Linked List
      // Must put key and value for lookup
      this.buckets[index].add([key, value]);
    } catch(err) {
      throw err;
    }
  }

  get(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    console.log(this.buckets);

    return this.buckets[index].getWithKey(key);
  }

  contains(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    return this.buckets[index].getWithKey(key) ? true : false;
  }
}

module.exports = { HashTable, LinkedList };