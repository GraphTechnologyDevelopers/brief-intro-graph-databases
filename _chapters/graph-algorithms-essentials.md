---
title: Graph Algorithms Essentials
order: 13
---

Beyond storage: Analyze.

- **Pathfinding**: ShortestPath (A* for heuristics).
- **Centrality**: PageRank for ranking.
- **Community**: Louvain for clusters.
- **Similarity**: Jaccard for node overlap.

### Explaining Pathfinding in Depth

Finds optimal routes, like Dijkstra for weighted.

Why: Logistics, social connections.

Code Sample:
```cypher
CALL algo.shortestPath('Alice', 'Bob', 'KNOWS', 'Person')
```

```mermaid
flowchart LR
    Alice((Alice)) -->|cost 1| Friend((Friend)) -->|cost 2| Bob((Bob))
    note["Shortest path from Alice to Bob"]
    note -.-> Friend
```

### Explaining Centrality in Depth

Ranks nodes by importance.

Why: Identify key players.

Code Sample:
```cypher
CALL algo.pageRank()
```

```mermaid
flowchart LR
    High["High rank node"] --> B["Neighbor B"]
    High --> C["Neighbor C"]
    Note["Centrality highlights influential nodes"] -.-> High
```

### Explaining Community in Depth

Groups densely connected nodes.

Why: Market segments.

Code Sample:
```cypher
CALL algo.louvain()
```

```mermaid
flowchart LR
    A[A] --> B[B]
    C[C] --> D[D]
    Note1["Community 1"] -.-> A
    Note2["Community 2"] -.-> C
```

### Explaining Similarity in Depth

Measures overlap, for recs.

Why: Find similar users.

Code Sample:
```cypher
CALL algo.nodeSimilarity()
```

```mermaid
flowchart LR
    U1["User 1"] --> P1["Product 1"]
    U1 --> P2["Product 2"]
    U2["User 2"] --> P1
    U2 --> P3["Product 3"]
    Note["Jaccard similarity focuses on shared products"] -.-> P1
```

Use for insights: Recommend via common neighbors.

Example: Dijkstra in Australia graph (cities, flight hours).

```cypher
MATCH p=shortestPath((syd:City {name:'Sydney'})-[*]-(per:City {name:'Perth'}))
RETURN reduce(total=0, r in relationships(p) | total + r.hours) AS hours
```

Why: Predictive—triadic closures forecast links.
