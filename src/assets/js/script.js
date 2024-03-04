if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}

let pageCount = sessionStorage.getItem("pageCount");
if (pageCount === null) {
	pageCount = 0;
}

if (
	(null === localStorage.getItem("xplayerRetainedSettings") ||
		pageCount === 0) &&
	window["xplayer-setup"]
) {
	window["xplayer-autoplay-switch"].checked = false;
}

++pageCount;
