let binarySearch = (arr, val) => {
  if (typeof arr !== 'object' || typeof val !== 'number') {return null;}
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(arr.length / 2);

  while (start <= end) {
    if (arr[mid] > val) {
      start = 0;
      end = mid - 1;
      mid = Math.floor(end / 2);
    } else if (arr[mid] < val) {
      start = mid + 1;
      end = arr.length - 1;
      mid = Math.floor((start+end)/2);
    } else if (val === arr[mid]) {
      return mid;
    }
  }

  return -1;
};

module.exports = binarySearch;
