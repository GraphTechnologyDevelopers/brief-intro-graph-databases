---
layout: page
permalink: /book/
---

Welcome to the complete guide to graph databases. This book covers everything from fundamental concepts to practical implementation, with code samples in Cypher and Python, plus Mermaid diagrams for clarity.

## Table of Contents

{% assign chapters = site.chapters | sort: 'order' %}
{% for ch in chapters %}
{{ ch.order }}. [{{ ch.title }}]({{ ch.url | relative_url }})
{% endfor %}

## About This Book

This manual expands on core concepts for developers, blending theory with practical how-tos. Expect deeper dives into modeling, querying, and implementation. It's distilled from key sources but written briskly: why graphs outperform alternatives, how to build and query them, and tips for real apps.

Data explodes, but value lies in links. Spot fraud rings via cycles; recommend via paths. Ignore graphs, and your systems miss hidden insights.

