const base = require("./base.11ty");
const youtube = require("./partials/youtube.11ty");

module.exports = async function (data) {
	console.log("post", data);
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
		},
	};
	let insert = {
		content: /*html*/ `
			${data.content}
			<br />
			<script>
				window.pageData = ${JSON.stringify(onPageObject)};
			</script>
			${youtube(data.youtube, false, onPageObject)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
