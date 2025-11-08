---
title: "Use Cases: Graphs in Action"
order: 14
---

- **Social**: Influence mapping.
- **Fraud**: Cycle detection.
- **Recs**: "People who bought this..."
- **Networks**: Routes, failures.
- **Bio**: Protein interactions.

### Explaining Social in Depth

Map influences via centrality.

Why: Targeted marketing.

Code Sample:
```cypher
MATCH (u:User)-[":FOLLOWS"]->(influencer)
RETURN influencer, count(u) ORDER BY count(u) DESC
```

```mermaid
flowchart LR
    U1["User 1"] --> I[Influencer]
    U2["User 2"] --> I
    U3["User 3"] --> I
    Note["Social mapping"] -.-> I
```

### Explaining Fraud in Depth

Detect cycles for rings.

Why: Prevent losses.

Code Sample:
```cypher
MATCH p=(a)-[*3..]-(a) RETURN p
```

```mermaid
flowchart LR
    A["Account A"] --> B["Account B"]
    B --> C["Account C"]
    C --> A
    Note["Cycle exposes suspicious fund transfers"] -.-> B
```

### Explaining Recs in Depth

Collaborative filtering via paths.

Why: Boost sales.

Code Sample:
```cypher
MATCH (u:User)-[":BOUGHT"]->(p)<-[":BOUGHT"]-(other)-[":BOUGHT"]->(rec)
RETURN rec
```

```mermaid
flowchart LR
    U[User] --> Purchased["Purchased product"]
    Other["Similar user"] --> Purchased
    Other --> Recommendation["Recommended product"]
    U -.-> Recommendation
```

### Explaining Networks in Depth

Route optimization.

Why: Efficiency.

Code Sample:
```cypher
MATCH p=shortestPath((start)-[*]-(end)) RETURN p
```

```mermaid
flowchart LR
    Start["Start node"] --> Hub1["Hub 1"]
    Hub1 --> Hub2["Hub 2"]
    Hub2 --> End[Destination]
    Start -.-> End
```

### Explaining Bio in Depth

Interaction paths.

Why: Drug discovery.

Code Sample:
```cypher
MATCH (prot1:Protein)-[":INTERACTS*"]-(prot2) RETURN path
```

```mermaid
flowchart LR
    Protein1["Protein 1"] --> Interaction[Interaction]
    Interaction --> Protein2["Protein 2"]
    Interaction --> Protein3["Protein 3"]
```

Real wins: Banks save millions spotting fraud graphs.

```mermaid
flowchart TD
    A["Use Cases"] --> B["Social Recs"]
    A --> C["Fraud Rings"]
    A --> D[Routing]
    B --> E["Paths: Common Connections"]
    C --> F["Cycles: Detect Loops"]
```
