const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const path = require("path");
var slugify = require("slugify");
var markdownIt = require("markdown-it");
var mila = require("markdown-it-link-attributes");

require("dotenv").config();

let domain_name = "songobsessed.com";
let throwOnUndefinedSetting = false;

let scheme = "https://";

if (process.env.IS_LOCAL) {
	domain_name = "localhost:8083";
	throwOnUndefinedSetting = false;
	console.log("Dev env");
	scheme = "http://";
}

let site = scheme + domain_name;

process.env.DOMAIN = site;
process.env.DOMAIN_NAME = domain_name;
process.env.SITE_NAME = "Song Obsessed";
process.env.DESCRIPTION = "Getting obsessed with songs, one at a time.";
process.env.BASIC_IMAGE = `${domain_name}/img/nyc_noir.jpg`;
process.env.PRIMARY_AUTHOR = "Aram Zucker-Scharff";

module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md");
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy(".nojekyll");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy("src/img/");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	let markdownItOptions = {
		html: true,
	};
	let milaOptions = {
		matcher(href, config) {
			return href.startsWith("/");
		},
		attrs: {
			class: "hxlink",
			"hx-boost": "true",
			"hx-swap": "outerHTML show:top",
			"hx-target": "#main-content",
			"hx-select": "#main-content",
			"hx-push-url": "true",
		},
	};
	let markdownLib = markdownIt(markdownItOptions).use(mila, milaOptions);
	eleventyConfig.setLibrary("md", markdownLib);
	function filterTagList(tags) {
		return (tags || []).filter(
			(tag) =>
				["all", "nav", "post", "posts", "projects"].indexOf(tag) === -1
		);
	}

	eleventyConfig.addFilter("filterTagList", filterTagList);

	const paginate = (arr, size) => {
		return arr.reduce((acc, val, i) => {
			let idx = Math.floor(i / size);
			let page = acc[idx] || (acc[idx] = []);
			page.push(val);

			return acc;
		}, []);
	};

	let tagSet = new Set();
	let tagList = [];

	getAllTags = (allPosts) => {
		allPosts.forEach((item) => {
			if ("tags" in item.data) {
				let tags = filterTagList(item.data.tags);
				// console.log("Tags:", tags);
				tags.forEach((tag) => {
					tagSet.add(tag);
				});
			}
		});
		tagList = [...tagSet];
		return tagList;
	};

	const makePageObject = (tagName, slug, number, posts, first, last) => {
		return {
			tagName: tagName,
			slug: slug ? slug : slugify(tagName.toLowerCase()),
			number: number,
			posts: posts,
			first: first,
			last: last,
		};
	};

	const getPostClusters = (allPosts, tagName, slug) => {
		aSet = new Set();
		let postArray = allPosts.reverse();
		aSet = [...postArray];
		postArray = paginate(aSet, 10);
		let paginatedPostArray = [];
		postArray.forEach((p, i) => {
			paginatedPostArray.push(
				makePageObject(
					tagName,
					slug,
					i + 1,
					p,
					i === 0,
					i === postArray.length - 1
				)
			);
		});
		// console.log(paginatedPostArray)
		return paginatedPostArray;
	};

	eleventyConfig.addCollection("songsPages", (collection) => {
		return getPostClusters(collection.getFilteredByTag("songs"), "Songs");
	});

	eleventyConfig.addPlugin(require("eleventy-plugin-dart-sass"), {
		sassLocation: path.join(path.resolve("."), "src/_sass/"),
		perTemplateFiles: "template-",
		outDir: path.join(path.resolve("."), "docs"),
		domainName: site,
	});

	var siteConfiguration = {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html
		// templateFormats: ["md", "njk", "html"],

		// -----------------------------------------------------------------
		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Don’t worry about leading and trailing slashes, we normalize these.

		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for link URLs (it does not affect your file structure)
		// Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

		// You can also pass this in on the command line using `--pathprefix`

		// Optional
		pathPrefix: "/",
		// -----------------------------------------------------------------

		// Pre-process *.md files with: (default: `liquid`)
		// markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		// htmlTemplateEngine: "njk",

		// Opt-out of pre-processing global data JSON files: (default: `liquid`)
		dataTemplateEngine: false,

		// These are all optional (defaults are shown):
		dir: {
			input: "src",
			includes: "_includes",
			// layouts: "_layouts",
			data: "_data",
			output: "docs",
		},
	};

	// pagefind search
	eleventyConfig.on("eleventy.after", () => {
		console.log("After Eleventy", eleventyConfig);
		//console.log("indexing search using pagefind");
		//execSync(`npx pagefind --source _site --glob \"[0-9]*/**/*.html\"`, {
		//	encoding: "utf-8",
		//});
	});

	return siteConfiguration;
};
