const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");
var slugify = require("slugify");

module.exports = async function (data) {
	// console.log("song-tags", data);
	let songCollection = [];
	Object.keys(data.collections).forEach((collection) => {
		// let collectionArray = data.collections[collection];
		if (
			![
				"all",
				"tags",
				"songs",
				"songsPages",
				"tagList",
				"DeepTagList",
			].includes(collection)
		) {
			songCollection.push(collection);
		}
	});
	let songCollectionTags = [];
	songCollection.forEach((tag) => {
		// console.log("tag", tag);
		var tagSlug = slugify(`${tag}`, {
			lower: true,
			strict: true,
			locale: "en",
		});
		songCollectionTags.push(tagSlug);
	});
	// TODO: Need some way to compress matched tag slugs.
	songCollection.sort((a, b) => {
		return data.collections[b].length - data.collections[a].length;
	});
	songCollectionHTMLArray = songCollection.map((tag) => {
		var tagSlug = slugify(`${tag}`, {
			lower: true,
			strict: true,
			locale: "en",
		});
		var tagLink = linkmaker(data, `/tag/${tagSlug}`, `${tag}`);
		return /*html*/ `
		<div class="genre-tag-box">
			<div class="tag-name">${tagLink}</div>
			<div class="tag-count">${data.collections[tag].length}</div>
		</div>
		`;
	});
	let insert = {
		template: "song-tags",
		content: /*html*/ `
		<div id="tag-wrapper">
			${songCollectionHTMLArray.join(" ")}
		</div>
		<hr /> 
			
		`,
	};
	return base(data, insert);
};
