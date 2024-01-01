const metadata = require("../../_data/metadata.js");

module.exports = function (onPageObject) {
	// songData.youtubeId = videoId;
	var jsonString = JSON.stringify(onPageObject);
	return /*html*/ `<span id="xplayer-setup" class="xplayer-data" frameborder="0" style="display:none;">${jsonString}</span>`;
};
