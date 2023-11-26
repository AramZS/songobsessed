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
};

data.avatar = `/img/twitter-avy.jpg`;

module.exports = (info) => {
	console.log("final site info", data);
	return data;
};
