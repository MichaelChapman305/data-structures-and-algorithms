'use strict';

function fizzCheck(val) {
  if (val % 15 === 0) {
    return 'FizzBuzz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else {
    return val;
  }
}


let FizzBuzzTree = (tree) => {
  if (typeof tree !== 'object' || !tree.root.value) return 'Not a valid tree';

  let _walk = (node) => {
    if (node.left) _walk(node.left);

    node.value = fizzCheck(node.value);

    if (node.right) _walk(node.right);
  }

  _walk(tree.root);

  return tree;
};

module.exports = FizzBuzzTree;
