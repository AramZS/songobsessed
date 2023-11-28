const metadata = require("../../_data/metadata.js");

module.exports = function (youtubeUrl, autoplay) {
	//https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode
	let finalString = youtubeUrl.replaceAll(
		"www.youtube.com",
		"www.youtube-nocookie.com"
	);
	if (autoplay) {
		if (finalString.indexOf("?") > -1) {
			finalString += "&";
		} else {
			finalString += "?";
		}
		finalString += "autoplay=1";
	}
	return /*html*/ `<!-- ${JSON.stringify(imgUrls)} -->
<iframe class="youtube-iframe" src="${finalString}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
`;
};
