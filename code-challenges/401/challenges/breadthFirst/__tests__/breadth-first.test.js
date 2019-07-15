'use strict';

const {Graph, Vertex, Edge} = require('../../graph/graph');
const breadthFirst = require('../breadth-first');

describe('breadFirst', () => {
  test('Returns values from graph breadth first', () => {
    const eight = new Graph.Vertex(8);
    const six = new Graph.Vertex(6);

    graph.addVertex(eight);
    graph.addVertex(six);

    graph.addEdge(eight, six);

    expect(breadthFirst(eight)).toEqual([8, 6]);
  });

  test('Only takes a starting node', () => {
    expect(breadthFirst('ndoe')).toBe('Not a valid node');
  });

  test('Does not modify the graph', () => {
    const eight = new Graph.Vertex(8);
    const six = new Graph.Vertex(6);

    graph.addVertex(eight);
    graph.addVertex(six);

    graph.addEdge(eight, six);

    expect(breadthFirst(eight)).toEqual([8, 6]);
    expect(eight.value).toEqual(8);
    expect(six.value).toEqual(6);
  });
});
