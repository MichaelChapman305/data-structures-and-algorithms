'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');

describe('fizz buzz tree module', () => {
  let tree = {};
  beforeEach(() => {
    tree.root = {value: 15, left: null, right: null};
    tree.root.left = {value: 10, left: null, right: null};
    tree.root.left.left = {value: 3, left: null, right: null};
    tree.root.right = {value: 20, left: null, right: null};
    tree.root.right.right = {value: 24, left: null, right: null}
    tree.root.right.left = {value: 2, left: null, right: null};
  });

  it('Should only take a tree', () => {
    expect(fizzBuzzTree('string')).toEqual('Not a valid tree');
  });

  it('Should return a modified tree', () => {
    let results = fizzBuzzTree(tree);

    expect(results.root.value).toEqual('FizzBuzz');
    expect(results.root.left.value).toEqual('Buzz');
    expect(results.root.left.left.value).toEqual('Fizz');
    expect(results.root.right.value).toEqual('Buzz');
    expect(results.root.right.right.value).toEqual('Fizz');
  });

  it('Should leave values that are not divisible by 3, 5, or 15 alone', () => {
    let results = fizzBuzzTree(tree);
    
    expect(results.root.value).toEqual('FizzBuzz');
    expect(results.root.left.value).toEqual('Buzz');
    expect(results.root.left.left.value).toEqual('Fizz');
    expect(results.root.right.value).toEqual('Buzz');
    expect(results.root.right.right.value).toEqual('Fizz');
    expect(results.root.right.left.value).toEqual(2);
  });
});