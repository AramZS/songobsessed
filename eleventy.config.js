const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const path = require("path");
var slugify = require("slugify");
var markdownIt = require("markdown-it");
var mila = require("markdown-it-link-attributes");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const slugger = require("./src/utils/slugger");
const sharp = require("sharp");
const fs = require("fs");

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
	eleventyConfig.addPassthroughCopy("src/.well-known/");
	eleventyConfig.addPassthroughCopy("src/site.webmanifest");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy(".nojekyll");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy("src/img/");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	let imagePath = `./src/assets/favicon.png`;
	let imageName = "favicon";
	let promiseSet = [];
	if (!fs.existsSync(`./src/assets/apple-touch-icon.png`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(imagePath)
					.resize(180, 180)
					.png()
					.toFile(`./src/assets/apple-touch-icon.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}
	if (!fs.existsSync(`./src/assets/${imageName}-16x16.jpg`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(imagePath)
					.resize(16, 16)
					.png()
					.toFile(`./src/assets/${imageName}-16x16.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}
	if (!fs.existsSync(`./src/assets/${imageName}-32x32.png`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(imagePath)
					.resize(32, 32)
					.png()
					.toFile(`./src/assets/${imageName}-32x32.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}

	if (!fs.existsSync(`./src/assets/${imageName}-192x192.png`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(imagePath)
					.resize(192, 192)
					.png()
					.toFile(`./src/assets/${imageName}-192x192.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}

	if (!fs.existsSync(`./src/assets/${imageName}-192x192-maskable.png`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(`./src/assets/favicon-maskable.png`)
					.resize(192, 192)
					.png()
					.toFile(`./src/assets/${imageName}-192x192-maskable.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}

	if (!fs.existsSync(`./src/assets/${imageName}-512x512.png`)) {
		promiseSet.push(
			new Promise((resolve, reject) => {
				sharp(imagePath)
					.resize(512, 512)
					.png()
					.toFile(`./src/assets/${imageName}-512x512.png`)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						console.log("favicon maker", err);
						reject(err);
					});
			})
		);
	}

	// https://www.11ty.dev/docs/plugins/rss/
	eleventyConfig.addPlugin(pluginRss);
	let markdownItOptions = {
		html: true,
	};
	let milaOptions = [
		{
			matcher(href) {
				return href.match(/^https?:\/\//);
			},
			attrs: {
				class: "external-link",
				target: "_blank",
			},
		},
		{
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
				//"hx-replace-url": "true",
			},
		},
	];
	let markdownLib = markdownIt(markdownItOptions).use(mila, milaOptions);
	//		.use(require("markdown-it-github-headings"));
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
					if (tag && typeof tag !== "undefined") {
						tagSet.add(tag);
					} else {
						console.error("Tag is undefined", item.title);
					}
				});
			}
		});
		tagList = [...tagSet];
		return tagList;
	};

	getAllArtists = (allPosts) => {
		let artistSet = new Set();
		let artistList = [];

		allPosts.forEach((item) => {
			if ("artists" in item.data) {
				let artists = item.data.artists;
				// console.log("Tags:", tags);
				artists.forEach((tag) => {
					if (tag && typeof tag !== "undefined") {
						artistSet.add(tag);
					} else {
						console.error("Artist is undefined", item.title);
					}
				});
			}
		});
		artistList = [...artistSet];
		return artistList;
	};

	const makePageObject = (tagName, slug, number, posts, first, last) => {
		//console.log(tagName, slug, number, first, last);
		if (!tagName) {
			console.error("tagName is undefined in makePageObject", tagName);
			return;
		}
		if (!slug) {
			/*console.log(
				slug,
				"slug is undefined in makePageObject, slugify",
				tagName
			);*/
			slug = slugify(tagName, {
				lower: true,
				strict: true,
				locale: "en",
			});
		}
		return {
			tagName: tagName,
			slug: slug,
			number: number,
			posts: posts,
			first: first,
			last: last,
		};
	};

	const getPostClusters = (
		allPosts,
		tagName,
		slug,
		controlSort,
		reversePerPage
	) => {
		aSet = new Set();
		if (controlSort) {
			aSet = [...allPosts];
		} else {
			let postArray = allPosts.reverse();
			aSet = [...postArray];
		}

		postArray = paginate(aSet, 20);
		let paginatedPostArray = [];
		postArray.forEach((p, i) => {
			if (reversePerPage) {
				p = p.reverse();
			}
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

	eleventyConfig.addCollection("tagList", (collection) => {
		return getAllTags(collection.getAll());
	});

	// Create a list of posts by tag for paged lists
	eleventyConfig.addCollection("deepTagList", (collection) => {
		const maxPostsPerPage = 20;
		const pagedPosts = [];
		tagList = getAllTags(collection.getAll());
		let dupedPages = [];
		tagList.forEach((tagName) => {
			if (!tagName) {
				console.error("tagName is undefined in deepTagList", tagName);
				return;
			}
			tagName = `${tagName}`.trim(); // Convert numbers to strings
			let capCheck = tagName.split("");
			let tagNameCapitalized = capCheck.reduce((acc, val, i) => {
				if (i === 1) {
					return acc.toUpperCase() + val;
				} else {
					return acc + val;
				}
			});
			tagName = tagNameCapitalized;
			let taggedPosts = [
				...collection.getFilteredByTag(tagName),
				...collection.getFilteredByTag(tagName.toLowerCase()),
				...collection.getFilteredByTag(tagName.toUpperCase()),
				...collection.getFilteredByTag(tagNameCapitalized),
				...collection.getFilteredByTag(
					slugify(tagName, {
						lower: true,
						strict: true,
						locale: "en",
					})
				),
				...collection.getFilteredByTag(
					slugify(tagName, {
						lower: true,
						strict: false,
						locale: "en",
					})
				),
				...collection.getFilteredByTag(
					slugify(tagName, {
						lower: false,
						strict: false,
						locale: "en",
					})
				),
				...collection.getFilteredByTag(
					slugify(tagName, {
						lower: false,
						strict: true,
						locale: "en",
					})
				),
			].reverse();
			let uniqueTaggedPosts = new Set(taggedPosts);
			taggedPosts = [...uniqueTaggedPosts];
			const numberOfPages = Math.ceil(
				taggedPosts.length / maxPostsPerPage
			);
			// console.log("Need to create a slug for:", tagName);
			let slug = slugify(tagName, {
				lower: true,
				strict: true,
				locale: "en",
			});
			if (slug.length > 30) {
				console.log("long slug", tagName, "into", slug);
			}
			// console.log("paged posts slug", slug);
			let dupedTag = false;
			if (pagedPosts.find((postsObj) => postsObj.slug === slug)) {
				console.error(`Tag ${tagName} has duplicate slug`, slug);
				dupedTag = true;
			}
			for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
				const sliceFrom = (pageNum - 1) * maxPostsPerPage;
				const sliceTo = sliceFrom + maxPostsPerPage;
				let pageObj = makePageObject(
					tagName,
					slug,
					pageNum,
					taggedPosts.slice(sliceFrom, sliceTo),
					pageNum === 1,
					pageNum === numberOfPages
				);
				if (!dupedTag) {
					try {
						let matchedPages = pagedPosts.find(
							(postsObj) => postsObj?.slug === slug
						);
						if (
							matchedPages &&
							matchedPages.length >= pageObj.number
						) {
							pageObj.number = matchedPages.length + 1;
							console.error(
								`Tag ${tagName} has a previously duplicate slug`,
								slug,
								`changing from ${pageNum} to ${pageObj.number}`
							);
						}
					} catch (e) {
						console.log("!!! Duped page check has gone wrong", e);
					}
					pageObj.posts.reverse();
					pagedPosts.push(pageObj);
				} else {
					dupedPages.push(pageObj);
				}
			}
		});

		if (dupedPages.length) {
			dupedPages.forEach((pageObj) => {
				return;
				let c = 1;
				let slug = pageObj.slug;
				let tagName = pageObj.tagName;
				let pageNumber = 1;
				let aSet = pagedPosts.find((postsObj) => {
					if (
						postsObj.slug === slug &&
						// postsObj.number === c &&
						postsObj.posts.length < maxPostsPerPage
					) {
						c++;
						return true;
					} else {
						return false;
					}
				});
				if (aSet) {
					console.log(
						`Duplicate slug ${slug} from ${tagName} on ${pageObj.pageNum} found potential matching page`, //,
						`${aSet.tagName} with slug ${aSet.slug} and page number ${aSet.number} with ${aSet.posts.length} posts`
					);
					if (
						maxPostsPerPage >=
						aSet.posts.length + pageObj.posts.length
					) {
						let postsSet = new Set([
							...aSet.posts,
							...pageObj.posts,
						]);
						aSet.posts = [...postsSet];
						console.log(
							`Duplicate slug ${slug} from ${tagName} placed in with page`, //,
							`${aSet.tagName} with slug ${aSet.slug} and page number ${aSet.number}`
						);
					} else {
						console.log(
							"!! page split",
							`${aSet.tagName} with slug ${aSet.slug} and page number ${aSet.number}`
						);
						pageObj.number = c;
						pagedPosts.push(pageObj);
						console.log(
							"!! page split",
							`Duplicate slug ${slug} from ${tagName} placed in a new page`,
							pageObj
						);
					}
				} else {
					pageObj.number = ++c;
					pagedPosts.push(pageObj);
					dupedTag = false;
					console.log(
						`Duplicate slug ${slug} from ${tagName} on page ${pageObj.pageNum} placed in a new page`,
						pageObj
					);
				}
			});
		}
		console.log(
			"pagedPosts electronic check pages",
			pagedPosts.filter((pO) => pO.slug === "electronic")
		);
		console.log("pagedPosts total pages", pagedPosts.length);
		return pagedPosts;
	});

	eleventyConfig.addCollection("songsPages", (collection) => {
		let songPages = collection.getFilteredByTag("songs");
		songPages.sort((a, b) => {
			if (!b?.data?.playlists?.length) {
				return 0;
			}
			return b.data.playlists[0].position - a.data.playlists[0].position;
		});
		[songPages[0], songPages[1], songPages[2]].forEach((song) => {
			console.log(
				"songPages",
				song.data.title,
				JSON.stringify(song.data.playlists)
			);
		});
		return getPostClusters(songPages, "Songs", false, true, true);
	});

	eleventyConfig.addCollection("artistsList", (collection) => {
		let tagList = getAllArtists(collection.getAll());
		return tagList;
	});

	eleventyConfig.addCollection("deepArtistsList", (collection) => {
		const maxPostsPerPage = 20;
		const pagedPosts = [];
		tagList = getAllArtists(collection.getAll());
		let dupedPages = [];
		tagList.forEach((tagName) => {
			if (!tagName) {
				console.error("tagName is undefined in deepTagList", tagName);
				return;
			}
			tagName = `${tagName}`; // Convert numbers to strings
			var collectionOfArtist = collection.getAll().filter((post) => {
				if (post.data.artists) {
					return post.data.artists.includes(tagName);
				}
				return false;
			});
			let taggedPosts = [...collectionOfArtist].reverse();
			let uniqueTaggedPosts = new Set(taggedPosts);
			taggedPosts = [...uniqueTaggedPosts];
			const numberOfPages = Math.ceil(
				taggedPosts.length / maxPostsPerPage
			);
			// console.log("Need to create a slug for:", tagName);
			let slug = slugger(tagName);
			if (!slug) {
				console.log("artist slug failed", tagName, "into", slug);
			}
			if (slug.length > 30) {
				console.log("long artist slug", tagName, "into", slug);
			}
			// console.log("paged posts slug", slug);
			let dupedTag = false;
			if (pagedPosts.find((postsObj) => postsObj.slug === slug)) {
				console.error(`Tag ${tagName} has duplicate slug`, slug);
				dupedTag = true;
			}
			for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
				const sliceFrom = (pageNum - 1) * maxPostsPerPage;
				const sliceTo = sliceFrom + maxPostsPerPage;
				let pageObj = makePageObject(
					tagName,
					slug,
					pageNum,
					taggedPosts.slice(sliceFrom, sliceTo),
					pageNum === 1,
					pageNum === numberOfPages
				);
				if (!dupedTag) {
					try {
						let matchedPages = pagedPosts.find(
							(postsObj) => postsObj?.slug === slug
						);
						if (
							matchedPages &&
							matchedPages.length >= pageObj.number
						) {
							pageObj.number = matchedPages.length + 1;
							console.error(
								`Artist ${tagName} has a previously duplicate slug`,
								slug,
								`changing from ${pageNum} to ${pageObj.number}`
							);
						}
					} catch (e) {
						console.log("!!! Duped page check has gone wrong", e);
					}
					pageObj.posts.reverse();
					pagedPosts.push(pageObj);
				} else {
					dupedPages.push(pageObj);
				}
			}
		});

		console.log(
			"pagedPosts electronic check pages",
			pagedPosts.filter((pO) => pO.slug === "electronic")
		);
		console.log("pagedPosts total pages", pagedPosts.length);
		return pagedPosts;
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

	eleventyConfig.addPlugin(sitemap, {
		// Name of the property for the last modification date.
		// By default it is undefined and the plugin will fallback to `date`.
		// When set, the plugin will try to use this property and it will fallback
		// to the `date` property when needed.
		lastModifiedProperty: "modified",

		sitemap: {
			// Options for SitemapStream. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#sitemapstream
			// Hostname is needed when the URLs of the items don't include it.
			hostname: site,
		},
	});

	// pagefind search
	eleventyConfig.on("eleventy.after", () => {
		// console.log("After Eleventy", eleventyConfig);
		//console.log("indexing search using pagefind");
		//execSync(`npx pagefind --source _site --glob \"[0-9]*/**/*.html\"`, {
		//	encoding: "utf-8",
		//});
	});

	return siteConfiguration;
};
