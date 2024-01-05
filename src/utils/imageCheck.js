const sharp = require("sharp");
const fs = require("fs");

module.exports = async function (data, size) {
	// console.log("image data", data);
	let promiseArray = [];
	let finalImage = false;
	if (data?.featuredImage) {
		let imagePath = `./src/img/${data.featuredImage}`;
		let imageNameArray = data.featuredImage.split(".");
		let imageName = data.featuredImage.replace(
			`.${imageNameArray[imageNameArray.length - 1]}`,
			""
		);
		if (!fs.existsSync(`./src/img/${imageName}-640.jpg`)) {
			promiseArray.push(
				await sharp(imagePath)
					.resize(640)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/${imageName}-640.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		if (!fs.existsSync(`./src/img/${imageName}-240.jpg`)) {
			promiseArray.push(
				await sharp(imagePath)
					.resize(240)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/${imageName}-240.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		let promiseResult = await Promise.all(promiseArray);
		finalImage = `/img/${imageName}`;
	} else {
		// Default image used under creative commons from https://www.metmuseum.org/art/collection/search/501692
		if (!fs.existsSync(`./src/img/glass-horn-240.jpg`)) {
			let imagePath = `./src/img/glass-horn.jpg`;
			promiseArray.push(
				await sharp(imagePath)
					.resize(240)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/glass-horn-240.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		if (!fs.existsSync(`./src/img/glass-horn-640.jpg`)) {
			let imagePath = `./src/img/glass-horn.jpg`;
			promiseArray.push(
				await sharp(imagePath)
					.resize(640)
					.jpeg({ mozjpeg: true })
					.toFile(`./src/img/glass-horn-640.jpg`)
					.then((data) => {})
					.catch((err) => {})
			);
		}
		let promiseResult = await Promise.all(promiseArray);
		finalImage = `/img/glass-horn`;
	}
	if (size === "small") {
		finalImage += `-240.jpg`;
	} else {
		finalImage += `-640.jpg`;
	}
	return finalImage;
};
