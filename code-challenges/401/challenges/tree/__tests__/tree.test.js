'use strict';

let binaryTree = require('../tree.js');

describe('binaryTree', () => {
  let tree;
  beforeEach(() => {
    tree = new binaryTree();
  });
  describe('constructor', () => {
    it('Should create a new binaryTree', () => {
      expect(tree).toBeDefined();
      expect(tree).toBeInstanceOf(binaryTree);
    });
  });

});