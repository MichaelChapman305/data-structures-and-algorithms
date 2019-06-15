'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class binarySearchTree {
  constructor(node) {
    this.root = node;
  }

  // Contains method runs at 0(log(n)) meaning distance between root and the node
  // increases space by O(h)

  // pre order traversal function

  // O(n)
  preOrder() {
    
  }

  // O(n)
  inOrder(fn) {
    let results = [];

    // recursive helper function
    // This is working by utilizing the event loop
    // when it hits the leaf, the step before runs where it was left off, on line 25++
    // timestamp 4:41
    let _walk = node => {
      // L Ro R

      // Left
      if (node.left) _walk(node.left);

      // Ro
      // Do something
      fn(node.value);
      
      // Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);

    return results;
  }

  // This function does not run better with recursion like the traversals
  add(node) {
    if (!this.root) {
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (node.value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (node.value > currentNode.value) {
        // Go right
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        // Duplicate value
        // Were not adding if equal due to binary SEARCH tree, otherwise we would add this value
        throw new Error('Value already exists in Binary Search Tree');
      }
    }
  }
}

module.exports = binarySearchTree;