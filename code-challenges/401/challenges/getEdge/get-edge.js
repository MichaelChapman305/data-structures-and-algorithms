'use strict';

import { ModuleMap } from "jest-haste-map";

function getEdge(graph, path){
  let total = 0;
  let nodes = graph.getNodes();
  let current;
  
  for(let i = 0; i < nodes.length; i++){
    if(nodes[i].value === path[0]){
      current = nodes[i];
    }
  }

  for(let i = 1; i < path.length; i++){
    let neighbor = graph.getNeighbors(current);
    let isFound = false;

    for(let k = 0; k < neighbor.length; k++){
      if(neighbor[j].vertex.value === path[i]){
        total += neighbor[j].weight;
        current = neighbor[j].vertex;
        isFound = true;

        break;
      }
    }
    if(!isFound){
      return false + ' $0';
    }
  }
  return 'true $' + total;
}

module.exports = getEdge();