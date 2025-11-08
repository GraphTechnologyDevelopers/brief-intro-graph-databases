---
title: Getting Started with Neo4j
order: 20
---

Download, run.

Create: `CREATE (a:Person {name:'Alice'})-[":KNOWS"]->(b:Person {name:'Bob'})`

Query: `MATCH (a:Person)-[":KNOWS"]->(b) RETURN a, b`

Neo4j: Community free; enterprise scales.

Install: Download, bin/neo4j console.

Python driver: pip install neo4j.

Code:
```python
from neo4j import GraphDatabase

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "password"))

def add_friend(tx, name, friend_name):
    tx.run("MERGE (a:Person {name: $name}) "
           "MERGE (b:Person {name: $friend_name}) "
           "MERGE (a)-[":KNOWS"]->(b)", name=name, friend_name=friend_name)

with driver.session() as session:
    session.execute_write(add_friend, "Alice", "Bob")
```

Query:
```
MATCH (a:Person)-[":KNOWS"]->(b) RETURN a.name, b.name
```

Scale: Use clusters for prod.
