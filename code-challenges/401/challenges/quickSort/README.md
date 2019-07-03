# Challenge Summary
Write a quickSort method which takes an array, a low value, and a high value which sorts the array using the quick sort method

## Challenge Description
The quick sort method of sorting data sorts the data by comparison, but is different than insertion sort. This method requires choosing a pivote item in the array to use as a comparison to split the array into two sides, the left being the low side and the right being the high side. The algorithm continues breaking the array into smaller units through high/low variables encapsulating the next set inside the array and continues partitioning until the array is fully sorted.

## Approach & Efficiency
To implement this approach I used a quickSort method to handle defining the variables which encapsulate pieces of the array which then get passed into the partition function call. The partition function handles dividing the array by swapping indexes. This swapping happens inside of the swapping function which gets called once the partition function finds when low is pointing at a number higher than the pivot, and high is pointing at a number lower than the index.

## Solution
![code](./quickSort.js)