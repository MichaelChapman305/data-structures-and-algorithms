'use strict';

let insertionSort = (arr) => {
  if (!Array.isArray(arr)) {
    return 'Not a valid array';
  }

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Not valid data'
    }

    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = temp;
  }

  return arr;
}

module.exports = insertionSort;
