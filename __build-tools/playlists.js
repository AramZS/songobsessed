// Playlist: https://open.spotify.com/playlist/2mSWs9FQ3n06F7yriWDr0M?si=37461f70a5cd4ba8
// https://api.spotify.com/v1/playlists/2mSWs9FQ3n06F7yriWDr0M/tracks?limit=50&fields=items(added_by.id,added_at,track(name,href,external_urls,external_ids,external_urls,href,uri,id,album(name,href,external_urls,images),artists(name,external_urls,genres,href,uri)))
// &offset=200

// Got my token to request these via - https://developer.spotify.com/

// run via node ./__build-tools/playlists.js
const fs = require("fs");

var slugify = require("slugify");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

require("dotenv").config();

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

var whole = require("./set");

/**

{
  added_at: '2023-12-06T18:48:46Z',
  added_by: { id: 'aramzs' },
  track: {
    album: {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/3gT18SfuM7NII3Ab55AznQ',
      images: [{
    height: 640,
    url: 'https://i.scdn.co/image/ab67616d0000b273e3243d4f602537b8951c6b7a',
    width: 640
  },
  {
    height: 300,
    url: 'https://i.scdn.co/image/ab67616d00001e02e3243d4f602537b8951c6b7a',
    width: 300
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d00004851e3243d4f602537b8951c6b7a',
    width: 64
  }],
      name: 'Em'
    },
    artists: [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2BAhRYk5QrGfs5KNo9gHr4'
    },
    href: 'https://api.spotify.com/v1/artists/2BAhRYk5QrGfs5KNo9gHr4',
    name: 'Đá Số Tới',
    uri: 'spotify:artist:2BAhRYk5QrGfs5KNo9gHr4'
  }
],
    external_ids: { isrc: 'VNA0M1908747' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/1UVoU1n7QWGJfhaSUNuFlf'
    },
    href: 'https://api.spotify.com/v1/tracks/1UVoU1n7QWGJfhaSUNuFlf',
    id: '1UVoU1n7QWGJfhaSUNuFlf',
    name: 'Em',
    uri: 'spotify:track:1UVoU1n7QWGJfhaSUNuFlf'
  }
}

 */

var c = 0;

c = 459;

whole = [
	{
		track: {
			artists: [
				{
					href: "https://api.spotify.com/v1/artists/0EJdA6JT738oZGopzk8Usg",
					name: "Voyou",
					uri: "spotify:artist:0EJdA6JT738oZGopzk8Usg",
				},
			],
			album: {
				images: [
					{
						height: 640,
						url: "https://i.scdn.co/image/ab67616d0000b2732bf2baa3878ac19c71ad969c",
						width: 640,
					},
					{
						height: 300,
						url: "https://i.scdn.co/image/ab67616d00001e022bf2baa3878ac19c71ad969c",
						width: 300,
					},
					{
						height: 64,
						url: "https://i.scdn.co/image/ab67616d000048512bf2baa3878ac19c71ad969c",
						width: 64,
					},
				],
				external_urls: {
					spotify:
						"https://open.spotify.com/album/7veLHJkF3anIdkKy4sGd5T",
				},
				href: "https://api.spotify.com/v1/albums/7veLHJkF3anIdkKy4sGd5T",
				name: "Des confettis en désordre",
			},
			external_urls: {
				spotify:
					"https://open.spotify.com/track/3Wk2VX8h0Wd327tndC1Vmb",
			},
			href: "https://api.spotify.com/v1/tracks/3Wk2VX8h0Wd327tndC1Vmb",
			name: "Le confort",
			external_ids: {
				isrc: "FRPI61900070",
			},
		},
		added_by: {
			id: "aramzs",
		},
		added_at: "2025-05-18T21:12:19Z",
	},
];

