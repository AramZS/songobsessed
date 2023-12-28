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
	// Setup
	constructor() {
		// Always call super first in constructor
		super();
		this.playerEmptyStateClass = "player-empty";
		this.playerActiveClass = "player-active";
		this.playerActivated = false;
		this.player = false;
		this.spotifyController = false;
		this.autoPlay = true;
		this.internalPlaylist = [];
		this.songDataStore = {};
		this.classList.add(this.playerEmptyStateClass);
		this.classList.add("miniplayer");
		this.localStorageKey = "xplayerRetainedSettings";
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
				} else if (property in this) {
					return property in this;
				} else {
					console.log("return native", property);
					return target[property];
				}
			},
		};
		this.playlistManager = new Proxy(
			this.internalPlaylist,
			this.playlistHandler
		);
		this.internalPlayed = [];
		this.songsAdded = new Set();
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

	setup() {
		this.wrapper = document.createElement("div");
		this.wrapper.id = "xplayer-wrapper";
		this.playboxWrapper = document.createElement("div");
		this.playboxWrapper.id = "xplayer-playbox-wrapper";

		this.playboxImageWrapper = document.createElement("div");
		this.playboxImageWrapper.id = "xplayer-image-wrapper";
		this.playboxWrapper.appendChild(this.playboxImageWrapper);

		this.playbox = document.createElement("div");
		this.playbox.id = "xplayer-playbox";
		this.playboxWrapper.appendChild(this.playbox);
		this.playlistbox = document.createElement("div");
		this.playlistbox.id = "xplayer-playlist";
		this.playlistbox.innerHTML = `<p>Currently Playing: <span id="xplayer-currently" class="playlist-item"> ... </span></p><p>Next Up:</p>`;
		this.playlistqueue = document.createElement("div");
		this.playlistqueue.id = "xplayer-playlist-next";
		this.playlistbox.appendChild(this.playlistqueue);
		this.appendChild(this.wrapper);
		this.wrapper.appendChild(this.playboxWrapper);
		this.wrapper.appendChild(this.playlistbox);

		this.controlbox = document.createElement("div");
		this.controlbox.id = "xplayer-controlbox";
		this.controlbox.innerHTML = this.ctrlBox();
		this.wrapper.appendChild(this.controlbox);

		var playerMode = this.getRetainedSetting("playerMode");
		if (playerMode == "min") {
			this.changePlayerMode("xplayer-shrink");
		} else if (playerMode == "large") {
			this.changePlayerMode("xplayer-enlarge");
		}

		this.preferredAPI = this.getRetainedSetting("preferredAPI") || "yt";

		if (
			this.hasRetainedSetting("autoPlay") &&
			window["xplayer-autoplay-switch"]
		) {
			this.autoPlay = this.getRetainedSetting("autoPlay");
			window["xplayer-autoplay-switch"].checked = this.autoPlay;
		} else if (window["xplayer-autoplay-switch"]) {
			this.autoPlay = window["xplayer-autoplay-switch"].checked;
		} else {
			this.autoPlay = true;
		}
		this.setRetainedSetting("autoPlay", this.autoPlay);
		var event = new Event("xplaylist-ready");
		document.dispatchEvent(event);
		this.dispatchEvent(event);
		var playMode = this.getRetainedSetting("autoPlay");
		this.autoPlay = playMode ? true : playMode;
		if (window["xplayer-setup"]) {
			console.log("setup first YT player");
			let activate = function () {
				// Set Media ID
				// var mediaId =
				//	window["xplayer-setup"].attributes["data-video-id"].value;
				var mediaId = this.simpleHash(document.location.pathname);
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
		window["xplayer-playlist-next"].addEventListener("click", (e) => {
			window.test = e.target;
			var command = e.target.getAttribute("xp-command");
			if (command) {
				var playlistItem = e.target.closest(".playlist-item");
				var mediaId = playlistItem.getAttribute("data-media-id");
				console.log(
					"Next playlist item command click",
					command,
					mediaId
				);
				switch (command) {
					case "queue-next":
						this.dropFromPlaylistArray(
							this.playlistManager,
							mediaId
						);
						this.addToPlaylist(mediaId, true);
						break;
					case "play-now":
						this.makeMediaAdvance(mediaId);
						break;
					case "playlist-remove":
						this.removeMediaFromPlaylist(mediaId);
						break;
					default:
						break;
				}
			}
		});
		this.controlbox.addEventListener("click", (e) => {
			console.log("Control box click", e.target.id);
			this.changePlayerMode(e.target.id);
		});
		window["xplayer-autoplay-switch"].addEventListener("click", (e) => {
			var autoPlaySetting = e.target.checked;
			console.log("Autoplay switch click", autoPlaySetting);
			this.autoPlay = autoPlaySetting;
			this.setRetainedSetting("autoPlay", this.autoPlay);
		});
	}

	disconnectedCallback() {
		console.log("Custom element removed from page.");
	}

	adoptedCallback() {
		console.log("Custom element moved to new page.");
		console.log("");
	}

	// https://gist.github.com/jlevy/c246006675becc446360a798e2b2d781
	simpleHash(str) {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash &= hash; // Convert to 32bit integer
		}
		return new Uint32Array([hash])[0].toString(36);
	}

	// Retain settings mode
	getRetainedSettings() {
		var settings = localStorage.getItem(this.localStorageKey);
		return settings === null ? {} : JSON.parse(settings);
	}
	hasRetainedSetting(settingName) {
		return this.getRetainedSettings()?.hasOwnProperty(settingName);
	}
	getRetainedSetting(settingName) {
		return this.getRetainedSettings()?.[settingName];
	}
	setRetainedSettings(settingsObj) {
		localStorage.setItem(this.localStorageKey, JSON.stringify(settingsObj));
	}
	setRetainedSetting(settingName, settingValue) {
		var settingsObj = this.getRetainedSettings();
		settingsObj[settingName] = settingValue;
		this.setRetainedSettings(settingsObj);
	}

	// Templates
	ctrlBox() {
		return /*html*/ `<div>
			<div class="xplayer-control play" id="xplayer-play">▶</div>
			<div class="xplayer-control" id="xplayer-pause">⏸</div>
			<div class="xplayer-control" id="xplayer-next">⏭</div>
			<div class="xplayer-control" id="xplayer-enlarge">↖</div>
			<div class="xplayer-control" id="xplayer-shrink">↘</div>
		</div>`;
	}

	imgMaker(mediaId) {
		var url = this.songDataStore[mediaId].featuredImage.replace(
			"640",
			"240"
		);
		return `<img src="${url}" class="xplayer-image" data-xp-image-mediaid="${mediaId}" />`;
	}

	linkMaker(url) {
		return `<a href="${url}" class="xplayer-songlink" hx-boost="true" hx-swap="outerHTML show:top" hx-target="#main-content" hx-push-url="true" hx-select="#main-content">🔗</a>`;
	}

	mediaEntryMaker(mediaId, active) {
		var mediaObj = this.songDataStore[mediaId];
		var newItem = document.createElement("div");
		var innerCode = `${mediaObj.songtitle}`;
		if (active) {
			this.playboxImageWrapper.innerHTML = this.imgMaker(mediaId);
			innerCode = `<span class="current-episode-link">${innerCode}</span>`;
		}
		var artistHtml = `${mediaObj.artists.join(", ")}`;
		if (active) {
			artistHtml = `<span class="current-series-link">${artistHtml}</span>`;
		}
		innerCode += ` by ${artistHtml}`;
		innerCode += `   <span class="playlist-link-chip playlist-chip">${this.linkMaker(
			mediaObj.siteUrl
		)}</span>`;
		if (!active) {
			innerCode += ` <span class="playlist-next-chip playlist-chip" xp-command="queue-next">⬆</span>`;
			innerCode += ` <span class="playlist-now-chip playlist-chip" xp-command="play-now">▶</span>`;
			innerCode += ` <span class="playlist-remove-chip playlist-chip" xp-command="playlist-remove">⌧</span>`;
		}
		newItem.id = "playlist-item-" + mediaId;
		newItem.classList.add("playlist-item");
		newItem.setAttribute("data-media-id", mediaId);
		newItem.innerHTML = innerCode;

		return newItem;
	}

	// API Wrappers

	apiStylesManager(apiName) {
		let apiDataName = "";
		switch (apiName) {
			case "yt":
				this.classList.add("yt");
				this.classList.remove("spotify");
				apiDataName = "youtube";
				break;
			case "spotify":
				this.classList.add("spotify");
				this.classList.remove("yt");
				apiDataName = "spotify";
				break;
			default:
				break;
		}
		this.setAttribute("xp-playertype", apiDataName);
	}

	// YouTube API
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
		var ytID = xplayer.songDataStore[videoId].youtubeId;
		if (this.player) {
			// Player is already going
			this.player.loadVideoById(ytID);
		} else {
			console.log("go youtubeAPIMaker");
			// https://developers.google.com/youtube/player_parameters
			// https://developers.google.com/youtube/iframe_api_reference
			// var player;
			var onYouTubeIframeAPIReady = () => {
				this.player = new YT.Player("xplayer-playbox", {
					height: "390",
					width: "640",
					videoId: ytID,
					host: "https://www.youtube-nocookie.com", // https://stackoverflow.com/questions/56225247/enforce-nocookie-mode-when-using-the-youtube-iframe-api
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
				this.setMediaState("paused");
				this.mediaStates = {
					playing: YT.PlayerState.PLAYING,
					paused: YT.PlayerState.PAUSED,
					ended: YT.PlayerState.ENDED,
					buffering: YT.PlayerState.BUFFERING,
					cued: YT.PlayerState.CUED,
				};
				this.mode = "yt";
			};
			var onPlayerReady = (event) => {
				//event.target.playVideo();
				if (this.playerActivated || this.autoPlay) {
					this.setMediaState("playing");
				}
			};
			onPlayerReady.bind(this);
			var onPlayerStateChange = (event) => {
				console.log("player state change", event);
				var state = this.getMediaState(event.data);
				console.log("Event state is ", state);
				this.mediaState = state;
				if ("ended" == state) {
					this.makeMediaAdvance();
				}
			};
			var makeitGo = onYouTubeIframeAPIReady.bind(this);
			this.apiStylesManager("yt");
			makeitGo();
		}
		// this.setAttribute("now", videoId);
		this.internalPlayed.push(videoId);
	}

	// Spotify API
	// https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api
	// https://developer.spotify.com/documentation/embeds/references/iframe-api
	spotifyAPI(mediaId) {
		let activate = (IFrameAPI) => {
			console.log("onSpotifyIframeApiReady go");
		};
		document.addEventListener("spotify-api-ready", () => {
			// activate();
			console.log('heard "spotify-api-ready" event');
			// clearTimeout(timeout);
		});
		if (this.SpotifyIFrameController) {
			this.spotifyNext(mediaId);
			return;
		}
		const element = document.getElementById("xplayer-playbox");
		const options = {
			uri: mediaId,
			width: "100%",
			height: "100%",
			id: "xplayer-playbox",
		};
		const managePlaybackUpdate = (e) => {
			//  {isPaused: true, isBuffering: false, duration: 146800, position: 0}
			console.log(
				"Spotify progressTimestamp",
				`${parseInt(e.data.position / 1000, 10)} s`,
				e
			);
			if (e.data.isPaused) {
				this.setMediaState("paused");
			} else {
				this.setMediaState("playing");
				this.playerActivated = true;
			}
			if (e.data.position == e.data.duration) {
				this.makeMediaAdvance();
			}
		};
		managePlaybackUpdate.bind(this);
		const callback = (EmbedController) => {
			EmbedController.iframeElement.id = "xplayer-playbox";
			this.SpotifyIFrameController = EmbedController;
			this.player = EmbedController;
			this.apiStylesManager("spotify");
			if (this.autoPlay) {
				this.player.play();
			}
			this.SpotifyIFrameController.addListener(
				"playback_update",
				managePlaybackUpdate
			);
			this.SpotifyIFrameController.addListener("ready", (e) => {
				console.log("SpotifyIFrameController ready event", e);
			});
			this.mode = "spotify";
		};
		callback.bind(this);
		window.SpotifyIFrameAPI.createController(element, options, callback);
		this.internalPlayed.push(mediaId);
	}

	spotifyNext(mediaId) {
		this.SpotifyIFrameController.loadUri(mediaId);
		this.internalPlayed.push(mediaId);
	}

	// Playlist Management
	dropFromPlaylistArray(targetArray, value) {
		var index = targetArray.indexOf(value);
		var removed = false;
		if (index > -1) {
			// only splice array when item is found
			removed = targetArray.splice(index, 1); // 2nd parameter means remove one item only
		}
		return removed;
	}

	// Actions
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

	makeMediaAdvance(specificMediaId) {
		// Advance the player to next media item.
		console.log("Advance to next media item.");
		console.log(
			"Song Data store state at makeMediaAdvance now ",
			this.songDataStore
		);
		var type = this.getAttribute("xp-playertype");
		if (this.playlistManager.length > 0) {
			var nextMedia = "";
			if (specificMediaId) {
				nextMedia = specificMediaId;
				this.dropFromPlaylistArray(
					this.playlistManager,
					specificMediaId
				);
			} else {
				nextMedia = this.playlistManager.shift();
			}
			console.log("advance play");
			console.log("Next media item is:", nextMedia);
			this.removePlaylistTag(nextMedia);
			//var nextMediaObj = this.songDataStore[nextMedia];
			this.setPlaylistPlaying(nextMedia);
			switch (type) {
				case "youtube":
					this.youtubeAPI(nextMedia, true);
					break;

				default:
					break;
			}
			this.setMediaState("playing");
		}
	}

	removeMediaFromPlaylist(mediaId) {
		this.removePlaylistTag(nextMedia);
	}

	removePlaylistTag(mediaId) {
		var el = document.getElementById("playlist-item-" + mediaId);
		el.remove();
	}

	// Listeners
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
			// var autoplay = false;
			// var mediaId =
			//	window["xplayer-setup"].attributes["data-video-id"].value;

			//this.handlePlayingChange(mediaId);
			var mediaId = this.simpleHash(document.location.pathname);
			if (!this.songsAdded.has(mediaId)) {
				// document.location.pathname
				this.handlePlayingChange(mediaId);
			} else {
				console.log(
					"x-player has already played or added this song and will not auto-enqueue it again.",
					mediaId
				);
			}
		}
	}
	// State Management
	setMediaState(state) {
		if (!["paused", "playing"].includes(state)) {
			console.error("Unexpected player state", state);
		}
		this.setAttribute("xp-media-state", state);
	}

	setPlayerState(state) {
		this.setAttribute("xp-player-mode", state);
		this.setRetainedSetting("playerMode", state);
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

	changePlayerMode(command) {
		switch (command) {
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
				this.makeMediaAdvance();
				break;
			default:
				break;
		}
	}

	// Playlist Management
	addToPlaylist(mediaId, moveToTop) {
		console.log("Add to playlist", mediaId, moveToTop);
		if (moveToTop) {
			this.playlistManager.unshift(mediaId);
			var oldItem = document.getElementById("playlist-item-" + mediaId);
			this.playlistqueue.prepend(oldItem);
		} else {
			this.playlistManager.push(mediaId);
			var newItem = this.mediaEntryMaker(mediaId);
			this.playlistqueue.append(newItem);
		}
		htmx.process(this.playlistqueue);
	}

	setPlaylistPlaying(val) {
		console.log(
			"Process song object to currently playing",
			this.songDataStore[val]
		);
		this.setAttribute("xp-playing", val);
		window["xplayer-currently"].innerHTML = "";
		window["xplayer-currently"].append(this.mediaEntryMaker(val, true));
		window["xplayer-currently"].setAttribute("data-active-media", val);
		htmx.process(window["xplayer-currently"]);
	}

	handlePlayingChange(val, advancing) {
		if (val) {
			console.log("Playing requested set to", val);
			this.setAttribute("xp-last-added", val);
			this.songsAdded.add(val);
			this.songDataStore[val] = JSON.parse(
				window["xplayer-setup"].innerText
			).song;
			this.songDataStore[val].siteUrl = window.location.href;
			this.songDataStore[val].mediaId = val;
			// this.songDataStore[val] = window[this.dataPath].song;
			if (!this.shouldAddToPlaylist() && !!!advancing) {
				console.log("Song Data store state now ", this.songDataStore);
				this.setPlaylistPlaying(val);
				this.youtubeAPI(val, this.autoPlay);
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

	// Getters and Setters
	getMediaState(value) {
		return Object.keys(this.mediaStates).find(
			(key) => this.mediaStates[key] === value
		);
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
