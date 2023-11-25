const metadata = require("../_data/metadata.js");
const meta = require("./partials/meta.11ty");

module.exports = async function (data) {
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
	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${data.title}</title>
		<meta name="description" content="${
			data?.description || site?.description || ""
		}" />
		${meta(
			data,
			`${data.metadata.username}’s Twitter Archive${titleTweetNumberStr}`,
			meta_description,
			tags,
			imgUrlArgument
		)}
		<script>
		if("classList" in document.documentElement) {
			document.documentElement.classList.add("has-js");
		}
		</script>

		${
			data.page.fileSlug !== "tweet-pages"
				? `
			<link rel="stylesheet" href="/assets/chartist.min.css">
			<link rel="stylesheet" href="/assets/chart.css">
			<script src="/assets/chartist.min.js" async></script>
			<script src="/assets/chart.js" async></script>
		`
				: ""
		}

		<link rel="stylesheet" href="/assets/style.css">
		<script src="/assets/script.js" defer></script>
		${
			data.page.fileSlug === "newest"
				? `<link rel="canonical" href="/${data.tweet.id_str}/">
<meta http-equiv="refresh" content="0; url=/${data.tweet.id_str}/">`
				: ""
		}
		<script defer data-domain="tweets.aramzs.com" src="https://plausible.io/js/script.js"></script>
	</head>
	<body>
		<header>
			<h1 class="tweets-title"><a href="/"><img src="${
				metadata.avatar
			}" width="52" height="52" loading="lazy" alt="${
		data.metadata.username
	}’s avatar" class="tweet-avatar">${
		data.metadata.username
	}’s Twitter Archive</a>${titleTweetNumberStr}</h1>
			${
				!data.hideHeaderTweetsLink
					? `<ul class="tweets-nav">
				<li><a href="${data.metadata.homeUrl}">← ${data.metadata.homeLabel}</a></li>
			</ul>`
					: ""
			}
			${navHtml}
		</header>
		<main>
			${data.content}
			<br />
			<hr /> 
			<a href="/twitter-search"><h2>Search tweets' text</h2></a>
		</main>
		<footer>
			<p>An open source project from <a href="https://github.com/tweetback">tweetback</a>.</p>
		</footer>
	</body>
</html>`;
};
