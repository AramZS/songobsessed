require("dotenv").config();
const metadata = require("../_data/metadata.js");

let data = {
	username: "Chronotope", // No leading @ here
	title: process.env.SITE_NAME,
	description: process.env.DESCRIPTION,
	homeUrl: "https://aramzs.github.io/",
	language: "en-US",
	metadata: {
		...metadata,
	},
	lang: "en-US",
	github: {
		build_revision: process.env.MY_GITHUB_RUN_ID || 1.0,
		build_sha: process.env.GITHUB_SHA || 1,
	},
	site_url: process.env.DOMAIN,
	domain: process.env.DOMAIN,
	defaultImage: process.env.DOMAIN + "/img/glass-horn.jpg",
};

data.avatar = `/img/twitter-avy.jpg`;

module.exports = (info) => {
	console.log("final site info", data);
	return data;
};
