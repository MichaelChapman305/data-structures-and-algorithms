'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('multi bracket validation module', () => {
  it ('Should only take a string', () => {
    let result = multiBracketValidation({})

    expect(result).toEqual('Not a valid string');
  });

  it ('Should return false if the brackets do not match', () => {
    let result = multiBracketValidation('()[}{]')

    expect(result).toEqual(false);
  });

  it ('Should return false if the brackets do not match when the array also includes other characters', () => {
    let result = multiBracketValidation('(abcdef)[g}{hijk]')

    expect(result).toEqual(false);
  });

  it ('Should return true if the brackets match', () => {
    let result = multiBracketValidation('(){}[]')

    expect(result).toEqual(true);
  });

  it ('Should return true if the brackets match when the array also includes other characters', () => {
    let result = multiBracketValidation('(abcdef)[g]{hijk}')

    expect(result).toEqual(true);
  });
});