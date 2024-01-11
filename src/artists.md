---
layout: "tags.11ty.js"
eleventyExcludeFromCollections: true
pagination:
    data: collections.deepArtistsList
    size: 1
    alias: paged
permalink: "artist/{{ paged.slug }}/{% if paged.number > 1 %}{{ paged.number }}/{% endif %}index.html"
eleventyComputed:
    title: "Artist: {{ paged.tagName }}{% if paged.number > 1 %} | Page {{paged.number}}{% endif %}"
    description: "Songs from {{ paged.tagName }}"
---
