'use strict';

let mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // get the two halves of the array
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively separate the arrays 
  left = mergeSort(left);
  right = mergeSort(right);

  // call merge sort with each half
  return merge(left, right);
};

function merge(left, right) {
  let newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // while the indexes are less than the array lengths
  while (leftIndex < left.length && rightIndex < right.length) {
    // Compare left index to right index
    if (left[leftIndex] < right[rightIndex]) {
      // Push the smaller value
      newArr.push(left[leftIndex]);
      // Move up index
      leftIndex++;
    } else {
      // Push the smaller value
      newArr.push(right[rightIndex]);
      // Move up index
      rightIndex++;
    }
  }
  
  // There will be one more left over from either left or right, this could either be done with an if 
  // statement, 2 more while loops checking for both left and right array values, or using the concat method
  return newArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}