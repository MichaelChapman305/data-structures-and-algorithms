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
    let newNode = this.addVertex(new Vertex(value));
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

  getNodes(startVertex){
    const stack = [];
    const visitedVertices = new Set();
    const path = new Array();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      let currentVertex = stack.pop();

      let neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        let neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }

        stack.push(neighborVertex);
        path.push(neighborVertex, currentVertex);
      }
    }
    return path;
  }

  size(){
    if(this.listSize === 0){
      return null;
    }
    return this.listSize;
  }
}

module.exports = Graph;