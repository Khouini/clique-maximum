function findLargestClique(graph) {
  const vertices = graph.vertices;
  let maxClique = [];

  // Fonction pour vérifier si un sommet peut être ajouté à la clique tout en maintenant une clique
  function canAddToClique(candidate, vertex) {
    for (const v of candidate) {
      if (!graph.areAdjacent(v, vertex)) {
        return false;
      }
    }
    return true;
  }

  // Algorithme glouton pour trouver la clique maximale
  for (const vertex of vertices) {
    if (canAddToClique(maxClique, vertex)) {
      maxClique.push(vertex);
    }
  }

  console.log('Clique maximale trouvée :', maxClique);
  return maxClique;
}

module.exports = findLargestClique;
