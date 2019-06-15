'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class binaryTree {
  constructor(node) {
    this.root = node;
  }

  inOrder() {
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
        results.push(node.value)
        
        // Right
        if (node.right) _walk(node.right);
      };

      _walk(this.root);

      return results;
  }
}

module.exports = binaryTree;