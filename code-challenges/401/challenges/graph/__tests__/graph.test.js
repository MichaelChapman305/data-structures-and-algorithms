'use strict';

let { Graph, Vertex, Edge } = require('../graph');

describe('Graph module', () => {
  // let graph = new Graph();
  beforeEach(() => {
    // const eight = new Vertex(8);
    // const six = new Vertex(6);
    // const seven = new Vertex(7);
    // const five = new Vertex(5);
    // const three = new Vertex(3);
    // const oh = new Vertex(0);
    // const nine = new Vertex(9);

    // graph.addNode(eight);
    // graph.addNode(six);
    // graph.addNode(seven);
    // graph.addNode(five);
    // graph.addNode(three);
    // graph.addNode(oh);
    // graph.addNode(nine);

    // graph.addEdge(eight, six);
    // graph.addEdge(eight, five);
    // graph.addEdge(six, seven);
    // graph.addEdge(seven, five);
    // graph.addEdge(five, three);
    // graph.addEdge(three, oh);
    // graph.addEdge(oh, nine);
    // graph.addEdge(nine, eight);
  });

  describe('addNode(value)', () => {
    test('Node can be successfully added to the graph', () => {
      let graph = new Graph();

      let res = graph.addNode(9);

      console.log(graph._adjacencyList);
  
      expect(res).toEqual(9);
    });
  });

  describe('addEdge(vertex)', () => {
    test('Edge can be successfully added to the graph', () => {
      let graph = new Graph();

      graph.addNode(8);
      graph.addNode(6);

      let res = graph.addEdge(eight, six);

      expect(start).toEqual(0);
    });
  });

  describe('getNodes()', () => {
    test('A collection of nodes can be successfully retrieved from the graph', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);

      graph.addNode(eight);
      graph.addNode(six);

      graph.addEdge(eight, six);

      expect(graph.getNodes()).toEqual([8, 6])
    });
  });

  describe('getNeighbors(vertex)', () => {
    test('All appropriate neighbors can be retrieved from graph', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);

      graph.addNode(eight);
      graph.addNode(six);

      graph.addEdge(eight, six);

      expect(graph.getNeighbors(8)).toEqual([[6, 0]])
    });

    test('Neighbors are returned with the weight between nodes included', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);

      graph.addNode(eight);
      graph.addNode(six);

      graph.addEdge(eight, six);

      expect(graph.getNeighbors(8)).toEqual([[6, 0]])
    });
  });

  describe('size()', () => {
    test('The proper size is returned, representing the number of nodes in the graph', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);

      graph.addNode(eight);
      graph.addNode(six);

      graph.addEdge(eight, six);

      expect(graph.size()).toEqual(2)
    });
  });

  describe('getGraph()', () => {
    test('A graph with only one node and edge can be properly returned', () => {
      let graph = new Graph();

      const eight = new Vertex(8);
      const six = new Vertex(6);

      graph.addNode(eight);
      graph.addNode(six);

      graph.addEdge(eight, six);

      expect(typeof graph.getGraph()).toBe(object)
    });

    test('An empty graph properly returns null', () => {
      let graph = new Graph();

      expect(graph.getGraph()).toBe(null);
    });
  });

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
});