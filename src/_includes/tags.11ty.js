const base = require("./base.11ty");
const linkmaker = require("../utils/linkmaker");
const pagination = require("./partials/pagination.11ty");
module.exports = async function (data) {
	// console.log("tags data", data);
	let tags = data.paged.posts.reduce((accumulator, post) => {
		let imageName;
		if (!post.data.featuredImage) {
			imageName = "glass-horn-240.jpg";
		} else {
			let imageNameArray = post.data.featuredImage.split(".");
			imageName = post.data.featuredImage.replace(
				`.${imageNameArray[imageNameArray.length - 1]}`,
				""
			);
			imageName += `-240.jpg`;
		}
		let filteredTags = post.data.tags.filter((tag) => tag !== "songs");
		let tagText = filteredTags.map((tag) => {
			return `<span class="genre-tag">${tag}</span>`;
		});
		//console.log("tagText", tagText);
		return (
			/*html*/ `
				<div class="media-entry h-entry">
					<div class="media-img">
					${linkmaker(
						post.data,
						post.data.page.url,
						`<img src="/img/${imageName}" alt="${post.data.title}" />`
					)}
					</div>
					<h3 class="p-name">${linkmaker(
						post.data,
						post.data.page.url,
						`${post.data.title}`
					)}</h3>
					<p class="tag-list">${tagText.join(", ")}</p>
					
				</div>
			` + accumulator
		);
	}, "");
	let insert = {
		template: "tags",
		content: /*html*/ `
			<h2>${data.paged.tagName}</h2>
			${data.content}
			<br />
			${tags}
			${pagination(data)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
