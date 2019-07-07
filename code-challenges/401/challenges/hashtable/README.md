# Challenge Summary
Create a hash table data structure

## Challenge Description
For this challenge we had to create a hash table implementing the methods add which adds values to the data structure, get which gets the value based on a key, contains which returns a boolean if the hash table contains a specific key, and hash which hashes the hash maps keys.

## Approach & Efficiency
To complete this assignment I also utilized a LinkedList and Node classes. The hash map itself is an array of buckets, therefore whenever something gets added to the hash map it gets turned into a node of a linked list which are the data structures of the buckets. This node is then either added into a new bucket created with a new key, or that node is placed inside of a bucket which already exists and gets appended to the end of the bucket. 

## API
### add(key, value)
This method controls adding a value to the hashmap by first hashing the key using the hash method, then placing the value in the bucket which is mapped to said key

### hash(key)
This method controls hashing the key based off of some criteria and then returning that key

### get(key)
This method handles returning a value for the given key, or null if they key is not found

### countains(key)
This method returns a boolean whether or not a specific key is found