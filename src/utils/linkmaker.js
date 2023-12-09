module.exports = function (data, localLink, content) {
	let link = `${data.site.domain}${localLink}`; // hx-get="${link}"
	return /*html*/ `
	<a href="${link}" hx-boost="true" hx-swap="morph:outerHTML show:top" hx-target="#main-content" hx-push-url="true" hx-select="#main-content">${content}</a>
	`;
};
