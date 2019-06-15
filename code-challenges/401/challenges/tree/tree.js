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

  preOrder() {
    let results = [];

      let _walk = node => {
        // Ro L R

        // Ro
        // Do something
        results.push(node.value);

        // Left
        if (node.left) _walk(node.left);
        
        // Right
        if (node.right) _walk(node.right);
      };

      _walk(this.root);

      return results;
  }
}

module.exports = binaryTree;