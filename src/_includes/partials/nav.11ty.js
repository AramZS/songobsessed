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
		<img src="/assets/menu-icon.svg" width="25px" height="25px" alt="menu icon"/>
	</div>
	<h1 class="site-name">${linkmaker(data, "", data.site.title, "site-name")}</h1>
		<div id="nav-menu-items"><ul>
			<li>${linkmaker(data, "/songs/", "Songs")}</li>
			<li>${linkmaker(data, "/search/", "Search")}</li>
			<li>${linkmaker(data, "/song-tags/", "Tags")}</li>
			<li>${linkmaker(data, "/how-to-scrobble/", "Scrobble This Site")}</li>
			<li>${linkmaker(data, "/about/", "What is This?")}</li>
		</ul>
	</div>
	<label class="switch">
		<span class="switch-text">Autoplay</span>
		<input type="checkbox" id="xplayer-autoplay-switch" checked>
		<span class="slider round"></span>
  </label>
</nav>
`;
};
