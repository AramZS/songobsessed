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
				<h1>Search Tweet Text</h1>
				<p>This form will you to search the text of the tweets.</p>
				<form class="js" method="get" id="search-text">
					<script src="../assets/elasticlunr.min.js" defer></script>
					<script src="../assets/search-setup.js" defer></script>
					<h2>Search <label for="tweet-text">in text</label>:</h2>
					<div class="tweets-search">
						<div class="lo" style="--lo-margin-h: 1em; align-items: center;">
							<div class="lo-c" style="flex-grow: 100">
								<input type="text" id="tweet-text" required placeholder="Loading Tweets..." style="width: 100%" />
							</div>
							<div class="lo-c" style="flex-grow: .001;">
								<button type="submit" disabled id="search-submit-button">Search</button>
							</div>
						</div>
					</div>
				</form>	
				<div>
				<ol id="searchbox" class="tweets tweets-linear-list h-feed hfeed"></ul>
				</div>
				</div>
		</div>`;
	}
}

module.exports = Search;
