'use strict';

let binaryTree = require('../tree.js');

//          25
//        /    \ 
//      15      30
//     /  \    /  \
//   10    20 28   35

describe('binaryTree', () => {
  let tree;
  beforeEach(() => {
    tree = new binaryTree();

    // create root
    tree.root = {value: 25, left: null, right: null};

    // root.left
    tree.root.left = {value: 15, left: null, right: null};
    // root.left.left
    tree.root.left.left = {value: 10, left: null, right: null};
    // root.left.right
    tree.root.left.right = {value: 20, left: null, right: null};

    // root.right
    tree.root.right = {value: 30, left: null, right: null};
    // root.right.right
    tree.root.right.right = {value: 35, left: null, right: null};
    // root.right.left
    tree.root.right.left = {value: 28, left: null, right: null};
  });

  describe('constructor', () => {
    it('Should create a new binaryTree', () => {
      expect(tree).toBeDefined();
      expect(tree).toBeInstanceOf(binaryTree);
    });
  });

  describe('inOrder method', () => {
    it('Should return an array of numbers from least to greatest', () => {
      let inOrder = tree.inOrder();

      expect(inOrder).toBeDefined();
      expect(inOrder).toEqual([10, 15, 20, 25, 28, 30, 35]);
    });

    it('Should not modify the tree', () => {
      tree.inOrder();

      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.right.value).toEqual(35);
      expect(tree.root.right.left.value).toEqual(28);
    });
  });
});