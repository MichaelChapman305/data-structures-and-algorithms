'use strict';

let quickSort = require('../quickSort');

describe('quickSort module', () => {
  test('Should sort an array with even number of items', () => {
    let arr = [30, 50, 80, 20, 70, 100, 10, 90];

    quickSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([10, 20, 30, 50, 70, 80, 90, 100]);
  });

  test('Should sort an array with odd number of items', () => {
    let arr = [30, 50, 80, 20, 70, 100, 10, 90, 40];

    quickSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([10, 20, 30, 40, 50, 70, 80, 90, 100]);
  });

  test('Should not modify the items in the array', () => {
    let arr = [30, 50, 80, 20, 70, 100, 10, 90, 40];

    quickSort(arr, 0, arr.length - 1);

    expect(arr.length).toEqual(9);
    expect(arr).toContain(10);
    expect(arr).toContain(20);
    expect(arr).toContain(30);
    expect(arr).toContain(40);
    expect(arr).toContain(50);
    expect(arr).toContain(70);
    expect(arr).toContain(80);
    expect(arr).toContain(90);
    expect(arr).toContain(100);
  });
});
