const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");

module.exports = async function (data) {
	// console.log("tags data", data);
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
	let tags = data.paged.posts.reduce((accumulator, post) => {
		return (
			/*html*/ `
				<h3>${linkmaker(
					post.data,
					post.data.page.url,
					`${post.data.title} - ${post.data.page.url}`
				)}</h3><br />
			` + accumulator
		);
	}, "");
	let insert = {
		content: /*html*/ `
			<h2>${data.paged.tagName}</h2>
			${data.content}
			<br />
			${tags}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
