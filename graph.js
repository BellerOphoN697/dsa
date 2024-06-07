// graph traversal
/*
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);

    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2]
};

console.log("Depth-first traversal from vertex 0:");
dfs(graph, 0);
*/

// cycle detection
// function hasCycle(graph) {
//     const visited = new Set();
    
//     function dfs(node, parent) {
//         visited.add(node);
        
//         for (let neighbor of graph[node]) {
//             if (!visited.has(neighbor)) {
//                 if (dfs(neighbor, node)) return true;
//             } else if (neighbor !== parent) {
//                 return true;
//             }
//         }
        
//         return false;
//     }
    
//     for (let node in graph) {
//         if (!visited.has(node) && dfs(node, null)) return true;
//     }
    
//     return false;
// }

// const graphWithCycle = {
//     0: [1, 2],
//     1: [0, 3],
//     2: [0, 4],
//     3: [1],
//     4: [2, 5],
//     5: [4]
// };

// const graphWithoutCycle = {
//     0: [1, 2],
//     1: [0, 3],
//     2: [0, 4],
//     3: [1],
//     4: [2, 5],
//     5: []
// };

// console.log("Graph with cycle:", hasCycle(graphWithCycle));
// console.log("Graph without cycle:", hasCycle(graphWithoutCycle)); 


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        // console.log(this.adjacencyList);
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        console.log(this.adjacencyList);

        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // Remove this line if the graph is directed
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter(v => v !== vertex2));
        }
        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter(v => v !== vertex1));
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        if (this.adjacencyList.has(vertex)) {
            for (let neighbor of this.adjacencyList.get(vertex)) {
                this.adjacencyList.set(neighbor, this.adjacencyList.get(neighbor).filter(v => v !== vertex));
            }
            this.adjacencyList.delete(vertex);
        }
    }

    // Print the graph
    printGraph() {
        for (let [vertex, edges] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}

// Example Usage:
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.printGraph();
// Output:
// A -> B, C
// B -> A, C
// C -> A, B
