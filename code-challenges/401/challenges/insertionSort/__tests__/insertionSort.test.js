'use strict';

const insertionSort = require('../insertionSort');

describe('insertionSort()', () => {
  let arr;
  beforeEach(() => {
    arr = [5, 4, 3, 2, 1];
  });

  it('Should only take an array', () => {
    // act
    let result = insertionSort('Hello');

    // assert
    expect(result).toBeDefined();
    expect(result).toBe('Not a valid array');
  });

  it('Should return the sorted array', () => {
    // act
    let result = insertionSort(arr);

    // assert
    console.log(result);
    expect(result).toBeDefined();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should not modify the array', () => {
    // act
    let result = insertionSort(arr);

    // assert
    expect(result.length).toEqual(5);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
  });

  it('Should only take numbers', () => {
    // arrange
    let array = ['1', '2', '3'];

    // act
    let result = insertionSort(array);

    // asser
    expect(result).toBe('Not valid data');
  });
});