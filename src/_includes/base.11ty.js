const metadata = require("../_data/metadata.js");
// const site = require("../_data/site.js");
const meta = require("./partials/meta.11ty");
const nav = require("./partials/nav.11ty");
const footer = require("./partials/footer.11ty");

module.exports = async function (data, zones) {
	// console.log("layout data", data);
	let getHashTagsFromText = function (text = "") {
		let words = {};
		let splits = text.split(/(\#[A-Za-z][^\s\.\'\"\!\,\?\;\}\{]*)/g);
		for (let split of splits) {
			if (split.startsWith("#")) {
				let tag = split.substr(1).toLowerCase();
				if (!words[tag]) {
					words[tag] = 0;
				}
				words[tag]++;
			}
		}
		return words;
	};
	let meta_description = data?.description || data.site?.description || "";
	let metaChunk = meta(
		data,
		`${data.site.title}`,
		meta_description,
		[],
		() => {}
	);
	let templateStyle = "";
	if (zones.template) {
		templateStyle = `<link rel="stylesheet" href="/assets/css/template-${zones.template}.css">`;
	}
	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1">
		<title>${data.title || data.site.title}</title>
		<meta name="description" content="${meta_description}" />
		<link href="/assets/fraunces/fraunces.css" rel="stylesheet">
		<link rel="preconnect" href="https://www.youtube.com">
		<link rel="dns-prefetch" href="https://www.youtube.com">
		<link rel="preconnect" href="https://open.spotify.com">
		<link rel="dns-prefetch" href="https://open.spotify.com">
		<link rel="preload" href="/assets/css/template-song.css">
		${metaChunk}
		<script>
		if("classList" in document.documentElement) {
			document.documentElement.classList.add("has-js");
		}
		window.pageData = {};
		console.log('setup window.onSpotifyIframeApiReady')
		window.onSpotifyIframeApiReady = (IFrameAPI) => {
			window.SpotifyIFrameAPI = IFrameAPI
		};
		</script>
		${zones.earlyHead || ""}
		<link rel="stylesheet" href="/assets/css/style.css">
		<script src="/assets/js/htmx.min.js" type="application/javascript"></script>
		<script src="https://www.youtube.com/iframe_api" async onload="(function(){var event = new Event('ytapi-ready'); document.dispatchEvent(event);})()"></script>
		<script src="https://open.spotify.com/embed/iframe-api/v1" async onload="(function(){
			var event = new Event('spotify-api-ready'); 
			document.dispatchEvent(event);
		})()"></script>
		<script src="/assets/js/script.js" defer type="application/javascript"></script>
		<script defer data-domain="songobsessed.com" src="https://plausible.io/js/script.js" type="application/javascript"></script>
		${zones.lateHead || ""}
	</head>
	<body hx-ext="morph" class="template-${zones.template}">
		<div id="inner-body">
		${nav(data)}
			<div id="main-content" hx-history-elt>
			${templateStyle}
				<header>
					<h1 class="title">${data.title.trim()}</h1>
				</header>
				<main class="wrapper">
					${zones.content}
					
				</main>
			</div>
			${footer(data)}
		</div>
		<aside id="stable-container" hx-preserve>
			<div id="media-container">
				<script>console.log(document.location.href)</script>
				<div class="stretch-footer"></div>
				<x-player id="xplayer"></x-player>
			</div>
		</aside>
		<script src="/assets/js/xplayer.js" defer type="application/javascript"></script>
	</body>
</html>`;
};
