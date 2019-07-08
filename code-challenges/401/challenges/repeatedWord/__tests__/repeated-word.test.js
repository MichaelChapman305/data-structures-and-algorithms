'use strict';

let repeatedWord = require('../repeated-word');

describe('repeatedWord', () => {
  test('Should only take a string', () => {
    expect(repeatedWord(1234)).toBe('Not a valid string');
  });

  test('Should return the first repeated word of a string', () => {
    let str = "Once upon a time, there was a brave princess who was brave"
    expect(repeatedWord(str)).toBe('a');
  });

  test('Should return the first repeated word taking into account commas and punctuation', () => {
    let str = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York";
    expect(repeatedWord(str)).toBe('summer');
  });

  test('Should handle if no duplicates are found', () => {
    let str = "This is a string without duplicates";
    expect(repeatedWord(str)).toBe('No duplicates found');
  });
});