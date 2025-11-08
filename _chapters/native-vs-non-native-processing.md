---
title: Native vs Non-Native Processing
order: 12
---

- **Native**: Engine built for graphs (pointer-based storage). Traversals fly.
- **Non-Native**: Graph layer on other stores. Simulate edges—slow for depth.

### Explaining Native in Depth

Purpose-built, with direct pointers for hops.

Why superior: Real-time on large graphs.

Code Sample (Neo4j native traversal):
```cypher
MATCH (a)-[*]->(b) RETURN path
```

```mermaid
flowchart LR
    NodeA["Node A"] -->|pointer| NodeB["Node B"] -->|pointer| NodeC["Node C"]
```

### Explaining Non-Native in Depth

Overlays like SQL graphs; use indexes for simulation.

Why limited: Depth causes join explosions.

Code Sample (SQL graph sim):
```sql
SELECT * FROM nodes n JOIN edges e ON n.id = e.from_id
```

```mermaid
flowchart LR
    Layer["Graph layer"] --> Base["RDBMS or KV store"]
```

Go native for production—non-native hits walls at scale.

```mermaid
flowchart TD
    A[Native] --> B["Pointers: Fast Hops"]
    A --> C["Optimized Traversals"]
    D["Non-Native"] --> E["Indexes: Extra Layer"]
    D --> F["Slow at Depth"]
```
