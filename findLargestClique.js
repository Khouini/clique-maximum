const customlog = require('./customLog.js');
class LargestCliqueFinder {
  #graph;

  constructor(graph) {
    this.#graph = graph;
    // Affiche les sommets du graphe et la liste d'adjacence du graphe
    console.log('Détails du graphe:');
    console.log('Sommets du graphe:', this.#graph.vertices.join(', '));
    // console.log("Liste d'adjacence du graphe:", this.#graph.adjacencyList);
    console.log("Liste d'adjacence du graphe:");
    for (const vertex in this.#graph.adjacencyList) {
      if (this.#graph.adjacencyList.hasOwnProperty(vertex)) {
        console.log(`  ${vertex}: ${this.#graph.adjacencyList[vertex].join(', ')}`);
      }
    }
  }
  #canAddToClique(currentClique, vertex) {
    const adjacencyList = this.#graph.adjacencyList;

    // Iterate through the vertices in the current clique
    for (const neighbor of currentClique) {
      // Check if the vertex 'vertex' is not adjacent to the neighbor 'v'
      const isNotAdjacent = !adjacencyList[neighbor].includes(vertex);
      if (isNotAdjacent) {
        customlog.danger(
          `   - Le sommet ${vertex} n'est pas adjacent à ${neighbor}, donc le sommet ${vertex} n'est pas adjacent à tous les sommets de la clique: ${currentClique}`
        );
        // If 'vertex' is not adjacent to 'neighbor', the clique cannot be extended
        return false;
      }
    }

    customlog.success(`   - Le sommet ${vertex} est adjacent à tous les sommets de la clique: ${currentClique}`);
    // If all vertices in the current clique are adjacent to 'vertex', the clique can be extended
    return true;
  }

  #sortVerticesByDegree() {
    const vertices = this.#graph.vertices;
    const adjacencyList = this.#graph.adjacencyList;

    // Trie les sommets par degré décroissant (nombre de connexions)
    const sortedVertices = vertices.sort((a, b) => {
      const degreeA = adjacencyList[a].length;
      const degreeB = adjacencyList[b].length;
      return degreeB - degreeA;
    });

    return sortedVertices;
  }

  findLargestClique() {
    const vertices = this.#sortVerticesByDegree();
    // Étape 1 : Tri des sommets par degré décroissant
    console.log('Étape 1 : Tri des sommets par degré décroissant (nombre de connexions)');

    let maxClique = [];

    console.log('Itération sur les sommets triés', vertices.join(', '));
    for (const vertex of vertices) {
      // Étape 2 : Vérification si le sommet peut être ajouté à la clique
      console.log(`Étape 2 : Vérification si le sommet ${vertex} peut être ajouté à la clique: ${maxClique}`);
      if (this.#canAddToClique(maxClique, vertex)) {
        maxClique.push(vertex);
        customlog.success(`   - ${vertex} a été ajouté à la clique: ${maxClique}`);
      } else {
        customlog.danger(`   - ${vertex} n'a pas été ajouté à la clique: ${maxClique}`);
      }
    }

    // Étape 3 : Affichage de la clique maximale trouvée
    console.log('Étape 3 : Affichage de la clique maximale trouvée');
    console.log('Clique maximale trouvée:', maxClique.join(', '));

    return maxClique;
  }
}

module.exports = LargestCliqueFinder;
