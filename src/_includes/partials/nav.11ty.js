const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	return /*html*/ `
<script>
function opennav(e){
	console.log(e.parentNode.parentNode); e.parentNode.parentNode.classList.toggle('open');
}
</script>	
<nav id="top-nav">
	<div id="nav-icon" onclick="opennav(this)">
		<img src="/assets/menu-icon.svg" />
	</div>
	<h1>${linkmaker(data, "", data.site.title)}</h1>
	<div id="nav-menu-items"><ul>
		<li>${linkmaker(data, "/songs/", "Songs")}</li>
		<li>${linkmaker(data, "/search/", "Search")}</li>
		<li>${linkmaker(data, "/how-to-scrobble/", "Scrobble This Site")}</li>
		<li>${linkmaker(data, "/about/", "What is This?")}</li>
	</ul></div>
</nav>
`;
};
