function largestClique(graph) {
  let clique = [];
  let remainingVertices = [...graph.vertices];

  while (remainingVertices.length > 0) {
    let chosenVertex = selectVertex(remainingVertices);
    if (canAddToClique(clique, chosenVertex, graph)) {
      clique.push(chosenVertex);
    } else {
      remainingVertices = remainingVertices.filter(v => v !== chosenVertex);
    }
  }

  console.log('Clique maximale trouvée :', clique);
  return clique;
}

function selectVertex(vertices) {
  return vertices[0];
}

function canAddToClique(clique, vertex, graph) {
  return clique.every(v => graph.areAdjacent(v, vertex));
}

module.exports = largestClique;
