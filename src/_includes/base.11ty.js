const metadata = require("../_data/metadata.js");
// const site = require("../_data/site.js");
const meta = require("./partials/meta.11ty");
const nav = require("./partials/nav.11ty");

module.exports = async function (data, zones) {
	console.log("layout data", data);
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

		<link rel="stylesheet" href="/assets/style.css">
		<script src="/assets/script.js" defer></script>
		<script defer data-domain="songobsessed.com" src="https://plausible.io/js/script.js"></script>
	</head>
	<body>
		${nav(data)}
		<header>
			<h1 class="title">${data.title}</h1>
		</header>
		<main>
			${zones.content}
			<a href="/search"><h2>Search</h2></a>
		</main>
		<footer>
			<p>An open source project from AramZS.</p>
		</footer>
	</body>
</html>`;
};
