'use strict';

const { Graph, Vertex, Edge } = require('../../graph/graph');
const  getEdge = require('../get-edge');

describe('getEdge(graph, path)', () => {
  let graph;
  let locationsMap = ['Seattle', 'New York', 'LA'];
  let locationsMap2 = ['Seattle', 'Bend', 'LA', 'Vancouver'];

  beforeEach(() => {
    graph = new Graph();

    let seattle = graph.addNode('Seattle');
    let bend = graph.addNode('Bend');
    let LA = graph.addNode('LA');
    let NY = graph.addNode('New York');
    let Vancouver = graph.addNode('Vancouver');
    let Tokyo = graph.addNode('Tokyo');

    graph.addBiDirectionalEdge(seattle, bend, 22);
    graph.addBiDirectionalEdge(seattle, NY, 13);
    graph.addBiDirectionalEdge(NY, LA, 120);
    graph.addBiDirectionalEdge(bend, NY, 30);
    graph.addBiDirectionalEdge(bend, LA, 30);
    graph.addBiDirectionalEdge(seattle, Tokyo, 50);
    graph.addBiDirectionalEdge(seattle, Vancouver, 40);
  });

  test('will return a string with the appropriate information if path exists', () => {
    expect(getEdge(graph, locationsMap)).toBe('true $133');
  });

  test('will return a string with the appropriate information if path does not exist', () => {
    expect(getEdge(graph, locationsMap2)).toBe('false $0');
  });

  test('Does not remove anything from the graph or modify its values', () => {
    let res = [
      { value: 'Seattle' },
      { value: 'Bend' },
      { value: 'LA' },
      { value: 'New York' },
      { value: 'Vancouver' },
      { value: 'Tokyo' }
    ]

    getEdge(graph, locationsMap);
    
    expect(graph.getNodes()).toEqual(res);
  });
});