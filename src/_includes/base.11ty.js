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
	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${data.site.title}</title>
		<meta name="description" content="${meta_description}" />
		${meta(data, `${data.site.title}`, meta_description, [], () => {})}
		<script>
		if("classList" in document.documentElement) {
			document.documentElement.classList.add("has-js");
		}
		</script>

		<link rel="stylesheet" href="/assets/css/style.css">
		<script src="/assets/js/htmx.min.js" type="application/javascript"></script>
		<script src="https://www.youtube.com/iframe_api" onload="(function(){var event = new Event('ytapi-ready'); document.dispatchEvent(event);})()"></script>
		<script src="/assets/js/script.js" defer type="application/javascript"></script>
		<script defer data-domain="songobsessed.com" src="https://plausible.io/js/script.js" type="application/javascript"></script>
	</head>
	<body>
		${nav(data)}
		<div id="main-content">
			<header>
				<h1 class="title">${data.title}</h1>
			</header>
			<main class="wrapper">
				${zones.content}
				<a href="/search"><h2>Search</h2></a>
			</main>
		</div>
		<aside hx-preserve>
			<div id="media-container">
				<script>console.log(document.location.href)</script>
				<x-player id="xplayer"></x-player>
			</div>
		</aside>
		${footer(data)}
	</body>
</html>`;
};
