---
layout: "tags.11ty.js"
eleventyExcludeFromCollections: true
pagination:
    data: collections.deepTagList
    size: 1
    alias: paged
permalink: "tag/{{ paged.slug }}/{% if paged.number > 1 %}{{ paged.number }}/{% endif %}index.html"
eleventyComputed:
    title: "Tag: {{ paged.tagName }}{% if paged.number > 1 %} | Page {{paged.number}}{% endif %}"
    description: "Songs tagged with {{ paged.tagName }}"
---
