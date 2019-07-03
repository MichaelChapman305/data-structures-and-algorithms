let quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

let partition = (arr, low, high) => {
  let i = low - 1;
  let pivot = arr[high];

  for (j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;

      swap(arr, j, i);
    }
  }

  swap(arr, high, i + 1);
  return (i + 1)
};

let swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};