whole.forEach(async (track) => {
	++c;
	//console.log(c, track.track.name);
	// 453 total
	if (c > 453) {
		console.log(c, track.track.name);
		// c > 419 && c < 441) {
		let playlistNumber = 480 + 1;
		/*console.log(
			track,
			track.track.artists,
			track.track.album.external_urls,
			track.track.album.images
		);**/
		var artists = [];
		track.track.artists.forEach((a) => {
			artists.push(a.name);
		});
		var YAMLArtists = artists.join(`
  - `);
		var image = track.track.album.images.find((image) => {
			if (image.height == 640) {
				return true;
			} else {
				return false;
			}
		});

		let lastFMPromisedData = new Promise((resolve, reject) => {
			fetch(
				`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LASTFM_API_KEY}&artist=${
					artists[0]
				}&track=${encodeURIComponent(track.track.name)}&format=json`,
				{
					headers: {
						"User-Agent":
							"Song Obsessed/1.0 ( http://aramzs.github.io )",
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					console.log("LASTFM Data", data, "for", track.track.name);
					if (
						data.hasOwnProperty("error") &&
						data.hasOwnProperty("message")
					) {
						console.error(
							"LastFM Error",
							data.message,
							"for",
							track.track.name
						);
						resolve(false);
					}
					resolve(data);
				})
				.catch((error) => console.error("Error:", error));
		});
		console.log("Artists check: ", artists);
		let artistGenre = new Promise((resolve, reject) => {
			fetch(
				`https://musicbrainz.org/ws/2/artist/?query=${artists[0]}&limit=1&fmt=json`,
				{
					headers: {
						"User-Agent":
							"Song Obsessed/1.0 ( http://aramzs.github.io )",
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					// console.log("mbz artists", data);
					resolve(data);
				})
				.catch((error) =>
					console.error("\x1b[33m  mbz Error: \x1b[0m", error)
				);
		});
		let artistsObject = await artistGenre;
		let lastFMData = await lastFMPromisedData;
		let ytlink = "";
		if (lastFMData) {
			let ytcheck = new Promise((resolve, reject) => {
				fetch(lastFMData.track.url, {
					headers: {
						"User-Agent":
							"Song Obsessed/1.0 ( http://aramzs.github.io )",
					},
				})
					.then((response) => response.text())
					.then((data) => {
						console.log("ytcheck");
						let ytlink = false;
						if (data) {
							fs.writeFileSync("./testLast.html", data);
							const dom = new JSDOM(data);
							ytlink = dom.window.document
								.querySelector("#track-page-video-playlink")
								.getAttribute("data-youtube-url");
						}
						resolve(ytlink);
					})
					.catch((error) => {
						console.error(
							"\x1b[33m  Error: \x1b[0m",
							"from retrieving " + lastFMData.track.url,
							error
						);
						resolve("");
					});
			});
			ytlink = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("");
				}, 3000);
			});
			try {
				ytlink = await ytcheck;
			} catch (e) {
				console.log("ytcheck error", e, "from lastFM data");
				ytlink = "";
			}
			await ytlink;
		} else {
			ytlink = "";
		}
		//console.log("artistsObject", artistsObject);
		let tags = new Set();
		if (artistsObject?.artists?.length > 0) {
			let artist = artistsObject.artists[0];
			if (artist.disambiguation) {
				tags.add(artist.disambiguation);
			}
			if (artist.tags) {
				artist.tags.forEach((tag) => {
					if (
						tag?.name &&
						tag?.name != "_edit" &&
						tag.name != "null"
					) {
						tags.add(tag.name);
					}
				});
			}
		} else {
			console.log(
				`\x1b[33m  Song ${playlistNumber} ${track.track.name} failed artists check. \x1b[0m`
			);
		}
		console.log("lastFMData.track", lastFMData.track);
		if (
			lastFMData &&
			lastFMData.hasOwnProperty("track") &&
			lastFMData.track.toptags.hasOwnProperty("tag") > 0
		) {
			lastFMData.track.toptags.tag.forEach((tag) => {
				tags.add(tag.name);
			});
		} else {
			console.error(
				`\x1b[33m  Song ${playlistNumber} ${track.track.name} failed lastFMData check. \x1b[0m`
			);
		}
		let tagsArray = Array.from(tags);
		let tagsArrayFiltered = tagsArray.filter((tag) => {
			if (tag) {
				return true;
			}
		});
		let tagsArrayStringed = tagsArrayFiltered.map((tag) => {
			let safeTag = tag.replace(/"/g, "'");
			return `"${safeTag}"`;
		});
		var YAMLTags = tagsArrayStringed.join(`
  - `);
		let commaSeperatedArtists = artists.join(", ");
		let title = `${track.track.name} by ${commaSeperatedArtists.replace(
			/,(?=[^,]+$)/,
			" and"
		)}`;
		let slug = slugify(`${title}`, {
			lower: true,
			strict: true,
			locale: "en",
		});
		let processImageUrl = async (aUrl, filetype, filename) => {
			let localImageName = filename + `.${filetype}`;
			if (!filename || filename === undefined) {
				console.error(
					"Image request passed undefined filename",
					aUrl,
					filetype,
					filename
				);
				return false;
			}
			let fileStructureName = "./src/img/" + filename + `.${filetype}`;
			if (fs.existsSync(fileStructureName)) {
				return localImageName;
			}
			try {
				let imageBlob = await fetch(aUrl, {
					headers: {
						"User-Agent":
							"Song Obsessed/1.0 ( http://aramzs.github.io )",
					},
				});
				let imageReady = await imageBlob.blob();
				const arrayBuffer = await imageReady.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer);
				// console.log(imageBlob);
				var imageParts = aUrl.split("/");
				var imageName = imageParts[imageParts.length - 1];
				// imageBlob.body.pipe(fs.createWriteStream(`./${imageName}.jpeg`));
				fs.writeFileSync(fileStructureName, buffer);
				return localImageName;
			} catch (e) {
				console.error(
					"Image request failed ",
					e,
					aUrl,
					filetype,
					filename
				);
				return false;
			}
		};
		let localImageFileName = "";
		let imageUrl = "";
		let albumName = track.track.album.name;
		if (albumName === undefined) {
			albumName = title;
		}
		var sluggedAlbum = slugify(albumName ? albumName : title, {
			lower: true,
			strict: true,
			locale: "en",
		});
		if (image?.url) {
			console.log("imageurl", image.url);
			let imageName = albumName;
			if (!imageName || imageName === undefined) {
				imageName = title;
			}

			localImageFileName = await processImageUrl(
				image.url,
				"jpeg",
				sluggedAlbum
			);
			imageUrl = image.url;
		} else if (lastFMData?.track?.album?.image) {
			var image = lastFMData.track.album.image.find((image) => {
				if (image.size == "extralarge") {
					return true;
				} else {
					return false;
				}
			});
			localImageFileName = await processImageUrl(
				image["#text"],
				"png",
				sluggedAlbum
			);
		}
		localImageFileName = localImageFileName ? localImageFileName : "";
		let description = "More information to come!";
		if (lastFMData.wiki && lastFMData.wiki.summary) {
			description =
				"From Last.fm: " +
				lastFMData.wiki.summary +
				`<br/><br/><br/> *User-contributed text is used from the Last.fm wiki under the Creative Commons By-SA License*`;
			description.replace('"', "'");
		}
		let spotifyTrack =
			!!track.track?.external_urls?.spotify &&
			track.track.external_urls.spotify != "undefined"
				? track.track.external_urls.spotify
				: "";
		let spotifyUri =
			!!track.track?.uri && track.track.uri != "undefined"
				? track.track.uri
				: "";
		if (spotifyUri.includes(":local:")) {
			// We can't play tis
			spotifyUri = "";
		}
		console.log("spotifyTrack", spotifyTrack);
		let writeOptions = { flag: "w" };
		writeOptions = { flag: "wx" }; // Once we start writing stuff into the posts we don't want to overwrite them.
		YAMLTags = YAMLTags ? YAMLTags : "Tags Needed";
		let mdMode = `---
title: "${title}"
description: "${description}"
date: ${track.added_at}
tags:
  - ${YAMLTags}
public: true
artists:
  - ${YAMLArtists}
songtitle: "${track.track.name}"
album: "${track.track.album.name}"
featuredImage: "${localImageFileName}"
featuredImageCredit: "Image is used from album for review purposes."
featuredImageLink: "${imageUrl}"
featuredImageAlt: ""
author: Aram Zucker-Scharff
playlists:
  -
    name: "Obsessions"
    position: ${playlistNumber}
    author: ${process.env.PLAYLIST_AUTHOR}
youtube: ${ytlink}
spotify: ${spotifyTrack}
spotifyUri: ${spotifyUri}
soundcloud:
audiofile:
podbean:
lastfm: ${lastFMData ? lastFMData.track.url : ""}
---

A song I plan to write more about.
		`;
		console.log(playlistNumber, "Writing file for ", slug);
		try {
			fs.writeFileSync(
				"./src/songs/" + slug + ".md",
				mdMode,
				writeOptions
			);
		} catch (e) {
			console.log("Write error", e);
		}
	}
});
