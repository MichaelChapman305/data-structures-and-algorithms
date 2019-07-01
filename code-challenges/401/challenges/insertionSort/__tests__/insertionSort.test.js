'use strict';

const insertionSort = require('../insertionSort.js');

describe('', () => {
  let arr;
  beforeEach(() => {
    arr = [5, 4, 3, 2, 1];
  });

  it('Should only take an array', () => {
    // act
    let result = insertionSort(arr);

    // assert
    expect(result).toBeDefined();
    expect(result).toBe('Not a valid array');
  });

  it('Should return the sorted array', () => {
    // act
    let result = insertionSort(arr);
    // assert
    expect(result).toBeDefined();
    expect(result).toBe([1, 2, 3, 4, 5]);
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
});