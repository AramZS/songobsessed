const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
const sharp = require("sharp");
const fs = require("fs");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");

let slugger = (tag) => {
	return slugify(`${tag}`, {
		lower: true,
		strict: true,
		locale: "en",
	});
};

let imageCheck = async function (data) {
	// console.log("image data", data);
	let promiseArray = [];
	if (data?.featuredImage) {
		let imagePath = `./src/img/${data.featuredImage}`;
		let imageNameArray = data.featuredImage.split(".");
		let imageName = data.featuredImage.replace(
			`.${imageNameArray[imageNameArray.length - 1]}`,
			""
		);
		if (!fs.existsSync(`./src/img/${imageName}-640.jpg`)) {
			promiseArray.push(
				await sharp(imagePath)
					.resize(640)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/${imageName}-640.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		if (!fs.existsSync(`./src/img/${imageName}-240.jpg`)) {
			promiseArray.push(
				await sharp(imagePath)
					.resize(240)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/${imageName}-240.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		let promiseResult = await Promise.all(promiseArray);
		return `/img/${imageName}-640.jpg`;
	} else {
		// Default image used under creative commons from https://www.metmuseum.org/art/collection/search/501692
		if (!fs.existsSync(`./src/img/glass-horn-240.jpg`)) {
			let imagePath = `./src/img/glass-horn.jpg`;
			promiseArray.push(
				await sharp(imagePath)
					.resize(240)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/glass-horn-240.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		if (!fs.existsSync(`./src/img/glass-horn-640.jpg`)) {
			let imagePath = `./src/img/glass-horn.jpg`;
			promiseArray.push(
				await sharp(imagePath)
					.resize(640)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/glass-horn-640.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		let promiseResult = await Promise.all(promiseArray);
		return `/img/glass-horn-640.jpg`;
	}
};

module.exports = async function (data) {
	// console.log("post", data);
	let albumImage = await imageCheck(data);
	var onPageObject = {
		site: data.site,
		metadata: data.metadata,
		me: data.me,
		media: {
			description: data.description,
			tags: data.tags,
			date: data.date,
			title: data.title,
			songtitle: data.songtitle,
			artists: data.artists,
			youtube: data.youtube,
			spotify: data.spotify,
			spotifyUri: data.spotifyUri,
			soundcloud: data.soundcloud,
			audiofile: data.audiofile
				? `/assets/media/${data.audiofile}`
				: false,
			lastfm: data.lastfm,
			album: data.album,
			playlists: data.playlists,
			featuredImage: albumImage,
			podbean: data.podbean,
			youtubeId: "",
		},
	};
	var hasSongData = false;

	let simpleHash = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash &= hash; // Convert to 32bit integer
		}
		return new Uint32Array([hash])[0].toString(36);
	};
	if (data?.spotify && !data.spotifyUri) {
		// https://community.spotify.com/t5/Desktop-Windows/URI-Codes/td-p/4479486
		let spotifyUri = data.spotify.split("track/")[1];
		onPageObject.media.spotifyUri = `spotify:track:${spotifyUri}`;
	}
	// onPageObject.media.mediaId = simpleHash(onPageObject.media.title);
	let tags = data.tags.filter((tag) => {
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
			].includes(tag)
		) {
			return true;
		}
	});
	let tagText = tags.map((tag) => {
		var tagSlug = slugger(tag);
		var tagLink = linkmaker(data, `/tag/${tagSlug}`, `${tag}`);
		return `<span class="genre-tag">${tagLink}</span>`;
	});
	let linksSet = "";
	if (data.youtube) {
		linksSet += `<a href="${data.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a> | `;
	}
	if (data.spotify) {
		linksSet += `<a href="${data.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a> | `;
	}
	if (data.lastfm) {
		linksSet += `<a href="${data.lastfm}" target="_blank" rel="noopener noreferrer">Last.fm</a> | `;
	}
	console.log("date", data.date.toString());
	if (data.youtube) {
		let finalString = data.youtube.replaceAll(
			"www.youtube.com/watch?v=",
			"www.youtube-nocookie.com/embed/"
		);
		finalString = finalString.replaceAll(
			"youtu.be/",
			//"www.youtube-nocookie.com/watch?v="
			"www.youtube-nocookie.com/embed/"
		);
		let videoId = finalString.split("embed/")[1];
		let finalVideoId = videoId.split("?")[0];
		console.log("videoId", finalVideoId);
		onPageObject.media.youtubeId = finalVideoId;
	}
	["spotifyUri", "youtubeId", "audiofile"].forEach((key) => {
		if (onPageObject.media[key]) {
			hasSongData = true;
		}
	});
	let playlistButtons = hasSongData
		? /*html*/ `
<p>
	<button onclick="(
		function(){
			window.xplayer.addFromPage(
				window.pageData.media
			)
		}
	)()">Add to Playlist</button>
	<button onclick="(
		function(){
			window.xplayer.now = true
		}
	)()">Play Now</button>
</p>`
		: "";

	let dateParts = data?.date.toString().split(" ");
	// Also change based on user preference based on homepage color scheme
	let ytStatus = onPageObject.media.youtubeId
		? "available-player"
		: "not-available-player";
	let spotifyStatus = onPageObject.media.spotifyUri
		? "available-player"
		: "not-available-player";
	let nativeStatus = onPageObject.media.audiofile
		? "available-player"
		: "not-available-player";
	let insert = {
		template: "song",
		content: /*html*/ `
		<div id="song-image-and-availability-wrapper">

			<div id="song-image-wrapper">
				<div id="song-image"><img src="${albumImage}" /></div>
			</div>			
			<div id="song-availability" xp-playertypes>
				<div class="availability-text">Play now</div>
				
				<img class="player-type ${ytStatus}" xp-playertype-play="yt" src="/img/icons8-youtube.svg" type="image/svg+xml" xp-playertype="yt" alt="YouTube logo"></img>

				<img xp-playertype-play="spotify" class="player-type ${spotifyStatus}" src="/img/spotify.svg" type="image/svg+xml" alt="Spotify logo"></img>
				
				<img class="player-type ${nativeStatus}" xp-playertype-play="native" src="/img/html5-2.svg" type="image/svg+xml" alt="HTML5 logo for native player type"></img>
			</div>
		</div>
		<div id="article-body">
			<div id="brief">
				<p>${data.description}</p>
				<p>Artists: <span>${data.artists.join(", ")}</span></p>
				<p>Album: <span>${data.album}</span></p>
				<p>Tags: <span>${tagText.join(" | ")}</span></p>
				<p>${linksSet}</p>
			</div>
			<p><span class="date-added">Added on: ${dateParts[0]} ${dateParts[1]} ${
			dateParts[2]
		} ${dateParts[3]}</span></p>
			${playlistButtons}
			${data.content}
			<br />
			<script>
				window.pageData = ${JSON.stringify(onPageObject)};
			</script>
			<!--
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
			-->
		</div>
		${hasSongData ? xplayer(onPageObject) : ""}
		<hr /> 
			
		`,
	};
	return base(data, insert);
};
