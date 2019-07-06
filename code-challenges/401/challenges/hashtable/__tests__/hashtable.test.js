'use strict';

const { HashTable } = require('../hashtable.js');

describe('Hash Table', () => {
  test('Should construct a Hash Table', () => {
    // arrange
    let expectedSize = 5;

    // act
    let hashtable = new HashTable(expectedSize);

    // assert
    expect(hashtable).toBeInstanceOf(HashTable);
    expect(hashtable.size).toBeDefined();
    expect(hashtable.size).toBe(expectedSize)
    expect(hashtable.buckets.length).toBe(expectedSize);
  });

  describe('hash(key)', () => {
    test('Should successfully hash a key to an in range value', () => {
      // arrange
      let expectedHash = 3;
      let key = 'cat';
      let hashtable = new HashTable(5);

      // act
      let result = hashtable.hash(key);

      // assert
      expect(result).toBe(expectedHash);
    });

    test('Should hash foo to 1 with 5 buckets', () => {
      // arrange
      let expectedHash = 1;
      let key = 'foo';
      let hashtable = new HashTable(5);

      // act
      let result = hashtable.hash(key);

      // assert
      expect(result).toBe(expectedHash);
    });
  });

  describe('add(key, value)', () => {
    test('Should add the key value pair to the hashtable', () => {
      // arrange
      let key = 'baz';
      let value = 'bar';
      let hashtable = new HashTable(5);

      //act
      hashtable.add(key, value);
      let result = hashtable.hash(key);

      //assert
      expect(hashtable.buckets[result].head.value[1]).toBe('bar');
    });

    test('Should be able to handle a collision', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('key', 'value');
      hashtable.add('yek', 'anotherValue');

      let result = hashtable.hash('key');

      // assert
      expect(hashtable.buckets[result].head.value[1]).toBe('value');
      expect(hashtable.buckets[result].head.next.value[1]).toBe('anotherValue');
    });
  });

  describe('get(key)', () => {
    test('Given a key, should return the value', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('foo', 'bar');
      hashtable.add('key', 'value');

      // assert
      expect(hashtable.get('foo')).toBe('bar');
    });

    test('Should return null if key does not exist', () => {
      // arrange
      let hashtable = new HashTable(5);

      // act
      hashtable.add('key', 'value');

      // assert
      expect(hashtable.get('foo')).toBe('bar');
    });

    test('Should return the value from a bucket within a hashtable that has a collision', () => {
      // arrange
      // let hashtable = new hashTable(5);
      let hashtable = new HashTable(5);

      // act
      hashtable.add('key', 'value');
      hashtable.add('yek', 'anotherValue');

      let result = hashtable.hash('key');
      let result2 = hashtable.hash('yek');

      // assert
      expect(hashtable.get('key')).toBe('value');
      expect(hashtable.get('yek')).toBe('anotherValue');
    });
  });
});