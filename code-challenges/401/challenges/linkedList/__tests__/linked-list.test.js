'use strict';

const linkedList = require('../linked-list.js');

describe('linked-list module', () => {
  let list = new linkedList();

  it('Can successfully instantiate an empty linked list', () => {
    expect(list).toBeDefined();
  });

  it('Insert should take a value and return said value', () => {
    expect(list.insert(3)).toEqual(3);
  });

  it('Insert can properly insert multiple nodes', () => {
    list.insert(8);
    list.insert(22);
    expect(list.print()).toEqual([22, 8, 3]);
  });

  it('Includes should take a value and return true if value is found', () => {
    expect(list.includes(22)).toEqual(true);
    expect(list.includes(33)).toEqual(false);
  });

  it('Insert should take a value and return said value', () => {
    // inserted values from above
    expect(list.head.val).toEqual(22);
  });

  it('Print should return an array of values', () => {
    expect(list.print()).toEqual([22, 8, 3]);
  });
});
