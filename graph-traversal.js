// Undirected Graph - no error handling - kept it simple
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(name) {
		if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1].includes(v2))
			this.adjacencyList[v1].push(v2);
		if (!this.adjacencyList[v2].includes(v1))
			this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(
			(vertex) => vertex !== v2
		);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(
			(vertex) => vertex !== v1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
	dfsRecursive(start) {
		if (!this.adjacencyList[start]) return null;
		// A list to store the end result
		const result = [];
		// An object to store visited vertices
		const visited = {};
		const adjacencyList = this.adjacencyList;
		// Use an Immediately Invoked Function Expression to create a helper function
		(function dfs(vertex) {
			// Take the provided vertex and push it to the list
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((neighbor) => {
				// If any of the values (vertex) in the adjacency list has not been visited invoke this helper function with that vertex
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		})(start);
		// Return the result array
		return result;
	}

	dfsIterative(start) {
		const stack = [ start ];
		const result = [];
		const visited = {};
		visited[start] = true;
		let currentVertex;
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}
	bfs(start) {
		const queue = [ start ];
		const result = [];
		const visited = {};
		visited[start] = true;
		let currentVertex;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dfsRecursive('A'));
console.log(g.dfsIterative('A'));
console.log(g.bfs('A'));
