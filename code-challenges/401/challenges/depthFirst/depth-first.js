'use strict';

function depthFirst(graph) {
  if (typeof graph !== 'object' || graph.listSize === 0) return 'not a valid graph'; 

  const stack = [];
  const visitedVertices = new Set();
  let result = [];

  let vertices = graph.getNodes();
  let startVertex = vertices[0];

  stack.push(startVertex);
  visitedVertices.add(startVertex);

  while(stack.length){
    let currentVertex = stack.pop();
    let neighbors = graph.getNeighbors(currentVertex);

    result.push(currentVertex);

    for(let edge of neighbors){
      let neighborVertex = edge.vertex;

      if(visitedVertices.has(neighborVertex)){
        continue;
      }else{
        visitedVertices.add(neighborVertex);
      }

      stack.push(neighborVertex);
    }
  }

  return result;
}

module.exports = depthFirst;