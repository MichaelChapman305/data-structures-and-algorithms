'use strict';

let { HashTable } = require('../../hashtable/hashtable.js');
let leftJoin = require('../left-join.js');

describe('left-join', () => {
  let table1;
  let table2;

  beforeEach(() => {
    table1 = new HashTable(5);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'angered');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    table2 = new HashTable(5);
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');
  });

  test('Should return an array of arrays of the joined tables', () => {
    let result = [ 
      [ 'wrath', 'angered', 'delight' ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'guide', 'usher', 'follow' ] 
    ]

    expect(leftJoin(table1, table2)).toEqual(result)
  });

  test('Should only take hashtables', () => {
    let table3 = 'hello';
    let table4 = 'world';

    expect(leftJoin(table3, table4)).toBe('Not valid tables')
  });

  test('Should send an empty array if no matches found', () => {
    let table3 = new HashTable(5);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'angered');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    let table4 = new HashTable(5);
    table2.add('cat', 'averse');
    table2.add('dog', 'delight');
    table2.add('fish', 'idle');
    table2.add('elephant', 'follow');
    table2.add('raindeer', 'jam');
  
    expect(leftJoin(table3, table4)).toEqual([])
  });
});