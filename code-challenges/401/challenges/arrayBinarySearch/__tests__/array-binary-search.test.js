let arrayBinary = require('../array-binary-search.js');

describe('Array shift module', () => {
  it('Should take an array', () => {
    expect(arrayBinary(7)).toBeNull();
  });

  it('Should take a number as second argument', () => {
    expect(arrayBinary([1, 2, 3, 4, 5], '4')).toBeNull();
  });

  it('Should return a number if index is found', () => {
    expect(arrayBinary([1, 2, 3, 4, 5], 4)).toEqual(3);
  });

  it('Should return -1 if number is not in array', () => {
    expect(arrayBinary([1, 2, 3, 4, 5], 7)).toEqual(-1);
  });

  it('Should work with odd number arrays', () => {
    expect(arrayBinary([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  it('Should work with even number arrays', () => {
    expect(arrayBinary([1, 2, 3, 4], 3)).toEqual(2);
  });
});