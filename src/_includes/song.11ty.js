const base = require("./base.11ty");
const youtube = require("./partials/youtube.11ty");

module.exports = async function (data) {
	console.log("post", data);
	var onPageObject = {
		site: data.site,
		metadata: data.metadata,
		me: data.me,
		post: {
			description: data.description,
			tags: data.tags,
			date: data.date,
			title: data.title,
			artists: data.artists,
			youtube: data.youtube,
			spotify: data.spotify,
			soundcloud: data.soundcloud,
			audiofile: data.audiofile,
		},
	};
	let insert = {
		content: /*html*/ `
			${data.content}
			<br />
			<script>
				window.pageData = ${JSON.stringify(onPageObject)};
			</script>
			${youtube(data.youtube, false)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
