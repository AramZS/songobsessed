---
title: "What is this site?"
layout: "layout.11ty.js"
---

This site is a 11ty generated site built with HTMX to allow you to run a player while you explore the site. The home page has a lot of information about what it is and what I'm trying to do, but I also plan to write a little more about the technical nature and issues involved on this page. 

I just want to note again that this is absolutely a work in progress so when I'm definitive here, it's more about what I want the site to be. There may still be bugs in between that and the current state. 

## Why 11ty?

I've become very interested in static site generators for a number of reasons. I believe it is important to contribute back to the web through [cool stable links](https://www.w3.org/Provider/Style/URI) and a site that is easy to maintain, move around, and archive. Additionally, it became clear to me that if I was going to pull in all my old song selections it was going to involve a bunch of complex queries and a lot of posts. Maintaining a site that could handle that on a hobby infrastructure was going to be a challenge. Here I can bake a bunch of pages and drop them into GitHub's free hosting. It's easy, it's friendly to the open web, it helps the artists I want to recommend by providing links and information about them in a format that is easy to crawl, share and index. 11ty has proven particularly effective in setting up exactly this type of site, and it has proven much more capable of handling scale than anything else I tried, as proven out [by my Twitter archive](https://tweets.aramzs.com/). 

## Why HTMX?

I've had the idea for a site like this for a while, but the complexity involved in taking it on with a traditional web framework like React was particularly daunting. When I learned about HTMX and [experimented](https://fightwithtools.dev/posts/writing/trying-htmx/) with it, I realized it would work perfectly for what I wanted to accomplish here. I don't want to build an app here, I want a website that makes the most of what the web can do and [HTMX](https://htmx.org/) really enables it to happen. 

So much more of what we do on the web involves media now, and so many sites are so ludicrously bad at allowing you to browse and listen to or watch media at the same time. React has technically enabled Single Page App-style behavior for this for... I dunno... a decade now? But "technically enabled" and "made easy" are two very different things. HTMX makes it relatively easy to enable users to browse and listen to a site at the same time, which is *basic shit* that I think is important [for the future of the open web](https://www.nytimes.com/2020/11/24/technology/smartphones-apps.html). 

You can look at the commits yourself and see this took up maybe about 10 days worth of work. That's about how long a health web development ecosystem should enable this sort of project to take in my opinion. I've spent a week debugging react project build steps. This project is nearly zero dependencies outside of HTMX. Think about that, doesn't it sound *good*? 

Even better, I can likely turn this into [a progressive web app](https://www.washingtonpost.com/technology/2023/05/30/progressive-web-apps/) pretty quickly. It's on the to-do list.  

## What is XPlayer supposed to be?

I don't think I'm unusual among millennials when I say that every single tool I've ever used to play music has died (or changed into a fundamentally different thing). I started doing this whole 'song-a-day' thing all the way back in 2009 on a site called TheSixtyOne. Since then, I've gone through three different tools run by other people to do 'song-a-day' style activity. I've used even more music players over that time. 

I'm just tired of being at the mercy of the whims of venture capital, who the RIAA decides to sue, and the endless changes to functionality on platforms more concerned with random metric than what their users actually want and use. 

XPlayer and this site present an alternative approach for me. Taking [a page out of the IndieWeb](https://indieweb.org/POSSE) and [Boone Gorges' Project Reclaim](https://teleogistic.net/2011/03/15/project-reclaim/), I want to eventually move the effort [I put into making playlists](https://www.schizochronotopia.com/p/how-spotify-asks-listeners-to-hack) to a platform I own, so those playlists are not at the mercy of music being removed from one particular platform or platform death. It also means I can build features that play into how I want to find, use, and search my own music preferences that just aren't available elsewhere. I appreciate Spotify and how it works a lot. I use it heavily. But I've learned the same lesson over and over again: don't put your content on a platform you don't own. I'm not always very good at that, but if being a heavy user of Spotify [has taught me anything](https://www.theverge.com/2015/9/30/9416579/spotify-discover-weekly-online-music-curation-interview), it's that playlists are indeed content and they've got enough value to be preserved in a context where I can actually use them. 

XPlayer is designed to do that for me and for others. It's made to hopefully make it easy to create mixtapes again. It's so that if my favorite artist decides they're going to release on some platform other than the one I'm currently on I can meet them there, instead of trying to push them somewhere they don't want to be. 

## What else do I want this site to do? 

I want to make it multi-playlist. Right now everything is mapped against my "obsessed" playlist that is moddled on the song-a-day sites. But I want to be able to either build playlists on here or on other platforms and have them retained here. 

I also want to make it easy to push sets of songs or whole playlists into the player at once. The API is technically there, but it really needs to be proven out through more building. 

I want this site to continue to be a place that showcases the max of what the XPlayer can do and hopefully have it be a thing more people decide to use once I get it out open source and usable by others. 

I need to set up local storage mapping so you can leave the site and have your playlist state retained as an option if you want. 

I'd love to have other people copy this site and end up with [a sort of web-ring style sharing of music](https://htmx.org/webring/), where we can use the capabilities of HTMX to navigate to other sites and have them share the music they love and have it all live in a single player experience. 

## Changelog Reflections 

This isn't so much a changelog as it is a place to reflect on some of the mistakes I made and how I fixed them, to help others.

### V1.0.1

This is the first real release of this site and I have a lot of things I learned:

#### Making tags/collection ignore case 

One of the frustrations of 11ty is that any tag is taken directly as whatever the string is and turned into a collection. I suppose this is functionally not going to impact most users, but good SEO means archive pages around tags, and on this site my interest in musical genres made that especially useful. Since my second 11ty site I've been using the same set of functions to build paged collections of posts based on tags that let me create those pages. 

That code is really from my first try at all this and it is, to take it easy on myself, a real mess. It's doing what I want it to do, but it isn't great at it, and I'm not even sure it is the right way to use 11ty to create a generalized set of pages at unique tag URL paths. 

The main problem is that because collections are *case sensitive* if two songs have the same tag with different capitalization the process of slugging them for a proper URL will cause them to both try to write to the same file. I tried to do some fancy merging for this project to avoid the problem but it apparently only does for the first page of a tag. I think I can fix it, but it really needs to be entirely refactored from zero. Also, I should prob ask around and find out if there's a better way to do this. 

#### HTMX and Anchor tags 

They don't work together. I'm not sure why, but I'm sure there's a reason. I'm going to have to figure out a way to make them work together for long pages like this one. 

#### Player types for XPlayer 

Basically, as far as I can tell, the only player embed from a platform that works in a straightforward way is YouTube's. Trying to get embeds from other sites has proven somewhat difficult and I wanted to get this out in the hope that maybe I could get some help. Soundcloud surely has an API that I just haven't found yet? Then there's Bandcamp which seems to just have plain iFrames with no events or API? That seems wild. I want to support more players. 

Spotify's API is surprisingly almost entirely undocumented. It's especially notable that even when Spotify acknowledges I'm logged in it doesn't seem to be interacting with the app at all and occasionally it just refuses to log in on some browsers. 

Spotify is missing what seems like some obvious features: 

1. A player state other than paused. 
2. Notification that position is at 0 because it is starting, which requires we check duration to see if it is zero. 
3. Easy capability to restart a song.
4. Retaining the ID of iframe you initiate the API against.
5. The ability to fully size the embed, instead it has a few set aspect ratios and sizes that it will snap to depending on the size.  

#### Fixing the player to the bottom 

For some reason it would not stay stuck with its bottom against the bottom, instead pulling down below the viewport. I had to add `initial-scale=1.0,minimum-scale=1` to the `viewport` meta.

#### Managing the Playlist

When I set up XPlayer I thought it would be a good idea to use a Proxy over an Array to manage the actual list functionality. I did this for a few reasons, I wanted to simplicity of an array, but also I thought it would be good to try out this specific pattern which is commonly recommended by web engineering bloggers. It's a bad pattern. [It was a bad idea](https://twitter.com/Chronotope/status/1741872967238242526). 

I had never had the opportunity to use Proxy before, so what I didn't realize is that it fully proxies everything and that means *everything*. Instead of a simple layer of functionality over a basic array, I ended up with an object that almost has to rebuild the array and ends up being extremely fragile from an engineering perspective. In the process I've learned a lot about both Proxy and Array, which is good, that's a good thing to get out of this. There are definitely things for which [Proxy is good](https://github.com/mikaelbr/awesome-es2015-proxy) but for the final version of XPlayer I need to refactor this decision. Having a parallel structure to the HTML elements in the playlist is... honestly... a waste of time and energy. The future way I plan to do this is just manage the HTML elements directly. 

Future developers take note: ignore all the posts that say use Proxy to add functionality on to an array. Do not do that, you need to step back and realize that you don't actually want an Array. 

#### The XPlayer Custom Element 

Creating XPlayer as a custom element with internal functionality was the right choice, it made a lot of things easier and the main issue I have with it is that containing it all in one file has become unwieldy. That's expected stuff as I try and move it towards a more mature project. 

#### Using HTMX

There were many things that using HTMX did that made this project easier. It has some smart events and useful configuration options that came in handy and, as I said earlier, the project likely would not have gotten off the ground without it. That said, the defaults for HTMX are clearly not designed for a project like this. That's fine, but it does mean that I had a few stumbling blocks that I had to figure out.

`hx-preserve` just doesn't work like I expected it to. You'd think it would leave an element out of recalculating the DOM, but it doesn't work that way. Instead one needs to target the area of the DOM that you want to change from page to page and make sure that the instructions to target that are in every link. This is important allowing the iFrame to continue playing.

I'm pretty unclear why the default HTMX behavior on the back button is to recalculate the entire DOM when it never does that at any time. I'm new to HTMX, so I'm not going to criticize this idea, but it was unclear to me why it was happening or even what was happening. In order to preserve the unchanging elements of my DOM on the back button I needed to use the `hx-history-elt` attribute on my `#main-content` element to indicate to HTMX that element was the only one that should be recalculated. This took a while to figure out, but turned out to be extremely important. Take note of this and the previous paragraph anyone who wants to use HTMX to manage a persistent element over navigation events. 

The final issue that came up is that I have a weird process as part of how I build static sites which is that I split up the CSS files over templates to some extent. The song template styling doesn't need to be loaded for the user on the home page, for example. I don't think this is particularly common so the glitches here are on me. Basically HTMX doesn't really know how to manage the changing HEAD elements by default when there are things like different script and css files being loaded. The result was a lot of weirdness on the back button when pages were dependent on styles unique to their own HEAD elements, causing some pages to not load their unique style sheets. I ended up having to use [the `head-support` extension](https://htmx.org/extensions/head-support/) to HTMX. Once I had it configured properly, everything worked like I had hoped. 

In retrospect, I'm not sure that splitting stylesheets is the right choice for this project. Something to think about. 

#### Scrobbles from this site 

I ended up finding the simplest of the [connectors](https://github.com/web-scrobbler/web-scrobbler/tree/master/src/connectors) to Web Scrobbler and just adding the elements to support it here. Perhaps I'll build my own connecter or work towards one of the more complex ones in the future. Right now though it Just Works, which is what I wanted for a V1.

#### Pulling down from playlists and information from other sites. 

Right now the process of pulling info from Spotify's API and the Last.fm and MusicBrainz APIs is messy and fairly manual. I'd like to turn that into an automated event in the long run. 
