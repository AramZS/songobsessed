// Create a class for the element
// https://web.dev/articles/custom-elements-best-practices
// https://github.com/web-scrobbler/web-scrobbler/blob/master/src/connectors/player.fm.ts
// https://github.com/web-scrobbler/web-scrobbler/issues/3730
class PlayerElement extends HTMLElement {
	static observedAttributes = [
		"xp-playing",
		"xp-playertype",
		"xp-media-state",
		"xp-player-mode",
	];
	constructor() {
		// Always call super first in constructor
		super();
		this.playerEmptyStateClass = "player-empty";
		this.playerActiveClass = "player-active";
		this.player = false;
		this.internalPlaylist = [];
		this.songDataStore = {};
		this.classList.add(this.playerEmptyStateClass);
		this.classList.add("miniplayer");
		this.playlistHandler = {
			deleteProperty: function (target, property) {
				//delete window.xplayer.songDataStore[target[property]];
				delete target[property];
				console.log("Deleted %s", property);
				return true;
			},
			has(target, property) {
				return property in this || property in target;
			},
			set: function (target, property, value, receiver) {
				target[property] = value;
				console.log("Set %s to %o", property, value);
				if (window.xplayer.songDataStore.hasOwnProperty(value)) {
					console.log("Song set that was already cached.");
				} else if (
					property != "length" && // fun fact, length is a property managed by the object! I didn't know that until now.
					window["xplayer-setup"].innerText
				) {
					window.xplayer.songDataStore[value] = JSON.parse(
						window["xplayer-setup"].innerText
					).song;
					window.xplayer.songDataStore[value].siteUrl =
						window.location.href;
				} else {
					console.log("Song object not found");
				}
				return true;
			},
			get: function (target, property) {
				console.log("get %s", property);
				// Use the properties of the thing we are proxying if we haven't overwritten them.
				if (
					Object.getOwnPropertyNames(
						Object.getPrototypeOf(this)
					).includes(property)
				) {
					return window.xplayer.songDataStore[target[property]];
				} else {
					console.log("return native", property);
					return target[property];
				}
			},
			toString: function (target) {
				target[property] = value;
				console.log("toString");
				return target.toString();
			},
		};
		this.playlistManager = new Proxy(
			this.internalPlaylist,
			this.playlistHandler
		);
		this.internalPlayed = [];
		this.songsadded = new Set();
		this.dataPath = "pageData"; //window[this.dataPath].song
		this.mediaStates = {
			playing: "playing",
			paused: "paused",
			ended: "ended",
			buffering: "buffering",
			cued: "cued",
		};
		this.mediaState = "await";
		this.mode = false;
	}

	linkMaker(url) {
		return `<a href="${url}" class="xplayer-songlink" hx-boost="true" hx-swap="outerHTML show:top" hx-target="#main-content" hx-push-url="true" hx-select="#main-content">🔗</a>`;
	}

	getMediaState(value) {
		return Object.keys(this.mediaStates).find(
			(key) => this.mediaStates[key] === value
		);
	}

	connectedCallback() {
		console.log("Custom element added to page.");
		document.body.addEventListener(
			"htmx:afterOnLoad",
			function (evt) {
				this.htmxSwapCallback();
			}.bind(this)
		);
		this.setup();
	}

	makeMediaPlay() {
		var type = this.getAttribute("xp-playertype");
		console.log("play");
		switch (type) {
			case "youtube":
				this.player.playVideo();
				break;

			default:
				break;
		}
	}
	makeMediaPause() {
		var type = this.getAttribute("xp-playertype");
		console.log("pause");
		switch (type) {
			case "youtube":
				this.player.pauseVideo();
				break;

			default:
				break;
		}
	}
	makeMediaAdvance() {
		var type = this.getAttribute("xp-playertype");
	}

	attributeChangedCallback(attribute, previousValue, currentValue) {
		// called when attributes are added, removed, or changed
		console.log(
			"Attribute change",
			attribute,
			" changed from ",
			previousValue,
			" to ",
			currentValue
		);
		switch (attribute) {
			case "xp-playing":
				if (
					(!previousValue || previousValue.length < 1) &&
					currentValue &&
					currentValue.length > 0
				) {
					this.classList.add(this.playerActiveClass);
					this.classList.remove(this.playerEmptyStateClass);
				} else if (!currentValue || currentValue.length < 1) {
					this.classList.add(this.playerEmptyStateClass);
					this.classList.remove(this.playerActiveClass);
				}
				break;
			case "xp-media-state":
				if (currentValue == "playing") {
					window["xplayer-pause"].style.display = "inline-block";
					window["xplayer-play"].style.display = "none";
					this.makeMediaPlay();
				} else if (currentValue == "paused") {
					window["xplayer-pause"].style.display = "none";
					window["xplayer-play"].style.display = "inline-block";
					this.makeMediaPause();
				}
				break;
			default:
				break;
		}
	}

