const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");
const slugger = require("../utils/slugger");

module.exports = async function (data) {
	// console.log("song-tags", data);
	let artistCollection = [];
	Object.keys(data.collections.deepArtistsList).forEach((collection) => {
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
				"deepArtistsList",
				"artistsList",
			].includes(collection)
		) {
		}
	});
	artistCollection.push(...data.collections.artistsList);
	let artistCollectionTags = [];
	let matchedTags = {};
	artistCollection.forEach((tag) => {
		//console.log("artist", tag);
		var tagSlug = slugger(tag);
		if (!artistCollectionTags.includes(tagSlug)) {
			artistCollectionTags.push(tagSlug);
		} else {
			if (matchedTags[tagSlug]) {
				matchedTags[tagSlug].push(tag);
			} else {
				matchedTags[tagSlug] = [tag];
			}
		}
		//songCollectionTags.push(tagSlug);
	});
	let collectionObjects = artistCollection.map((tag) => {
		let collectionObj = { count: 0 };
		let slug = slugger(tag);
		if (artistCollectionTags.includes(slug)) {
			collectionObj = { tag: tag };
			var index = artistCollectionTags.indexOf(slug);
			if (index !== -1) {
				artistCollectionTags.splice(index, 1);
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
		var tagLink = linkmaker(data, `/artist/${tagSlug}`, `${tagObj.tag}`);
		return /*html*/ `
		<div class="genre-tag-box">
			<div class="tag-name">${tagLink}</div>
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
