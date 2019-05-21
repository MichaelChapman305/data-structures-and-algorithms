let insertShiftValue = (arr, val) => {
  let arrLength = arr.length;
  let result = [];

  if (typeof arr !== 'object' || typeof val !== 'number') {return null};

  if (arrLength % 2 === 0) {
    for (let i = 0; i < arrLength + 1; i++) {
      if (i === arrLength / 2) {
        result[i] = val;
      } else if (i < arrLength / 2) {
        result[i] = arr[i];
      } else {
        result[i] = arr[i - 1];
      }
    }
  } else {
    for (let i = 0; i < arrLength + 1; i++) {
      if (i === (arrLength + 1) / 2) {
        result[i] = val;
      } else if (i < (arrLength + 1) / 2) {
        result[i] = arr[i];
      } else {
        result[i] = arr[i - 1];
      }
    }
  }

  return result;
}

module.exports = insertShiftValue;
