module.exports = async function (data) {
	return `{
		"posts": ${data.content}
	}`;
};
