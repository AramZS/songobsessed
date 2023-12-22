const base = require("./base.11ty");
const youtube = require("./partials/youtube.11ty");
const sharp = require("sharp");
const fs = require("fs");

let imageCheck = async function (data) {
	// console.log("image data", data);
	if (data?.featuredImage) {
		let imagePath = `./src/img/${data.featuredImage}`;
		let imageNameArray = data.featuredImage.split(".");
		let imageName = data.featuredImage.replace(
			`.${imageNameArray[imageNameArray.length - 1]}`,
			""
		);
		if (!fs.existsSync(`./src/img/${imageName}-640.jpg`)) {
			let resized = await sharp(imagePath)
				.resize(640)
				.jpeg({ mozjpeg: true })
				.toFile(`./src/img/${imageName}-640.jpg`)
				.then((data) => {})
				.catch((err) => {});
		}

		return `/img/${imageName}-640.jpg`;
	} else {
		if (!fs.existsSync(`./src/img/glass-horn-640.jpg`)) {
			let imagePath = `./src/img/glass-horn.jpg`;
			let resized = await sharp(imagePath)
				.resize(640)
				.jpeg({ mozjpeg: true })
				.toFile(`./src/img/glass-horn-640.jpg`)
				.then((data) => {})
				.catch((err) => {});
			return `img/glass-horn-640.jpg`;
		}
	}
};

module.exports = async function (data) {
	// console.log("post", data);
	let albumImage = await imageCheck(data);
	var onPageObject = {
		site: data.site,
		metadata: data.metadata,
		me: data.me,
		song: {
			description: data.description,
			tags: data.tags,
			date: data.date,
			title: data.title,
			songtitle: data.songtitle,
			artists: data.artists,
			youtube: data.youtube,
			spotify: data.spotify,
			soundcloud: data.soundcloud,
			audiofile: data.audiofile,
			lastfm: data.lastfm,
			album: data.album,
			playlists: data.playlists,
			featuredImage: data.featuredImage,
		},
	};
	let insert = {
		template: "song",
		content: /*html*/ `
		<div id="song-image-wrapper"><div id="song-image"><img src="${albumImage}" /></div></div>
		${data.content}
			<br />
			<script>
				window.pageData = ${JSON.stringify(onPageObject)};
			</script>
			<p>
			description: ${data.description}, <br /><br />
			tags: ${data.tags},<br /><br />
			date: ${data.date},<br /><br />
			title: ${data.title},<br /><br />
			songtitle: ${data.songtitle},<br /><br />
			artists: ${data.artists},<br /><br />
			youtube: ${data.youtube},<br /><br />
			spotify: ${data.spotify},<br /><br />
			soundcloud: ${data.soundcloud},<br /><br />
			audiofile: ${data.audiofile},<br /><br />
			lastfm: ${data.lastfm},<br /><br />
			album: ${data.album},<br /><br />
			playlists: ${JSON.stringify(data.playlists)},<br /><br />
			featuredImage: <img src="${albumImage}" /><br /><br />
			</p>
			${youtube(data.youtube, false, onPageObject)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
