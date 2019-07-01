#Lecture Notes: Insertion Sort

# what this algorithm is, does, and why we care.
Insertion sort is a sorting algorithm which sorts an array by comparing the right element to the left element of the array, and swapping them depending on the sort cirteria. It isn't a truly efficient algorithm, but it is useful for very small data sets due to it's mad runtime of O(n^2).

## Is it more efficient than others? How does it attack the problem differently?
This algorithm is pretty inefficient therefore it should only be used to sort small data sets. It runs at a runtime of O(n^2) and in the worst case will have to sort the array by moving every element from the farthest right most spot to the farthest left most spot. This differs from other sorting algorithms in that it takes each element and compares it to it's element on the left and swaps them, therefore if that item is say the smallest in the array, and it is all the way to the right of the array, and the array should be sorted from smallest to largest, then that element will be placed into every spot in the array until it is placed appropriately at the front of the array. 

## Learning Objectives
How to sort an array utilizing insertion sort with vanilla javascript

## Algorithm
1. define a FOR loop setting i to 1:
```
for (i = 1; i < arr.length; i++) { ... };
```
2. Inside of this loop:
  * define j variable to keep track of i - 1
  * define temp variable to keep track of arr[i]
3. Define a while loop which runs if temp is less than arr[j] and j >= 0:
```
while (j >= 0 && temp < arr[j]) { ... }
```
4. Assign arr[j] to arr[j + 1]
5. Assign j - 1 to j
6. Outside of the while loop, Assign arr[j + 1] to temp

# Lecture Flow
Insertion sort is one of many sorting algorithms
* Even though it is a well known sorting algorithm it is quite constly in terms of run time and is definitely not the most optimal of the sorting algorithms

This is a great algorithm to know, especially if you know you will only be working with small datasets and know that even in the worst case scenario O(n^2) it still won't be too constly

This algorithm works by comparing left and right array items, and swapping positions based on the sorting criteria.
  * For example if you were sorting from least to greatest and the 2 first elements were 2, 1 then the first move of the algorithm would be to swap 2, with 1

# Diagram
Input: [2, 1, 5, 3, 4]
1. [2, 1, 5, 3, 4]
* Swap 2 and 1
2. [1, 2, 5, 3, 4]
* Swap 5 and 3
3. [2, 1, 3, 5, 4]
* Swap 5 and 4

output: [1, 2, 3, 4, 5]


## Pseudocode
```
InsertionSort(int[] arr)

  FOR i = 1 to arr.length
  
    int j <-- i - 1
    int temp <-- arr[i]
    
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
      
    arr[j + 1] <-- temp
```

## Readings and References
### Watch
https://youtu.be/OGzPmgsI-pQ

### Read
https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
https://www.geeksforgeeks.org/insertion-sort/