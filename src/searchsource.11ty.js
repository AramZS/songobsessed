class SearchSource {
	async data() {
		return {
			layout: "searchable.11ty.js",
			// permalink: false,
			permalink: "searchsource.json",
		};
	}
	dataset(songs) {
		return songs.map((song) => {
			return {
				id: song.template.filePathStem,
				full_text: song.content,
				title: song.data.title,
				description: song.data.description,
				artists: song.data.artists.join(", "),
				album: song.data.album,
				tags: song.data.tags.join(" "),
				date: song.data.date,
				slug: song.template.fileSlugStr,
			};
		});
	}
	async render(data) {
		//console.log("search data", data.collections.songs);
		return JSON.stringify(this.dataset(data.collections.songs));
	}
}

module.exports = SearchSource;
