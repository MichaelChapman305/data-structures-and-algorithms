'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
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

  postOrder() {
    let results = [];

      let _walk = node => {
        // Ro L R

        // Left
        if (node.left) _walk(node.left);
        
        // Right
        if (node.right) _walk(node.right);

        // Ro
        // Do something
        results.push(node.value);
      };

      _walk(this.root);

      return results;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
  }

  add(value) {
    let node = new Node(value);
    
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
        return 'Value already exists';
      }
    }
  }
}

module.exports = {BinaryTree, BinarySearchTree};