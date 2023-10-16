const findMaximumClique = require('./findMaximumClique');
const { drawGraph, drawClique } = require('./draw');
const graph = {
  vertices: ['A', 'B', 'C', 'D', 'E'],
  // vertices: ['D', 'B', 'C', 'A', 'E'],
  // vertices: ['D', 'E', 'C', 'A', 'B'],
  areAdjacent: (vertex1, vertex2) => {
    const adjacencyList = {
      A: ['B', 'C'],
      B: ['A', 'C', 'D'],
      C: ['A', 'B', 'D'],
      D: ['B', 'C', 'E'],
      E: ['D'],
    };

    return adjacencyList[vertex1].includes(vertex2);
  },
};

findMaximumClique(graph);
