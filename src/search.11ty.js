class Search {
	async data() {
		return {
			layout: "layout.11ty.js",
			// permalink: false,
			permalink: "/search/index.html",
			title: "Search",
			eleventyExcludeFromCollections: true,
		};
	}

	async render(data) {
		// console.log("Search page", data);
		return /*html*/ `<div>
				<p>This form will let you search song names, descriptions, albums, and tags. It also will check the text of the posts about those songs.</p>
				<form class="js" method="get" id="search-text">
					<script src="../assets/js/elasticlunr.min.js" defer></script>
					<script src="../assets/js/search-setup.js" defer></script>
					<h2>Search <label for="post-text">in text</label>:</h2>
					<div class="search">
						<div class="lo" style="--lo-margin-h: 1em; align-items: center;">
							<div class="lo-c" style="flex-grow: 100">
								<input type="text" id="post-text" required placeholder="Loading Songs..." style="width: 100%" />
							</div>
							<div class="lo-c" style="flex-grow: .001;">
								<button type="submit" disabled id="search-submit-button">Search</button>
							</div>
						</div>
					</div>
				</form>	
				<div>
				<ol id="searchbox" class="linear-list h-feed hfeed"></ul>
				</div>
				</div>
		</div>`;
	}
}

module.exports = Search;
