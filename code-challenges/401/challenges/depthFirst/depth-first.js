'use strict';

function depthFirst(graph) {
  console.log(graph);
  // if (typeof graph !== 'array' || graph.size === 0) return 'not a valid graph'; 
  const stack = [];
  const visitedVertices = new Set();
  let result = [];

  let coolArray = graph.getNodes();
  let startVertex = coolArray[0];

  stack.push(startVertex);
  visitedVertices.add(startVertex);

  while(stack.length){
    let currentVertex = stack.pop();
    result.push(currentVertex);

    let neighbors = graph.getNeighbors(currentVertex);

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