	htmxSwapCallback() {
		console.log("Custom element has seen an htmx swap.");
		if (window["xplayer-setup"]) {
			var autoplay = false;
			var mediaId =
				window["xplayer-setup"].attributes["data-video-id"].value;

			//this.handlePlayingChange(mediaId);
			if (!this.songsadded.has(mediaId)) {
				this.handlePlayingChange(mediaId);
			} else {
				console.log(
					"x-player has already played or added this song and will not auto-enqueue it again.",
					mediaId
				);
			}
		}
	}

	removePlaylistTag(mediaId) {
		var el = document.getElementById("playlist-item-" + mediaId);
		el.remove();
	}

	setMediaState(state) {
		this.setAttribute("xp-media-state", state);
	}

	setPlayerState(state) {
		this.setAttribute("xp-player-mode", state);
	}

	advanceMedia() {
		// Advance the player to next media item.
		console.log("Advance to next media item.");
		console.log(
			"Song Data store state at advanceMedia now ",
			this.songDataStore
		);
		if (this.playlistManager.length > 0) {
			var nextMedia = this.playlistManager.shift();
			console.log("Next media item is:", nextMedia);
			//var nextMediaObj = this.songDataStore[nextMedia];
			this.setPlaylistPlaying(nextMedia);
			this.youtubeAPI(nextMedia);
			this.removePlaylistTag(nextMedia);
			this.setMediaState("playing");
		}
	}

