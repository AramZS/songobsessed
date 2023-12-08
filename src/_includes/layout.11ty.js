const base = require("./base.11ty");

module.exports = async function (data) {
	//console.log("layout data", data);
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
	let insert = {
		content: /*html*/ `
			${data.content}
			<br />
			<hr /> `,
	};
	return base(data, insert);
};
