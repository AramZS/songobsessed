const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	return /*html*/ `
<nav id="nav"><h1>${linkmaker(data, "", data.site.title)}</h1></nav>
`;
};
