const metadata = require("../../_data/metadata.js");

module.exports = function (youtubeUrl, autoplay, songData) {
	if (!youtubeUrl) {
		return "";
	}
	//https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode
	let finalString = youtubeUrl.replaceAll(
		"www.youtube.com/watch?v=",
		"www.youtube-nocookie.com/embed/"
	);
	finalString = finalString.replaceAll(
		"youtu.be/",
		//"www.youtube-nocookie.com/watch?v="
		"www.youtube-nocookie.com/embed/"
	);
	let videoId = finalString.split("embed/")[1];
	if (autoplay) {
		if (finalString.indexOf("?") > -1) {
			finalString += "&";
		} else {
			finalString += "?";
		}
		finalString += "autoplay=1";
	}
	// songData.youtubeId = videoId;
	var jsonString = JSON.stringify(songData);
	return /*html*/ `<span id="xplayer-setup" class="youtube-data" data-playertype="youtube" data-video-url="${finalString}" data-video-id='${videoId}' frameborder="0" style="display:none;">${jsonString}</span>`;
	return /*html*/ `
<iframe class="youtube-iframe" src="${finalString}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`;
};
