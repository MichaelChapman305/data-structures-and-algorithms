let reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }

  return arr;
}
