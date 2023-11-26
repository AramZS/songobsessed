const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

require("dotenv").config();

let domain_name = "songobsessed.com";
let throwOnUndefinedSetting = false;

if (process.env.IS_LOCAL) {
	domain_name = "localhost:8083";
	throwOnUndefinedSetting = false;
	console.log("Dev env");
}

let site = "https://" + domain_name;

process.env.DOMAIN = site;
process.env.DOMAIN_NAME = domain_name;
process.env.SITE_NAME = "Song Obsessed";
process.env.DESCRIPTION = "Getting obsessed with songs, one at a time.";
process.env.BASIC_IMAGE = `${domain_name}/img/nyc_noir.jpg`;
process.env.PRIMARY_AUTHOR = "Aram Zucker-Scharff";

module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md");
	eleventyConfig.addPassthroughCopy("assets/");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy(".nojekyll");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy("img/");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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

		// Optional (default is shown)
		pathPrefix: process.env.DOMAIN + "/",
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
