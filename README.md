# Graph Taversal [![](https://img.shields.io/badge/Robert-Muraru-blue)](https://robert-muraru-portfolio.herokuapp.com/)


## Description
In computer science, graph traversal (also known as graph search) refers to the process of visiting (checking and/or updating) each vertex in a graph.

### [Graph Traversal](https://en.wikipedia.org/wiki/Graph_traversal)

### __Depth First__
Explore as far as possible down one branch before "backtracking"
__
### __Depth First Recursive Pseudocode__

- DFS(vertex):
    - if vertex is empty
        - return (this is the base case)
    - add vertex to results list
    - mark vertex as visited
    - for each neighbor in vertex's neighbors:
        - if neighbor is not visited:
            - recursively call DFS on neighbor

### Visiting Things
{
    "A": true,
    "B": true,
    "D": true
}

### __Depth First Traversal Recursive in-depth pseudocode__
- The function should accept a starting node
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Create a helper function which accepts a vertex
    - The helper function should return early if the vertex is empty
    - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    - Loop over all the values in the adjacencyList for that vertex
    - If any of those values have not been visited, recursively invoke the helper function with that vertex
- Invoke the helper function with the starting vertex
- Return the result array

### __Depth First Iterative Pseudocode__

- DFS-iterative(start):
- let S be a stack
- S.push(start)
- while S is not empty
    - vertex = S.pop()
    - if vertex is not labeled as discovered:
        - visit vertex (add to result list)
        - label vertex as discovered
        - for each of vertex's neighbors, N do S.push(N)


### __Depth First Traversal Iterative in-depth pseudocode__
- The function should accept a starting node
- Create a stack to help use keep track of vertices(use a list/array)
- Create a list to store the end result, to be returned at the very end
- Create an empty object to store visited vertices
- Add the starting vertex to the stack, and mark it visited
- While the stack has something in it:
    - Pop the next vertex from the stack
    - If that vertex hasn't been visited yet"
        - Mark it as visited
        - Add it to the result list
        - Push all of its neighbors into the stack

Return the result array


### __Breadth First__ 
Visit neighbors at current depth first

### __Breadth First Pseudocode__
- This function should accept a starting vertex
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store the visited nodes
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
    - Remove the first vertex from the queue and push it into the array that stores the visited nodes
    - Loop over each vertex in the adjacency list for the vertex you are visiting
        - If it is not inside the object that store the visited nodes, mark it as visited and enqueue that vertex

Return the array of visited nodes