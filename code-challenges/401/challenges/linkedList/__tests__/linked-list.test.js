'use strict';

const linkedList = require('../linked-list.js');

describe('linked-list module', () => {
  let list;
  beforeEach(() => {
    list = new linkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(list).toBeDefined();
  });

  describe('Insert', () => {
    it('Should take a value and return said value', () => {
      expect(list.insert(3)).toEqual(3);
    });
  
    it('Should properly insert multiple nodes', () => {
      list.insert(8);
      list.insert(22);
      let current = list.head;
      expect(current.val).toEqual(22);
      expect(current.next.val).toEqual(8);
    });
  });

  describe('includes', () => {
    it('Should take a value and return true if value is found', () => {
      list.insert(8);
      list.insert(22);
      expect(list.includes(22)).toEqual(true);
      expect(list.includes(33)).toEqual(false);
    });
  })

  describe('print', () => {
    it('Should console log all values in linked list', () => {
      let mockConsoleLog = jest.spyOn(console, 'log');

      mockConsoleLog.mockImplementation(() => true);

      list.print();
      expect(mockConsoleLog).not.toBeCalled();
    });
  });

  describe('append', () => {
    it('Can successfully append node to the end of the linkedList', () => {
      list.insert(1);
      list.insert(2)
      list.append(3);
      let current = list.head;
      expect(current.next.next.val).toEqual(3);
    });

    it('Can successfully append node to the end of the linkedList and returns the value', () => {
      expect(list.append(-3)).toEqual(-3);
    });

    it('Can successfully append multiple nodes to the end of the list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      let current = list.head;
      expect(current.val).toEqual(1);
      expect(current.next.val).toEqual(2);
      expect(current.next.next.val).toEqual(3);
    });
  });

  describe('insertBefore', () => {
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
      list.insert(1);
      list.insert(2);
      list.insert(4);
      list.insertBefore(1, 3);
      let current = list.head;
      expect(current.next.next.val).toEqual(3);
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertBefore(1, 0);
      let current = list.head;
      expect(current.val).toEqual(0);
    });
  });

  describe('insertAfter', () => {
    it('Can successfully insert a node after a node located in the middle of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAfter(2, 3);
      let current = list.head;
      expect(current.next.next.val).toEqual(3);
    });

    it('Can successfully insert a node after the last node of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAfter(3, 4);
      let current = list.head;
      expect(current.next.next.next.val).toEqual(4);
    });
  });
});
