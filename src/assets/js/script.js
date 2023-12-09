window.hxhLast = [];
window.hxhNext = [];
window.hxhPop = false;
window.history.replaceState({ pathname: window.location.pathname }, null, "");
document.body.addEventListener("htmx:confirm", function (evt) {
	//   evt.preventDefault();
	console.log(
		"htmx:confirm",
		evt,
		evt.detail,
		evt.detail.target.id,
		evt.detail.path,
		window.location.pathname
	);
	// htmx.ajax('GET', '/songs/una-rosa-blanca/', {target:'#main-content', swap:'outerHTML show:top', select:'#main-content' });
	var lastState = [
		"GET",
		window.location.pathname,
		{
			target: `#${evt.detail.target.id}`,
			swap: `${evt.detail.elt.getAttribute("hx-swap")}`,
			select: `${evt.detail.elt.getAttribute("hx-select")}`,
		},
	];
	if (!hxhPop) {
		window.hxhLast
			? window.hxhLast.push(lastState)
			: (window.hxhLast = [lastState]);

		window.history.pushState(lastState, null, "");
	} else {
		window.hxhPop = false;
	}
});

document.body.addEventListener("htmx:afterSettle", function (evt) {
	if (window.hxhLast && window.hxhLast.length < 1) {
		//		window.onload = null;
		//		window.onhashchange = null;
		//		console.log("unhook back control");
	} else {
	}
});
window.addEventListener("popstate", (event) => {
	console.log(
		`location: ${document.location}, state: ${JSON.stringify(event.state)}`,
		history
	);
	if (window.hxhLast && window.hxhLast.length > 0) {
		window.hxhPop = true;
		var next = window.hxhLast.pop();
		console.log("popstate alt", next[0], next[1], next[2]);
		htmx.ajax(next[0], next[1], next[2]);
	} else {
	}
	return;
});

/*
// https://stackoverflow.com/questions/12381563/how-can-i-stop-the-browser-back-button-using-javascript
(function (global) {
	if (typeof global === "undefined") {
		throw new Error("window is undefined");
	}

	var _hash = "!";
	var noBackPlease = function () {
		global.location.href += "#";

		// Making sure we have the fruit available for juice (^__^)
		global.setTimeout(function () {
			global.location.href += "!";
		}, 50);
	};

	global.onhashchange = function () {
		if (global.location.hash !== _hash) {
			global.location.hash = _hash;
		}
	};

	global.onload = function () {
		noBackPlease();

		// Disables backspace on page except on input fields and textarea..
		document.body.onkeydown = function (e) {
			var elm = e.target.nodeName.toLowerCase();
			if (e.which === 8 && elm !== "input" && elm !== "textarea") {
				e.preventDefault();
			}
			// Stopping the event bubbling up the DOM tree...
			e.stopPropagation();
		};
	};
})(window);
*/

// Create a class for the element
// https://web.dev/articles/custom-elements-best-practices
class PlayerElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.internalPlaylist = [];
		this.internalPlayed = [];
		this.songsadded = new Set();
		this.dataPath = "pageData"; //window[this.dataPath].post
		this.mediaStates = {
			playing: "playing",
			paused: "paused",
			ended: "ended",
			buffering: "buffering",
			cued: "cued",
		};
		this.mode = false;
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

	htmxSwapCallback() {
		console.log("Custom element has seen an htmx swap.");
		if (window["youtube-setup"]) {
			var autoplay = false;
			var mediaId =
				window["youtube-setup"].attributes["data-video-id"].value;

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

	youtubeAPIMaker(videoId, autoplay) {
		console.log("go youtubeAPIMaker");
		// https://developers.google.com/youtube/player_parameters
		// https://developers.google.com/youtube/iframe_api_reference
		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player("xplayer-playbox", {
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
		}
		function onPlayerReady(event) {
			event.target.playVideo();
		}
		function onPlayerStateChange(event) {
			console.log("player state change", event);
			console.log("Event state is ", this.getMediaState(event.data));
		}
		var makeitGo = onYouTubeIframeAPIReady.bind(this);
		makeitGo();
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

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed.`);
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
		this.appendChild(this.wrapper);
		this.wrapper.appendChild(this.playbox);
		this.wrapper.appendChild(this.playlistbox);
		var event = new Event("xplaylist-ready");
		document.dispatchEvent(event);
		this.dispatchEvent(event);

		if (window["youtube-setup"]) {
			console.log("setup first YT player");
			let activate = function () {
				var mediaId =
					window["youtube-setup"].attributes["data-video-id"].value;
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
	}

	addToPlaylist(mediaId) {
		this.internalPlaylist.push(mediaId);
	}

	handlePlayingChange(val) {
		if (val) {
			console.log("Playing requested set to", val);
			this.setAttribute("last-added", val);
			this.songsadded.add(val);
			if (!this.shouldAddToPlaylist()) {
				console.log("Playing from empty to", val);
				this.youtubeAPIMaker(val, true);
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

	get playing() {
		return this.internalPlayed[this.internalPlayed.length - 1];
	}

	set playing(val) {
		this.handlePlayingChange(val);
	}
}

customElements.define("x-player", PlayerElement);
