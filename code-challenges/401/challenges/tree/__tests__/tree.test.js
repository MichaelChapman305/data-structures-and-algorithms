'use strict';

let trees = require('../tree.js');

//          25
//        /    \ 
//      15      30
//     /  \    /  \
//   10    20 28   35

describe('binaryTree', () => {
  let tree;
  beforeEach(() => {
    tree = new trees.BinaryTree();

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
      expect(tree).toBeInstanceOf(trees.BinaryTree);
    });
  });

  describe('inOrder method', () => {
    it('Can successfully return a collection from an inOrder traversal', () => {
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

  describe('preOrder method', () => {
    it('Can successfully return a collection from a preorder traversal', () => {
      let preOrder = tree.preOrder();

      expect(preOrder).toBeDefined();
      expect(preOrder).toEqual([25, 15, 10, 20, 30, 28, 35]);
    });

    it('Should not modify the tree', () => {
      tree.preOrder();

      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.right.value).toEqual(35);
      expect(tree.root.right.left.value).toEqual(28);
    });
  });

  describe('postOrder method', () => {
    it('Can successfully return a collection from a postorder traversal', () => {
      let postOrder = tree.postOrder();

      expect(postOrder).toBeDefined();
      expect(postOrder).toEqual([10, 20, 15, 28, 35, 30, 25]);
    });

    it('Should not modify the tree', () => {
      tree.postOrder();

      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.right.value).toEqual(35);
      expect(tree.root.right.left.value).toEqual(28);
    });
  });

  describe('breadthFirst', () => {
    it('Console logs all of the items in a tree', () => {
      let spy = jest.spyOn(console, 'log');

      tree.breadthFirst(tree);

      expect(spy).toHaveBeenCalledTimes(7);
      spy.mockRestore();
    });

    it('Should not modify the tree', () => {
      tree.breadthFirst(tree);

      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.right.value).toEqual(35);
      expect(tree.root.right.left.value).toEqual(28);
    });
  });

  describe('find-maximum-value()', () => {
    it('Should only take a tree', () => {
      //act
      let result = tree.findMaximumValue('this is not a tree');

      //assert
      expect(result).toBe('Not a valid tree');
    });



    it('Should return the maximum value in the tree', () => {
      //act
      let result = tree.findMaximumValue(tree);

      //assert
      expect(result).toEqual(35);
    });

    it('Should not modify the tree', () => {
      //act
      tree.findMaximumValue(tree);

      //assert
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

//          25
//        /    \ 
//      15      30
//     /  \    /  \
//   10    20 28   35

describe('Binary Search Tree', () => {
  let tree;
  
  beforeEach(() => {
    tree = new trees.BinarySearchTree();

    tree.add(25);
  });

  describe('constructor', () => {
    it('Should create a new binarySearchTree', () => {
      expect(tree).toBeDefined();
      expect(tree).toBeInstanceOf(trees.BinarySearchTree);
    });
  });

  describe('add method', () => {
    it('Can successfully a tree with a single root node', () => {
      expect(tree.root).toBeDefined();
      expect(tree.root.value).toEqual(25);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
      tree.add(15);
      tree.add(10);
      tree.add(20);
      tree.add(30);
      tree.add(28);
      tree.add(35);

      expect(tree.root).toBeDefined();
      expect(tree.root.value).toEqual(25);
      expect(tree.root.left.value).toEqual(15);
      expect(tree.root.left.left.value).toEqual(10);
      expect(tree.root.left.right.value).toEqual(20);
      expect(tree.root.right.value).toEqual(30);
      expect(tree.root.right.left.value).toEqual(28);
      expect(tree.root.right.right.value).toEqual(35);
    });

    it('Should not add value if value exists', () => {
      tree.add(15);

      expect(tree.add(15)).toEqual('Value already exists');
    });
  });

  describe('contains method', () => {
    it('Should return true if tree contains value', () => {
      tree.root.left = {value: 15, left: null, right: null};
      tree.root.right = {value: 30, left: null, right: null};

      expect(tree.contains(15)).toBeTruthy();
    });

    it('Should return false if tree does not contain value', () => {
      tree.root.left = {value: 15, left: null, right: null};
      tree.root.right = {value: 30, left: null, right: null};

      expect(tree.contains(20)).toBeFalsy();
    });

    it('Should not run if no value is specified', () => {
      expect(tree.contains()).toEqual('No value');
    });
  });
});