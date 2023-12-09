---
title: "Song List"
eleventyExcludeFromCollections: true
internalPageTypes: [ 'collection' ]
path: /songs/index.html
layout: "tags.11ty.js"
pagination:
    data: collections.songsPages
    size: 1
    alias: paged
permalink: "songs/{% if paged.number > 1 %}{{ paged.number }}/{% endif %}index.html"
eleventyComputed:
    title: "Songs {% if paged.number > 1 %} | Page {{paged.number}}{% endif %}"
    description: "Songs I'm obsessed with"
---

Welcome to the list of songs I'm obsessed with.



[Return to Home](/)
