const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	return /*html*/ `
<nav id="nav">
	<h1>${linkmaker(data, "", data.site.title)}</h1>
	${linkmaker(data, "/songs/", "Songs")}
	${linkmaker(data, "/search/", "Search")}
	${linkmaker(data, "/how-to-scrobble/", "Scrobble This Site")}
</nav>
`;
};
