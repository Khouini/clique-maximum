const LargestCliqueFinder = require('./findLargestClique');

function logGraph(graph) {
  console.log({
    vertices: graph.vertices,
    adjacencyList: graph.adjacencyList,
  });
}
// const graph1 = {
//   vertices: ['A', 'B', 'C', 'D', 'E'],
//   areAdjacent: (vertex1, vertex2) => {
//     const adjacencyList = {
//       A: ['B', 'C'],
//       B: ['A', 'C', 'D'],
//       C: ['A', 'B', 'D'],
//       D: ['B', 'C', 'E'],
//       E: ['D'],
//     };

//     return adjacencyList[vertex1].includes(vertex2);
//   },
// };

const graph2 = {
  vertices: ['0', '1', '2', '3', '4'],
  adjacencyList: {
    0: ['1', '2', '3'],
    1: ['0', '3', '2'],
    2: ['0', '1', '3'],
    3: ['0', '1', '2'],
    4: ['1', '2'],
  },
  areAdjacent: (vertex1, vertex2) => graph2.adjacencyList[vertex1].includes(vertex2),
};

const graph3 = {
  vertices: ['4', '3', '2', '1', '0'],
  adjacencyList: {
    0: ['1', '2', '3'],
    1: ['0', '3', '2'],
    2: ['0', '1', '3'],
    3: ['0', '1', '2'],
    4: ['1', '2'],
  },
  areAdjacent: (vertex1, vertex2) => graph3.adjacencyList[vertex1].includes(vertex2),
};

// console.log('Graph 1');
// new LargestCliqueFinder(graph2).findLargestClique();
console.log('Graph 2');
new LargestCliqueFinder(graph3).findLargestClique();
