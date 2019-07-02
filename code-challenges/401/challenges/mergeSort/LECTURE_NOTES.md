#Lecture Notes: Insertion Sort

# what this algorithm is, does, and why we care.
Merge sort is an efficient sorting algorithm with a O(n log n) runtime making it far better than insertion sort. This algorithm is a divide and conquere algorithm that uses one function to recursively split the array over and over again until each array only contains one value, then calling another helper function with both halfs to be compared. Through this process the array is reformed correctly sorted and returned. 


## Is it more efficient than others? How does it attack the problem differently?
This algorithm is far different than insertion sort in that it is much much faster. Rather than comparing each element to each element as necessary, merge sort splits the array into individual units to be compared to one another. Even though there is more code involved with insertion sort, due to combining halfs rather than comparing each element to it's previous element it can sort an array in a worse case scenario much faster particularly with larger and larger sets of data. O(n log n) vs. O(n^2);


## Learning Objectives
* Students will learn how to both recursively split an array into individual units
  * This will happen by building out an appropriate mergeSort function that recursively calls itself until each array contains only one value
* Students will be learning how to build a function to compare elements utilizing a loop
  * This will happen by building out the merge helper function that will control appropriatly combining the two arrays


## Algorithm
1. First create a mergeSort function which takes an array
  1. get the middle of the array
  ```
  let mid = Math.floor(arr.length / 2);
  ```
  2. split the array in two
  ```
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  ```
  3. recursively call mergeSort with both halfs of the array
  4. return the merge function, passing in both array halfs 
2. Create a merge helper function which takes in two arrays
  1. Define a new array
  2. define left and right indexes 
  3. create a while loop which runs if leftIndex is less than leftArr.length and rightIndex is less than rightArr.length
  ```
  while (leftIndex < leftArr && rightIndex < rightArr) { ... }
  ```
    1. if leftArr at left index is less than rightArr at right index
      1. Push leftArr at left index into the new array
      2. Remove leftArr at left index from leftArr
    2. else
      1. push rightArr at right index into the new Array
      2. Remove rightArr at right index from rightArr
  4. Concatenate any remaining values from leftArr and rightArr onto the new array and return it
  ```
  return newArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  ```


# Lecture Flow
1. First talk about how recursion functions and how recursive functions work
2. Next the students should be shown how recursiveness can be used in order to split an array into individual pieces
  * By this point you should almost have a fully functioning mergeSort function without the merge helper function
3. Start showing a visual of how the split array can now be sorted using the merge helper function by displaying passing in two halfs and comparing them until you have the fully merged array
4. At this point, put the merge helper function call with the left and right half arguments in the mergeSort function
5. Build out the function, defining any variables necessary, then going into the while loop which handles all of the sorting
6. From here, show that after the sort there will still be one item remaining in either the left or right arrays
  * There are several ways of dealing with this including using the concate method to concatenate any remaining values into the new array, 2 additional while loops or a for loop to handle finding any remaining values and doing the concatenation, or utilizing if and if else statements
  * It should be explained that out of all the variations of merge sort, this is the part that tends to change the most between them and that all instantiations are more or less doing the exact same thing.


# Diagram
Input: [5, 7, 3, 8, 2]
1. [5, 7] [3, 8, 2]
2. [5] [7] [3, 8] [2]
3. [5] [7] [3] [8] [2]
4. [5, 7]
5. [3, 5, 7]
6. [3, 5, 7, 8]
7. [2, 3, 5, 7, 8]


## Pseudocode
```
ALGORITHM mergesort( var a as array )
   IF a length = 1 return a

   VAR left as array = a[0] ... a[n/2]
   VAR right as array = a[n/2+1] ... a[n]

   left = mergesort( left )
   right = mergesort( right )

   RETURN merge( left, right )
END ALGORITHM

ALGORITHM merge( var a as array, var b as array )
   VAR leftIndex <-- 0
   VAR rightIndex <-- 0
   VAR c as array
   WHILE leftIndex < a.length && rightIndex < b.length
      IF a at leftIndex > b at rightIndex
         add b at rightIndex to the end of c
         remove b at rightIndex from b
      ELSE
         add a at leftIndex to the end of c
         remove a at leftIndex from a
      END IF
   END WHILE

   concatenate a at leftIndex into c
   concatenate b and rightIndex into c
   
   RETURN c
	
END ALGORITHM
```

## Readings and References
### Watch
https://youtu.be/JSceec-wEyw

### Read
https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0

https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
