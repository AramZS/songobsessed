const base = require("./base.11ty");

module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let insert = {
		content: /*html*/ `
			<p class="top-note">Total songs: ${data.collections.songs.length}</p>
			${data.content}
			<br />
			<hr /> `,
	};
	return base(data, insert);
};
