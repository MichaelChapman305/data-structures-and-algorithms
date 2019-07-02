# Challenge Summary
Create a function called mergeSort which takes an array and sorts it using the merge sorting method 

## Challenge Description
This challenge requires us to build a merge sort function which splits an array into individual components and then rebuilds the array by comparing 2 elements at a time. 

## Approach & Efficiency
There are several different ways to build this function. My strategy was to have a mergeSort function which handles splitting the array into individual pieces by recursively calling itself, and then finally calling the merge function with the two halves. The merge helper function handles comparing the left and right values and placing them inside of a new array. Finally, I used the strategy of concatenating any additional values from the left and irght arrays into the new array. 

## Solution
![code](./mergeSort.js)