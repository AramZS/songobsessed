module.exports = function (data, localLink, content, classNames) {
	let link = `${data.site.domain}${localLink}`; // hx-get="${link}"
	classNames = classNames ? classNames : "htmx-made-link";
	return /*html*/ `
	<a href="${link}" hx-boost="true" hx-swap="outerHTML show:top" hx-target="#main-content" hx-push-url="true" hx-select="#main-content" class="${classNames}">${content}</a>
	`;
};
