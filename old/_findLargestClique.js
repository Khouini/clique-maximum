function findLargestClique(graph) {
  let maxClique = [];

  // Fonction pour vérifier si une liste de sommets forme une clique
  function isClique(vertices) {
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        if (!graph.areAdjacent(vertices[i], vertices[j])) {
          return false;
        }
      }
    }
    return true;
  }

  // Fonction de recherche exhaustive
  function searchClique(candidate, remaining) {
    if (remaining.length === 0) {
      if (isClique(candidate) && candidate.length > maxClique.length) {
        maxClique = candidate.slice();
      }
      return;
    }

    const vertex = remaining[0];
    // Inclure le sommet dans la clique candidate
    searchClique(candidate.concat(vertex), remaining.slice(1));
    // Exclure le sommet de la clique candidate
    searchClique(candidate, remaining.slice(1));
  }

  searchClique([], graph.vertices);

  console.log('Clique maximale trouvée :', maxClique);
  return maxClique;
}

module.exports = findLargestClique;
