const arrayShift = require('../array-shift.js');

describe('Array shift module', () => {
  it('Should insert value into middle of array', () => {
    expect(arrayShift([1, 2, 4 ,5], 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should only take an array and a number value', () => {
    expect(arrayShift('hello', 'World')).toBeNull();
  });

  it('Should only take a number value', () => {
    expect(arrayShift([1, 2, 4, 5], 'World')).toBeNull();
  });

  it('Should work on odd numbered arrays', () => {
    expect(arrayShift([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
  });
});