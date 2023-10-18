module.exports = function findMaximumClique(graph) {
  console.log("🚀 ~ file: findMaximumClique.js:2 ~ findMaximumClique ~ graph:", graph)
  console.log('Init');
  let currentClique = new Set(); // Initialisation de la clique courante
  let nonCliquedVertices = new Set(graph.vertices); // Tous les sommets sont initialement non sélectionnés

  console.log('Les sommets non encore sélécotionées', Array.from(nonCliquedVertices));

  console.log('Starting the algorithm');
  while (nonCliquedVertices.size > 0) {
    // Choix d'un sommet non encore sélectionné
    let selectedVertex = Array.from(nonCliquedVertices)[0];
    // Logging to explain the selection of the current vertex

    console.log(`Étape 1 : Choix du sommet ${selectedVertex}.`);

    // Ajout du sommet à la clique courante
    currentClique.add(selectedVertex);

    // Logging to explain the addition of the selected vertex to the current clique
    console.log(`Étape 2 : Ajout du sommet ${selectedVertex} à la clique courante.`);

    console.log('Clique actuelle:', Array.from(currentClique));

    // Suppression des sommets qui ne sont pas adjacents à selectedVertex
    console.log("Les sommets non cliquées:", Array.from(nonCliquedVertices));

    console.log("Etape");
    for (let vertex of nonCliquedVertices) {
      console.log('---- Testing si', vertex, 'est adjacent à', selectedVertex);
      if (!graph.areAdjacent(selectedVertex, vertex)) {
        nonCliquedVertices.delete(vertex);
        console.log(`Le sommet ${vertex} n'est pas adjacent à ${selectedVertex}. donc il est supprimé.`);
        console.log("Clique aprés suppression :", Array.from(nonCliquedVertices));
        // Logging to explain the removal of non-adjacent vertices
        // console.log(`Étape 3 : Suppression du sommet ${vertex} car il n'est pas adjacent à ${selectedVertex}.`);
      } else {
        console.log(`Le sommet ${vertex} est adjacent à ${selectedVertex}., donc il est conservé.`);
        console.log("Clique aprés conservation :", Array.from(nonCliquedVertices));
      }
    }
  }

  // Logging the final result and returning it
  console.log('Clique maximale trouvée :', Array.from(currentClique));
  return Array.from(currentClique); // Convertir la clique en tableau pour le résultat
};
