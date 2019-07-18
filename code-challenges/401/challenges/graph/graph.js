'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.weight = weight || 0;
    this.vertex = vertex;
  }
}

class Graph {
  constructor() {
    this._adjacencyLists = new Map();
    this.listSize = 0;
  }

  addNode(value){
    let newNode = new Vertex(value);
    this.addVertex(newNode);
    return newNode;
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
    this.listSize++;
  }

  addEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      return 'ERROR: invalid vertices';
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight = 0){
    this.addDirectedEdge(vertex_a, vertex_b, weight);
    this.addDirectedEdge(vertex_b, vertex_a, weight);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      return 'ERROR: invalid vertex', vertex;
    }
    return [...this._adjacencyList.get(vertex)];
  }

  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Array();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }

        stack.push(neighborVertex);
        parentPath.push(neighborVertex, currentVertex);
      }
    }
  }

  getNodes() {
    if(this.numberOfNodes !== 0){
      return [...this._adjacencyList.keys()];
    }else{
      return null;
    }
  }

  // breadthFirst(node) {
  //   let visited = new Set();
  //   for (let i = 0; i < this.size; i++) {
  //     visited[i] = false;
  //   }
  
  //   let queue = new Queue();
  
  //   visited[node] = true;
  //   queue.enqueue(node);
  
  //   while(!queue.isEmpty()) {
  //     let item = queue.dequeue();
  
  //     if (!visited[item]) {
  //       visited[item] = true;
  //       queue.enqueue(item);
  //     }
  //   }
  // }

  size(){
    if(this.listSize === 0){
      return null;
    }
    return this.listSize;
  }
}

// getVertexEdges or getVertexAdjacencyList

module.exports = {Graph, Vertex, Edge};