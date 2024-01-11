const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	let styleguideLink = linkmaker(data, `/styleguide/`, `Styleguide`);
	return /*html*/ `
	<footer id="footer">
		<p>An <a href="https://github.com/AramZS/songobsessed" target="_blank">open source project</a> from <a href="https://aramzs.github.io/aramzs/" target="_blank" rel="me">AramZS</a>. Written content provided by the author is licensed under <a target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1">CC BY-SA 4.0</a>. ${styleguideLink} <br /><a href="/rss/index.xml" target="_blank" >Subscribe to the feed</a>. V1.0.1. </p>
	</footer>
`;
};
