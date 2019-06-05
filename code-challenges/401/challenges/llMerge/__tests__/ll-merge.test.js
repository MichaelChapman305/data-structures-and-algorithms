'use strict';

const mergeList = require('../ll-merge.js');
const linkedList = require('../linked-list.js');

describe('mergeList module', () => {
  let list1;
  let list2;
  beforeEach(() => {
    list1 = new linkedList();
    list2 = new linkedList();
  });

  it('Will successfully take two linked lists, and returns the head', () => {
    let node4 = {val: 4, next: null};
    let node3 = {val: 3, next: node4};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};

    list1.head = node1;
    list1.length = 4;

    list2.head = node1;
    list2.length = 4;
    expect(mergeList(list1, list2).val).toEqual(1);
  });

  it('Will successfully zip together two linked lists', () => {
    let node4 = {val: 4, next: null};
    let node3 = {val: 3, next: node4};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};

    list1.head = node1;
    list1.length = 4;

    list2.head = node1;
    list2.length = 4;
    mergeList(list1, list2);

    expect(list1.length).toEqual(8);
  });
});