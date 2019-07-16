# Graphs
Create a graph class

## Challenge
Create a graph class which has addNode, addEdge, pathTo, Size, and getNeighbors methods

## Approach & Efficiency
I implemented a depth first traversal to support methods such as getNeighbors, this traversals method is called pathTo

## API
### addNode(value)
#### Adds a vertex to the graph

### addEdge(vertex)
#### Adds an edge to the graph

### getNeighbors(value)
#### returns a list of all the neighbors for a specific vertex

### size()
#### Returns the size of the graph

### pathTo()
#### Depth first traversal method

### breadthFirst()
#### Breadth first traversal method