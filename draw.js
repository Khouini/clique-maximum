function drawGraph(graph) {
    console.log("Graph:");
    graph.vertices.forEach((vertex) => {
        let row = "";
        graph.vertices.forEach((otherVertex) => {
            if (graph.areAdjacent(vertex, otherVertex)) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        });
        console.log(row);
    });
}

function drawClique(graph, clique) {
    console.log("\nMaximum Clique:");
    clique.forEach((vertex) => {
        let row = "";
        clique.forEach((otherVertex) => {
            if (graph.areAdjacent(vertex, otherVertex)) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        });
        console.log(row);
    });
}

module.exports =  {
    drawGraph,
    drawClique
}
