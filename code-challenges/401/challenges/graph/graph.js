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
    this._adjacencyList = new Map();
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

  addEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('ERROR: invalid vertices');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight = 0){
    this.addEdge(vertex_a, vertex_b, weight);
    this.addEdge(vertex_b, vertex_a, weight);
  }

  getNodes() {
    if (this.listSize !== 0) {
      return [...this._adjacencyList.keys()];
    } else {
      return null;
    }
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      return `invalid vertex ${vertex}`;
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

  breadthFirst(startNode){
    if (this.listSize === 0) return null;

    let visitedVertices = new Set();
    let queue = [];
    let results = [];

    queue.push(startNode);
    visitedVertices.add(startNode);

    while(queue.length){
      let deQueue = queue.shift();

      results.push(deQueue);
      visitedVertices.add(deQueue);

      const neighbors = this.getNeighbors(deQueue);

      for(let k of neighbors){
        let neighbor = k.vertex;

        if(visitedVertices.has(neighbor)){
          continue;
        }else{
          visitedVertices.add(neighbor);
        }

        queue.push(neighbor);
      }
    }
    
    return results;
  }

  size(){
    if(this.listSize === 0){
      return null;
    }
    return this.listSize;
  }
}

module.exports = {Graph, Vertex, Edge};