'use strict';

const Graph = require('../../graph/graph');
const depthFirst = require('../depth-first');

describe('depthFirst(graph)', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph.Graph();

    const A = graph.addNode('A');
    const B = graph.addNode('B');
    const C = graph.addNode('C');
    const D = graph.addNode('D');
    const E = graph.addNode('E');
    const F = graph.addNode('F');
    const G = graph.addNode('G');
    const H = graph.addNode('H');

    graph.addEdge(A, B);
    graph.addEdge(A, D);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(C, G);
    graph.addEdge(D, F);
    graph.addEdge(D, E);
    graph.addEdge(D, H);
    graph.addEdge(F, H);
  });

  test('Can only take a graph', () => {
    expect(depthFirst('hello')).toBe('not a valid graph');
  });

  test('If given a graph, returns said graph with a breadth first traversal', () => {
    let result = [{ value: 'A' },
    { value: 'D' },
    { value: 'H' },
    { value: 'E' },
    { value: 'F' },
    { value: 'B' },
    { value: 'C' },
    { value: 'G' }];

    expect(depthFirst(graph)).toEqual(['A']);
  });

  test('Returns empty array if no verticies in graph', () => {
    let graph = new Graph();
    expect(depthFirst(graph)).toEqual('not a valid graph');
  });
});