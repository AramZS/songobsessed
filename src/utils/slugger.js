var URLSafeBase64 = require("urlsafe-base64");
var slugify = require("slugify");
var tr = require("transliteration");
module.exports = function (tagName) {
	let safeTagName = tagName;
	let slug = slugify(safeTagName, {
		lower: true,
		strict: true,
		locale: "en",
	});
	if (!slug || (slug && !URLSafeBase64.validate(slug))) {
		console.log(
			"tagName",
			tagName,
			" with slug ",
			slug,
			"failed validation"
		);
		safeTagName = tr.transliterate(tagName);

		slug = slugify(safeTagName, {
			lower: true,
			strict: true,
			locale: "en",
		});
		//safeTagName = URLSafeBase64.encode(Buffer.from(tagName));
		console.log(
			"tagName",
			tagName,
			" received safe tagName ",
			safeTagName,
			"and slug",
			slug
		);
	}
	if (!slug || (slug && !URLSafeBase64.validate(slug))) {
		console.log(
			"tagName",
			tagName,
			" with slug ",
			safeTagName,
			"failed validation"
		);
		// safeTagName = tr.transliterate(tagName);
		safeTagName = URLSafeBase64.encode(Buffer.from(tagName));
		console.log("tagName", tagName, " received safe tagName ", safeTagName);
		slug = slugify(safeTagName, {
			lower: true,
			strict: true,
			locale: "en",
		});
	}
	return slug;
};
