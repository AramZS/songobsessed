// Create a class for the element
class PlayerElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.internalPlaylist = [];
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
		console.log("listen for youtubeAPIMaker event");
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
					onStateChange: onPlayerStateChange,
				},
			});
		}
		function onPlayerReady(event) {
			event.target.playVideo();
		}
		function onPlayerStateChange(event) {
			console.log("player state change", event);
		}
		onYouTubeIframeAPIReady();
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

		if (this.internalPlaylist.length == 0) {
			if (window["youtube-setup"]) {
				let activate = function () {
					this.youtubeAPIMaker(
						window["youtube-setup"].attributes["data-video-id"]
							.value,
						true
					);
				}.bind(this);
				try {
					activate();
				} catch (e) {
					let timeout = setTimeout(activate, 3000);
					document.addEventListener("ytapi-ready", () => {
						activate();
						clearTimeout(timeout);
					});
					console.log('listen for "ytapi-ready" event');
				}
			}
			//this.youtubeAPIMaker()
		}
	}

	get playlist() {
		return this.internalPlaylist;
	}

	set playlist(val) {
		if (val) {
			this.setAttribute("last-added", val);
			if (this.internalPlaylist.length == 0) {
				this.setAttribute("now", val);
				this.playbox.innerHTML = val;
			}
			this.internalPlaylist.push(val);

			var prebox = document.createElement("code");
			prebox.innerText = val + `\n`;
			this.playlistbox.append(prebox);

			this.playlistCheck();
		} else {
			// this.removeAttribute('disabled');
			console.log("Playlist item not given");
			this.playlistCheck();
		}
	}
}

customElements.define("x-player", PlayerElement);
