'use strict';

let mergeSort = require('../mergeSort');

describe('mergeSort()', () => {
  it('Should sort an array with an odd amount of values', () => {
    // arrange
    let arr = [5, 7, 8, 4, 3, 2, 9];

    // act
    let sorted = mergeSort(arr);

    // assert
    expect(sorted).toEqual([2, 3, 4, 5, 7, 8, 9]);
  });

  it('Should sort an array with an even amount of values', () => {
    // arrange
    let arr = [5, 7, 8, 4, 3, 2];

    // act
    let sorted = mergeSort(arr);

    // assert
    expect(sorted).toEqual([2, 3, 4, 5, 7, 8]);
  });

  it('Should sort an array with 1 value', () => {
    // arrange
    let arr = [5];

    // act
    let sorted = mergeSort(arr);

    // assert
    expect(sorted).toEqual([5]);
    expect(sorted.length).toEqual(1);
  });

  it('Should not modify the array', () => {
    // arrange
    let arr = [5, 7, 8, 4, 3, 2];

    // act
    let sorted = mergeSort(arr);

    // assert
    expect(sorted.length).toEqual(6);
    expect(sorted).toContain(5);
    expect(sorted).toContain(7);
    expect(sorted).toContain(8);
    expect(sorted).toContain(4);
    expect(sorted).toContain(3);
    expect(sorted).toContain(2);
  });
});
