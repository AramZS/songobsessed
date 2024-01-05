const base = require("./base.11ty");
const imageCheck = require("../utils/imageCheck");
const linkmaker = require("../utils/linkmaker");
module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let obsession = data.collections.songs[data.collections.songs.length - 1];
	let albumImage = await imageCheck(obsession.data, "small");
	let imageAlt =
		data.featuredImageAlt ||
		`Cover of album that contains ${data.songtitle}`;
	let obsessionTitle = linkmaker(
		obsession.data,
		obsession.data.page.url,
		`<span>${
			obsession.data.songtitle
		}</span> <br /> by ${obsession.data.artists.join(", ")}`
	);
	let obsessionImage = linkmaker(
		obsession.data,
		obsession.data.page.url,
		`<img src="${albumImage}" alt="${imageAlt}"></img>`
	);
	let insert = {
		content: /*html*/ `
			<p class="top-note">Total songs: ${data.collections.songs.length}</p>
			<div class="top-obsession chiclet">Latest Obsession: 
				<div class="obsession-entry h-entry">
					<div class="obsession-image">${obsessionImage}</div>
					<div class="song-text">
						${obsessionTitle}
					</div>
				</div>
			</div>
			<br />
			${data.content}
			<br />
			<hr /> `,
	};
	return base(data, insert);
};
