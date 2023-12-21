const base = require("./base.11ty");
const youtube = require("./partials/youtube.11ty");

module.exports = async function (data) {
	// console.log("post", data);
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
		content: /*html*/ `
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
			featuredImage: <img src="/img/${data.featuredImage}" /><br /><br />
			</p>
			${youtube(data.youtube, false, onPageObject)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
