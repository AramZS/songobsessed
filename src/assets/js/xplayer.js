// Create a class for the element
// https://web.dev/articles/custom-elements-best-practices
// https://github.com/web-scrobbler/web-scrobbler/blob/master/src/connectors/player.fm.ts
// https://github.com/web-scrobbler/web-scrobbler/issues/3730
if (typeof PlayerElement === "undefined") {
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
			console.group("XPlayer");
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
			this.hookPlayerTypeControls();
			// TODO: Load a preexisting playlist from local storage
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
			this.playlistbox.innerHTML = `<p>Currently Playing: <span id="xplayer-currently"> ... </span></p><p>Next Up:</p>`;
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
					var mediaId = this.getCurrentPageMediaID();
					// this.songDataStore[mediaId] = window[this.dataPath].song;
					// this.setAttribute("playing", mediaId);
					clearTimeout(this.activationTimeout);
					this.handlePlayingChange(mediaId);
					// this.youtubeAPIMaker(mediaId, true);
					// this.setAttribute("last-added", mediaId);
				}.bind(this);
				try {
					activate();
				} catch (e) {
					console.log("initial activation failed because ", e);
					this.activationTimeout = setTimeout(() => {
						console.log("timeout activation");
						this.setAttribute("xp-playertype", null);
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
							this.addToPlaylist(mediaId, true, e.target);
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

		getCurrentPageMediaID() {
			return this.simpleHash(document.location.pathname);
		}

		// Off-player control support
		hookPlayerTypeControls() {
			document.querySelectorAll("[xp-playertype-play]").forEach((el) => {
				el.classList.remove("active-playertype");
				if (
					el.getAttribute("xp-playertype-play") == this.preferredAPI
				) {
					el.classList.add("active-playertype");
				}
				el.addEventListener(
					"click",
					this.reactToPlayerTypeControl.bind(this)
				);
			});
		}

		reactToPlayerTypeControl(e) {
			console.log(
				"Play with playertype",
				e.target.getAttribute("xp-playertype-play"),
				"status ",
				e.target.getAttribute("xp-playertype-status")
			);
			if ("false" == e.target.getAttribute("xp-playertype-status")) {
				console.log("Player not available");
				return;
			}
			var mediaId = this.getCurrentPageMediaID();
			this.songDataStore[mediaId].preferredAPI =
				e.target.getAttribute("xp-playertype-play");
			console.log(
				"Play with playertype song ",
				mediaId,
				"has preferred API of ",
				this.songDataStore[mediaId].preferredAPI
			);
			if (
				this.playlistManager.length == 0 &&
				this.getAttribute("xp-playertype") !=
					e.target.getAttribute("xp-playertype-play")
			) {
				this.setPlaylistPlaying(mediaId);
				this.routeToCorrectPlayAPI(mediaId, true);
			} else if (
				this.getAttribute("xp-playertype") !=
				e.target.getAttribute("xp-playertype-play")
			) {
				this.setPlaylistPlaying(mediaId);
				this.removePlaylistTag(mediaId);
				this.routeToCorrectPlayAPI(mediaId, true);
			} else {
				this.now = true;
			}
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
			localStorage.setItem(
				this.localStorageKey,
				JSON.stringify(settingsObj)
			);
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
				newItem.setAttribute(
					"data-pp",
					this.playlistManager.length - 1
				);
			}
			// newItem.id = "playlist-item-" + mediaId;
			newItem.classList.add("playlist-item");
			newItem.setAttribute("data-media-id", mediaId);
			newItem.innerHTML = innerCode;

			return newItem;
		}

		// API Wrappers

		apiStylesManager(apiName) {
			let apiDataName = "";
			this.classList.remove("spotify");
			this.classList.remove("yt");
			this.classList.remove("native");
			switch (apiName) {
				case "yt":
					apiDataName = "yt";
					this.classList.add("yt");
					break;
				case "spotify":
					apiDataName = "spotify";
					this.classList.add(apiDataName);
					break;
				case "native":
					apiDataName = "native";
					this.classList.add(apiDataName);
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

		youtubeAPI(ytID, autoplay) {
			console.log('Youtube API called with videoId "' + ytID + '"');
			if (
				this.hasAttribute("xp-playertype") &&
				this.getAttribute("xp-playertype") == "yt"
			) {
				// Player is already going
				this.player.loadVideoById(ytID);
				this.setMediaState("playing");
			} else {
				const element = document.getElementById("xplayer-playbox");
				element.outerHTML = `<div id="xplayer-playbox"></div>`;
				this.apiStylesManager("yt");
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
					var state = this.getEmbedMediaState(event.data);
					console.log("Event state is ", state);
					this.mediaState = state;
					if ("ended" == state) {
						this.makeMediaAdvance();
					}
				};
				var makeitGo = onYouTubeIframeAPIReady.bind(this);

				makeitGo();
			}
			// this.setAttribute("now", videoId);
			this.internalPlayed.push(ytID);
		}

		// Spotify API
		// https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api
		// https://developer.spotify.com/documentation/embeds/references/iframe-api
		spotifyAPI(mediaId, autoplay) {
			console.log("spotifyAPI go");
			let activate = (IFrameAPI) => {
				console.log("onSpotifyIframeApiReady go");
			};
			document.addEventListener("spotify-api-ready", () => {
				// activate();
				console.log('heard "spotify-api-ready" event');
				// clearTimeout(timeout);
			});
			console.log("spotifyAPI timing check", this);
			if (
				this.hasAttribute("xp-playertype") &&
				this.getAttribute("xp-playertype") == "spotify"
			) {
				console.log("spotifyAPI advance to", mediaId);
				this.spotifyNext(mediaId, autoplay);
				return;
			}
			// this.apiStylesManager("spotify");
			const element = document.getElementById("xplayer-playbox");
			const options = {
				uri: mediaId,
				width: "100%",
				height: "100%",
				id: "xplayer-playbox",
			};
			const managePlaybackUpdate = (e) => {
				//  {isPaused: true, isBuffering: false, duration: 146800, position: 0}
				/*console.log(
					"Spotify progressTimestamp",
					`${parseInt(e.data.position / 1000, 10)} s`,
					e
				);*/
				if (
					e.data.isPaused &&
					"paused" != this.getMediaState() &&
					e.data.duration > 0
				) {
					this.setMediaState("paused");
				} else {
					// this.setMediaState("playing");
					// Need to get autoplay to work here
					this.playerActivated = true;
				}
				if (e.data.duration > 0 && e.data.position == e.data.duration) {
					// Duration has to be greater than zero b/c Spotify player loads with an event that is nonsense.
					console.log("Spotify song ended", e.data);
					this.makeMediaAdvance();
				}
			};
			managePlaybackUpdate.bind(this);
			const callback = (EmbedController) => {
				EmbedController.iframeElement.id = "xplayer-playbox";
				this.SpotifyIFrameController = EmbedController;
				this.player = EmbedController;
				this.apiStylesManager("spotify");
				if (autoplay) {
					this.setMediaState("playing");
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
			window.SpotifyIFrameAPI.createController(
				element,
				options,
				callback
			);
			this.internalPlayed.push(mediaId);
		}

		spotifyNext(mediaId, autoplay) {
			console.log("spotifyNext");
			this.SpotifyIFrameController.loadUri(mediaId);
			this.internalPlayed.push(mediaId);
			this.setMediaState("playing");
		}

		// Native Audio API
		// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
		nativeAudioAPI(mediaId, autoplay) {
			console.log("nativeAudioAPI go");
			if (
				this.hasAttribute("xp-playertype") &&
				this.getAttribute("xp-playertype") == "native"
			) {
				this.nativeNext(mediaId, autoplay);
				return;
			}
			let audioElement = new Audio(mediaId);
			audioElement.id = "xplayer-native-playbox";
			audioElement.controls = true;
			audioElement.controlslist = "nodownload";
			this.player = audioElement;
			this.playboxWrapper.appendChild(audioElement);
			this.internalPlayed.push(mediaId);
			let readyToPlay = () => {
				// activate();
				console.log('heard "canplaythrough" event');
				if (autoplay) {
					this.setMediaState("playing");
				}
				// clearTimeout(timeout);
			};
			audioElement.addEventListener(
				"canplaythrough",
				readyToPlay.bind(this)
			);
			let advancePlay = () => {
				console.log("Native song ended");
				this.makeMediaAdvance();
			};
			audioElement.addEventListener("ended", advancePlay.bind(this));
			this.playerActivated = true;
			// https://stackoverflow.com/questions/1307165/unloading-removing-content-from-an-iframe
			// const element = document.getElementById("xplayer-playbox");
			// element.outerHTML = `<div id="xplayer-playbox"></div>`;
			this.apiStylesManager("native");
			this.mode = "native";
		}

		nativeNext(mediaId, autoplay) {
			console.log(
				"nativeNext called",
				this,
				' with mediaId "' + mediaId + '"'
			);
			this.player.src = mediaId;
			let readyToPlay = () => {
				// activate();
				console.log('heard "canplaythrough" event from next');
				this.setMediaState("playing");
				// clearTimeout(timeout);
			};
			// TODO: Need to remove the old events
			this.player.addEventListener(
				"canplaythrough",
				readyToPlay.bind(this)
			);
			this.internalPlayed.push(mediaId);
		}

		routeToCorrectPlayAPI(mediaId, autoplay) {
			var mediaObj = this.songDataStore[mediaId];
			let preferredAPI = this.preferredAPI;
			if (mediaObj?.preferredAPI) {
				preferredAPI = mediaObj.preferredAPI;
			}
			console.log(
				'routeToCorrectPlayAPI with mediaId "' +
					mediaId +
					'" results in preferred API of ',
				preferredAPI
			);
			this.selectPlayAPI(mediaObj, autoplay, preferredAPI);
		}

		selectPlayAPI(mediaObj, autoplay, preferredAPI) {
			console.log("selectPlayAPI", mediaObj, autoplay, preferredAPI);
			var apiID = false;
			var callingAPI = null;
			var selectedAPI = preferredAPI;
			switch (preferredAPI) {
				case "spotify":
					callingAPI = this.spotifyAPI.bind(this);
					apiID = mediaObj.spotifyUri;
					break;
				case "native":
					callingAPI = this.nativeAudioAPI.bind(this);
					apiID = mediaObj.audiofile;
					break;
				case "yt":
				default:
					callingAPI = this.youtubeAPI.bind(this);
					apiID = mediaObj.youtubeId;
					selectedAPI = "yt";
					break;
			}
			if (!apiID && !mediaObj.youtubeId && mediaObj.audiofile) {
				// Still can't find an API? Let's try for audiofile.
				callingAPI = this.nativeAudioAPI.bind(this);
				apiID = mediaObj.audiofile;
				selectedAPI = "native";
			} else if (!apiID && mediaObj.youtubeId) {
				// We assume every media has a YouTube URL as fallback.
				callingAPI = this.youtubeAPI.bind(this);
				apiID = mediaObj.youtubeId;
				selectedAPI = "yt";
			} else if (!apiID && mediaObj.spotifyUri) {
				// We assume every media has a YouTube URL as fallback.
				callingAPI = this.spotifyAPI.bind(this);
				apiID = mediaObj.spotifyUri;
				selectedAPI = "spotify";
			} else if (!apiID) {
				console.error("No ID found for media", mediaObj);
			}
			if (this.getAttribute("xp-playing") === apiID) {
				if (
					this.getMediaState() == "paused" &&
					this.getAttribute("xp-playertype") == callingAPI
				) {
					// TODO: what about the song being finished?
					this.setMediaState("playing");
				} else if (this.getAttribute("xp-playertype") == callingAPI) {
					console.log("Repeating song");
					switch (selectedAPI) {
						case "spotify":
							break;
						case "native":
							this.player.src = "";
							break;
						case "yt":
						default:
							this.player.seekTo(0, true);
							return;
					}
				}
			}
			callingAPI(apiID, autoplay);
		}

		// Playlist Management
		dropFromPlaylistArray(targetArray, mediaId, index) {
			if (!index) {
				index = targetArray.indexOf(mediaId);
			}
			var removed = false;
			console.log(
				"dropFromPlaylistArray",
				JSON.stringify(targetArray),
				mediaId,
				index
			);
			if (index > -1) {
				// only splice array when item is found
				removed = targetArray.splice(index, 1); // 2nd parameter means remove one item only
			}
			console.log(
				"dropFromPlaylistArray completed",
				JSON.stringify(targetArray),
				mediaId
			);
			return removed;
		}

		// Actions
		makeMediaPlay() {
			// Note that many players will not start play if the window does not have focus.
			var type = this.getAttribute("xp-playertype");
			console.log("play");
			switch (type) {
				case "yt":
					this.player.playVideo();
					let playCheck = () => {
						if (
							this.getAttribute("xp-playertype") === "yt" &&
							this.player.getPlayerState() !=
								this.mediaStates.playing
						) {
							console.log("YT player play failed");
							this.setMediaState("playing");
						}
					};
					setTimeout(playCheck.bind(this), 5000);
					break;
				case "spotify":
				case "native":
					let playResult = this.player.play();
					if (playResult && playResult.catch) {
						playResult.catch((e) => {
							console.log("Play error", e);
							this.setMediaState("paused");
						});
					}
					break;
				default:
					break;
			}
		}
		makeMediaPause() {
			var type = this.getAttribute("xp-playertype");
			console.log("pause");
			switch (type) {
				case "yt":
					try {
						this.player.pauseVideo();
					} catch (e) {
						console.log(
							"YT player pause failed, likely because player not ready",
							e
						);
					}
					break;
				case "native":
				case "spotify":
					// sigh, why is this undocumented? https://developer.spotify.com/documentation/embeds/references/iframe-api
					this.player.pause();
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
				console.log(
					"Next media item is:",
					nextMedia,
					" with API ",
					this.songDataStore[nextMedia].preferredAPI
				);
				this.removePlaylistTag(nextMedia);
				//var nextMediaObj = this.songDataStore[nextMedia];
				this.setPlaylistPlaying(nextMedia);
				this.routeToCorrectPlayAPI(nextMedia, true);
			} else if (
				typeof specificMediaId != "undefined" &&
				specificMediaId &&
				this.playlistManager.length === 0 &&
				specificMediaId !== this.getAttribute("xp-playing")
			) {
				console.log(
					"Not in playlist, not playing, Switch current media to ",
					specificMediaId
				);
				this.setPlaylistPlaying(specificMediaId);
				this.routeToCorrectPlayAPI(specificMediaId, true);
			}
		}

		removeMediaFromPlaylist(mediaId) {
			this.removePlaylistTag(mediaId);
			this.dropFromPlaylistArray(this.playlistManager, mediaId);
		}

		removePlaylistTag(mediaId) {
			//var el = document.getElementById("playlist-item-" + mediaId);
			var el = document.querySelector(
				`#xplayer-playlist-next .playlist-item[data-media-id="${mediaId}"]`
			);
			if (el) {
				el.remove();
			}
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
						if (previousValue == "playing") {
							console.log("Pause");
							this.makeMediaPause();
						}
					}
					break;
				case "xp-playertype":
					console.trace("xp-playertype changed");
					if (previousValue == "native" && currentValue != "native") {
						window["xplayer-native-playbox"].remove();
					}
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
				this.hookPlayerTypeControls();
				//this.handlePlayingChange(mediaId);
				var mediaId = this.getCurrentPageMediaID();
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

		getMediaState() {
			var state = this.getAttribute("xp-media-state");
			if (!["paused", "playing"].includes(state)) {
				console.error("Unexpected player state", state);
			}
			return state;
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
		addToPlaylist(mediaId, moveToTop, target) {
			console.log("Add to playlist", mediaId, moveToTop);
			if (moveToTop) {
				// var oldItem = document.getElementById("playlist-item-" + mediaId);
				var oldItem = false;
				var arrayPosition = 0;
				var finalPositionFound = false;
				var finalPosition = 0;
				if (target) {
					console.log("addToPlaylist target given", target);
					oldItem = target.closest(".playlist-item");
					finalPosition = oldItem.dataset.pp;
				} else {
					oldItem = new Array(
						...document.getElementsByClassName("playlist-item")
					).filter((el) => {
						if (el.getAttribute("data-media-id") == mediaId) {
							finalPosition = 0 + arrayPosition;
							finalPositionFound = true;
							return true;
						} else if (!finalPositionFound) {
							arrayPosition++;
							return false;
						}
					})[0];
				}
				console.log(
					"oldItem selected to move",
					oldItem,
					"final position",
					finalPosition
				);
				this.dropFromPlaylistArray(
					this.playlistManager,
					mediaId,
					finalPosition
				);
				this.playlistManager.unshift(mediaId);
				this.playlistqueue.prepend(oldItem);
			} else {
				this.playlistManager.push(mediaId);
				var newItem = this.mediaEntryMaker(mediaId);
				this.playlistqueue.append(newItem);
			}
			htmx.process(this.playlistqueue);
		}

		setPlaylistPlaying(mediaId) {
			console.log(
				"Process song object to currently playing",
				mediaId,
				this.songDataStore[mediaId]
			);
			this.setAttribute("xp-playing", mediaId);
			window["xplayer-currently"].innerHTML = "";
			window["xplayer-currently"].append(
				this.mediaEntryMaker(mediaId, true)
			);
			window["xplayer-currently"].setAttribute(
				"data-active-media",
				mediaId
			);
			htmx.process(window["xplayer-currently"]);
		}

		pullSongDataFromPage(mediaId) {
			this.setAttribute("xp-last-added", mediaId);
			this.songsAdded.add(mediaId);
			this.songDataStore[mediaId] = JSON.parse(
				window["xplayer-setup"].innerText
			).media;
			this.songDataStore[mediaId].siteUrl = window.location.href;
			this.songDataStore[mediaId].mediaId = mediaId;
		}

		handlePlayingChange(mediaId, advancing) {
			if (mediaId) {
				console.log("Playing requested set to", mediaId);
				this.pullSongDataFromPage(mediaId);
				// this.songDataStore[val] = window[this.dataPath].song;
				if (!this.shouldAddToPlaylist() && !!!advancing) {
					console.log(
						"Song Data store state now ",
						this.songDataStore
					);
					this.setPlaylistPlaying(mediaId);
					// This will destroy the binding to `this` unless it
					// is explicitly bound.
					this.routeToCorrectPlayAPI(mediaId, this.autoPlay);
				} else {
					console.log("Playing moved to playlist for", mediaId);
					this.addToPlaylist(mediaId);
				}
				this.playlistCheck();
			} else {
				// this.removeAttribute('disabled');
				console.log("Playlist item not given");
				this.playlistCheck();
			}
		}

		// Getters and Setters
		getEmbedMediaState(value) {
			return Object.keys(this.mediaStates).find(
				(key) => this.mediaStates[key] === value
			);
		}

		addFromPage(mediaObj) {
			if (!mediaObj.hasOwnProperty("mediaId")) {
				mediaObj.mediaId = this.getCurrentPageMediaID();
			}
			console.log("received addFromPage event", mediaObj);
			if (!this.songDataStore.hasOwnProperty(mediaObj.mediaId)) {
				window.xplayer.songDataStore[mediaObj.mediaId] = mediaObj;
			}
			this.playing = mediaObj.mediaId;
		}

		get played() {
			return this.internalPlayed;
		}

		get playlist() {
			return this.internalPlaylist;
		}

		set playing(mediaId) {
			// It is expected that you will have added
			// the song data to this.songDataStore
			// before setting the playing attribute.
			this.handlePlayingChange(mediaId);
		}

		set now(mediaId) {
			if (mediaId === true) {
				mediaId = this.getCurrentPageMediaID();
			}
			if (this.getAttribute("xp-playing") === mediaId) {
				console.log("Song is currently loaded");
				this.setMediaState("playing");
			} else {
				this.makeMediaAdvance(mediaId);
			}
			// this.pullSongDataFromPage(mediaId);
			// this.handlePlayingChange(mediaId, true);
		}
	}
	if (!customElements.get("x-player")) {
		customElements.define("x-player", PlayerElement);
	}
}
/**
 * todo:
 * 	- Podbean: https://developers.podbean.com/apidoc/widget
 * 	- Soundcloud:
 *  - Bandcamp: No api, so can just load.
 */
