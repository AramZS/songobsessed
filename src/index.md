---
title: "Song Obsessed"
eleventyExcludeFromCollections: true
internalPageTypes: [ 'home' ]
path: /
layout: "layout.11ty.js"
---

Welcome to Song Obsessed.

## What is this site for?

TKTK

[Songs](/songs/)

## Select your preferred player

The audio player on this site supports each of these player types. Not all songs may be available in your preferred player type. If it is only available in another player type then the player will use that type. 

<script>
	window.setPreferredAPI = function(t){
		console.log("setPreferredAPI", t, t.dataset.pref)
		xplayer.setRetainedSetting("preferredAPI", t.dataset.pref)
	}
</script>

<button onclick=setPreferredAPI(this) data-pref="yt">YouTube</button> <button onclick=setPreferredAPI(this) data-pref="spotify">Spotify</button> <button onclick=setPreferredAPI(this) data-pref="native">Native</button>
