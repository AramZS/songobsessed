const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");

module.exports = async function (data) {
	// console.log("tags data", data);
	let tags = data.paged.posts.reduce((accumulator, post) => {
		let imageNameArray = post.data.featuredImage.split(".");
		let imageName = post.data.featuredImage.replace(
			`.${imageNameArray[imageNameArray.length - 1]}`,
			""
		);
		let filteredTags = post.data.tags.filter((tag) => tag !== "songs");
		let tagText = filteredTags.map((tag) => {
			return `<span class="genre-tag">${tag}</span>`;
		});
		//console.log("tagText", tagText);
		return (
			/*html*/ `
				<div class="media-entry">
					${linkmaker(
						post.data,
						post.data.page.url,
						`<img src="/img/${imageName}-240.jpg" alt="${post.data.title}" />`
					)}
					<h3>${linkmaker(post.data, post.data.page.url, `${post.data.title}`)}</h3>
					<p class="tag-list">${tagText.join(", ")}</p>
				</div>
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
