'use strict';

let { Graph, Vertex, Edge } = require('../graph');

describe('Graph module', () => {
  let graph;
  let nine;
  let oh;
  let three;
  let five;
  let seven;
  let six;
  let eight;
  beforeEach(() => {
    graph = new Graph;

    eight = new Vertex(8);
    six = new Vertex(6);
    seven = new Vertex(7);
    five = new Vertex(5);
    three = new Vertex(3);
    oh = new Vertex(0);
    nine = new Vertex(9);

    graph.addVertex(eight);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(five);
    graph.addVertex(three);
    graph.addVertex(oh);
    graph.addVertex(nine);

    graph.addEdge(eight, six);
    graph.addEdge(eight, five);
    graph.addEdge(six, seven);
    graph.addEdge(seven, five);
    graph.addEdge(five, three);
    graph.addEdge(three, oh);
    graph.addEdge(oh, nine);
    graph.addEdge(nine, eight);
  });

  describe('addNode(value)', () => {
    test('Node can be successfully added to the graph', () => {
      expect(graph._adjacencyList.has(nine)).toEqual(true);
    });
  });

  describe('addEdge(vertex)', () => {
    test('Edge can be successfully added to the graph', () => {
      expect(graph.getNeighbors(nine)).toEqual([{'vertex': {'value': 8}, 'weight': 0}]);
    });
  });

  describe('getNodes()', () => {
    test('A collection of nodes can be successfully retrieved from the graph', () => {
      let res = [
        { value: 8 },
        { value: 6 },
        { value: 7 },
        { value: 5 },
        { value: 3 },
        { value: 0 },
        { value: 9 }
      ];

      expect(graph.getNodes()).toEqual(res)
    });

    test('A graph with only one node and edge can be properly returned', () => {
      let graph = new Graph();

      graph.addVertex(eight);

      graph.addEdge(eight, eight);

      expect(graph.getNodes()).toEqual([ { value: 8 } ])
    });

    test('An empty graph properly returns null', () => {
      let graph = new Graph();
      expect(graph.getNodes()).toEqual(null);
    });
  });

  describe('getNeighbors(vertex)', () => {
    test('All appropriate neighbors can be retrieved from graph', () => {
      expect(graph.getNeighbors(nine)).toEqual([{'vertex': {'value': 8}, 'weight': 0}]);
    });

    test('Neighbors are returned with the weight between nodes included', () => {
      expect(graph.getNeighbors(six)).toEqual([{'vertex': {'value': 7}, 'weight': 0}]);
    });
  });

  describe('size()', () => {
    test('The proper size is returned, representing the number of nodes in the graph', () => {
      expect(graph.size()).toEqual(7)
    });
  });

  describe('pathT0()', () => {
    test('Returns the path between two nodes', () => {
      let result = [
        { value: 6 },
        { value: 8 },
        { value: 5 },
        { value: 8 },
        { value: 3 },
        { value: 5 }
      ];

      expect(graph.pathTo(eight, three)).toEqual(result);
    });
  });

  describe('Add by directional edge', () => {
    test('Adds by directional edge', () => {
      let graph = new Graph();

      let eight = new Vertex(8);
      let six = new Vertex(6);

      graph.addVertex(eight);
      graph.addVertex(six);

      graph.addBiDirectionalEdge(eight, six);

      let res1 = [ { weight: 0, vertex: { value: 6 } } ];
      let res2 = [ { weight: 0, vertex: { value: 8 } } ];

      expect(graph.getNeighbors(eight)).toEqual(res1);
      expect(graph.getNeighbors(six)).toEqual(res2);
    });
  });

  describe('breadFirst', () => {
    test('Returns values from graph breadth first', () => {
      let res = [
        { value: 8 },
        { value: 6 },
        { value: 5 },
        { value: 7 },
        { value: 3 },
        { value: 0 },
        { value: 9 }
      ];

      expect(graph.breadthFirst(eight)).toEqual(res);
    });
  
    test('Only takes a starting node', () => {
      expect(graph.breadthFirst('ndoe')).toEqual(null);
    });
  
    test('Does not modify the Graph', () => {
      let res = [
        { value: 8 },
        { value: 6 },
        { value: 5 },
        { value: 7 },
        { value: 3 },
        { value: 0 },
        { value: 9 }
      ];

      expect(graph.breadthFirst(eight)).toEqual(res);
      expect(eight.value).toEqual(8);
      expect(six.value).toEqual(6);
    });
  });
});