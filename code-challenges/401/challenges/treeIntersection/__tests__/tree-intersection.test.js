'use strict';

let treeIntersection = require('../tree-intersection');
let trees = require('../../tree/tree');

describe('treeIntersection(tree1, tree2)', () => {
  let tree1;
  let tree2;
  beforeEach(() => {
    tree1 = new trees.BinarySearchTree();
    tree2 = new trees.BinarySearchTree();

    // create root
    tree1.root = {value: 25, left: null, right: null};
    tree2.root = {value: 28, left: null, right: null};

    // root.left
    tree1.root.left = {value: 15, left: null, right: null};
    tree2.root.left = {value: 25, left: null, right: null};

    // root.left.left
    tree1.root.left.left = {value: 10, left: null, right: null};
    tree2.root.left.left = {value: 33, left: null, right: null};

    // root.left.right
    tree1.root.left.right = {value: 20, left: null, right: null};
    tree2.root.left.right = {value: 35, left: null, right: null};

    // root.right
    tree1.root.right = {value: 30, left: null, right: null};
    tree2.root.right = {value: 5, left: null, right: null};

    // root.right.right
    tree1.root.right.right = {value: 35, left: null, right: null};
    tree2.root.right.right = {value: 10, left: null, right: null};

    // root.right.left
    tree1.root.right.left = {value: 28, left: null, right: null};
    tree2.root.right.left = {value: 17, left: null, right: null};
  });

  test('Should return matching node values from each tree in an array', () => {
    let result = treeIntersection(tree1, tree2);

    expect(result).toBeDefined();
    expect(result.length).toEqual(4);
    expect(result).toBeInstanceOf(Array);
    expect(result).toContain(25);
    expect(result).toContain(28);
    expect(result).toContain(10);
    expect(result).toContain(35);
    expect(result).not.toContain(15);
    expect(result).not.toContain(33);
    expect(result).not.toContain(20);
    expect(result).not.toContain(40);
    expect(result).not.toContain(30);
    expect(result).not.toContain(5);
    expect(result).not.toContain(17);
  });

  test('Should only take trees', () => {
    let tree3 = 'tree';
    let tree4 = 'tree';

    expect(treeIntersection(tree3, tree4)).toBe('Not a valid tree');
  });

  test('Should not modify the trees', () => {
    treeIntersection(tree1, tree2);

    expect(tree1.root.value).toEqual(25);
    expect(tree1.root.left.value).toEqual(15);
    expect(tree1.root.left.left.value).toEqual(10);
    expect(tree1.root.left.right.value).toEqual(20);
    expect(tree1.root.right.value).toEqual(30);
    expect(tree1.root.right.right.value).toEqual(35);
    expect(tree1.root.right.left.value).toEqual(28);

    expect(tree2.root.value).toEqual(28);
    expect(tree2.root.left.value).toEqual(25);
    expect(tree2.root.left.left.value).toEqual(33);
    expect(tree2.root.left.right.value).toEqual(35);
    expect(tree2.root.right.value).toEqual(5);
    expect(tree2.root.right.right.value).toEqual(10);
    expect(tree2.root.right.left.value).toEqual(17);
  });
});
