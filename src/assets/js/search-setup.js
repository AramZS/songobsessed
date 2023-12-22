window.el_index = elasticlunr(function () {
	this.addField("title");
	this.addField("full_text");
	this.addField("description");
	this.addField("artists");
	this.addField("album");
	this.addField("tags");
	this.addField("slug");
	this.setRef("id");
});

function renderDate(d) {
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	return `${d.getFullYear()} ${months[d.getMonth()]} ${d.getDate()}`;
}

fetch("/searchsource.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("HTTP error " + response.status);
		}
		return response.json();
	})
	.then((json) => {
		json.posts.forEach((post) => {
			window.el_index.addDoc(post);
		});
		document.getElementById("search-submit-button").disabled = false;
		document.getElementById("post-text").placeholder = "Search Songs";
		const searchParams = new URLSearchParams(document.location.search);
		if (searchParams.has("q")) {
			getSearchResults(searchParams.get("q"), true);
			document.getElementById("post-text").value = searchParams.get("q");
		}
		//console.log(this.users);
	})
	.catch(function (e) {
		this.dataError = true;
		console.log("Search Source Loading failed", e);
	});

function getSearchResults(searchString, keepHistoryState) {
	console.log("Searching for: ", searchString);
	var landing = document.getElementById("searchbox");
	landing.innerHTML = "";
	if (searchString && searchString.length) {
		var results = window.el_index.search(searchString);
		if (results.length) {
			results.forEach((result) => {
				var post = `<div class="post-result-container">
					<div class="post-result-title">Song: <span class="post-result-main-title">${
						result.doc.title
					}</span></div>
					<div class="post-result-album">Album: ${result.doc.album}</div>
					<div class="post-result-description">${result.doc.description}</div>
					<div class="post-result-date">
						Added on: <span class="">${renderDate(new Date(result.doc.date))}</span>
					</div>
				</div>
				<a href="${result.doc.id}" hx-get="${
					result.doc.id
				}/" class="tag tag-naked" hx-boost="true" hx-swap="outerHTML show:top" hx-target="#main-content" hx-push-url="true" hx-select="#main-content" hx-trigger="click">Full Post</a>`;
				var liEl = document.createElement("li");
				liEl.id = result.doc.slug;
				liEl.class = "post song h-entry hentry";
				liEl.innerHTML = post;
				landing.append(liEl);
				htmx.process(landing);
			});
		} else {
			landing.innerHTML = `<p>No search results found.</p>`;
		}
		if (!keepHistoryState) {
			const baseURL =
				location.protocol + "//" + location.host + location.pathname;
			const searchParams = createUrlSearchParams(searchString);
			window.history.pushState(
				{ path: `${baseURL}?${searchParams.toString()}` },
				"",
				`${baseURL}?${searchParams.toString()}`
			);
		}
	}
}
function createUrlSearchParams(string) {
	return new URLSearchParams(`q=${string}`);
}

var searchForm = document.getElementById("search-text");
if (searchForm) {
	searchForm.addEventListener(
		"submit",
		function (e) {
			e.preventDefault();
			var textInput = searchForm.querySelector('input[type="text"]');
			if (textInput && textInput.value) {
				getSearchResults(textInput.value);
			}
		},
		false
	);
}
