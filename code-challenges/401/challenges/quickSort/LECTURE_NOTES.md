# Lecture Notes: Quick Sort

# what this algorithm is, does, and why we care.
Quick sort is an algorithm used for sorting data. It is a very fast sorting algorithm running at O(n log n) but at the same time there are edge cases where it can run much slower at O(n^2) although these cases are rare. Therefore, this is a very fast sorting algorithm that is useful for larger sets of data due to how the sorting takes place. 

## Is it more efficient than others? How does it attack the problem differently?
It has the potential of running as fast as merge sort at O(n log n) but also can run as slow as O(n^2) depending on the case as well as the implementation. This algorithm is efficient for larger sets of data, therefore if you implement it well it should run at a faster time. Also, this is not a stable sort whereas merge sort is, therefore if you need items with the same values to stay in the same positions in relation to one another then merge sort is probably your better option. Finally, this differs from merge sort in that it works by picking a pivot from somewhere in the array. Then the algorithm partitions the remaining elements in the array around that pivot. The algorithm continues breaking the array into smaller sets of data to choose a pivote and partition until the array is fully sorted.

## Learning Objectives
Students will learn how to sort an array using the quick sort method. 
Students will also become more familiar with recursive functions

## Algorithm
1. Create quick sort algorithm which takes an array, a low, and a high value
```
let quickSort = (arr, low, high) => { ... }
```
  1. Check if low is less than high
  2. If so, call partition passing in arr, low, and high
  3. call quick sort with new low
  4. call quick sort with new high
  ```
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  ```
2. Create partition function which takes the array, low, and high
```
let partition = (arr, low, high) => { ... }
  ```
  1. Define i variable and set low - 1
  2. define pivot variable and set arr[high] 
  3. Create a for loop which checks if arr[j] is less than or equal to pivot
    4. if so:
      1. i++
      2. call swap, passing in arr, j, and i
  4. call swap with arr, high, and i + 1
  5. return i + 1

  ```
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
  ```
3. Create swapping algorithm which handles swapping the high and low values
```
let swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};
```


# Lecture Flow
* Talk about recusiveness 
* Go into a visual showing exactly what quick sort does
  * This will probably be confusing so give a good explanation of what is actually happening
* Talk about the pivot and the different ways of finding a pivot
* Walk through and build out the quickSort function
* Walk through and build out the partition function
  * Explain how the array is being partitioned around the pivot
* Finally explain how to do the swapping
  * Show that you can do this in the partition function or rather break this functionality out into it's own

# Diagram
Input: [2, 6, 3, 1, 6, 5, 2, 4, 8] pivot = 6
1. [2, 3, 1, 5, 2, 4] pivot = 3  [6, 6, 8]
2. [2, 1, 2]    [3, 5, 4]   [6, 6, 8]
3. [1, 2, 3]    [3, 4, 5]   [6, 6, 8]

## Pseudocode
```
ALGORITHM quicksort(arr, low, high)
  IF low < high
    DECLARE pi <-- partition(arr, low, high)

    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)

ALGORITHM partition(arr, low, high)
  DECLARE i <-- low - 1
  DECLARE pivot = arr[high]

  FOR j <-- low; j <= high - 1; j++
    IF arr[j] <= pivot
      i += 1
      swap(arr, j, i)
  END FOR

  swap(arr, high, i + 1)
  return i + 1

  ALGORITHM swap(arr, i, low)
    DECLARE temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp;

```

## Readings and References
### Watch
http://www.algomation.com/algorithm/quick-sort-visualization

### Read
https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort
https://www.interviewbit.com/tutorial/quicksort-algorithm/

### Bookmark
http://www.cs.armstrong.edu/liang/animation/web/QuickSortPartition.html