const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");
var slugify = require("slugify");

let slugger = (tag) => {
	return slugify(`${tag}`, {
		lower: true,
		strict: true,
		locale: "en",
	});
};

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
				"deepTagList",
				"Undefined",
				"undefined",
			].includes(collection)
		) {
			songCollection.push(collection);
		}
	});
	let songCollectionTags = [];
	let matchedTags = {};
	songCollection.forEach((tag) => {
		// console.log("tag", tag);
		var tagSlug = slugger(tag);
		if (!songCollectionTags.includes(tagSlug)) {
			songCollectionTags.push(tagSlug);
		} else {
			if (matchedTags[tagSlug]) {
				matchedTags[tagSlug].push(tag);
			} else {
				matchedTags[tagSlug] = [tag];
			}
		}
		//songCollectionTags.push(tagSlug);
	});
	let collectionObjects = songCollection.map((tag) => {
		let collectionObj = { count: 0 };
		let slug = slugger(tag);
		if (songCollectionTags.includes(slug)) {
			collectionObj = { tag: tag, count: data.collections[tag].length };
			var index = songCollectionTags.indexOf(slug);
			if (index !== -1) {
				songCollectionTags.splice(index, 1);
			}
		}
		if (collectionObj.count > 0 && matchedTags.hasOwnProperty(slug)) {
			matchedTags[slug].forEach((matchedTag) => {
				collectionObj.count += data.collections[matchedTag].length;
			});
		}
		return collectionObj;
	});
	// TODO: Need some way to compress matched tag slugs.
	collectionObjects.sort((a, b) => {
		return b.count - a.count;
	});
	let songCollectionHTMLArray = collectionObjects.map((tagObj) => {
		if (!tagObj?.tag || tagObj.tag === "undefined") {
			return "";
		}
		var tagSlug = slugger(`${tagObj.tag}`);
		var tagLink = linkmaker(data, `/tag/${tagSlug}`, `${tagObj.tag}`);
		return /*html*/ `
		<div class="genre-tag-box">
			<div class="tag-name">${tagLink}</div>
			<div class="tag-count">${tagObj.count}</div>
		</div>
		`;
	});
	// console.log("collectionObjects", collectionObjects, songCollectionTags);
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