	youtubeIframeTemplate(videoUrl, autoplay) {
		// https://developers.google.com/youtube/player_parameters
		// https://developers.google.com/youtube/iframe_api_reference
		var append = "";
		if (autoplay) {
			if (finalString.indexOf("?") > -1) {
				append += "&";
			} else {
				append += "?";
			}
			append += "autoplay=1";
		}
		return /*html*/ `<iframe class="youtube-iframe" src="${videoUrl}${append}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
	}

	youtubeAPI(videoId, autoplay) {
		if (this.player) {
			// Player is already going
			this.player.loadVideoById(videoId);
		} else {
			console.log("go youtubeAPIMaker");
			// https://developers.google.com/youtube/player_parameters
			// https://developers.google.com/youtube/iframe_api_reference
			// var player;
			var onYouTubeIframeAPIReady = () => {
				this.player = new YT.Player("xplayer-playbox", {
					height: "390",
					width: "640",
					videoId: videoId,
					playerVars: {
						playsinline: 1,
						allowfullscreen: 1,
						frameborder: 0,
						autoplay: autoplay ? 1 : 0,
						enablejsapi: 1,
						origin: document.location.host,
					},
					events: {
						onReady: autoplay ? onPlayerReady : () => {},
						onStateChange: onPlayerStateChange.bind(this),
					},
				});
				this.mediaStates = {
					playing: YT.PlayerState.PLAYING,
					paused: YT.PlayerState.PAUSED,
					ended: YT.PlayerState.ENDED,
					buffering: YT.PlayerState.BUFFERING,
					cued: YT.PlayerState.CUED,
				};
				this.mode = "YT";
			};
			var onPlayerReady = (event) => {
				event.target.playVideo();
				this.setMediaState("playing");
			};
			var onPlayerStateChange = (event) => {
				console.log("player state change", event);
				var state = this.getMediaState(event.data);
				console.log("Event state is ", state);
				this.mediaState = state;
				if ("ended" == state) {
					this.advanceMedia();
				}
			};
			var makeitGo = onYouTubeIframeAPIReady.bind(this);
			this.classList.add("yt");
			this.setAttribute("xp-playertype", "youtube");
			makeitGo();
		}
		// this.setAttribute("now", videoId);
		this.internalPlayed.push(videoId);
	}

	disconnectedCallback() {
		console.log("Custom element removed from page.");
	}

	adoptedCallback() {
		console.log("Custom element moved to new page.");
		console.log("");
	}

	playlistCheck() {
		console.log(this.internalPlaylist);
	}

	shouldAddToPlaylist() {
		if (
			this.internalPlaylist.length == 0 &&
			this.internalPlayed.length == 0
		) {
			return false;
		}
		return true;
	}

	setup() {
		this.wrapper = document.createElement("div");
		this.wrapper.id = "xplayer-wrapper";
		this.playbox = document.createElement("div");
		this.playbox.id = "xplayer-playbox";
		this.playlistbox = document.createElement("div");
		this.playlistbox.id = "xplayer-playlist";
		this.playlistbox.innerHTML = `<p>Currently Playing: <span id="xplayer-currently" class="playlist-item"> ... </span></p><p>Next Up:</p>`;
		this.playlistqueue = document.createElement("div");
		this.playlistqueue.id = "xplayer-playlist-next";
		this.playlistbox.appendChild(this.playlistqueue);
		this.appendChild(this.wrapper);
		this.wrapper.appendChild(this.playbox);
		this.wrapper.appendChild(this.playlistbox);

		this.controlbox = document.createElement("div");
		this.controlbox.id = "xplayer-controlbox";
		this.controlbox.innerHTML = /*html*/ `<div>
			<div class="xplayer-control play" id="xplayer-play">▶</div>
			<div class="xplayer-control" id="xplayer-pause">⏸</div>
			<div class="xplayer-control" id="xplayer-next">⏭</div>
			<div class="xplayer-control" id="xplayer-enlarge">↖</div>
			<div class="xplayer-control" id="xplayer-shrink">↘</div>
		</div>`;
		this.wrapper.appendChild(this.controlbox);
		var event = new Event("xplaylist-ready");
		document.dispatchEvent(event);
		this.dispatchEvent(event);

		if (window["xplayer-setup"]) {
			console.log("setup first YT player");
			let activate = function () {
				var mediaId =
					window["xplayer-setup"].attributes["data-video-id"].value;

				// this.songDataStore[mediaId] = window[this.dataPath].song;
				// this.setAttribute("playing", mediaId);
				this.handlePlayingChange(mediaId);
				// this.youtubeAPIMaker(mediaId, true);
				// this.setAttribute("last-added", mediaId);
			}.bind(this);
			try {
				activate();
			} catch (e) {
				console.log("initial activation failed because ", e);
				let timeout = setTimeout(() => {
					console.log("timeout activation");
					activate();
				}, 3000);
				/** 
				document.addEventListener("ytapi-ready", () => {
					activate();
					console.log('heard "ytapi-ready" event');
					clearTimeout(timeout);
				});
				console.log('listen for "ytapi-ready" event');
				*/
			}
		}

		this.controlbox.addEventListener("click", (e) => {
			console.log("Control box click", e.target.id);
			switch (e.target.id) {
				case "xplayer-enlarge":
					if (xplayer.classList.contains("min")) {
						this.classList.remove("min");
						document.body.classList.remove("xp-min");
						this.setPlayerState("standard");
						document.body.classList.add("xp-standard");
					} else {
						this.classList.add("large");
						document.body.classList.add("xp-large");
						this.setPlayerState("large");
					}
					break;
				case "xplayer-shrink":
					if (xplayer.classList.contains("large")) {
						this.classList.remove("large");
						document.body.classList.remove("xp-large");
						this.setPlayerState("standard");
						document.body.classList.add("xp-standard");
					} else {
						this.classList.add("min");
						document.body.classList.add("xp-min");
						this.setPlayerState("min");
					}
					break;
				case "xplayer-play":
					this.setMediaState("playing");
					break;
				case "xplayer-pause":
					this.setMediaState("paused");
					break;
				case "xplayer-next":
					this.advanceMedia();
					break;
				default:
					break;
			}
		});
	}

	addToPlaylist(mediaId) {
		this.playlistManager.push(mediaId);
		var newItem = document.createElement("div");
		newItem.innerHTML = `${
			this.songDataStore[mediaId].songtitle
		} by ${this.songDataStore[mediaId].artists.join(
			", "
		)}   ${this.linkMaker(this.songDataStore[mediaId].siteUrl)}`;
		newItem.id = "playlist-item-" + mediaId;
		newItem.classList.add("playlist-item");
		this.playlistqueue.append(newItem);
		htmx.process(this.playlistqueue);
	}

	setPlaylistPlaying(val) {
		console.log(
			"Process song object to currently playing",
			this.songDataStore[val]
		);
		this.setAttribute("xp-playing", val);
		window[
			"xplayer-currently"
		].innerHTML = `<span class="current-episode-link">${
			this.songDataStore[val].songtitle
		}</span> by <span class="current-series-link">${this.songDataStore[
			val
		].artists.join(", ")}</span>  ${this.linkMaker(
			this.songDataStore[val].siteUrl
		)}`;
		window["xplayer-currently"].setAttribute("data-active-media", val);
		htmx.process(window["xplayer-currently"]);
	}

	handlePlayingChange(val, advancing) {
		if (val) {
			console.log("Playing requested set to", val);
			this.setAttribute("last-added", val);
			this.songsadded.add(val);
			this.songDataStore[val] = JSON.parse(
				window["xplayer-setup"].innerText
			).song;
			this.songDataStore[val].siteUrl = window.location.href;
			// this.songDataStore[val] = window[this.dataPath].song;
			if (!this.shouldAddToPlaylist() && !!!advancing) {
				console.log("Song Data store state now ", this.songDataStore);
				this.setPlaylistPlaying(val);
				this.youtubeAPI(val, true);
			} else {
				console.log("Playing moved to playlist for", val);
				this.addToPlaylist(val);
			}
			this.playlistCheck();
		} else {
			// this.removeAttribute('disabled');
			console.log("Playlist item not given");
			this.playlistCheck();
		}
	}

	get played() {
		return this.internalPlayed;
	}

	get playlist() {
		return this.internalPlaylist;
	}

	set playing(val) {
		this.handlePlayingChange(val);
	}
}

customElements.define("x-player", PlayerElement);
