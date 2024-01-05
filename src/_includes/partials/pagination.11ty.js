const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	let paged = data.paged;
	let pagination = data.pagination;
	let first = "";
	if (!paged.first) {
		first = pagination.href.previous;
	} else {
		first = ""; // `javascript:void(0)`;
	}
	let firstLink = linkmaker(
		data,
		first,
		"Previous",
		`pagination-link ${
			!paged.first ? "cursor-pointer" : "cursor-default disabled-link"
		}`
	);
	let last = "";
	if (!paged.last) {
		last = pagination.href.next;
	} else {
		last = ""; // `javascript:void(0)`;
	}
	let lastLink = linkmaker(
		data,
		last,
		"Next",
		`pagination-link ${
			!paged.last ? "cursor-pointer" : "cursor-default disabled-link"
		}`
	);
	return /*html*/ `
	<div class="pagination">
		${firstLink}
		${lastLink}
	</div>
`;
};
