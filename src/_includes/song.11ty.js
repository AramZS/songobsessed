const base = require("./base.11ty");
const youtube = require("./partials/youtube.11ty");

module.exports = async function (data) {
	console.log("post", data);
	let insert = {
		content: /*html*/ `
			${data.content}
			<br />
			${youtube(data.youtube, false)}
			<hr /> 
			
		`,
	};
	return base(data, insert);
};
