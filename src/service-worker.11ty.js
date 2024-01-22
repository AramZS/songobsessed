const fs = require("fs");

class ServiceWorker {
	async data() {
		return {
			layout: "blank.11ty.js",
			// permalink: false,
			permalink: "service-worker.js",
		};
	}

	//Basically ripped right from https://sparkbox.com/foundry/eleventy_starter_repo_series_teaches_progressive_web_app_support_PWA

	async render(data) {
		let serviceWorkerScript = fs.readFileSync(
			"./src/assets/js/service-worker.js",
			"utf8"
		);
		return /*js*/ `
const VERSION = "${data.site.serviceWorkerVer}";

${serviceWorkerScript}		
		`;
	}
}

module.exports = ServiceWorker;
