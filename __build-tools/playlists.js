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

const from61 = {
	items: [
		{
			added_at: "2011-07-16T16:40:35Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Absolution Project",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 211000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Mad World",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Absolution+Project::Mad+World:211",
			},
		},
		{
			added_at: "2011-07-16T16:40:54Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Mathilde",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Bark Cat Bark",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 211000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Jardin du Ranelagh",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Bark+Cat+Bark:Mathilde:Jardin+du+Ranelagh:211",
			},
		},
		{
			added_at: "2011-07-16T16:41:09Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Robots in Love EP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Beautiful Small Machines",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 237000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Counting Back to One",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Beautiful+Small+Machines:Robots+in+Love+EP:Counting+Back+to+One:237",
			},
		},
		{
			added_at: "2011-07-16T16:41:11Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Robots in Love EP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Beautiful Small Machines",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 229000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Robots in Love",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Beautiful+Small+Machines:Robots+in+Love+EP:Robots+in+Love:229",
			},
		},
		{
			added_at: "2011-07-16T16:41:27Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Not a Christmas Album (2005)",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Bob Ricci",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 227000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "5 for 1",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Bob+Ricci:Not+a+Christmas+Album+%282005%29:5+for+1:227",
			},
		},
		{
			added_at: "2011-07-16T16:41:35Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "It's All Gravy",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Capital Road",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 201000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The Bongo Song",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Capital+Road:It%27s+All+Gravy:The+Bongo+Song:201",
			},
		},
		{
			added_at: "2011-07-16T16:41:47Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Q0sHoDBn75JCe4OJVXmUP",
					},
					href: "https://api.spotify.com/v1/albums/5Q0sHoDBn75JCe4OJVXmUP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27357ebd1df3bc0f2461559edd8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0257ebd1df3bc0f2461559edd8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485157ebd1df3bc0f2461559edd8",
							width: 64,
						},
					],
					name: "The Throat Is Dreaming",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4U6cZkjQE5aIsCnfL9DaJk",
						name: "Cavedoll",
						uri: "spotify:artist:4U6cZkjQE5aIsCnfL9DaJk",
					},
				],
				external_ids: {
					isrc: "ushm21082886",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4cvRWH9AmYyHmPLZKZ5u0O",
				},
				href: "https://api.spotify.com/v1/tracks/4cvRWH9AmYyHmPLZKZ5u0O",
				name: "Leviathan Smiles",
			},
		},
		{
			added_at: "2011-07-16T16:41:59Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Chesney Hawkes",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 214000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Thing of beauty",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Chesney+Hawkes::Thing+of+beauty:214",
			},
		},
		{
			added_at: "2011-07-16T16:42:07Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Back to BASIC",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Children of the CPU",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 256000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Slay Your Dragons",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Children+of+the+CPU:Back+to+BASIC:Slay+Your+Dragons:256",
			},
		},
		{
			added_at: "2011-07-16T16:42:19Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Coax",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 165000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Starship March",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Coax::Starship+March:165",
			},
		},
		{
			added_at: "2011-07-16T16:42:45Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Volume 2",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Craigmire",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 217000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "1 on 1 (Round 2)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Craigmire:Volume+2:1+on+1+%28Round+2%29:217",
			},
		},
		{
			added_at: "2011-07-16T16:43:07Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0I6Dq3hTubPUyEYRvlaTxw",
					},
					href: "https://api.spotify.com/v1/albums/0I6Dq3hTubPUyEYRvlaTxw",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c76e1092cb97ffa5b7adaa89",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c76e1092cb97ffa5b7adaa89",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c76e1092cb97ffa5b7adaa89",
							width: 64,
						},
					],
					name: "Hemvägen",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/25IOiTtNlrRS3SaIcKbo7h",
						name: "Detektivbyrån",
						uri: "spotify:artist:25IOiTtNlrRS3SaIcKbo7h",
					},
				],
				external_ids: {
					isrc: "SEXDQ0600103",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6v9b7TqeOovPEd5LrMxKsF",
				},
				href: "https://api.spotify.com/v1/tracks/6v9b7TqeOovPEd5LrMxKsF",
				name: "Nattöppet",
			},
		},
		{
			added_at: "2011-07-16T16:43:33Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "DJ Low",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 291000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Lose Yourself in a Bittersweet Symphony",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:DJ+Low::Lose+Yourself+in+a+Bittersweet+Symphony:291",
			},
		},
		{
			added_at: "2011-07-16T16:43:44Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "DJ TELTA",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 3648000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Uplift part 2",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:DJ+TELTA::Uplift+part+2:3648",
			},
		},
		{
			added_at: "2011-07-16T16:44:18Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Remixes",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "EEPROM",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 215000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "crushcrushcrush REMIXREMIXREMIX",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:EEPROM:Remixes:crushcrushcrush+REMIXREMIXREMIX:215",
			},
		},
		{
			added_at: "2011-07-16T16:44:30Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3le9KQl8wzoPiLN66AzSCC",
					},
					href: "https://api.spotify.com/v1/albums/3le9KQl8wzoPiLN66AzSCC",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273036b30c77c68e426a975e129",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02036b30c77c68e426a975e129",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851036b30c77c68e426a975e129",
							width: 64,
						},
					],
					name: "Songs For A Break Up: Volume 1",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4AcHt3JxKy59IX7JNNlZn4",
						name: "Fitz and The Tantrums",
						uri: "spotify:artist:4AcHt3JxKy59IX7JNNlZn4",
					},
				],
				external_ids: {
					isrc: "USCGH0952920",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0wuyh173FUOIX9yGAmUrLv",
				},
				href: "https://api.spotify.com/v1/tracks/0wuyh173FUOIX9yGAmUrLv",
				name: "Breakin' The Chains of Love",
			},
		},
		{
			added_at: "2011-07-16T16:44:56Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "FLYING MACHINES",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 242000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The Way I Want to Love",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:FLYING+MACHINES::The+Way+I+Want+to+Love:242",
			},
		},
		{
			added_at: "2011-07-16T16:45:14Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "The Promised Land",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Gunryo",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 350000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Soldiers",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Gunryo:The+Promised+Land:Soldiers:350",
			},
		},
		{
			added_at: "2011-07-18T03:55:30Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Zyndabox",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "goto80",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 206000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Killer Piller",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:goto80:Zyndabox:Killer+Piller:206",
			},
		},
		{
			added_at: "2011-07-16T16:45:46Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Henry Homesweet",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 229000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "OkiiRobo Navigation System",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Henry+Homesweet::OkiiRobo+Navigation+System:229",
			},
		},
		{
			added_at: "2011-07-16T16:46:01Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5cW972qoSvOXfAnBjJJlWH",
					},
					href: "https://api.spotify.com/v1/albums/5cW972qoSvOXfAnBjJJlWH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273354cc886f338e94afc23baec",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02354cc886f338e94afc23baec",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851354cc886f338e94afc23baec",
							width: 64,
						},
					],
					name: "Hooray",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1pTBQC9zXDUgiVPQbBDTM4",
						name: "Hollywood Drunks",
						uri: "spotify:artist:1pTBQC9zXDUgiVPQbBDTM4",
					},
				],
				external_ids: {
					isrc: "USTC70835543",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/21AAwnwqbkjXZ7ljj7zSlw",
				},
				href: "https://api.spotify.com/v1/tracks/21AAwnwqbkjXZ7ljj7zSlw",
				name: "Punchline",
			},
		},
		{
			added_at: "2011-07-16T16:46:11Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1SzvhsYJtM1B0UvYO0r50f",
					},
					href: "https://api.spotify.com/v1/albums/1SzvhsYJtM1B0UvYO0r50f",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732409177d2996b23160d17aaf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022409177d2996b23160d17aaf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512409177d2996b23160d17aaf",
							width: 64,
						},
					],
					name: "Swell",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1pTBQC9zXDUgiVPQbBDTM4",
						name: "Hollywood Drunks",
						uri: "spotify:artist:1pTBQC9zXDUgiVPQbBDTM4",
					},
				],
				external_ids: {
					isrc: "USTC70835716",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/06ZvioYXKUgyudeCP5RKrX",
				},
				href: "https://api.spotify.com/v1/tracks/06ZvioYXKUgyudeCP5RKrX",
				name: "That Age",
			},
		},
		{
			added_at: "2011-07-16T16:46:25Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Empty Vessels",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Isaac Graham",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 146000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Karl Marx And The Reds",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Isaac+Graham:Empty+Vessels:Karl+Marx+And+The+Reds:146",
			},
		},
		{
			added_at: "2011-07-16T16:46:45Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3vLnCCc6nSz1bDLKRVQWgp",
					},
					href: "https://api.spotify.com/v1/albums/3vLnCCc6nSz1bDLKRVQWgp",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f27d9a2e8bdf7f03b1fc4c74",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f27d9a2e8bdf7f03b1fc4c74",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f27d9a2e8bdf7f03b1fc4c74",
							width: 64,
						},
					],
					name: "Discoballs",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/35Jmw5lJjihbFBMRJ8k2Mt",
						name: "The Love Dictators",
						uri: "spotify:artist:35Jmw5lJjihbFBMRJ8k2Mt",
					},
				],
				external_ids: {
					isrc: "DEBL60949547",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7H8Duf5GllduaXpNhFMxtY",
				},
				href: "https://api.spotify.com/v1/tracks/7H8Duf5GllduaXpNhFMxtY",
				name: "Soviet Power",
			},
		},
		{
			added_at: "2011-07-16T16:47:03Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "James Daniello",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 361000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "In Six Minutes",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:James+Daniello::In+Six+Minutes:361",
			},
		},
		{
			added_at: "2011-07-16T16:47:14Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "James Hogan",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 207000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Lost Control",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:James+Hogan::Lost+Control:207",
			},
		},
		{
			added_at: "2011-07-16T16:47:26Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0osfpItv12J5J0AkTx3MWe",
					},
					href: "https://api.spotify.com/v1/albums/0osfpItv12J5J0AkTx3MWe",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733acc85d09062f85355b60021",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023acc85d09062f85355b60021",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513acc85d09062f85355b60021",
							width: 64,
						},
					],
					name: "Sunny Days",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2NM3w8uoFsNQYYNIJc8LxO",
						name: "Jason Silver",
						uri: "spotify:artist:2NM3w8uoFsNQYYNIJc8LxO",
					},
				],
				external_ids: {
					isrc: "uscgj0830982",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0bicEbfAabms5yAA5Umcup",
				},
				href: "https://api.spotify.com/v1/tracks/0bicEbfAabms5yAA5Umcup",
				name: "Satisfied",
			},
		},
		{
			added_at: "2011-07-16T16:47:40Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Jon Skarin",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 144000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Once Upon A Time",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Jon+Skarin::Once+Upon+A+Time:144",
			},
		},
		{
			added_at: "2011-07-16T16:48:11Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7GoZlNMjflJgjzB2LgHvl5",
					},
					href: "https://api.spotify.com/v1/albums/7GoZlNMjflJgjzB2LgHvl5",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27301ed422c1dfc82e0b1d725fd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0201ed422c1dfc82e0b1d725fd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485101ed422c1dfc82e0b1d725fd",
							width: 64,
						},
					],
					name: "Near the Sun",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0ZatCBdBCqqXtLe2tUUNug",
						name: "Julie Peel",
						uri: "spotify:artist:0ZatCBdBCqqXtLe2tUUNug",
					},
				],
				external_ids: {
					isrc: "FR6V80872915",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5K69VbwMMZVNIA9OU7n7Pm",
				},
				href: "https://api.spotify.com/v1/tracks/5K69VbwMMZVNIA9OU7n7Pm",
				name: "Unfold",
			},
		},
		{
			added_at: "2011-07-16T16:48:30Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Justice",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 197000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "D.A.N.C.E. (Benny Blanco Remix Feat. Mos Def and Spank Ro...",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Justice::D.A.N.C.E.+%28Benny+Blanco+Remix+Feat.+Mos+Def+and+Spank+Ro...:197",
			},
		},
		{
			added_at: "2011-07-16T16:48:49Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "kfox",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 441000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Purple Underground",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:kfox::Purple+Underground:441",
			},
		},
		{
			added_at: "2011-07-16T16:49:00Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Kina Grannis",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 241000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Strong Enough",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Kina+Grannis::Strong+Enough:241",
			},
		},
		{
			added_at: "2011-07-16T16:49:14Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/13a5XK95LsLu2ODpBRNYWB",
					},
					href: "https://api.spotify.com/v1/albums/13a5XK95LsLu2ODpBRNYWB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27393a158af6773ba86589e9ddd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0293a158af6773ba86589e9ddd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485193a158af6773ba86589e9ddd",
							width: 64,
						},
					],
					name: "Goodbye Planet Earth",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0ye92QxZfhKHjwY7DOcHYP",
						name: "Matthew Ebel",
						uri: "spotify:artist:0ye92QxZfhKHjwY7DOcHYP",
					},
				],
				external_ids: {
					isrc: "usl4r0701701",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5Ee5cEhbBJiFgMTzCmSFoQ",
				},
				href: "https://api.spotify.com/v1/tracks/5Ee5cEhbBJiFgMTzCmSFoQ",
				name: "Join The Conversation",
			},
		},
		{
			added_at: "2011-07-16T16:51:17Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7zqudbTp74jYOhSa3PWgpj",
					},
					href: "https://api.spotify.com/v1/albums/7zqudbTp74jYOhSa3PWgpj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273047acabd0796282442d8f0f3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02047acabd0796282442d8f0f3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851047acabd0796282442d8f0f3",
							width: 64,
						},
					],
					name: "No More Kings",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/71ayJn19k4ENbNmOmKKgfi",
						name: "No More Kings",
						uri: "spotify:artist:71ayJn19k4ENbNmOmKKgfi",
					},
				],
				external_ids: {
					isrc: "USZVZ0600011",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5sUzjPvwB4U362UGZeaj1v",
				},
				href: "https://api.spotify.com/v1/tracks/5sUzjPvwB4U362UGZeaj1v",
				name: "Zombie Me",
			},
		},
		{
			added_at: "2011-07-16T16:50:23Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Moonalice",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 305000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Blink of an Eye",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Moonalice::Blink+of+an+Eye:305",
			},
		},
		{
			added_at: "2011-07-16T16:50:41Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0xQrn80aZgOT8mFDWBwwqF",
					},
					href: "https://api.spotify.com/v1/albums/0xQrn80aZgOT8mFDWBwwqF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bccd9f33bfcc1b3bd8c26205",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bccd9f33bfcc1b3bd8c26205",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bccd9f33bfcc1b3bd8c26205",
							width: 64,
						},
					],
					name: "Moonalice",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/03UgRdV3bSLEHGmdagyM0e",
						name: "Moonalice",
						uri: "spotify:artist:03UgRdV3bSLEHGmdagyM0e",
					},
				],
				external_ids: {
					isrc: "USQ740800005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1XLiceOghYqvGbthlv4f45",
				},
				href: "https://api.spotify.com/v1/tracks/1XLiceOghYqvGbthlv4f45",
				name: "I'm Glad You Think So",
			},
		},
		{
			added_at: "2011-07-16T16:50:42Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0xQrn80aZgOT8mFDWBwwqF",
					},
					href: "https://api.spotify.com/v1/albums/0xQrn80aZgOT8mFDWBwwqF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bccd9f33bfcc1b3bd8c26205",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bccd9f33bfcc1b3bd8c26205",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bccd9f33bfcc1b3bd8c26205",
							width: 64,
						},
					],
					name: "Moonalice",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/03UgRdV3bSLEHGmdagyM0e",
						name: "Moonalice",
						uri: "spotify:artist:03UgRdV3bSLEHGmdagyM0e",
					},
				],
				external_ids: {
					isrc: "USQ740800008",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3Z1Hoj7c1RoaEiIhmuu9yg",
				},
				href: "https://api.spotify.com/v1/tracks/3Z1Hoj7c1RoaEiIhmuu9yg",
				name: "Kick It Open",
			},
		},
		{
			added_at: "2011-07-16T16:51:07Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3OLVn34ynKbMsf9mtShvfm",
					},
					href: "https://api.spotify.com/v1/albums/3OLVn34ynKbMsf9mtShvfm",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27337716aa244ad57a82fa95f30",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0237716aa244ad57a82fa95f30",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485137716aa244ad57a82fa95f30",
							width: 64,
						},
					],
					name: "Fight For You",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1N9n8MSxrr4Emhb566493b",
						name: "Morgan Page",
						uri: "spotify:artist:1N9n8MSxrr4Emhb566493b",
					},
				],
				external_ids: {
					isrc: "CAN110900386",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0Uj2EojymZumOtBAcT1UNJ",
				},
				href: "https://api.spotify.com/v1/tracks/0Uj2EojymZumOtBAcT1UNJ",
				name: "Fight For You",
			},
		},
		{
			added_at: "2011-07-16T16:51:46Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "M. Sykops",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 164000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Classical Gas",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:M.+Sykops::Classical+Gas:164",
			},
		},
		{
			added_at: "2011-07-16T16:51:55Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "MrEpic Productions",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 206000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Google Maps Theme Song",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:MrEpic+Productions::Google+Maps+Theme+Song:206",
			},
		},
		{
			added_at: "2011-07-16T16:52:25Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5cFRngtvbnQmlo6VllubcE",
					},
					href: "https://api.spotify.com/v1/albums/5cFRngtvbnQmlo6VllubcE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273adc34926ac5429660831271e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02adc34926ac5429660831271e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851adc34926ac5429660831271e",
							width: 64,
						},
					],
					name: "New Music On The Block 2006-2008",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3JpZEPU8DAkZSMEkvdNL0S",
						name: "University of Michigan - Block M Records",
						uri: "spotify:artist:3JpZEPU8DAkZSMEkvdNL0S",
					},
					{
						href: "https://api.spotify.com/v1/artists/6AXr7aXrJYFI3XjslAWDPY",
						name: "Michelle Chamuel",
						uri: "spotify:artist:6AXr7aXrJYFI3XjslAWDPY",
					},
					{
						href: "https://api.spotify.com/v1/artists/55JUCZ76IirVQixHXXnseL",
						name: "Robert Lester",
						uri: "spotify:artist:55JUCZ76IirVQixHXXnseL",
					},
				],
				external_ids: {
					isrc: "USEU60800144",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1YQQTFiRB1SX5m9MqJmdsv",
				},
				href: "https://api.spotify.com/v1/tracks/1YQQTFiRB1SX5m9MqJmdsv",
				name: "My Dear Disco",
			},
		},
		{
			added_at: "2011-07-16T16:52:09Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Dancethink LP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "My Dear Disco",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 327000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "For Your Love",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:My+Dear+Disco:Dancethink+LP:For+Your+Love:327",
			},
		},
		{
			added_at: "2011-07-16T16:52:09Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Dancethink LP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "My Dear Disco",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 383000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "M.Y.F. (Move Your Feet)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:My+Dear+Disco:Dancethink+LP:M.Y.F.+%28Move+Your+Feet%29:383",
			},
		},
		{
			added_at: "2011-07-16T16:52:09Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Dancethink LP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "My Dear Disco",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 267000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Amsterdam",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:My+Dear+Disco:Dancethink+LP:Amsterdam:267",
			},
		},
		{
			added_at: "2011-07-16T16:52:09Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Dancethink LP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "My Dear Disco",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 325000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "All I Do",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:My+Dear+Disco:Dancethink+LP:All+I+Do:325",
			},
		},
		{
			added_at: "2011-07-16T16:52:43Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "My First Earthquake",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 182000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Fa La Freezing",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:My+First+Earthquake::Fa+La+Freezing:182",
			},
		},
		{
			added_at: "2011-07-16T16:52:56Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "In Blackout Cities",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Paper Sailboat",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 191000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The twin cities",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Paper+Sailboat:In+Blackout+Cities:The+twin+cities:191",
			},
		},
		{
			added_at: "2011-07-16T16:53:15Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Paul Dateh",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 376000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Violin w/ Inka One",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Paul+Dateh::Violin+w%2F+Inka+One:376",
			},
		},
		{
			added_at: "2011-07-16T16:53:25Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Hand Held Accordion Blasters",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Polka Glocks",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 131000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Wind Chime",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Polka+Glocks:Hand+Held+Accordion+Blasters:Wind+Chime:131",
			},
		},
		{
			added_at: "2011-07-16T16:53:40Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3aYJt8Krn8bWDiYChZh8n4",
					},
					href: "https://api.spotify.com/v1/albums/3aYJt8Krn8bWDiYChZh8n4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737cc7174d2c5ff34700b7f556",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027cc7174d2c5ff34700b7f556",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517cc7174d2c5ff34700b7f556",
							width: 64,
						},
					],
					name: "The Rhumb Line",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6FIrstf3kHEg3zBOyLpvxD",
						name: "Ra Ra Riot",
						uri: "spotify:artist:6FIrstf3kHEg3zBOyLpvxD",
					},
				],
				external_ids: {
					isrc: "USBS50830885",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5Qqi7SlouvumlxpJoBgvGW",
				},
				href: "https://api.spotify.com/v1/tracks/5Qqi7SlouvumlxpJoBgvGW",
				name: "Can You Tell",
			},
		},
	],
};

const from61_51 = {
	items: [
		{
			added_at: "2011-07-16T16:53:59Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Days Between Stations",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Radio Nowhere",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 255000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "London Calling",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Radio+Nowhere:Days+Between+Stations:London+Calling:255",
			},
		},
		{
			added_at: "2011-07-16T16:54:38Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6skyXDBxUCVKoAcPkb4THT",
					},
					href: "https://api.spotify.com/v1/albums/6skyXDBxUCVKoAcPkb4THT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a61eb5b07dd536bd767e6512",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a61eb5b07dd536bd767e6512",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a61eb5b07dd536bd767e6512",
							width: 64,
						},
					],
					name: "Oh My",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/5d6Jinp5tHZ4qTziEwJdN6",
						name: "Sean Fournier",
						uri: "spotify:artist:5d6Jinp5tHZ4qTziEwJdN6",
					},
				],
				external_ids: {
					isrc: "ushm80866964",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3TwiQpVy3us8t8a1077WA2",
				},
				href: "https://api.spotify.com/v1/tracks/3TwiQpVy3us8t8a1077WA2",
				name: "Goodbye (Piano Version)",
			},
		},
		{
			added_at: "2011-07-16T16:54:54Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "sgx",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 306000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Lux Aeterna - Requiem for a Dream [SGX's Transient Mix]",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:sgx::Lux+Aeterna+-+Requiem+for+a+Dream+%5BSGX%27s+Transient+Mix%5D:306",
			},
		},
		{
			added_at: "2011-07-16T16:55:16Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Songs From The Pit",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Shael Riley and The Double Ice Backfire",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 231000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Publishing Rights (feat. Schaffer the Darklord)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Shael+Riley+and+The+Double+Ice+Backfire:Songs+From+The+Pit:Publishing+Rights+%28feat.+Schaffer+the+Darklord%29:231",
			},
		},
		{
			added_at: "2011-07-16T16:55:20Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Songs From The Pit",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Shael Riley and The Double Ice Backfire",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 174000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "How to Fire a Gun",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Shael+Riley+and+The+Double+Ice+Backfire:Songs+From+The+Pit:How+to+Fire+a+Gun:174",
			},
		},
		{
			added_at: "2011-07-16T16:55:39Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Morning After Cuts",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Skybox",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 198000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "In A Dream",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Skybox:Morning+After+Cuts:In+A+Dream:198",
			},
		},
		{
			added_at: "2011-07-16T16:55:58Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Soul Capital",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Soul Capital",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 160000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Know the Law",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Soul+Capital:Soul+Capital:Know+the+Law:160",
			},
		},
		{
			added_at: "2011-07-16T16:56:11Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/57WwNLKYGLEvT6lefOxUuP",
					},
					href: "https://api.spotify.com/v1/albums/57WwNLKYGLEvT6lefOxUuP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731a4e37384a3732eb3b314aaf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021a4e37384a3732eb3b314aaf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511a4e37384a3732eb3b314aaf",
							width: 64,
						},
					],
					name: "This Is Old",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4wTyadrU4Yuj2DolnrAMqv",
						name: "State Shirt",
						uri: "spotify:artist:4wTyadrU4Yuj2DolnrAMqv",
					},
				],
				external_ids: {
					isrc: "ushm80882346",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4dMuaUPtmzmHAytoEfF71R",
				},
				href: "https://api.spotify.com/v1/tracks/4dMuaUPtmzmHAytoEfF71R",
				name: "Computer",
			},
		},
		{
			added_at: "2011-07-16T16:56:24Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Remixes",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Superpowerless",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 230000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Real Late Starter",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Superpowerless:Remixes:Real+Late+Starter:230",
			},
		},
		{
			added_at: "2011-07-16T16:58:37Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Platforms EP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "The Agency",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 200000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Platforms",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:The+Agency:Platforms+EP:Platforms:200",
			},
		},
		{
			added_at: "2011-07-16T16:58:48Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "The Dandy Warhols performing live at Terminal 5 (NYC) on 17 Sep 2008",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "The Dandy Warhols",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 372000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Burned (Live)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:The+Dandy+Warhols:The+Dandy+Warhols+performing+live+at+Terminal+5+%28NYC%29+on+17+Sep+2008:Burned+%28Live%29:372",
			},
		},
		{
			added_at: "2011-07-16T16:58:59Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "The Grammar Club",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 223000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Code Monkey",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:The+Grammar+Club::Code+Monkey:223",
			},
		},
		{
			added_at: "2011-07-16T16:59:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "tomac",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 272000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "another day",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:tomac::another+day:272",
			},
		},
		{
			added_at: "2011-07-16T16:59:32Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Illinoize",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Tor and Sufjan Stevens",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 305000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "John Wayne Gacy Jr. / Specialize (f. Pete Rock & CL Smooth)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Tor+and+Sufjan+Stevens:Illinoize:John+Wayne+Gacy+Jr.+%2F+Specialize+%28f.+Pete+Rock+%26+CL+Smooth%29:305",
			},
		},
		{
			added_at: "2011-07-16T16:59:43Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Van Go Lion",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 223000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The Good Fight",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Van+Go+Lion::The+Good+Fight:223",
			},
		},
		{
			added_at: "2011-07-16T16:59:56Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Victims of Science",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 162000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The Device Has Been Modified",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Victims+of+Science::The+Device+Has+Been+Modified:162",
			},
		},
		{
			added_at: "2011-07-16T17:00:26Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "The Logic of The Sound EP",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "WM",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 189000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "#7 String Organ",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:WM:The+Logic+of+The+Sound+EP:%237+String+Organ:189",
			},
		},
		{
			added_at: "2013-03-15T04:00:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "tomac",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 297000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "in your head",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:tomac::in+your+head:297",
			},
		},
		{
			added_at: "2013-03-15T04:01:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "tomac",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 273000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "another daymension",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:tomac::another+daymension:273",
			},
		},
		{
			added_at: "2013-03-15T04:01:25Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "tomac",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 318000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "a new hope",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:tomac::a+new+hope:318",
			},
		},
		{
			added_at: "2011-07-17T13:56:02Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1DYDk4haCMnCHkbYGLEynU",
					},
					href: "https://api.spotify.com/v1/albums/1DYDk4haCMnCHkbYGLEynU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273454f92330267f67cebcd5e8e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02454f92330267f67cebcd5e8e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851454f92330267f67cebcd5e8e",
							width: 64,
						},
					],
					name: "The Golden Age",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/68g1s6VqLLLBI3tXR0Bb7C",
						name: "The Asteroids Galaxy Tour",
						uri: "spotify:artist:68g1s6VqLLLBI3tXR0Bb7C",
					},
				],
				external_ids: {
					isrc: "GBWRR0800045",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/75xJgtHmTdEr4v8pyflyxE",
				},
				href: "https://api.spotify.com/v1/tracks/75xJgtHmTdEr4v8pyflyxE",
				name: "The Golden Age",
			},
		},
		{
			added_at: "2011-09-23T22:26:32Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/09Cvd1XS0KwCXfMXukpvSS",
					},
					href: "https://api.spotify.com/v1/albums/09Cvd1XS0KwCXfMXukpvSS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e4028ad4cc09d10ce65f26e4",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e4028ad4cc09d10ce65f26e4",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e4028ad4cc09d10ce65f26e4",
							width: 64,
						},
					],
					name: "Yael Naim",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/32aFdXARUiqP81SXqIPD4w",
						name: "Yael Naim",
						uri: "spotify:artist:32aFdXARUiqP81SXqIPD4w",
					},
				],
				external_ids: {
					isrc: "FR79W0700370",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6l9HDwqU46DHCuNyvbmFdP",
				},
				href: "https://api.spotify.com/v1/tracks/6l9HDwqU46DHCuNyvbmFdP",
				name: "New Soul",
			},
		},
		{
			added_at: "2011-11-03T11:08:37Z",
			added_by: {
				id: "",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6PKuuIHL3SCjlGYVWMz5RS",
					},
					href: "https://api.spotify.com/v1/albums/6PKuuIHL3SCjlGYVWMz5RS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739e961340fc00c6ce7b43054b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029e961340fc00c6ce7b43054b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519e961340fc00c6ce7b43054b",
							width: 64,
						},
					],
					name: "David Dunn",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/57ZPJfidpxGJGkyjcmz68v",
						name: "David Dunn",
						uri: "spotify:artist:57ZPJfidpxGJGkyjcmz68v",
					},
				],
				external_ids: {
					isrc: "USDHM0907868",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0MXWsIgEHv3E4LkM92yfBP",
				},
				href: "https://api.spotify.com/v1/tracks/0MXWsIgEHv3E4LkM92yfBP",
				name: "This Is For You",
			},
		},
		{
			added_at: "2013-03-15T04:14:35Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7spq56B9kBvywDrcIKLNgL",
					},
					href: "https://api.spotify.com/v1/albums/7spq56B9kBvywDrcIKLNgL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735cbc2c3d3344f49db0eac4a6",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025cbc2c3d3344f49db0eac4a6",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515cbc2c3d3344f49db0eac4a6",
							width: 64,
						},
					],
					name: "Out of the Toybox",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3U77VPrrDmHFOSCk3VRoV4",
						name: "The Cosmic Ragdolls",
						uri: "spotify:artist:3U77VPrrDmHFOSCk3VRoV4",
					},
				],
				external_ids: {
					isrc: "TCABM1362732",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5YWr5oWKnu7NaZT0sQEpW1",
				},
				href: "https://api.spotify.com/v1/tracks/5YWr5oWKnu7NaZT0sQEpW1",
				name: "Rosalinda",
			},
		},
		{
			added_at: "2013-03-15T04:16:01Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2eIeZ8LYlgmts8tJWDkalg",
					},
					href: "https://api.spotify.com/v1/albums/2eIeZ8LYlgmts8tJWDkalg",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ed21972c3287e82e1e8ad9c3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ed21972c3287e82e1e8ad9c3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ed21972c3287e82e1e8ad9c3",
							width: 64,
						},
					],
					name: "Turning Stone",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/13CKL0erBftcm3d7zwd7xR",
						name: "The Drexels",
						uri: "spotify:artist:13CKL0erBftcm3d7zwd7xR",
					},
				],
				external_ids: {
					isrc: "ushm21297121",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1w9ps7DPHMqIFYcyMdATDE",
				},
				href: "https://api.spotify.com/v1/tracks/1w9ps7DPHMqIFYcyMdATDE",
				name: "Magneto's Dream",
			},
		},
		{
			added_at: "2013-03-15T04:16:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0s0Bc5cmfLhgk2ZBfDDEgB",
					},
					href: "https://api.spotify.com/v1/albums/0s0Bc5cmfLhgk2ZBfDDEgB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732e000976ed9624afb140edcd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022e000976ed9624afb140edcd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512e000976ed9624afb140edcd",
							width: 64,
						},
					],
					name: "Bells",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1Ecagb1V0oVlO0pFKnhYWM",
						name: "Laura Jansen",
						uri: "spotify:artist:1Ecagb1V0oVlO0pFKnhYWM",
					},
				],
				external_ids: {
					isrc: "USTC90945091",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/49NgRY5ZN7l7ijcelXxO4q",
				},
				href: "https://api.spotify.com/v1/tracks/49NgRY5ZN7l7ijcelXxO4q",
				name: "Wicked World",
			},
		},
		{
			added_at: "2013-03-15T04:20:05Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5sf0VZf1VyW7VRu8ZpseP0",
					},
					href: "https://api.spotify.com/v1/albums/5sf0VZf1VyW7VRu8ZpseP0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bc5eb819315c093fefdad7c9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bc5eb819315c093fefdad7c9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bc5eb819315c093fefdad7c9",
							width: 64,
						},
					],
					name: "Love Technology",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/5unEyN9QxgIk94Llcb8kbL",
						name: "Heads We Dance",
						uri: "spotify:artist:5unEyN9QxgIk94Llcb8kbL",
					},
				],
				external_ids: {
					isrc: "GBRUQ0900001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6jU5sgP6mWQAQiFaoZrkd2",
				},
				href: "https://api.spotify.com/v1/tracks/6jU5sgP6mWQAQiFaoZrkd2",
				name: "The Human Touch",
			},
		},
		{
			added_at: "2013-03-15T04:26:00Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "The Human Touch Single",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Heads We Dance",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 370000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "The Human Touch (Sidechains remix)",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Heads+We+Dance:The+Human+Touch+Single:The+Human+Touch+%28Sidechains+remix%29:370",
			},
		},
		{
			added_at: "2013-03-15T04:20:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4ygLzPNpG3nEJhjz7smlQY",
					},
					href: "https://api.spotify.com/v1/albums/4ygLzPNpG3nEJhjz7smlQY",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732f6c31ce384f4ba8c3a5c492",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022f6c31ce384f4ba8c3a5c492",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512f6c31ce384f4ba8c3a5c492",
							width: 64,
						},
					],
					name: "Adventure We Go",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3O316toq9Q067BGkekOs6b",
						name: "Muchuu",
						uri: "spotify:artist:3O316toq9Q067BGkekOs6b",
					},
				],
				external_ids: {
					isrc: "GB4HB0900006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0AZddUqTcvGlurFqu6w06l",
				},
				href: "https://api.spotify.com/v1/tracks/0AZddUqTcvGlurFqu6w06l",
				name: "Songs In My Room",
			},
		},
		{
			added_at: "2013-03-15T04:51:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5pa6TS6zRNIBGEsLVji0fL",
					},
					href: "https://api.spotify.com/v1/albums/5pa6TS6zRNIBGEsLVji0fL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a894be23080a62d5c3299a98",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a894be23080a62d5c3299a98",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a894be23080a62d5c3299a98",
							width: 64,
						},
					],
					name: "To Build A Fire",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0M8H25L3mBby3gXQg84pab",
						name: "Post Human Era",
						uri: "spotify:artist:0M8H25L3mBby3gXQg84pab",
					},
				],
				external_ids: {
					isrc: "USQY50974174",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/06qlTDjiL42kjZ7kOhDQCK",
				},
				href: "https://api.spotify.com/v1/tracks/06qlTDjiL42kjZ7kOhDQCK",
				name: "Replacing You",
			},
		},
		{
			added_at: "2013-03-15T04:57:10Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					album_type: null,
					artists: [],
					available_markets: [],
					external_urls: {},
					href: null,
					id: null,
					images: [],
					name: "Warmer In The Winter",
					release_date: null,
					release_date_precision: null,
					type: "album",
					uri: null,
				},
				artists: [
					{
						external_urls: {},
						href: null,
						id: null,
						name: "Katie Lee",
						type: "artist",
						uri: null,
					},
				],
				available_markets: [],
				disc_number: 0,
				duration_ms: 258000,
				explicit: false,
				external_ids: {},
				external_urls: {},
				href: null,
				id: null,
				is_local: true,
				name: "Mama Said",
				popularity: 0,
				preview_url: null,
				track_number: 0,
				type: "track",
				uri: "spotify:local:Katie+Lee:Warmer+In+The+Winter:Mama+Said:258",
			},
		},
		{
			added_at: "2013-03-15T05:14:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5LmcXTcYscwOiFk3hctW2Q",
					},
					href: "https://api.spotify.com/v1/albums/5LmcXTcYscwOiFk3hctW2Q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27333ca1353990bed74d57bbae5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0233ca1353990bed74d57bbae5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485133ca1353990bed74d57bbae5",
							width: 64,
						},
					],
					name: "Masquerade",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4lN8IYTePwhNUi2ESHEHip",
						name: "Lelia Broussard",
						uri: "spotify:artist:4lN8IYTePwhNUi2ESHEHip",
					},
				],
				external_ids: {
					isrc: "USZXY1001532",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6EmUcJbVBCUQ0R0VoOPUJf",
				},
				href: "https://api.spotify.com/v1/tracks/6EmUcJbVBCUQ0R0VoOPUJf",
				name: "Hipster Bitch",
			},
		},
		{
			added_at: "2013-03-15T05:14:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5LmcXTcYscwOiFk3hctW2Q",
					},
					href: "https://api.spotify.com/v1/albums/5LmcXTcYscwOiFk3hctW2Q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27333ca1353990bed74d57bbae5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0233ca1353990bed74d57bbae5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485133ca1353990bed74d57bbae5",
							width: 64,
						},
					],
					name: "Masquerade",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4lN8IYTePwhNUi2ESHEHip",
						name: "Lelia Broussard",
						uri: "spotify:artist:4lN8IYTePwhNUi2ESHEHip",
					},
				],
				external_ids: {
					isrc: "USZXY1001524",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3lYetAlENuMoDwdpac5HGJ",
				},
				href: "https://api.spotify.com/v1/tracks/3lYetAlENuMoDwdpac5HGJ",
				name: "Satellite",
			},
		},
	],
};

const timj = {
	items: [
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3Ah3jnukD4uREEJb9K7zeB",
					},
					href: "https://api.spotify.com/v1/albums/3Ah3jnukD4uREEJb9K7zeB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733db1b59e9ba79cf0f808136c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023db1b59e9ba79cf0f808136c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513db1b59e9ba79cf0f808136c",
							width: 64,
						},
					],
					name: "Summer House",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7L4QbusVfrNYUiDqjWAAgD",
						name: "Gold Motel",
						uri: "spotify:artist:7L4QbusVfrNYUiDqjWAAgD",
					},
				],
				external_ids: {
					isrc: "US96N1000003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2Z1X3XvQhsaOysMOKJ0CLf",
				},
				href: "https://api.spotify.com/v1/tracks/2Z1X3XvQhsaOysMOKJ0CLf",
				name: "Safe In L.A.",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2flDVPf3Zo7igod40wQNlk",
					},
					href: "https://api.spotify.com/v1/albums/2flDVPf3Zo7igod40wQNlk",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f38f8e5a37395f274891e024",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f38f8e5a37395f274891e024",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f38f8e5a37395f274891e024",
							width: 64,
						},
					],
					name: "Sundark and Riverlight",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6s92YZUPkTK1HL1WIGrPKE",
						name: "Patrick Wolf",
						uri: "spotify:artist:6s92YZUPkTK1HL1WIGrPKE",
					},
				],
				external_ids: {
					isrc: "GBXYQ1200013",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1zLGiryX1WWVQfAxxN1xn3",
				},
				href: "https://api.spotify.com/v1/tracks/1zLGiryX1WWVQfAxxN1xn3",
				name: "The Magic Position",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4qRpPTw29IouGrqJTWELOb",
					},
					href: "https://api.spotify.com/v1/albums/4qRpPTw29IouGrqJTWELOb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fefe24d9d937055ed038bac1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fefe24d9d937055ed038bac1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fefe24d9d937055ed038bac1",
							width: 64,
						},
					],
					name: "Dirty Gold",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2cyyGl4qnHZL0o16t0fpJl",
						name: "Angel Haze",
						uri: "spotify:artist:2cyyGl4qnHZL0o16t0fpJl",
					},
					{
						href: "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN",
						name: "Sia",
						uri: "spotify:artist:5WUlDfRSoLAfcVSX1WnrxN",
					},
				],
				external_ids: {
					isrc: "GBUM71306405",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1dUJgVO3qniVDWVKx2qnzA",
				},
				href: "https://api.spotify.com/v1/tracks/1dUJgVO3qniVDWVKx2qnzA",
				name: "Battle Cry",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6TkySY7hWuG0D5AEGXdSaK",
					},
					href: "https://api.spotify.com/v1/albums/6TkySY7hWuG0D5AEGXdSaK",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273688e87f03f319943a5bf877d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02688e87f03f319943a5bf877d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851688e87f03f319943a5bf877d",
							width: 64,
						},
					],
					name: "We are the Hearts",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4V5CfrbkqZkFJZUiXYWSVC",
						name: "EXGF",
						uri: "spotify:artist:4V5CfrbkqZkFJZUiXYWSVC",
					},
				],
				external_ids: {
					isrc: "TCACD1553495",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4XPlMHV5UlXxs7PgNVWU5g",
				},
				href: "https://api.spotify.com/v1/tracks/4XPlMHV5UlXxs7PgNVWU5g",
				name: "We are the Hearts",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/061IeHu2QcmToSRzRkzeqM",
					},
					href: "https://api.spotify.com/v1/albums/061IeHu2QcmToSRzRkzeqM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732d50a845cd4b8d7863320bff",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022d50a845cd4b8d7863320bff",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512d50a845cd4b8d7863320bff",
							width: 64,
						},
					],
					name: "Committed to the Crime",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6D6rjLdxyE5vwhMlkuQq0E",
						name: "Chaos Chaos",
						uri: "spotify:artist:6D6rjLdxyE5vwhMlkuQq0E",
					},
				],
				external_ids: {
					isrc: "ushm81465326",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3lOok0REf4j3790abX26PR",
				},
				href: "https://api.spotify.com/v1/tracks/3lOok0REf4j3790abX26PR",
				name: "Do You Feel It?",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7AwM3PKHC1ytGnTHUz93RE",
					},
					href: "https://api.spotify.com/v1/albums/7AwM3PKHC1ytGnTHUz93RE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27390bf2b2581e4fd423efa3192",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0290bf2b2581e4fd423efa3192",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485190bf2b2581e4fd423efa3192",
							width: 64,
						},
					],
					name: "Business",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/56FMPucjgkmjixJ76WKFjk",
						name: "Jet Lag Gemini",
						uri: "spotify:artist:56FMPucjgkmjixJ76WKFjk",
					},
				],
				external_ids: {
					isrc: "US4K30600018",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6B1wJDdF9WeOkUzGVKXblI",
				},
				href: "https://api.spotify.com/v1/tracks/6B1wJDdF9WeOkUzGVKXblI",
				name: "Don't Leave Me Hanging",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3v9E1KH7HqDUlCAFXok0RQ",
					},
					href: "https://api.spotify.com/v1/albums/3v9E1KH7HqDUlCAFXok0RQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c71a2928e54f3b7ba19a7308",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c71a2928e54f3b7ba19a7308",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c71a2928e54f3b7ba19a7308",
							width: 64,
						},
					],
					name: "Dirty Gold (Deluxe)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2cyyGl4qnHZL0o16t0fpJl",
						name: "Angel Haze",
						uri: "spotify:artist:2cyyGl4qnHZL0o16t0fpJl",
					},
				],
				external_ids: {
					isrc: "GBUM71306407",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3fSXwTIm3lIywwf7jIpHZT",
				},
				href: "https://api.spotify.com/v1/tracks/3fSXwTIm3lIywwf7jIpHZT",
				name: "Planes Fly",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1f9vWKabhNPNQnHLleExSh",
					},
					href: "https://api.spotify.com/v1/albums/1f9vWKabhNPNQnHLleExSh",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c6ad2b2b62b581a23a7c1759",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c6ad2b2b62b581a23a7c1759",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c6ad2b2b62b581a23a7c1759",
							width: 64,
						},
					],
					name: "It's Time",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1GxkXlMwML1oSg5eLPiAz3",
						name: "Michael Bublé",
						uri: "spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
					},
				],
				external_ids: {
					isrc: "USRE10401889",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1AM8QdDFZMq6SrrqUnuQ9P",
				},
				href: "https://api.spotify.com/v1/tracks/1AM8QdDFZMq6SrrqUnuQ9P",
				name: "Feeling Good",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7lJErXalDqrwTmD19123SR",
					},
					href: "https://api.spotify.com/v1/albums/7lJErXalDqrwTmD19123SR",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731e4cc5d7138c9f68c9213947",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021e4cc5d7138c9f68c9213947",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511e4cc5d7138c9f68c9213947",
							width: 64,
						},
					],
					name: "Sidewalks",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4MSMDY0ClgWqXApU53I1L1",
						name: "Matt and Kim",
						uri: "spotify:artist:4MSMDY0ClgWqXApU53I1L1",
					},
				],
				external_ids: {
					isrc: "US4HB0915501",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5KXSDeVznjXIEhv2OtZCYH",
				},
				href: "https://api.spotify.com/v1/tracks/5KXSDeVznjXIEhv2OtZCYH",
				name: "Daylight",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/03Rl4TjvJVdR2nBUupV7Wf",
					},
					href: "https://api.spotify.com/v1/albums/03Rl4TjvJVdR2nBUupV7Wf",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ff61b32d8807c35e7dd09aa7",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ff61b32d8807c35e7dd09aa7",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ff61b32d8807c35e7dd09aa7",
							width: 64,
						},
					],
					name: "GUNSHIP",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3PALZKWkpwjRvBsRmhlVSS",
						name: "Gunship",
						uri: "spotify:artist:3PALZKWkpwjRvBsRmhlVSS",
					},
					{
						href: "https://api.spotify.com/v1/artists/0hxQtmgWiPtEsDPeIuKxXq",
						name: "John Carpenter",
						uri: "spotify:artist:0hxQtmgWiPtEsDPeIuKxXq",
					},
					{
						href: "https://api.spotify.com/v1/artists/3CGzpCMqpqHnafmn2PFQd9",
						name: "Charlie Simpson",
						uri: "spotify:artist:3CGzpCMqpqHnafmn2PFQd9",
					},
				],
				external_ids: {
					isrc: "USQY51564352",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5VKEsChbUowEF2BT0gJSGX",
				},
				href: "https://api.spotify.com/v1/tracks/5VKEsChbUowEF2BT0gJSGX",
				name: "Tech Noir",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0qRPxdm7GkjOiMS4aEf0h6",
					},
					href: "https://api.spotify.com/v1/albums/0qRPxdm7GkjOiMS4aEf0h6",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27383be99c210e269b1917d5770",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0283be99c210e269b1917d5770",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485183be99c210e269b1917d5770",
							width: 64,
						},
					],
					name: "K.Flay",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
				],
				external_ids: {
					isrc: "TCAAS1002678",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1PoXTtHGNWxJIzvcP7ov5U",
				},
				href: "https://api.spotify.com/v1/tracks/1PoXTtHGNWxJIzvcP7ov5U",
				name: "So Fast, so Maybe",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2UfVXLuhU3TtJ0W5MbT6rN",
					},
					href: "https://api.spotify.com/v1/albums/2UfVXLuhU3TtJ0W5MbT6rN",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735f9bf6e9fee017819d6758cd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025f9bf6e9fee017819d6758cd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515f9bf6e9fee017819d6758cd",
							width: 64,
						},
					],
					name: "Plushgun",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7wIPfybLzpItGlek2LotID",
						name: "Plushgun",
						uri: "spotify:artist:7wIPfybLzpItGlek2LotID",
					},
				],
				external_ids: {
					isrc: "USTB10803128",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/58uSTQPLN30APS9ivT8NDM",
				},
				href: "https://api.spotify.com/v1/tracks/58uSTQPLN30APS9ivT8NDM",
				name: "Just Impolite",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2H6pixtZxZzsFiUV7tOri7",
					},
					href: "https://api.spotify.com/v1/albums/2H6pixtZxZzsFiUV7tOri7",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733979df4d17587f584dc9e1b5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023979df4d17587f584dc9e1b5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513979df4d17587f584dc9e1b5",
							width: 64,
						},
					],
					name: "Candyland",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1feoGrmmD8QmNqtK2Gdwy8",
						name: "Tobu",
						uri: "spotify:artist:1feoGrmmD8QmNqtK2Gdwy8",
					},
				],
				external_ids: {
					isrc: "GBSMU1971852",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6V7vDKrlnxOvZoIhZk9CjF",
				},
				href: "https://api.spotify.com/v1/tracks/6V7vDKrlnxOvZoIhZk9CjF",
				name: "Candyland",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6GxHtPTz758oyrvKA61bv0",
					},
					href: "https://api.spotify.com/v1/albums/6GxHtPTz758oyrvKA61bv0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a1b4a45efd59c9af647c3264",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a1b4a45efd59c9af647c3264",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a1b4a45efd59c9af647c3264",
							width: 64,
						},
					],
					name: "Dead Sea Empire",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1X5G2FxrLyHOiwvTCFMApq",
						name: "Dead Sea Empire",
						uri: "spotify:artist:1X5G2FxrLyHOiwvTCFMApq",
					},
				],
				external_ids: {
					isrc: "TCACB1415827",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4v0eEa17iuz1QLKjcMOb4a",
				},
				href: "https://api.spotify.com/v1/tracks/4v0eEa17iuz1QLKjcMOb4a",
				name: "Are You Alone Now?",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0GCeLxly7336BPaT1Kg7i6",
					},
					href: "https://api.spotify.com/v1/albums/0GCeLxly7336BPaT1Kg7i6",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27361fc26efee1d4c70e1a3e7b9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0261fc26efee1d4c70e1a3e7b9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485161fc26efee1d4c70e1a3e7b9",
							width: 64,
						},
					],
					name: "Human Nature",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2e898fil1F5umrc2LBtV93",
						name: "Caught A Ghost",
						uri: "spotify:artist:2e898fil1F5umrc2LBtV93",
					},
				],
				external_ids: {
					isrc: "TCABW1417004",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2ZLwG9ivcJDCFnCoTQsh17",
				},
				href: "https://api.spotify.com/v1/tracks/2ZLwG9ivcJDCFnCoTQsh17",
				name: "Sleeping at Night",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1N62oiLUF4xRk0cZETrSkn",
					},
					href: "https://api.spotify.com/v1/albums/1N62oiLUF4xRk0cZETrSkn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f9133d05d810093a34fb8640",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f9133d05d810093a34fb8640",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f9133d05d810093a34fb8640",
							width: 64,
						},
					],
					name: "Lupercalia",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6s92YZUPkTK1HL1WIGrPKE",
						name: "Patrick Wolf",
						uri: "spotify:artist:6s92YZUPkTK1HL1WIGrPKE",
					},
				],
				external_ids: {
					isrc: "GBUM71030572",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/66xw76tCSvWxPSMx8IlHcN",
				},
				href: "https://api.spotify.com/v1/tracks/66xw76tCSvWxPSMx8IlHcN",
				name: "The City",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0gmge9DFfEc5VSi87yiXyM",
					},
					href: "https://api.spotify.com/v1/albums/0gmge9DFfEc5VSi87yiXyM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731ea1ed56808f6885ec88a8ed",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021ea1ed56808f6885ec88a8ed",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511ea1ed56808f6885ec88a8ed",
							width: 64,
						},
					],
					name: "Everybody's Gone to the Rapture (Original Soundtrack)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7maqsg42XWKV2TOwesH5YF",
						name: "Jessica Curry",
						uri: "spotify:artist:7maqsg42XWKV2TOwesH5YF",
					},
				],
				external_ids: {
					isrc: "USGSS1500089",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/77judbhP5gwHPnuY0y8D58",
				},
				href: "https://api.spotify.com/v1/tracks/77judbhP5gwHPnuY0y8D58",
				name: "The Pattern Calls Out",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1sE3MOEasSqqFmBU4oEHgx",
					},
					href: "https://api.spotify.com/v1/albums/1sE3MOEasSqqFmBU4oEHgx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a45dee7d6b4f79e5bb174517",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a45dee7d6b4f79e5bb174517",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a45dee7d6b4f79e5bb174517",
							width: 64,
						},
					],
					name: "Hypnotic Brass Ensemble",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4wvPcMJk7L9Rbw9Qh4kBeH",
						name: "Hypnotic Brass Ensemble",
						uri: "spotify:artist:4wvPcMJk7L9Rbw9Qh4kBeH",
					},
				],
				external_ids: {
					isrc: "DEZ650900531",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4GBDdZ9HcLQYUNnhEimtoj",
				},
				href: "https://api.spotify.com/v1/tracks/4GBDdZ9HcLQYUNnhEimtoj",
				name: "War",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2tU1ix49YsvWnkKv4XIrsp",
					},
					href: "https://api.spotify.com/v1/albums/2tU1ix49YsvWnkKv4XIrsp",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738468a834d52e9bd9d2a6f9d0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028468a834d52e9bd9d2a6f9d0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518468a834d52e9bd9d2a6f9d0",
							width: 64,
						},
					],
					name: "Phantom Flower",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/13NBINjChpGTx6AXEZ73O7",
						name: "Step Rockets",
						uri: "spotify:artist:13NBINjChpGTx6AXEZ73O7",
					},
				],
				external_ids: {
					isrc: "ushm91417948",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6MXgC34GkdSz0nEIZWkKfn",
				},
				href: "https://api.spotify.com/v1/tracks/6MXgC34GkdSz0nEIZWkKfn",
				name: "Phantom Flower",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4d8wnIeA5POzjK0P8v6w5c",
					},
					href: "https://api.spotify.com/v1/albums/4d8wnIeA5POzjK0P8v6w5c",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d531604f22f5e076288dd0a0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d531604f22f5e076288dd0a0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d531604f22f5e076288dd0a0",
							width: 64,
						},
					],
					name: "My Head Is A Jungle (The Remixes)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/01e2lCvLZ4fLUIRy68nptH",
						name: "Wankelmut",
						uri: "spotify:artist:01e2lCvLZ4fLUIRy68nptH",
					},
					{
						href: "https://api.spotify.com/v1/artists/1A96iePIMNFBjLrjXEl718",
						name: "Emma Louise",
						uri: "spotify:artist:1A96iePIMNFBjLrjXEl718",
					},
					{
						href: "https://api.spotify.com/v1/artists/1yqxFtPHKcGcv6SXZNdyT9",
						name: "MK",
						uri: "spotify:artist:1yqxFtPHKcGcv6SXZNdyT9",
					},
				],
				external_ids: {
					isrc: "DEAW11300332",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2aeKjOnoJXavtpj2Hd2P4g",
				},
				href: "https://api.spotify.com/v1/tracks/2aeKjOnoJXavtpj2Hd2P4g",
				name: "My Head Is A Jungle - MK Remix - Radio Edit",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5202ndVOTQnaBapl3YjNme",
					},
					href: "https://api.spotify.com/v1/albums/5202ndVOTQnaBapl3YjNme",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c6149e790af7caccfe69a732",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c6149e790af7caccfe69a732",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c6149e790af7caccfe69a732",
							width: 64,
						},
					],
					name: "Is Your Love Big Enough?",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2RP4pPHTXlQpDnO9LvR7Yt",
						name: "Lianne La Havas",
						uri: "spotify:artist:2RP4pPHTXlQpDnO9LvR7Yt",
					},
				],
				external_ids: {
					isrc: "GBAHT1200229",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/77fhhezMh8llUQ4ma1RBsr",
				},
				href: "https://api.spotify.com/v1/tracks/77fhhezMh8llUQ4ma1RBsr",
				name: "Is Your Love Big Enough?",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4cYc5uNJQJfMMYbzqRQUpe",
					},
					href: "https://api.spotify.com/v1/albums/4cYc5uNJQJfMMYbzqRQUpe",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ff26b11b80bd717c76603782",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ff26b11b80bd717c76603782",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ff26b11b80bd717c76603782",
							width: 64,
						},
					],
					name: "I Just Want the Truth, Baby",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2wWu4pdV5D5oeJsBUdeC3p",
						name: "Born Cages",
						uri: "spotify:artist:2wWu4pdV5D5oeJsBUdeC3p",
					},
				],
				external_ids: {
					isrc: "USRZR1439111",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1UAOcEAIxtHqWGEmOcKA9n",
				},
				href: "https://api.spotify.com/v1/tracks/1UAOcEAIxtHqWGEmOcKA9n",
				name: "I Just Want the Truth, Baby",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0Md4nG83KbXRbscZjy4Hx8",
					},
					href: "https://api.spotify.com/v1/albums/0Md4nG83KbXRbscZjy4Hx8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273957c42138f154b7a224640fe",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02957c42138f154b7a224640fe",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851957c42138f154b7a224640fe",
							width: 64,
						},
					],
					name: "Let The Road",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0kkxsdcaWmWU2yWAqclDh4",
						name: "Rixton",
						uri: "spotify:artist:0kkxsdcaWmWU2yWAqclDh4",
					},
				],
				external_ids: {
					isrc: "USUM71400150",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1DH9CCBCponoInfZ6BMbRe",
				},
				href: "https://api.spotify.com/v1/tracks/1DH9CCBCponoInfZ6BMbRe",
				name: "We All Want The Same Thing",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3XTFSFNU5nIMmA8Sm76K3m",
					},
					href: "https://api.spotify.com/v1/albums/3XTFSFNU5nIMmA8Sm76K3m",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273250c1c3ee9906bae6d25b7c1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02250c1c3ee9906bae6d25b7c1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851250c1c3ee9906bae6d25b7c1",
							width: 64,
						},
					],
					name: "Melody of Certain Damaged Lemons",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/5isqImG0rLfAgBJSPMEVXF",
						name: "Blonde Redhead",
						uri: "spotify:artist:5isqImG0rLfAgBJSPMEVXF",
					},
				],
				external_ids: {
					isrc: "USTG30021611",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2QkCuK8GMQH3BDSAhipJgj",
				},
				href: "https://api.spotify.com/v1/tracks/2QkCuK8GMQH3BDSAhipJgj",
				name: "For the Damaged Coda",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/64yC0J1hjQHvmR9DljJR8d",
					},
					href: "https://api.spotify.com/v1/albums/64yC0J1hjQHvmR9DljJR8d",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733b6c1f42574f2b3a6a13ee28",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023b6c1f42574f2b3a6a13ee28",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513b6c1f42574f2b3a6a13ee28",
							width: 64,
						},
					],
					name: "Ice Cream/Sweaty",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3HPWhYx7kClVIOGduns3Me",
						name: "Muscles",
						uri: "spotify:artist:3HPWhYx7kClVIOGduns3Me",
					},
				],
				external_ids: {
					isrc: "AUUM70700143",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5fXb6qdO6yRG1B5K0XjA0w",
				},
				href: "https://api.spotify.com/v1/tracks/5fXb6qdO6yRG1B5K0XjA0w",
				name: "Ice Cream",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4G2ed453USwpGJ2v1CrP5A",
					},
					href: "https://api.spotify.com/v1/albums/4G2ed453USwpGJ2v1CrP5A",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273896dcdacd893ae578d81c2aa",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02896dcdacd893ae578d81c2aa",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851896dcdacd893ae578d81c2aa",
							width: 64,
						},
					],
					name: "The Sound and the Fury",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4aFx7q4WkiTWPLJNW5mkKK",
						name: "Nerina Pallot",
						uri: "spotify:artist:4aFx7q4WkiTWPLJNW5mkKK",
					},
				],
				external_ids: {
					isrc: "USQY51575797",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5XHM9oWHG4oi8g9gA5jact",
				},
				href: "https://api.spotify.com/v1/tracks/5XHM9oWHG4oi8g9gA5jact",
				name: "The Road",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0I9AM4MTVIfWQCIBuo5nJc",
					},
					href: "https://api.spotify.com/v1/albums/0I9AM4MTVIfWQCIBuo5nJc",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273230695792636a816ed9b3f9d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02230695792636a816ed9b3f9d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851230695792636a816ed9b3f9d",
							width: 64,
						},
					],
					name: "Certified Air Raid Material",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3H6Js0rhywEhHda3UwuhGW",
						name: "edIT",
						uri: "spotify:artist:3H6Js0rhywEhHda3UwuhGW",
					},
				],
				external_ids: {
					isrc: "US25X0704006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6GIRQjKe2qdUhL5aipAarV",
				},
				href: "https://api.spotify.com/v1/tracks/6GIRQjKe2qdUhL5aipAarV",
				name: "Straight Heat",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0bBmdFUiNNkE7ZbiEiAziZ",
					},
					href: "https://api.spotify.com/v1/albums/0bBmdFUiNNkE7ZbiEiAziZ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d5252efa9de9a7c9b14c156d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d5252efa9de9a7c9b14c156d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d5252efa9de9a7c9b14c156d",
							width: 64,
						},
					],
					name: "Closer",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4CTKqs11Zgsv8EZTVzx764",
						name: "Lemaitre",
						uri: "spotify:artist:4CTKqs11Zgsv8EZTVzx764",
					},
					{
						href: "https://api.spotify.com/v1/artists/2bx0ckgYnvvFPzDlGpupN2",
						name: "Jennie A.",
						uri: "spotify:artist:2bx0ckgYnvvFPzDlGpupN2",
					},
				],
				external_ids: {
					isrc: "USUM71508235",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5RWMlD6s4i8fECJkDvdt7D",
				},
				href: "https://api.spotify.com/v1/tracks/5RWMlD6s4i8fECJkDvdt7D",
				name: "Closer",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/68yE0tQ8B2LwiIfgF5J8EI",
					},
					href: "https://api.spotify.com/v1/albums/68yE0tQ8B2LwiIfgF5J8EI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738f4e09731db96cce26423740",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028f4e09731db96cce26423740",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518f4e09731db96cce26423740",
							width: 64,
						},
					],
					name: "Vessel",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3D6cosC5ZOLCpRxt6T3XS7",
						name: "The Kite String Tangle",
						uri: "spotify:artist:3D6cosC5ZOLCpRxt6T3XS7",
					},
				],
				external_ids: {
					isrc: "AUWA01400190",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5gnBdoL7Jbj0pmLKwbgUpB",
				},
				href: "https://api.spotify.com/v1/tracks/5gnBdoL7Jbj0pmLKwbgUpB",
				name: "Given the Chance",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6ZPoJ7DnpM3vjlKr55gwvA",
					},
					href: "https://api.spotify.com/v1/albums/6ZPoJ7DnpM3vjlKr55gwvA",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27375db8dae2d3633b96c0d924b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0275db8dae2d3633b96c0d924b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485175db8dae2d3633b96c0d924b",
							width: 64,
						},
					],
					name: "Hold My Home (Deluxe Edition)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6VDdCwrBM4qQaGxoAyxyJC",
						name: "Cold War Kids",
						uri: "spotify:artist:6VDdCwrBM4qQaGxoAyxyJC",
					},
				],
				external_ids: {
					isrc: "USCJ81401257",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6zytPqfXZg8r4hzL0gFwqR",
				},
				href: "https://api.spotify.com/v1/tracks/6zytPqfXZg8r4hzL0gFwqR",
				name: "All This Could Be Yours",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7giYcFVdtgXd8ohBv6AoFz",
					},
					href: "https://api.spotify.com/v1/albums/7giYcFVdtgXd8ohBv6AoFz",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f467e2ec788dba4079c99bdf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f467e2ec788dba4079c99bdf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f467e2ec788dba4079c99bdf",
							width: 64,
						},
					],
					name: "Divenire",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2uFUBdaVGtyMqckSeCl0Qj",
						name: "Ludovico Einaudi",
						uri: "spotify:artist:2uFUBdaVGtyMqckSeCl0Qj",
					},
				],
				external_ids: {
					isrc: "ITC490700006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0fzw4BBD5FRJtPuQbUUKzJ",
				},
				href: "https://api.spotify.com/v1/tracks/0fzw4BBD5FRJtPuQbUUKzJ",
				name: "Primavera",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7giYcFVdtgXd8ohBv6AoFz",
					},
					href: "https://api.spotify.com/v1/albums/7giYcFVdtgXd8ohBv6AoFz",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f467e2ec788dba4079c99bdf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f467e2ec788dba4079c99bdf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f467e2ec788dba4079c99bdf",
							width: 64,
						},
					],
					name: "Divenire",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2uFUBdaVGtyMqckSeCl0Qj",
						name: "Ludovico Einaudi",
						uri: "spotify:artist:2uFUBdaVGtyMqckSeCl0Qj",
					},
				],
				external_ids: {
					isrc: "ITC490700002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4O0Yww5OIWyfBvWn6xN3CM",
				},
				href: "https://api.spotify.com/v1/tracks/4O0Yww5OIWyfBvWn6xN3CM",
				name: "Divenire",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1shlAIeCnK7JafMu8LcM68",
					},
					href: "https://api.spotify.com/v1/albums/1shlAIeCnK7JafMu8LcM68",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fefed0e5312f872f25b7ebb9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fefed0e5312f872f25b7ebb9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fefed0e5312f872f25b7ebb9",
							width: 64,
						},
					],
					name: "Life as a Dog",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
				],
				external_ids: {
					isrc: "QM9BS1400003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5ZUFFZZ7qaKtgSbYfHom5f",
				},
				href: "https://api.spotify.com/v1/tracks/5ZUFFZZ7qaKtgSbYfHom5f",
				name: "Can't Sleep",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1QhTkFHfOBF5zUunaEybvb",
					},
					href: "https://api.spotify.com/v1/albums/1QhTkFHfOBF5zUunaEybvb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733279aa0d56cf1a52547d778f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023279aa0d56cf1a52547d778f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513279aa0d56cf1a52547d778f",
							width: 64,
						},
					],
					name: "Toccata",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2f9PTWJfMMDTAFZcvHy1Z5",
						name: "OVERWERK",
						uri: "spotify:artist:2f9PTWJfMMDTAFZcvHy1Z5",
					},
				],
				external_ids: {
					isrc: "CAAA21500003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6IH1IzqdXkGHuex9styPZX",
				},
				href: "https://api.spotify.com/v1/tracks/6IH1IzqdXkGHuex9styPZX",
				name: "Toccata",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4x05RwSTXnyfKSDuHD1SzO",
					},
					href: "https://api.spotify.com/v1/albums/4x05RwSTXnyfKSDuHD1SzO",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735b425fe0dc28ac2110cc46f7",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025b425fe0dc28ac2110cc46f7",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515b425fe0dc28ac2110cc46f7",
							width: 64,
						},
					],
					name: "Regions Of Light And Sound Of God",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1MhtYlJvUqfd2EgHSQTGK4",
						name: "Jim James",
						uri: "spotify:artist:1MhtYlJvUqfd2EgHSQTGK4",
					},
				],
				external_ids: {
					isrc: "GBUM71207332",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1G4ooC8TpoOQj2dlcrNBUV",
				},
				href: "https://api.spotify.com/v1/tracks/1G4ooC8TpoOQj2dlcrNBUV",
				name: "State Of The Art (A.E.I.O.U.)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1TMJ7yDSSYByO0UjKwnOiX",
					},
					href: "https://api.spotify.com/v1/albums/1TMJ7yDSSYByO0UjKwnOiX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735e60321662867db9837b3421",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025e60321662867db9837b3421",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515e60321662867db9837b3421",
							width: 64,
						},
					],
					name: "Hard Believer",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2t9yJDJIEtvPmr2iRIdqBf",
						name: "Fink",
						uri: "spotify:artist:2t9yJDJIEtvPmr2iRIdqBf",
					},
				],
				external_ids: {
					isrc: "GBCFB1400804",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2n3iuWiV5ZjbUlcYCOuNFW",
				},
				href: "https://api.spotify.com/v1/tracks/2n3iuWiV5ZjbUlcYCOuNFW",
				name: "Pilgrim",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6Wxw1zZDxRl1DNRHpddyUB",
					},
					href: "https://api.spotify.com/v1/albums/6Wxw1zZDxRl1DNRHpddyUB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a69e331470aade02ca76cdf7",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a69e331470aade02ca76cdf7",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a69e331470aade02ca76cdf7",
							width: 64,
						},
					],
					name: "First Light",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2ARO60gI5do88ho6azmzab",
						name: "Django Django",
						uri: "spotify:artist:2ARO60gI5do88ho6azmzab",
					},
				],
				external_ids: {
					isrc: "GBMVH1401030",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5GimvEvdPBdV415Zma5ZWo",
				},
				href: "https://api.spotify.com/v1/tracks/5GimvEvdPBdV415Zma5ZWo",
				name: "First Light",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/127jsCoyIUgB4q579eQXMx",
					},
					href: "https://api.spotify.com/v1/albums/127jsCoyIUgB4q579eQXMx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b1d8c3b32247c5f3187545f5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b1d8c3b32247c5f3187545f5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b1d8c3b32247c5f3187545f5",
							width: 64,
						},
					],
					name: "Virtue",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3BniKY9Gw01zy21IDlVhaM",
						name: "Emmy The Great",
						uri: "spotify:artist:3BniKY9Gw01zy21IDlVhaM",
					},
				],
				external_ids: {
					isrc: "DELV41100416",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/77NTrJuLzaoWZ9pmixNlw7",
				},
				href: "https://api.spotify.com/v1/tracks/77NTrJuLzaoWZ9pmixNlw7",
				name: "Paper Forest - In the Afterglow of Rapture",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7CUdbY8IF5BNbTj0MDk8qx",
					},
					href: "https://api.spotify.com/v1/albums/7CUdbY8IF5BNbTj0MDk8qx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273114a2b1f3ed429bd97856d62",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02114a2b1f3ed429bd97856d62",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851114a2b1f3ed429bd97856d62",
							width: 64,
						},
					],
					name: "Future Folk, Vol. 1",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/74hGimtzeHWXU0ogk4mnHV",
						name: "Future Folk",
						uri: "spotify:artist:74hGimtzeHWXU0ogk4mnHV",
					},
				],
				external_ids: {
					isrc: "ushm21246282",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/049owecbiweNWNzGLhylF3",
				},
				href: "https://api.spotify.com/v1/tracks/049owecbiweNWNzGLhylF3",
				name: "Space Worms",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5OvepfQiCFMCzML6fTgrBW",
					},
					href: "https://api.spotify.com/v1/albums/5OvepfQiCFMCzML6fTgrBW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732dbf3c8a92b1af1942918ad0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022dbf3c8a92b1af1942918ad0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512dbf3c8a92b1af1942918ad0",
							width: 64,
						},
					],
					name: "Robyn Is Here",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2",
						name: "Robyn",
						uri: "spotify:artist:6UE7nl9mha6s8z0wFQFIZ2",
					},
				],
				external_ids: {
					isrc: "SEBMA9535040",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0idCpkJ2pspfAILbanmERu",
				},
				href: "https://api.spotify.com/v1/tracks/0idCpkJ2pspfAILbanmERu",
				name: "Do You Know (What It Takes)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/32sD9nUdpiWq2ZKDRRCHkH",
					},
					href: "https://api.spotify.com/v1/albums/32sD9nUdpiWq2ZKDRRCHkH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731d279b880ae54c697a1d811f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021d279b880ae54c697a1d811f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511d279b880ae54c697a1d811f",
							width: 64,
						},
					],
					name: "The Shanghai Restoration Project",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0EP5EpsiMP8oLYy7sPHwf9",
						name: "The Shanghai Restoration Project",
						uri: "spotify:artist:0EP5EpsiMP8oLYy7sPHwf9",
					},
					{
						href: "https://api.spotify.com/v1/artists/0ndNQ9ovQAAZHkNdtidkwN",
						name: "Amos Winbush",
						uri: "spotify:artist:0ndNQ9ovQAAZHkNdtidkwN",
					},
				],
				external_ids: {
					isrc: "USAPB0510008",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7g0P1P6nwZgkBxOy9vPWb4",
				},
				href: "https://api.spotify.com/v1/tracks/7g0P1P6nwZgkBxOy9vPWb4",
				name: "Babylon of the Orient",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/31nNzJE8ZbxRsG9YB9P6zj",
					},
					href: "https://api.spotify.com/v1/albums/31nNzJE8ZbxRsG9YB9P6zj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273414b83ad9468dbe4c13256e5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02414b83ad9468dbe4c13256e5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851414b83ad9468dbe4c13256e5",
							width: 64,
						},
					],
					name: "Smoke + Mirrors (Deluxe)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
						name: "Imagine Dragons",
						uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
					},
				],
				external_ids: {
					isrc: "USUM71415785",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1D5qqmZ0pbOPQItKRLSZNe",
				},
				href: "https://api.spotify.com/v1/tracks/1D5qqmZ0pbOPQItKRLSZNe",
				name: "I Bet My Life",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0qUaBjtb1ZwXfuafEJ6Adt",
					},
					href: "https://api.spotify.com/v1/albums/0qUaBjtb1ZwXfuafEJ6Adt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e6aa5c077bb02d241afb9c30",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e6aa5c077bb02d241afb9c30",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e6aa5c077bb02d241afb9c30",
							width: 64,
						},
					],
					name: "Room Noises",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2IL35FbYiOta150uSYBCEg",
						name: "Eisley",
						uri: "spotify:artist:2IL35FbYiOta150uSYBCEg",
					},
				],
				external_ids: {
					isrc: "USRE10401773",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7y1ScaTfRogQATFTHTqOqN",
				},
				href: "https://api.spotify.com/v1/tracks/7y1ScaTfRogQATFTHTqOqN",
				name: "Telescope Eyes",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/69TR9srbYB7JaYlcF50r7H",
					},
					href: "https://api.spotify.com/v1/albums/69TR9srbYB7JaYlcF50r7H",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ad107785d6a9e6219626bb9d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ad107785d6a9e6219626bb9d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ad107785d6a9e6219626bb9d",
							width: 64,
						},
					],
					name: "Motown Classics Gold",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3RwQ26hR2tJtA8F9p2n7jG",
						name: "The Temptations",
						uri: "spotify:artist:3RwQ26hR2tJtA8F9p2n7jG",
					},
				],
				external_ids: {
					isrc: "USMO17200080",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2u9b8l0euR3v6zltkzdNFk",
				},
				href: "https://api.spotify.com/v1/tracks/2u9b8l0euR3v6zltkzdNFk",
				name: "Papa Was A Rolling Stone - Single Version",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1rqJZhedmCFNbaoTRQz9Zj",
					},
					href: "https://api.spotify.com/v1/albums/1rqJZhedmCFNbaoTRQz9Zj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273eec71f36d81a389bed7e545b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02eec71f36d81a389bed7e545b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851eec71f36d81a389bed7e545b",
							width: 64,
						},
					],
					name: "White Women",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2mV8aJphiSHYJf43DxL7Gt",
						name: "Chromeo",
						uri: "spotify:artist:2mV8aJphiSHYJf43DxL7Gt",
					},
					{
						href: "https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp",
						name: "Toro y Moi",
						uri: "spotify:artist:6O4EGCCb6DoIiR6B1QCQgp",
					},
				],
				external_ids: {
					isrc: "USAT21304637",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4rh7wySe2iEyEDEEzstKkt",
				},
				href: "https://api.spotify.com/v1/tracks/4rh7wySe2iEyEDEEzstKkt",
				name: "Come Alive (feat. Toro y Moi)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7tJRBg0mSDDB6B1RN4JYir",
					},
					href: "https://api.spotify.com/v1/albums/7tJRBg0mSDDB6B1RN4JYir",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27301212c685e2bfa6414b6689b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0201212c685e2bfa6414b6689b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485101212c685e2bfa6414b6689b",
							width: 64,
						},
					],
					name: "Mechanica",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0hIPi7k8V7xPPyYcH2kW9y",
						name: "Koloto",
						uri: "spotify:artist:0hIPi7k8V7xPPyYcH2kW9y",
					},
				],
				external_ids: {
					isrc: "US4XR1452709",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0K54vljr1U6YMYpOasPFF0",
				},
				href: "https://api.spotify.com/v1/tracks/0K54vljr1U6YMYpOasPFF0",
				name: "Antares - Clozee Remix",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7tJRBg0mSDDB6B1RN4JYir",
					},
					href: "https://api.spotify.com/v1/albums/7tJRBg0mSDDB6B1RN4JYir",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27301212c685e2bfa6414b6689b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0201212c685e2bfa6414b6689b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485101212c685e2bfa6414b6689b",
							width: 64,
						},
					],
					name: "Mechanica",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0hIPi7k8V7xPPyYcH2kW9y",
						name: "Koloto",
						uri: "spotify:artist:0hIPi7k8V7xPPyYcH2kW9y",
					},
				],
				external_ids: {
					isrc: "US4XR1452701",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4HJYs3qcFEfS3vQAlOIP6u",
				},
				href: "https://api.spotify.com/v1/tracks/4HJYs3qcFEfS3vQAlOIP6u",
				name: "Fox Tales",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7tJRBg0mSDDB6B1RN4JYir",
					},
					href: "https://api.spotify.com/v1/albums/7tJRBg0mSDDB6B1RN4JYir",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27301212c685e2bfa6414b6689b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0201212c685e2bfa6414b6689b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485101212c685e2bfa6414b6689b",
							width: 64,
						},
					],
					name: "Mechanica",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0hIPi7k8V7xPPyYcH2kW9y",
						name: "Koloto",
						uri: "spotify:artist:0hIPi7k8V7xPPyYcH2kW9y",
					},
				],
				external_ids: {
					isrc: "US4XR1452706",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4ir5aO7wkdnYK4kYvImwXg",
				},
				href: "https://api.spotify.com/v1/tracks/4ir5aO7wkdnYK4kYvImwXg",
				name: "Kill Screen",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3J7GPYa4Ax9701vzSr5luL",
					},
					href: "https://api.spotify.com/v1/albums/3J7GPYa4Ax9701vzSr5luL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27321b7774d46e5baa398570f5c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0221b7774d46e5baa398570f5c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485121b7774d46e5baa398570f5c",
							width: 64,
						},
					],
					name: "Robotistic",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0nVTHSuEaHKCfVYISwWqMs",
						name: "Kingbastard",
						uri: "spotify:artist:0nVTHSuEaHKCfVYISwWqMs",
					},
				],
				external_ids: {
					isrc: "UK45Y1300054",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/65EOdQNbuoZ7mfAQiddS5x",
				},
				href: "https://api.spotify.com/v1/tracks/65EOdQNbuoZ7mfAQiddS5x",
				name: "Sadmachines at the Disco",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/05EpsIAZD0ajXBC2A3AUE3",
					},
					href: "https://api.spotify.com/v1/albums/05EpsIAZD0ajXBC2A3AUE3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273303fdaba3d926364300a0b97",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02303fdaba3d926364300a0b97",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851303fdaba3d926364300a0b97",
							width: 64,
						},
					],
					name: "The Near Future",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7DBXiFez54rbGjqw1tWi5w",
						name: "I Fight Dragons",
						uri: "spotify:artist:7DBXiFez54rbGjqw1tWi5w",
					},
				],
				external_ids: {
					isrc: "TCABX1491892",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1pHnRA3C42DBSmY7MCDqCy",
				},
				href: "https://api.spotify.com/v1/tracks/1pHnRA3C42DBSmY7MCDqCy",
				name: "The Near Future X. Fighting On",
			},
		},
	],
};

const timj51 = {
	items: [
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4XoZkJosiyfetLAe6FQ9KF",
					},
					href: "https://api.spotify.com/v1/albums/4XoZkJosiyfetLAe6FQ9KF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27388df3352f2c4e53392268634",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0288df3352f2c4e53392268634",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485188df3352f2c4e53392268634",
							width: 64,
						},
					],
					name: "Gold Medal (U.S. Version 83770)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2c0qomdZabcCyqTZ5M9msd",
						name: "The Donnas",
						uri: "spotify:artist:2c0qomdZabcCyqTZ5M9msd",
					},
				],
				external_ids: {
					isrc: "USAT20401890",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3SCwQM78OCR54xEL3JAmKk",
				},
				href: "https://api.spotify.com/v1/tracks/3SCwQM78OCR54xEL3JAmKk",
				name: "Fall Behind Me",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0y3NABiBZ3rN1Hrj1Xql5i",
					},
					href: "https://api.spotify.com/v1/albums/0y3NABiBZ3rN1Hrj1Xql5i",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738d79c9e5db0b5201cf51abd1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028d79c9e5db0b5201cf51abd1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518d79c9e5db0b5201cf51abd1",
							width: 64,
						},
					],
					name: "In Our Heads",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/37uLId6Z5ZXCx19vuruvv5",
						name: "Hot Chip",
						uri: "spotify:artist:37uLId6Z5ZXCx19vuruvv5",
					},
				],
				external_ids: {
					isrc: "GBCEL1200073",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3SCE48fTsE0YE2XzUYGZNW",
				},
				href: "https://api.spotify.com/v1/tracks/3SCE48fTsE0YE2XzUYGZNW",
				name: "Flutes",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/734sn3av4kW6UKBqwKitEb",
					},
					href: "https://api.spotify.com/v1/albums/734sn3av4kW6UKBqwKitEb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2734cb858329cf256d921e4e0ee",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e024cb858329cf256d921e4e0ee",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048514cb858329cf256d921e4e0ee",
							width: 64,
						},
					],
					name: "Our Love",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4aEnNH9PuU1HF3TsZTru54",
						name: "Caribou",
						uri: "spotify:artist:4aEnNH9PuU1HF3TsZTru54",
					},
				],
				external_ids: {
					isrc: "DED621401195",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0u1R2vf95rA1LWNQ3RGbuH",
				},
				href: "https://api.spotify.com/v1/tracks/0u1R2vf95rA1LWNQ3RGbuH",
				name: "Our Love",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4vGuzNk1uCoMeDEqCzdf5T",
					},
					href: "https://api.spotify.com/v1/albums/4vGuzNk1uCoMeDEqCzdf5T",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273215c8b0063ea89e951787f59",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02215c8b0063ea89e951787f59",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851215c8b0063ea89e951787f59",
							width: 64,
						},
					],
					name: "Kitsuné Parisien II (Deluxe Edition)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4R0t3Zy5vyi2BoZgpHqXmH",
						name: "About The Girl",
						uri: "spotify:artist:4R0t3Zy5vyi2BoZgpHqXmH",
					},
				],
				external_ids: {
					isrc: "FRU701000271",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6BhbXUnZVWnylC1PxHX0oo",
				},
				href: "https://api.spotify.com/v1/tracks/6BhbXUnZVWnylC1PxHX0oo",
				name: "Tiger Evolution",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2v2At20PqDyB2dyz7dxpJB",
					},
					href: "https://api.spotify.com/v1/albums/2v2At20PqDyB2dyz7dxpJB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273858fb2e1dfd21cce6c9aaaff",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02858fb2e1dfd21cce6c9aaaff",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851858fb2e1dfd21cce6c9aaaff",
							width: 64,
						},
					],
					name: "Here Be Dragons, Vol. III",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/72NtiPeuimGt8MWhFURA5C",
						name: "Apollo Run",
						uri: "spotify:artist:72NtiPeuimGt8MWhFURA5C",
					},
				],
				external_ids: {
					isrc: "USUYU1200001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0MGKIoaa1yhYC5EgBAhp8c",
				},
				href: "https://api.spotify.com/v1/tracks/0MGKIoaa1yhYC5EgBAhp8c",
				name: "The Inevitable Small Rebellions",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7EAqQ4tEAx937tgvQ0fOnx",
					},
					href: "https://api.spotify.com/v1/albums/7EAqQ4tEAx937tgvQ0fOnx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731897a946bd7efd607d2aa4d1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021897a946bd7efd607d2aa4d1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511897a946bd7efd607d2aa4d1",
							width: 64,
						},
					],
					name: "Casualties of Retail",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1LJuYVYyKSm7Tw9xGuulhS",
						name: "Enter The Haggis",
						uri: "spotify:artist:1LJuYVYyKSm7Tw9xGuulhS",
					},
				],
				external_ids: {
					isrc: "ushm91191063",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/17VKOxxvAM2K5s3wr1CSnd",
				},
				href: "https://api.spotify.com/v1/tracks/17VKOxxvAM2K5s3wr1CSnd",
				name: "Gasoline",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6LmL9Gk5EUZYVDPO8lMVWm",
					},
					href: "https://api.spotify.com/v1/albums/6LmL9Gk5EUZYVDPO8lMVWm",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b92927923f68e2d9559b5707",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b92927923f68e2d9559b5707",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b92927923f68e2d9559b5707",
							width: 64,
						},
					],
					name: "Relics",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/28CxmkDncu1V04LYxfx0eV",
						name: "Faded Paper Figures",
						uri: "spotify:artist:28CxmkDncu1V04LYxfx0eV",
					},
				],
				external_ids: {
					isrc: "USNUK1400003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4Km8YLL6l2MHA3Xxy4PpzK",
				},
				href: "https://api.spotify.com/v1/tracks/4Km8YLL6l2MHA3Xxy4PpzK",
				name: "Not the End of the World (Even as We Know It)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/24HMorkfKXiTXGzEGizzSI",
					},
					href: "https://api.spotify.com/v1/albums/24HMorkfKXiTXGzEGizzSI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27342625aa0784d5e364a894e43",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0242625aa0784d5e364a894e43",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485142625aa0784d5e364a894e43",
							width: 64,
						},
					],
					name: "Dark Places",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0rAtih9gky1qbkqWT5FOSd",
						name: "Quinn Archer",
						uri: "spotify:artist:0rAtih9gky1qbkqWT5FOSd",
					},
				],
				external_ids: {
					isrc: "TCABT1421377",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3z8NkzBvkc2B9vxIwWWIeY",
				},
				href: "https://api.spotify.com/v1/tracks/3z8NkzBvkc2B9vxIwWWIeY",
				name: "Dark Places",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4sNlexwTBcTcWpvo5qwvGA",
					},
					href: "https://api.spotify.com/v1/albums/4sNlexwTBcTcWpvo5qwvGA",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733e75724b29a9c4aaf3a95047",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023e75724b29a9c4aaf3a95047",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513e75724b29a9c4aaf3a95047",
							width: 64,
						},
					],
					name: "Fires",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4aFx7q4WkiTWPLJNW5mkKK",
						name: "Nerina Pallot",
						uri: "spotify:artist:4aFx7q4WkiTWPLJNW5mkKK",
					},
				],
				external_ids: {
					isrc: "GBEUC0600060",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/66vhFgGHqVSZpr59JIqaKu",
				},
				href: "https://api.spotify.com/v1/tracks/66vhFgGHqVSZpr59JIqaKu",
				name: "Everybody's Gone To War - Chris Lord-Alge Mix remastered",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4T0BqkLq50VWiCWAAiWmKW",
					},
					href: "https://api.spotify.com/v1/albums/4T0BqkLq50VWiCWAAiWmKW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c06753a407f403d1f56829df",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c06753a407f403d1f56829df",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c06753a407f403d1f56829df",
							width: 64,
						},
					],
					name: "Save the Scene",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4GcvIzeB3cOhQHT6zfboAe",
						name: "King of Prussia",
						uri: "spotify:artist:4GcvIzeB3cOhQHT6zfboAe",
					},
				],
				external_ids: {
					isrc: "US25T9923131",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/793MLrdtriiIqiZPZ4ENwM",
				},
				href: "https://api.spotify.com/v1/tracks/793MLrdtriiIqiZPZ4ENwM",
				name: "Misadventures of the Campaign Kids",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1Lci4bx7JIuCC8pnBNX7ds",
					},
					href: "https://api.spotify.com/v1/albums/1Lci4bx7JIuCC8pnBNX7ds",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2734844f79e363c03a00efa3090",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e024844f79e363c03a00efa3090",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048514844f79e363c03a00efa3090",
							width: 64,
						},
					],
					name: "Strange Mercy",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7bcbShaqKdcyjnmv4Ix8j6",
						name: "St. Vincent",
						uri: "spotify:artist:7bcbShaqKdcyjnmv4Ix8j6",
					},
				],
				external_ids: {
					isrc: "GBAFL1100146",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3j5DVpcCELigVZrmwGOw3X",
				},
				href: "https://api.spotify.com/v1/tracks/3j5DVpcCELigVZrmwGOw3X",
				name: "Cruel",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0PKKPLeSoWdEfemwZlHi0B",
					},
					href: "https://api.spotify.com/v1/albums/0PKKPLeSoWdEfemwZlHi0B",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e54d05e1e771892ebcfa36f8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e54d05e1e771892ebcfa36f8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e54d05e1e771892ebcfa36f8",
							width: 64,
						},
					],
					name: "Little Mountain",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0QTnH6UEP2jbZEVO6g6Vfe",
						name: "Said The Whale",
						uri: "spotify:artist:0QTnH6UEP2jbZEVO6g6Vfe",
					},
				],
				external_ids: {
					isrc: "CAA171120011",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/11bIBzVtZgweZer1cAw2Mg",
				},
				href: "https://api.spotify.com/v1/tracks/11bIBzVtZgweZer1cAw2Mg",
				name: "Heavy Ceiling",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4iCSQcKREeq5npBlA7Ov6p",
					},
					href: "https://api.spotify.com/v1/albums/4iCSQcKREeq5npBlA7Ov6p",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a059f942add86faa66037805",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a059f942add86faa66037805",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a059f942add86faa66037805",
							width: 64,
						},
					],
					name: "Lighght",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3LVPGE5jPPwtbGslx07YR0",
						name: "Kishi Bashi",
						uri: "spotify:artist:3LVPGE5jPPwtbGslx07YR0",
					},
				],
				external_ids: {
					isrc: "USJZA1414903",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6bYKzwWktxrLq5yhGbusZZ",
				},
				href: "https://api.spotify.com/v1/tracks/6bYKzwWktxrLq5yhGbusZZ",
				name: "The Ballad of Mr. Steak",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5MhTX4oEorYxWlfy4gWXi6",
					},
					href: "https://api.spotify.com/v1/albums/5MhTX4oEorYxWlfy4gWXi6",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c49ee059037dbde6162ccbc6",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c49ee059037dbde6162ccbc6",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c49ee059037dbde6162ccbc6",
							width: 64,
						},
					],
					name: "Moon Money",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/5doDInHCvRMOOapyaos2AE",
						name: "Hot Sugar",
						uri: "spotify:artist:5doDInHCvRMOOapyaos2AE",
					},
				],
				external_ids: {
					isrc: "GBCFB1202104",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2iPBrbddHlOc0lkqe3mTnK",
				},
				href: "https://api.spotify.com/v1/tracks/2iPBrbddHlOc0lkqe3mTnK",
				name: "The Girl Who Stole My Tamagotchi",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3Q1IJmMgyj0f0aacXsdQaC",
					},
					href: "https://api.spotify.com/v1/albums/3Q1IJmMgyj0f0aacXsdQaC",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27309632d0ba3e2ec1bc4101fcc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0209632d0ba3e2ec1bc4101fcc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485109632d0ba3e2ec1bc4101fcc",
							width: 64,
						},
					],
					name: "Day of the Dog",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1uR7zoLrSRI8bSL43OZ0GY",
						name: "Ezra Furman",
						uri: "spotify:artist:1uR7zoLrSRI8bSL43OZ0GY",
					},
				],
				external_ids: {
					isrc: "US37V1322303",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7cKhlm4aZcoONKLE7RCHU0",
				},
				href: "https://api.spotify.com/v1/tracks/7cKhlm4aZcoONKLE7RCHU0",
				name: "My Zero",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7n0PozNMvKvDLBHCwSDG0q",
					},
					href: "https://api.spotify.com/v1/albums/7n0PozNMvKvDLBHCwSDG0q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27383c183c5219e2a353a3f5453",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0283c183c5219e2a353a3f5453",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485183c183c5219e2a353a3f5453",
							width: 64,
						},
					],
					name: "Suffering You, Suffering Me - Single",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/75Kh0eqgzo9f43Dan1JzSV",
						name: "Slow Club",
						uri: "spotify:artist:75Kh0eqgzo9f43Dan1JzSV",
					},
				],
				external_ids: {
					isrc: "GBGEY1400028",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3N85eUisFVOSEVP3xELW0O",
				},
				href: "https://api.spotify.com/v1/tracks/3N85eUisFVOSEVP3xELW0O",
				name: "Suffering You, Suffering Me",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/17b2n7UAyxa7uJpTaPzHTX",
					},
					href: "https://api.spotify.com/v1/albums/17b2n7UAyxa7uJpTaPzHTX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c352b0e088705370df59f880",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c352b0e088705370df59f880",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c352b0e088705370df59f880",
							width: 64,
						},
					],
					name: "Breathing",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/28CxmkDncu1V04LYxfx0eV",
						name: "Faded Paper Figures",
						uri: "spotify:artist:28CxmkDncu1V04LYxfx0eV",
					},
				],
				external_ids: {
					isrc: "USNUK1400014",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0qW9mAK7F7ZxX6bB0FoRFf",
				},
				href: "https://api.spotify.com/v1/tracks/0qW9mAK7F7ZxX6bB0FoRFf",
				name: "Breathing",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2WG7FYyVN0TD0kdbVwRMMW",
					},
					href: "https://api.spotify.com/v1/albums/2WG7FYyVN0TD0kdbVwRMMW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731ccf87cb39365cfd3d327d85",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021ccf87cb39365cfd3d327d85",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511ccf87cb39365cfd3d327d85",
							width: 64,
						},
					],
					name: "Don't Let The Sun Go Down On Your Anger",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4ejPLOZ4zSuacnDa3FuWBz",
						name: "River City Extension",
						uri: "spotify:artist:4ejPLOZ4zSuacnDa3FuWBz",
					},
				],
				external_ids: {
					isrc: "USME31200389",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1AsiLzyjVopWiBbVHsEkll",
				},
				href: "https://api.spotify.com/v1/tracks/1AsiLzyjVopWiBbVHsEkll",
				name: "If You Need Me Back In Brooklyn",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0yXbIIjO457ow87SVmf80k",
					},
					href: "https://api.spotify.com/v1/albums/0yXbIIjO457ow87SVmf80k",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273287b6ab548e364a7440ba144",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02287b6ab548e364a7440ba144",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851287b6ab548e364a7440ba144",
							width: 64,
						},
					],
					name: "Top Notch",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/5wFXmYsg3KFJ8BDsQudJ4f",
						name: "Manchester Orchestra",
						uri: "spotify:artist:5wFXmYsg3KFJ8BDsQudJ4f",
					},
				],
				external_ids: {
					isrc: "USUG11301011",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1AlTwyFhmz63q3aidkbO6F",
				},
				href: "https://api.spotify.com/v1/tracks/1AlTwyFhmz63q3aidkbO6F",
				name: "Top Notch",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5EEClNRpO5aO1kp2Iy56De",
					},
					href: "https://api.spotify.com/v1/albums/5EEClNRpO5aO1kp2Iy56De",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27324d125621cb0c1cb80dd5522",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0224d125621cb0c1cb80dd5522",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485124d125621cb0c1cb80dd5522",
							width: 64,
						},
					],
					name: "The Unmistakable Man",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4ejPLOZ4zSuacnDa3FuWBz",
						name: "River City Extension",
						uri: "spotify:artist:4ejPLOZ4zSuacnDa3FuWBz",
					},
				],
				external_ids: {
					isrc: "USME31000373",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1vCGfrp07F4P6tCnq3yGpO",
				},
				href: "https://api.spotify.com/v1/tracks/1vCGfrp07F4P6tCnq3yGpO",
				name: "Our New Intelligence",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0xGl3nw6WV1k2Ysqbn2j01",
					},
					href: "https://api.spotify.com/v1/albums/0xGl3nw6WV1k2Ysqbn2j01",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d02dde95d81ee2f5feec6cff",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d02dde95d81ee2f5feec6cff",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d02dde95d81ee2f5feec6cff",
							width: 64,
						},
					],
					name: "What If It Is",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
				],
				external_ids: {
					isrc: "USRC11300983",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1kepwD2EmpA0aYw70KMZ3A",
				},
				href: "https://api.spotify.com/v1/tracks/1kepwD2EmpA0aYw70KMZ3A",
				name: "Starf***er",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1KqRTsqsAE9DC2M7jqDQec",
					},
					href: "https://api.spotify.com/v1/albums/1KqRTsqsAE9DC2M7jqDQec",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27344243c7a1d8b2d58e4973d87",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0244243c7a1d8b2d58e4973d87",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485144243c7a1d8b2d58e4973d87",
							width: 64,
						},
					],
					name: "151a",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3LVPGE5jPPwtbGslx07YR0",
						name: "Kishi Bashi",
						uri: "spotify:artist:3LVPGE5jPPwtbGslx07YR0",
					},
				],
				external_ids: {
					isrc: "USJZA1200007",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7BDQBKhg7XNX6WcHPZ1a0J",
				},
				href: "https://api.spotify.com/v1/tracks/7BDQBKhg7XNX6WcHPZ1a0J",
				name: "Manchester",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7D4mglpfH1723hOt3dY1yf",
					},
					href: "https://api.spotify.com/v1/albums/7D4mglpfH1723hOt3dY1yf",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2734aae3a94326e3873ea9d3161",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e024aae3a94326e3873ea9d3161",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048514aae3a94326e3873ea9d3161",
							width: 64,
						},
					],
					name: "We Should Break Up",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4aFx7q4WkiTWPLJNW5mkKK",
						name: "Nerina Pallot",
						uri: "spotify:artist:4aFx7q4WkiTWPLJNW5mkKK",
					},
				],
				external_ids: {
					isrc: "GBKPL1373704",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/547cRJSB5QNEz33WYN3B8D",
				},
				href: "https://api.spotify.com/v1/tracks/547cRJSB5QNEz33WYN3B8D",
				name: "We Should Break Up",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0CaWHOEBcnyUJ4OcrIvzWT",
					},
					href: "https://api.spotify.com/v1/albums/0CaWHOEBcnyUJ4OcrIvzWT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ae3ef21426baefe868d00c4f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ae3ef21426baefe868d00c4f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ae3ef21426baefe868d00c4f",
							width: 64,
						},
					],
					name: "Our Nature",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2weMnYqCmtNUrSLAJq5dD8",
						name: "Savoir Adore",
						uri: "spotify:artist:2weMnYqCmtNUrSLAJq5dD8",
					},
				],
				external_ids: {
					isrc: "TCABE1226623",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6yOIdK2nKErlhyo5u7y81B",
				},
				href: "https://api.spotify.com/v1/tracks/6yOIdK2nKErlhyo5u7y81B",
				name: "Dreamers",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0O4DqnzoZYgNzDrMHWX7B1",
					},
					href: "https://api.spotify.com/v1/albums/0O4DqnzoZYgNzDrMHWX7B1",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273754242607877a6711c10ab15",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02754242607877a6711c10ab15",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851754242607877a6711c10ab15",
							width: 64,
						},
					],
					name: "Fantasies - Spotify Acoustic",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1rCIEwPp5OnXW0ornlSsRl",
						name: "Metric",
						uri: "spotify:artist:1rCIEwPp5OnXW0ornlSsRl",
					},
				],
				external_ids: {
					isrc: "CARB70903512",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/07YhAU4StAFzsWv2gMCCPb",
				},
				href: "https://api.spotify.com/v1/tracks/07YhAU4StAFzsWv2gMCCPb",
				name: "Gimme Sympathy - Acoustic",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4NAGjB4PaWLMa25xhx9dwn",
					},
					href: "https://api.spotify.com/v1/albums/4NAGjB4PaWLMa25xhx9dwn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ec68fda7a1497e0693d54200",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ec68fda7a1497e0693d54200",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ec68fda7a1497e0693d54200",
							width: 64,
						},
					],
					name: "Tell It To The Volcano",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7xWU2A2lw1xf4zTjKhkrGK",
						name: "Miniature Tigers",
						uri: "spotify:artist:7xWU2A2lw1xf4zTjKhkrGK",
					},
				],
				external_ids: {
					isrc: "US8JX0900001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4avfyAObpH5hnYF7upSCLz",
				},
				href: "https://api.spotify.com/v1/tracks/4avfyAObpH5hnYF7upSCLz",
				name: "Cannibal Queen",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0xGl3nw6WV1k2Ysqbn2j01",
					},
					href: "https://api.spotify.com/v1/albums/0xGl3nw6WV1k2Ysqbn2j01",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d02dde95d81ee2f5feec6cff",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d02dde95d81ee2f5feec6cff",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d02dde95d81ee2f5feec6cff",
							width: 64,
						},
					],
					name: "What If It Is",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
				],
				external_ids: {
					isrc: "USRC11300985",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/45gCjdqbFIkuK5DIkgbntw",
				},
				href: "https://api.spotify.com/v1/tracks/45gCjdqbFIkuK5DIkgbntw",
				name: "The Cops",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2svsHY3Bon38Vo1ong71oH",
					},
					href: "https://api.spotify.com/v1/albums/2svsHY3Bon38Vo1ong71oH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27377af39b08316e5333865fcd0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0277af39b08316e5333865fcd0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485177af39b08316e5333865fcd0",
							width: 64,
						},
					],
					name: "The Matter",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/28CxmkDncu1V04LYxfx0eV",
						name: "Faded Paper Figures",
						uri: "spotify:artist:28CxmkDncu1V04LYxfx0eV",
					},
				],
				external_ids: {
					isrc: "USNUK1200008",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7Mhacn9CgIJDsQ5DVwpJXw",
				},
				href: "https://api.spotify.com/v1/tracks/7Mhacn9CgIJDsQ5DVwpJXw",
				name: "Holy Smoke",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/06fAhsaZzs4AOmjJY8eU6m",
					},
					href: "https://api.spotify.com/v1/albums/06fAhsaZzs4AOmjJY8eU6m",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27347f0026842ff14501b476008",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0247f0026842ff14501b476008",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485147f0026842ff14501b476008",
							width: 64,
						},
					],
					name: "Garden",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0g3NiCRhEv7M4SEDMrpItN",
						name: "Totally Enormous Extinct Dinosaurs",
						uri: "spotify:artist:0g3NiCRhEv7M4SEDMrpItN",
					},
				],
				external_ids: {
					isrc: "GBUM71107190",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0Dxi7iWtxgQPsz5JQoJjd8",
				},
				href: "https://api.spotify.com/v1/tracks/0Dxi7iWtxgQPsz5JQoJjd8",
				name: "Garden",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1g03ut9FlCdvFbOcSvUxjs",
					},
					href: "https://api.spotify.com/v1/albums/1g03ut9FlCdvFbOcSvUxjs",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d947ce7963703f73579ce977",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d947ce7963703f73579ce977",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d947ce7963703f73579ce977",
							width: 64,
						},
					],
					name: "Love Death Immortality",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3a9qv6NLHnsVxJUtKOMHvD",
						name: "The Glitch Mob",
						uri: "spotify:artist:3a9qv6NLHnsVxJUtKOMHvD",
					},
				],
				external_ids: {
					isrc: "QMBZ91303409",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1t7adBEtxZXavJ1mbiyAWy",
				},
				href: "https://api.spotify.com/v1/tracks/1t7adBEtxZXavJ1mbiyAWy",
				name: "Can't Kill Us",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1WDdaw9niyv06kRmspU1U4",
					},
					href: "https://api.spotify.com/v1/albums/1WDdaw9niyv06kRmspU1U4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c1828dd1ffdd4777ecb2be5c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c1828dd1ffdd4777ecb2be5c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c1828dd1ffdd4777ecb2be5c",
							width: 64,
						},
					],
					name: "Synthetica",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1rCIEwPp5OnXW0ornlSsRl",
						name: "Metric",
						uri: "spotify:artist:1rCIEwPp5OnXW0ornlSsRl",
					},
				],
				external_ids: {
					isrc: "CARB71211207",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6uQNIowPNaVmHGqyj19WeS",
				},
				href: "https://api.spotify.com/v1/tracks/6uQNIowPNaVmHGqyj19WeS",
				name: "Synthetica",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1DggyU3di1lk7WIP8knjNG",
					},
					href: "https://api.spotify.com/v1/albums/1DggyU3di1lk7WIP8knjNG",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f88afbab8db5093b3677c314",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f88afbab8db5093b3677c314",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f88afbab8db5093b3677c314",
							width: 64,
						},
					],
					name: "Gasoline",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4tKUoNubW02udXOh7SLtXV",
						name: "Alpine",
						uri: "spotify:artist:4tKUoNubW02udXOh7SLtXV",
					},
				],
				external_ids: {
					isrc: "AULI01282510",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2xXaSJNH5LfCXz5FHhnoSg",
				},
				href: "https://api.spotify.com/v1/tracks/2xXaSJNH5LfCXz5FHhnoSg",
				name: "Gasoline",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6htgf3qv7vGcsdxLCDxKp8",
					},
					href: "https://api.spotify.com/v1/albums/6htgf3qv7vGcsdxLCDxKp8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b2b2747c89d2157b0b29fb6a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b2b2747c89d2157b0b29fb6a",
							width: 64,
						},
					],
					name: "Night Visions",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
						name: "Imagine Dragons",
						uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
					},
				],
				external_ids: {
					isrc: "USUM71200987",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6BtmXhTJMM9sBTHeYYASGz",
				},
				href: "https://api.spotify.com/v1/tracks/6BtmXhTJMM9sBTHeYYASGz",
				name: "It's Time",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5mJSoC2TkZMxmuNtT0AvDj",
					},
					href: "https://api.spotify.com/v1/albums/5mJSoC2TkZMxmuNtT0AvDj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f26f98b9f4dbee27476208fb",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f26f98b9f4dbee27476208fb",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f26f98b9f4dbee27476208fb",
							width: 64,
						},
					],
					name: "Evolve",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3sS2Q1UZuUXL7TZSbQumDI",
						name: "Approaching Nirvana",
						uri: "spotify:artist:3sS2Q1UZuUXL7TZSbQumDI",
					},
				],
				external_ids: {
					isrc: "TCABI1252869",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4fZ48j5YTRoDxrGAOftDVk",
				},
				href: "https://api.spotify.com/v1/tracks/4fZ48j5YTRoDxrGAOftDVk",
				name: "Death of a King",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7itpUVvN0MZbOItEBZkY3v",
					},
					href: "https://api.spotify.com/v1/albums/7itpUVvN0MZbOItEBZkY3v",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273eef6e115fd6a7782df30358b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02eef6e115fd6a7782df30358b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851eef6e115fd6a7782df30358b",
							width: 64,
						},
					],
					name: "Made To Stray",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3NUtpWpGDoffm3RCGhSHtl",
						name: "Mount Kimbie",
						uri: "spotify:artist:3NUtpWpGDoffm3RCGhSHtl",
					},
				],
				external_ids: {
					isrc: "GBBPW1300013",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6t3GC2nW76Lqx3kAwZixUi",
				},
				href: "https://api.spotify.com/v1/tracks/6t3GC2nW76Lqx3kAwZixUi",
				name: "Made To Stray",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3shNHl9ysbHfVBuLEuVPzX",
					},
					href: "https://api.spotify.com/v1/albums/3shNHl9ysbHfVBuLEuVPzX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2736d39cae5bffa907ef837c907",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e026d39cae5bffa907ef837c907",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048516d39cae5bffa907ef837c907",
							width: 64,
						},
					],
					name: "Come of Age (Deluxe Version)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0Ak6DLKHtpR6TEEnmcorKA",
						name: "The Vaccines",
						uri: "spotify:artist:0Ak6DLKHtpR6TEEnmcorKA",
					},
				],
				external_ids: {
					isrc: "GBARL1200826",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6XCo0c6gNbKr0a7L5aI3bq",
				},
				href: "https://api.spotify.com/v1/tracks/6XCo0c6gNbKr0a7L5aI3bq",
				name: "I Always Knew",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/41yzs1xVroTGm4szBvhf35",
					},
					href: "https://api.spotify.com/v1/albums/41yzs1xVroTGm4szBvhf35",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27397a3953ff9cf2ea0c01b3764",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0297a3953ff9cf2ea0c01b3764",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485197a3953ff9cf2ea0c01b3764",
							width: 64,
						},
					],
					name: "Xan Valleys",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2qlAMLpUyBjZgnzuFXXZXI",
						name: "Klaxons",
						uri: "spotify:artist:2qlAMLpUyBjZgnzuFXXZXI",
					},
				],
				external_ids: {
					isrc: "AUUM70600207",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6NPC4ZBRsBPrqHIf5eRxsA",
				},
				href: "https://api.spotify.com/v1/tracks/6NPC4ZBRsBPrqHIf5eRxsA",
				name: "Atlantis To Interzone - Crystal Castles Remix",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4XGdVtms9FfW3RUFS9IcgG",
					},
					href: "https://api.spotify.com/v1/albums/4XGdVtms9FfW3RUFS9IcgG",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733f1d9ad819b5176f46481154",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023f1d9ad819b5176f46481154",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513f1d9ad819b5176f46481154",
							width: 64,
						},
					],
					name: "Spectrum of the Sky",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6sRKKCgwS9sDf91qyEE7JH",
						name: "Break of Reality",
						uri: "spotify:artist:6sRKKCgwS9sDf91qyEE7JH",
					},
				],
				external_ids: {
					isrc: "US2RQ0900003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2Q898Dpo8y9vI9z90BaBXS",
				},
				href: "https://api.spotify.com/v1/tracks/2Q898Dpo8y9vI9z90BaBXS",
				name: "Vintage",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/77ixrTR32sEenV12HBccbt",
					},
					href: "https://api.spotify.com/v1/albums/77ixrTR32sEenV12HBccbt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fff8dc4ac4a4e799b4d6d259",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fff8dc4ac4a4e799b4d6d259",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fff8dc4ac4a4e799b4d6d259",
							width: 64,
						},
					],
					name: "Honeysuckle Remixes",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6D9Y5lqXKgJv8CV6Ur59oS",
						name: "The Submarines",
						uri: "spotify:artist:6D9Y5lqXKgJv8CV6Ur59oS",
					},
					{
						href: "https://api.spotify.com/v1/artists/4WoeMzXhDQyoFCKdji4FlL",
						name: "Amp Live",
						uri: "spotify:artist:4WoeMzXhDQyoFCKdji4FlL",
					},
				],
				external_ids: {
					isrc: "CAN110900001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6CTbvxcE6JlTM4cdHZry58",
				},
				href: "https://api.spotify.com/v1/tracks/6CTbvxcE6JlTM4cdHZry58",
				name: "1940 - AmpLive Remix",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7fhOMRZdvulSOQ0EsIOv89",
					},
					href: "https://api.spotify.com/v1/albums/7fhOMRZdvulSOQ0EsIOv89",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f17fe8c8aa741b5b51b2f1be",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f17fe8c8aa741b5b51b2f1be",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f17fe8c8aa741b5b51b2f1be",
							width: 64,
						},
					],
					name: "Cruelty & Clemency",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4s7QvzBMTW4BKWI5pVO2mY",
						name: "The Silent Comedy",
						uri: "spotify:artist:4s7QvzBMTW4BKWI5pVO2mY",
					},
				],
				external_ids: {
					isrc: "USC4V1100012",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/10hq0MoDAnB1Sdh7tCP9eC",
				},
				href: "https://api.spotify.com/v1/tracks/10hq0MoDAnB1Sdh7tCP9eC",
				name: "Victory",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Qh3sKxPuHtTYIfRsQT9pH",
					},
					href: "https://api.spotify.com/v1/albums/5Qh3sKxPuHtTYIfRsQT9pH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/37b0bdce3f0399f5f4678b529845f82d64315f77",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/2fd12f5cdf202ab773a0d5288c36f698b05aed62",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/a7d05472b067c9edf256bf2900df73b638213a44",
							width: 64,
						},
					],
					name: "Folly",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3AeZQlWzYvb3DZ5IMNlOXI",
						name: "Pree",
						uri: "spotify:artist:3AeZQlWzYvb3DZ5IMNlOXI",
					},
				],
				external_ids: {
					isrc: "USCL81101603",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1UEzPdGqjGJagbYO6FBqIB",
				},
				href: "https://api.spotify.com/v1/tracks/1UEzPdGqjGJagbYO6FBqIB",
				name: "Lemon Tree",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0Cug9j2T7MHK4k8hUEGQ43",
					},
					href: "https://api.spotify.com/v1/albums/0Cug9j2T7MHK4k8hUEGQ43",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273cc03676408b5f18e4526fd02",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02cc03676408b5f18e4526fd02",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851cc03676408b5f18e4526fd02",
							width: 64,
						},
					],
					name: "The Sunset Tree",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3hyGGjxu73JuzBa757H6R5",
						name: "The Mountain Goats",
						uri: "spotify:artist:3hyGGjxu73JuzBa757H6R5",
					},
				],
				external_ids: {
					isrc: "GBAFL0400071",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2M1Qc1mGSI1IYtmJzQtfPq",
				},
				href: "https://api.spotify.com/v1/tracks/2M1Qc1mGSI1IYtmJzQtfPq",
				name: "This Year",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0uVA8lJN5aqrsi7gOIlY5y",
					},
					href: "https://api.spotify.com/v1/albums/0uVA8lJN5aqrsi7gOIlY5y",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e56cf7429715b40faf277a98",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e56cf7429715b40faf277a98",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e56cf7429715b40faf277a98",
							width: 64,
						},
					],
					name: "Stompa",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3jmxkI8Jhv8bHOd2qSiU9j",
						name: "Serena Ryder",
						uri: "spotify:artist:3jmxkI8Jhv8bHOd2qSiU9j",
					},
				],
				external_ids: {
					isrc: "CAEZ11200096",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0TmwX7oWJD6hyU6UaIVxCL",
				},
				href: "https://api.spotify.com/v1/tracks/0TmwX7oWJD6hyU6UaIVxCL",
				name: "Stompa",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1FpzNqDbugk77xUj0qOrtQ",
					},
					href: "https://api.spotify.com/v1/albums/1FpzNqDbugk77xUj0qOrtQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fecfac11994325a39cd03dec",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fecfac11994325a39cd03dec",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fecfac11994325a39cd03dec",
							width: 64,
						},
					],
					name: "Kill Bill Vol. 1 Original Soundtrack (PA Version)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4cShXyYZpvnVZYeE3Oukns",
						name: "HOTEI",
						uri: "spotify:artist:4cShXyYZpvnVZYeE3Oukns",
					},
				],
				external_ids: {
					isrc: "USRHD0530703",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6Q32Vkucx2qeuVyBd3NiFZ",
				},
				href: "https://api.spotify.com/v1/tracks/6Q32Vkucx2qeuVyBd3NiFZ",
				name: "Battle Without Honor Or Humanity",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4ttkSoq4uoawALTcXoeYTs",
					},
					href: "https://api.spotify.com/v1/albums/4ttkSoq4uoawALTcXoeYTs",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732b4daf7422c8c5ce3b610041",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022b4daf7422c8c5ce3b610041",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512b4daf7422c8c5ce3b610041",
							width: 64,
						},
					],
					name: "Music From The O.C. Mix 1",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0K1q0nXQ8is36PzOKAMbNe",
						name: "Spoon",
						uri: "spotify:artist:0K1q0nXQ8is36PzOKAMbNe",
					},
				],
				external_ids: {
					isrc: "USMRG0340037",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5367A3pUfCCg4VSg5Jhlhw",
				},
				href: "https://api.spotify.com/v1/tracks/5367A3pUfCCg4VSg5Jhlhw",
				name: "The Way We Get By",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2prFMJoSUURQ1ZgSGSZSZo",
					},
					href: "https://api.spotify.com/v1/albums/2prFMJoSUURQ1ZgSGSZSZo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f347b0f426128cc5effb165d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f347b0f426128cc5effb165d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f347b0f426128cc5effb165d",
							width: 64,
						},
					],
					name: "The Toto Collection",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0PFtn5NtBbbUNbU9EAmIWF",
						name: "TOTO",
						uri: "spotify:artist:0PFtn5NtBbbUNbU9EAmIWF",
					},
				],
				external_ids: {
					isrc: "USSM19801941",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/10fJz5dd1agjkMJmUHdJfD",
				},
				href: "https://api.spotify.com/v1/tracks/10fJz5dd1agjkMJmUHdJfD",
				name: "Africa",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6ngoxSUKM6u29IPtpBXOdq",
					},
					href: "https://api.spotify.com/v1/albums/6ngoxSUKM6u29IPtpBXOdq",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273239e3c3ec245db22dd681122",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02239e3c3ec245db22dd681122",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851239e3c3ec245db22dd681122",
							width: 64,
						},
					],
					name: "Shaking the Habitual",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7eQZTqEMozBcuSubfu52i4",
						name: "The Knife",
						uri: "spotify:artist:7eQZTqEMozBcuSubfu52i4",
					},
				],
				external_ids: {
					isrc: "SEWCE1300101",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6jgeRCFJcKbdMHthT7zODh",
				},
				href: "https://api.spotify.com/v1/tracks/6jgeRCFJcKbdMHthT7zODh",
				name: "A Tooth for an Eye",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7hRNtJWgDgbxpoQuXNfvbQ",
					},
					href: "https://api.spotify.com/v1/albums/7hRNtJWgDgbxpoQuXNfvbQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e64636d5f3fe168c7df1d1d4",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e64636d5f3fe168c7df1d1d4",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e64636d5f3fe168c7df1d1d4",
							width: 64,
						},
					],
					name: "We Are All Where We Belong",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7fzr9IUh6UnQW2n1jDSrDC",
						name: "Quiet Company",
						uri: "spotify:artist:7fzr9IUh6UnQW2n1jDSrDC",
					},
				],
				external_ids: {
					isrc: "QMV7D1100002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6lq992OSKcyS6LxCsRcKPv",
				},
				href: "https://api.spotify.com/v1/tracks/6lq992OSKcyS6LxCsRcKPv",
				name: "You, Me, & the Boatman (Truth Is, I’ve Been Thirsty My Whole Life)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7vhKzPYdolKR6kPZeSp1nq",
					},
					href: "https://api.spotify.com/v1/albums/7vhKzPYdolKR6kPZeSp1nq",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733b71f2ef2de2fa45356d1e34",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023b71f2ef2de2fa45356d1e34",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513b71f2ef2de2fa45356d1e34",
							width: 64,
						},
					],
					name: "Kingdom of Fear",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1gnKXnSL1BgGCTIrV3d4iq",
						name: "Shitdisco",
						uri: "spotify:artist:1gnKXnSL1BgGCTIrV3d4iq",
					},
				],
				external_ids: {
					isrc: "GBFFA0700005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7vlpkxvgr97TIzBL5VSZHI",
				},
				href: "https://api.spotify.com/v1/tracks/7vlpkxvgr97TIzBL5VSZHI",
				name: "Dream Of Infinity",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0z7Mr85v0hPSX0VOUxP51W",
					},
					href: "https://api.spotify.com/v1/albums/0z7Mr85v0hPSX0VOUxP51W",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735ccb34ad80069d7eef97f1a1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025ccb34ad80069d7eef97f1a1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515ccb34ad80069d7eef97f1a1",
							width: 64,
						},
					],
					name: "I Could Be The One [Avicii vs Nicky Romero]",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
						name: "Avicii",
						uri: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6",
					},
					{
						href: "https://api.spotify.com/v1/artists/5ChF3i92IPZHduM7jN3dpg",
						name: "Nicky Romero",
						uri: "spotify:artist:5ChF3i92IPZHduM7jN3dpg",
					},
				],
				external_ids: {
					isrc: "SEUM71201601",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2bNrvWD9d5Zn9tS8XvcaMk",
				},
				href: "https://api.spotify.com/v1/tracks/2bNrvWD9d5Zn9tS8XvcaMk",
				name: "I Could Be The One (Avicii Vs. Nicky Romero) - Nicktim / Radio Edit",
			},
		},
	],
};

const timj101 = {
	items: [
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6y1aJ65d6LWQifAbuYvQry",
					},
					href: "https://api.spotify.com/v1/albums/6y1aJ65d6LWQifAbuYvQry",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27339e27959128888fa2ddd6564",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0239e27959128888fa2ddd6564",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485139e27959128888fa2ddd6564",
							width: 64,
						},
					],
					name: "Yes Yes Vindictive",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3KshwzAIDBZRPr5Xc7S79C",
						name: "Operator Please",
						uri: "spotify:artist:3KshwzAIDBZRPr5Xc7S79C",
					},
				],
				external_ids: {
					isrc: "AUOY10600001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2HZduZZqZzfhYEUjibkxq1",
				},
				href: "https://api.spotify.com/v1/tracks/2HZduZZqZzfhYEUjibkxq1",
				name: "Just A Song About Ping Pong",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4ygLzPNpG3nEJhjz7smlQY",
					},
					href: "https://api.spotify.com/v1/albums/4ygLzPNpG3nEJhjz7smlQY",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732f6c31ce384f4ba8c3a5c492",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022f6c31ce384f4ba8c3a5c492",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512f6c31ce384f4ba8c3a5c492",
							width: 64,
						},
					],
					name: "Adventure We Go",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3O316toq9Q067BGkekOs6b",
						name: "Muchuu",
						uri: "spotify:artist:3O316toq9Q067BGkekOs6b",
					},
				],
				external_ids: {
					isrc: "GB4HB0900001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4vIWGnWPMkiICGlK4HGS8x",
				},
				href: "https://api.spotify.com/v1/tracks/4vIWGnWPMkiICGlK4HGS8x",
				name: "Somebody Tell Me",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2rXxEMp0qSA1G8pG5zalX7",
					},
					href: "https://api.spotify.com/v1/albums/2rXxEMp0qSA1G8pG5zalX7",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735edca8122dbd9c9c09a69acc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025edca8122dbd9c9c09a69acc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515edca8122dbd9c9c09a69acc",
							width: 64,
						},
					],
					name: "The Late Blue",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/54xBWCXYw0pydXBknIdiC6",
						name: "GATC",
						uri: "spotify:artist:54xBWCXYw0pydXBknIdiC6",
					},
				],
				external_ids: {
					isrc: "AUPF31200100",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3B5xqRP1DFeovsEHbbHjg5",
				},
				href: "https://api.spotify.com/v1/tracks/3B5xqRP1DFeovsEHbbHjg5",
				name: "Sorry",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3CWD6k4rJIG72OXkSk98tf",
					},
					href: "https://api.spotify.com/v1/albums/3CWD6k4rJIG72OXkSk98tf",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e6812fbd0690bf6e2bafe2ee",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e6812fbd0690bf6e2bafe2ee",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e6812fbd0690bf6e2bafe2ee",
							width: 64,
						},
					],
					name: "Cross",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1gR0gsQYfi6joyO1dlp76N",
						name: "Justice",
						uri: "spotify:artist:1gR0gsQYfi6joyO1dlp76N",
					},
				],
				external_ids: {
					isrc: "FR0NT0700420",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2hQCzcb3qyZirWzOD5Yzoj",
				},
				href: "https://api.spotify.com/v1/tracks/2hQCzcb3qyZirWzOD5Yzoj",
				name: "D.A.N.C.E.",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3vLnCCc6nSz1bDLKRVQWgp",
					},
					href: "https://api.spotify.com/v1/albums/3vLnCCc6nSz1bDLKRVQWgp",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f27d9a2e8bdf7f03b1fc4c74",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f27d9a2e8bdf7f03b1fc4c74",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f27d9a2e8bdf7f03b1fc4c74",
							width: 64,
						},
					],
					name: "Discoballs",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/35Jmw5lJjihbFBMRJ8k2Mt",
						name: "The Love Dictators",
						uri: "spotify:artist:35Jmw5lJjihbFBMRJ8k2Mt",
					},
				],
				external_ids: {
					isrc: "DEBL60949547",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7H8Duf5GllduaXpNhFMxtY",
				},
				href: "https://api.spotify.com/v1/tracks/7H8Duf5GllduaXpNhFMxtY",
				name: "Soviet Power",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1kIkYRKKip01FVuJPoMtbR",
					},
					href: "https://api.spotify.com/v1/albums/1kIkYRKKip01FVuJPoMtbR",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27398528dc300fb2066ca913ebd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0298528dc300fb2066ca913ebd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485198528dc300fb2066ca913ebd",
							width: 64,
						},
					],
					name: "The City",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4pb4rqWSoGUgxm63xmJ8xc",
						name: "Madeon",
						uri: "spotify:artist:4pb4rqWSoGUgxm63xmJ8xc",
					},
				],
				external_ids: {
					isrc: "GBARL1201025",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/59iJua476fbi3PbddfPrez",
				},
				href: "https://api.spotify.com/v1/tracks/59iJua476fbi3PbddfPrez",
				name: "The City",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6htgf3qv7vGcsdxLCDxKp8",
					},
					href: "https://api.spotify.com/v1/albums/6htgf3qv7vGcsdxLCDxKp8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b2b2747c89d2157b0b29fb6a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b2b2747c89d2157b0b29fb6a",
							width: 64,
						},
					],
					name: "Night Visions",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
						name: "Imagine Dragons",
						uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
					},
				],
				external_ids: {
					isrc: "USUM71208578",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7cBhzkTWSpHBGAiCZzSika",
				},
				href: "https://api.spotify.com/v1/tracks/7cBhzkTWSpHBGAiCZzSika",
				name: "Nothing Left To Say / Rocks",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0lW1cNfQfZDndoQ8ej2TSP",
					},
					href: "https://api.spotify.com/v1/albums/0lW1cNfQfZDndoQ8ej2TSP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c90890126ff9e51b5496d46f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c90890126ff9e51b5496d46f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c90890126ff9e51b5496d46f",
							width: 64,
						},
					],
					name: "Continued Silence EP",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
						name: "Imagine Dragons",
						uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
					},
				],
				external_ids: {
					isrc: "USUM71201074",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6h1Wkcm9qz79Xt1Qnp4n4A",
				},
				href: "https://api.spotify.com/v1/tracks/6h1Wkcm9qz79Xt1Qnp4n4A",
				name: "Radioactive",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4ZKDsV2tP6AUNBzvfofMyO",
					},
					href: "https://api.spotify.com/v1/albums/4ZKDsV2tP6AUNBzvfofMyO",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2736ad68baf86b91e2ca23b2326",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e026ad68baf86b91e2ca23b2326",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048516ad68baf86b91e2ca23b2326",
							width: 64,
						},
					],
					name: "Stay Awake",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0oYWECmtozBZGjnklDFPTH",
						name: "Carousel",
						uri: "spotify:artist:0oYWECmtozBZGjnklDFPTH",
					},
				],
				external_ids: {
					isrc: "usx9p1244653",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2fdAwmvASYrRPxMN14vAY2",
				},
				href: "https://api.spotify.com/v1/tracks/2fdAwmvASYrRPxMN14vAY2",
				name: "Stay Awake",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3fJzdyuibtLBHJ6v59l6fy",
					},
					href: "https://api.spotify.com/v1/albums/3fJzdyuibtLBHJ6v59l6fy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d70009626f27d35c1adf26b6",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d70009626f27d35c1adf26b6",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d70009626f27d35c1adf26b6",
							width: 64,
						},
					],
					name: "KABOOM!",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7DBXiFez54rbGjqw1tWi5w",
						name: "I Fight Dragons",
						uri: "spotify:artist:7DBXiFez54rbGjqw1tWi5w",
					},
				],
				external_ids: {
					isrc: "USAT21102055",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3vBxUWx0VDskX7lNmsN8Ks",
				},
				href: "https://api.spotify.com/v1/tracks/3vBxUWx0VDskX7lNmsN8Ks",
				name: "cRaZie$",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2XYmYs39qdkds4FoTqlgYH",
					},
					href: "https://api.spotify.com/v1/albums/2XYmYs39qdkds4FoTqlgYH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738e6c41ae099b606aee97104b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028e6c41ae099b606aee97104b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518e6c41ae099b606aee97104b",
							width: 64,
						},
					],
					name: "The World's Greatest Waltzes",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6LhnhEI78rDEtmetQTjCwX",
						name: "Paris Conservatoire Orchestra",
						uri: "spotify:artist:6LhnhEI78rDEtmetQTjCwX",
					},
				],
				external_ids: {
					isrc: "GBMNA0912659",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4SUc2lVoKqghpSyh4FvRdn",
				},
				href: "https://api.spotify.com/v1/tracks/4SUc2lVoKqghpSyh4FvRdn",
				name: "Waltz from 'Masquerade Suite'",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1WDdaw9niyv06kRmspU1U4",
					},
					href: "https://api.spotify.com/v1/albums/1WDdaw9niyv06kRmspU1U4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c1828dd1ffdd4777ecb2be5c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c1828dd1ffdd4777ecb2be5c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c1828dd1ffdd4777ecb2be5c",
							width: 64,
						},
					],
					name: "Synthetica",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1rCIEwPp5OnXW0ornlSsRl",
						name: "Metric",
						uri: "spotify:artist:1rCIEwPp5OnXW0ornlSsRl",
					},
				],
				external_ids: {
					isrc: "CARB71211204",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3V1sX80FB5C1D0azCC1DII",
				},
				href: "https://api.spotify.com/v1/tracks/3V1sX80FB5C1D0azCC1DII",
				name: "Breathing Underwater",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2Pede3Jg4soIu4BzAaRUV7",
					},
					href: "https://api.spotify.com/v1/albums/2Pede3Jg4soIu4BzAaRUV7",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27316122d7d6a3ee627e0fd19c9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0216122d7d6a3ee627e0fd19c9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485116122d7d6a3ee627e0fd19c9",
							width: 64,
						},
					],
					name: "Fly on a Dog",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/0cTbOqUA5CdTuYjYJNQGEL",
						name: "The Megas",
						uri: "spotify:artist:0cTbOqUA5CdTuYjYJNQGEL",
					},
				],
				external_ids: {
					isrc: "TCABL1214109",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0apEyyBw6KD20af84XEpFM",
				},
				href: "https://api.spotify.com/v1/tracks/0apEyyBw6KD20af84XEpFM",
				name: "Just Another Machine",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4H0mO7THZDkQYxC2yz84GJ",
					},
					href: "https://api.spotify.com/v1/albums/4H0mO7THZDkQYxC2yz84GJ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27352c93cce7ec36236c7fe4229",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0252c93cce7ec36236c7fe4229",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485152c93cce7ec36236c7fe4229",
							width: 64,
						},
					],
					name: "Crave You",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1lc8mnyGrCLtPhCoWjRxjM",
						name: "Flight Facilities",
						uri: "spotify:artist:1lc8mnyGrCLtPhCoWjRxjM",
					},
				],
				external_ids: {
					isrc: "GBKPL1261014",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0ekII9O2RfHOivSRY9Bn1U",
				},
				href: "https://api.spotify.com/v1/tracks/0ekII9O2RfHOivSRY9Bn1U",
				name: "Crave You (Adventure Club Remix)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3kUmDCZmRsOg6yg0JkAAjr",
					},
					href: "https://api.spotify.com/v1/albums/3kUmDCZmRsOg6yg0JkAAjr",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e683d9235a54d139d258a5ab",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e683d9235a54d139d258a5ab",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e683d9235a54d139d258a5ab",
							width: 64,
						},
					],
					name: "Exile Vilify (From the Game Portal 2)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2cCUtGK9sDU2EoElnk0GNB",
						name: "The National",
						uri: "spotify:artist:2cCUtGK9sDU2EoElnk0GNB",
					},
				],
				external_ids: {
					isrc: "TCAAX1152767",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1IbFHfVWUDNkhSY9PWt9th",
				},
				href: "https://api.spotify.com/v1/tracks/1IbFHfVWUDNkhSY9PWt9th",
				name: "Exile Vilify (From the Game Portal 2)",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4VjNSnGmoFvJ4PAlVqlDH1",
					},
					href: "https://api.spotify.com/v1/albums/4VjNSnGmoFvJ4PAlVqlDH1",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b869c319eee463ee8b13e510",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b869c319eee463ee8b13e510",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b869c319eee463ee8b13e510",
							width: 64,
						},
					],
					name: "In Our Heads (Expanded Edition)",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/37uLId6Z5ZXCx19vuruvv5",
						name: "Hot Chip",
						uri: "spotify:artist:37uLId6Z5ZXCx19vuruvv5",
					},
				],
				external_ids: {
					isrc: "GBCEL1200153",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/335eSfua7554xfwf6d6vXg",
				},
				href: "https://api.spotify.com/v1/tracks/335eSfua7554xfwf6d6vXg",
				name: "Jelly Babies",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5tW6V3htcrv0ieotnlhXBn",
					},
					href: "https://api.spotify.com/v1/albums/5tW6V3htcrv0ieotnlhXBn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273877527e0a3c7b6c60b230209",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02877527e0a3c7b6c60b230209",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851877527e0a3c7b6c60b230209",
							width: 64,
						},
					],
					name: "The Narrative",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6hvVKhbrKEHPkSUFpEJKON",
						name: "The Narrative",
						uri: "spotify:artist:6hvVKhbrKEHPkSUFpEJKON",
					},
				],
				external_ids: {
					isrc: "US-TCF-10-59037",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0nOQ5fa8IEWOhxR63kMPGn",
				},
				href: "https://api.spotify.com/v1/tracks/0nOQ5fa8IEWOhxR63kMPGn",
				name: "Fade",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7kmQsQLyp0t6NxrkWNBQni",
					},
					href: "https://api.spotify.com/v1/albums/7kmQsQLyp0t6NxrkWNBQni",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27396f0960ac74e6403616a1a56",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0296f0960ac74e6403616a1a56",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485196f0960ac74e6403616a1a56",
							width: 64,
						},
					],
					name: "#digitalfreedom",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/179BpmLkQCRIoU68Co80f5",
						name: "Gramatik",
						uri: "spotify:artist:179BpmLkQCRIoU68Co80f5",
					},
				],
				external_ids: {
					isrc: "TCABF1207581",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0wG5r5HTVCjE1HgUyFPJJ9",
				},
				href: "https://api.spotify.com/v1/tracks/0wG5r5HTVCjE1HgUyFPJJ9",
				name: "Fist Up",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2AEc0G1ol85CPydVodfABy",
					},
					href: "https://api.spotify.com/v1/albums/2AEc0G1ol85CPydVodfABy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ece80f7146010348dda94603",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ece80f7146010348dda94603",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ece80f7146010348dda94603",
							width: 64,
						},
					],
					name: "It Doesn't Have to Make Sense EP",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2dVMlYRMuA6bf0VU8fn6ac",
						name: "Y LUV",
						uri: "spotify:artist:2dVMlYRMuA6bf0VU8fn6ac",
					},
				],
				external_ids: {
					isrc: "TCABJ1257858",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6OwwwbGc5btg0LkDqTab2e",
				},
				href: "https://api.spotify.com/v1/tracks/6OwwwbGc5btg0LkDqTab2e",
				name: "Driftin",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7hCoN4MCcd7ncQGQ3SO18s",
					},
					href: "https://api.spotify.com/v1/albums/7hCoN4MCcd7ncQGQ3SO18s",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735b6a0d30c3814bb9f40d5995",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025b6a0d30c3814bb9f40d5995",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515b6a0d30c3814bb9f40d5995",
							width: 64,
						},
					],
					name: "Tree Bursts in Snow",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2cxi12PeZmsDkSlJi1slRp",
						name: "Admiral Fallow",
						uri: "spotify:artist:2cxi12PeZmsDkSlJi1slRp",
					},
				],
				external_ids: {
					isrc: "CAN111200005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3eejzH6ksnavqC8Jp5Xu6c",
				},
				href: "https://api.spotify.com/v1/tracks/3eejzH6ksnavqC8Jp5Xu6c",
				name: "Guest of the Government",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2Fjgx3IOyZeW3CbLSvdi7R",
					},
					href: "https://api.spotify.com/v1/albums/2Fjgx3IOyZeW3CbLSvdi7R",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738cb8dd1fa40cd3afdcf0264a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028cb8dd1fa40cd3afdcf0264a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518cb8dd1fa40cd3afdcf0264a",
							width: 64,
						},
					],
					name: "In This Light and on This Evening",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/6e9wIFWhBPHLE9bXK8gtBI",
						name: "Editors",
						uri: "spotify:artist:6e9wIFWhBPHLE9bXK8gtBI",
					},
				],
				external_ids: {
					isrc: "GBGAC0900027",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2NZau5YyWIlZQ468HisYWW",
				},
				href: "https://api.spotify.com/v1/tracks/2NZau5YyWIlZQ468HisYWW",
				name: "In This Light and on This Evening",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7Dv0c0Ns4Eb57If0tNemV6",
					},
					href: "https://api.spotify.com/v1/albums/7Dv0c0Ns4Eb57If0tNemV6",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735d45c2cd72d0c6d076536a52",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025d45c2cd72d0c6d076536a52",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515d45c2cd72d0c6d076536a52",
							width: 64,
						},
					],
					name: "Orion",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/3xWktqKQxBAu4LXqLufJwW",
						name: "she",
						uri: "spotify:artist:3xWktqKQxBAu4LXqLufJwW",
					},
				],
				external_ids: {
					isrc: "USTC00994369",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4h5vc9YUxavCQotpiJ02H9",
				},
				href: "https://api.spotify.com/v1/tracks/4h5vc9YUxavCQotpiJ02H9",
				name: "Atomic",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2BWQo37l3SSFrsGSyYlM0j",
					},
					href: "https://api.spotify.com/v1/albums/2BWQo37l3SSFrsGSyYlM0j",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27375540674dabb10980311dcfd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0275540674dabb10980311dcfd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485175540674dabb10980311dcfd",
							width: 64,
						},
					],
					name: "Live Magic",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
						name: "Queen",
						uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d",
					},
				],
				external_ids: {
					isrc: "GBCEE0100079",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2SDRnOcOX3PGR9kyyHHsvd",
				},
				href: "https://api.spotify.com/v1/tracks/2SDRnOcOX3PGR9kyyHHsvd",
				name: "Radio Ga Ga - Live At Knebworth / August 1986",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4C70S653k72SZMt0WajzAT",
					},
					href: "https://api.spotify.com/v1/albums/4C70S653k72SZMt0WajzAT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27390d0a3f04d4e34c1823d1b6f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0290d0a3f04d4e34c1823d1b6f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485190d0a3f04d4e34c1823d1b6f",
							width: 64,
						},
					],
					name: "Cool Is Just A Number",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7DBXiFez54rbGjqw1tWi5w",
						name: "I Fight Dragons",
						uri: "spotify:artist:7DBXiFez54rbGjqw1tWi5w",
					},
				],
				external_ids: {
					isrc: "USAT21000517",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5as9tTS1Ye6ZkOzbV2Utvt",
				},
				href: "https://api.spotify.com/v1/tracks/5as9tTS1Ye6ZkOzbV2Utvt",
				name: "The Faster the Treadmill - EP Version",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/155N1gV0cIFYaLiy3I5d83",
					},
					href: "https://api.spotify.com/v1/albums/155N1gV0cIFYaLiy3I5d83",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739a36ab0a012256617dc316a2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029a36ab0a012256617dc316a2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519a36ab0a012256617dc316a2",
							width: 64,
						},
					],
					name: "The Lumineers",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/16oZKvXb6WkQlVAjwo2Wbg",
						name: "The Lumineers",
						uri: "spotify:artist:16oZKvXb6WkQlVAjwo2Wbg",
					},
				],
				external_ids: {
					isrc: "USDMG1260805",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5BSndweF91KDqyxANsZcQH",
				},
				href: "https://api.spotify.com/v1/tracks/5BSndweF91KDqyxANsZcQH",
				name: "Ho Hey",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/14JU5SskmcyckE5I8PY6lv",
					},
					href: "https://api.spotify.com/v1/albums/14JU5SskmcyckE5I8PY6lv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f860547bc8ba0c59df4fe2c3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f860547bc8ba0c59df4fe2c3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f860547bc8ba0c59df4fe2c3",
							width: 64,
						},
					],
					name: "Gossamer",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7gjAu1qr5C2grXeQFFOGeh",
						name: "Passion Pit",
						uri: "spotify:artist:7gjAu1qr5C2grXeQFFOGeh",
					},
				],
				external_ids: {
					isrc: "USSM11202626",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3V0ak0F8fLXmp3hYAEQKZH",
				},
				href: "https://api.spotify.com/v1/tracks/3V0ak0F8fLXmp3hYAEQKZH",
				name: "Love Is Greed",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3UBYRK5F0CEhBthPDcaDNI",
					},
					href: "https://api.spotify.com/v1/albums/3UBYRK5F0CEhBthPDcaDNI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27308377a0a66517fc20958729b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0208377a0a66517fc20958729b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485108377a0a66517fc20958729b",
							width: 64,
						},
					],
					name: "The Chi-Lites Live",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7BFr36uI1dzJyo6tpa5Ued",
						name: "The Chi-Lites",
						uri: "spotify:artist:7BFr36uI1dzJyo6tpa5Ued",
					},
				],
				external_ids: {
					isrc: "uscgj0654846",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5bMTEi5iWmEBREHhcHEKNR",
				},
				href: "https://api.spotify.com/v1/tracks/5bMTEi5iWmEBREHhcHEKNR",
				name: "Are You My Woman ( Tell Me So )",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/787xqVhWdJK91LchIEJ4ck",
					},
					href: "https://api.spotify.com/v1/albums/787xqVhWdJK91LchIEJ4ck",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bfa62b15b881115eac533dfd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bfa62b15b881115eac533dfd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bfa62b15b881115eac533dfd",
							width: 64,
						},
					],
					name: "Let it Go",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4GLJPBj5Cdr9AgLKvLWM4n",
						name: "Dragonette",
						uri: "spotify:artist:4GLJPBj5Cdr9AgLKvLWM4n",
					},
				],
				external_ids: {
					isrc: "CA2HE1200011",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/31TB0tG8ISjXN5DOSKHVAd",
				},
				href: "https://api.spotify.com/v1/tracks/31TB0tG8ISjXN5DOSKHVAd",
				name: "Let it Go",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/57WwNLKYGLEvT6lefOxUuP",
					},
					href: "https://api.spotify.com/v1/albums/57WwNLKYGLEvT6lefOxUuP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731a4e37384a3732eb3b314aaf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021a4e37384a3732eb3b314aaf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511a4e37384a3732eb3b314aaf",
							width: 64,
						},
					],
					name: "This Is Old",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4wTyadrU4Yuj2DolnrAMqv",
						name: "State Shirt",
						uri: "spotify:artist:4wTyadrU4Yuj2DolnrAMqv",
					},
				],
				external_ids: {
					isrc: "ushm80882346",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4dMuaUPtmzmHAytoEfF71R",
				},
				href: "https://api.spotify.com/v1/tracks/4dMuaUPtmzmHAytoEfF71R",
				name: "Computer",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7LXJ2yXkwZ1RmS4JHKzg0g",
					},
					href: "https://api.spotify.com/v1/albums/7LXJ2yXkwZ1RmS4JHKzg0g",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fc15b38d7e1b1efe896d8703",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fc15b38d7e1b1efe896d8703",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fc15b38d7e1b1efe896d8703",
							width: 64,
						},
					],
					name: "We Love Green",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/7sgWBYtJpblXpJl2lU5WVs",
						name: "Electric Guest",
						uri: "spotify:artist:7sgWBYtJpblXpJl2lU5WVs",
					},
				],
				external_ids: {
					isrc: "USCJ81100776",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/74reD6Vha9tSy1ReFmyW40",
				},
				href: "https://api.spotify.com/v1/tracks/74reD6Vha9tSy1ReFmyW40",
				name: "This Head I Hold",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5KvjhiJga4QwSLW4GYXaMi",
					},
					href: "https://api.spotify.com/v1/albums/5KvjhiJga4QwSLW4GYXaMi",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a17ffd2e1944dc544dd3c122",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a17ffd2e1944dc544dd3c122",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a17ffd2e1944dc544dd3c122",
							width: 64,
						},
					],
					name: "Dreamers - EP",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2weMnYqCmtNUrSLAJq5dD8",
						name: "Savoir Adore",
						uri: "spotify:artist:2weMnYqCmtNUrSLAJq5dD8",
					},
				],
				external_ids: {
					isrc: "TCABE1226623",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5lNe6ySuYaoWMUc0wLvs7x",
				},
				href: "https://api.spotify.com/v1/tracks/5lNe6ySuYaoWMUc0wLvs7x",
				name: "Dreamers",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1SzvhsYJtM1B0UvYO0r50f",
					},
					href: "https://api.spotify.com/v1/albums/1SzvhsYJtM1B0UvYO0r50f",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732409177d2996b23160d17aaf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022409177d2996b23160d17aaf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512409177d2996b23160d17aaf",
							width: 64,
						},
					],
					name: "Swell",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/1pTBQC9zXDUgiVPQbBDTM4",
						name: "Hollywood Drunks",
						uri: "spotify:artist:1pTBQC9zXDUgiVPQbBDTM4",
					},
				],
				external_ids: {
					isrc: "USTC70835716",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/06ZvioYXKUgyudeCP5RKrX",
				},
				href: "https://api.spotify.com/v1/tracks/06ZvioYXKUgyudeCP5RKrX",
				name: "That Age",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5cwwsL2JakBtyXxtCpuedD",
					},
					href: "https://api.spotify.com/v1/albums/5cwwsL2JakBtyXxtCpuedD",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f7161c79192d6552ac28b525",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f7161c79192d6552ac28b525",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f7161c79192d6552ac28b525",
							width: 64,
						},
					],
					name: "Angels And Enemies",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/4Ru8NpyaeX4dFPs9p6ItKZ",
						name: "Sound Of Guns",
						uri: "spotify:artist:4Ru8NpyaeX4dFPs9p6ItKZ",
					},
				],
				external_ids: {
					isrc: "GBHPX1100031",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7ECXyjdC859Qc2tSNGFhMn",
				},
				href: "https://api.spotify.com/v1/tracks/7ECXyjdC859Qc2tSNGFhMn",
				name: "Sometimes",
			},
		},
		{
			added_at: "2015-09-30T17:31:50Z",
			added_by: {
				id: "thisismyjamhq",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2sY9WYVH022ulyAYaqvXLW",
					},
					href: "https://api.spotify.com/v1/albums/2sY9WYVH022ulyAYaqvXLW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27379335ee4c9889effc7a2c79d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0279335ee4c9889effc7a2c79d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485179335ee4c9889effc7a2c79d",
							width: 64,
						},
					],
					name: "Celebration Rock",
				},
				artists: [
					{
						href: "https://api.spotify.com/v1/artists/2WcCoPxAWFNSCvsFPrpf30",
						name: "Japandroids",
						uri: "spotify:artist:2WcCoPxAWFNSCvsFPrpf30",
					},
				],
				external_ids: {
					isrc: "US3R41223807",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2dcmQJCw1INGn7yR2KHx0U",
				},
				href: "https://api.spotify.com/v1/tracks/2dcmQJCw1INGn7yR2KHx0U",
				name: "The House That Heaven Built",
			},
		},
	],
};

const project = {
	items: [
		{
			added_at: "2021-05-25T20:51:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1LDSPYtniVN09zmRdd1meQ",
					},
					href: "https://api.spotify.com/v1/albums/1LDSPYtniVN09zmRdd1meQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738842e85e405d9de6d1e0395f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028842e85e405d9de6d1e0395f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518842e85e405d9de6d1e0395f",
							width: 64,
						},
					],
					name: "The Hanging Gardens Of Beatenberg",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3S9sb8w9r1iojdrAL1soiU",
						},
						href: "https://api.spotify.com/v1/artists/3S9sb8w9r1iojdrAL1soiU",
						name: "Beatenberg",
						uri: "spotify:artist:3S9sb8w9r1iojdrAL1soiU",
					},
				],
				external_ids: {
					isrc: "ZAUM71400191",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5zISA7K9TUDOxVGnLHYbGT",
				},
				href: "https://api.spotify.com/v1/tracks/5zISA7K9TUDOxVGnLHYbGT",
				id: "5zISA7K9TUDOxVGnLHYbGT",
				name: "Scorpionfish",
				uri: "spotify:track:5zISA7K9TUDOxVGnLHYbGT",
			},
		},
		{
			added_at: "2021-05-25T20:51:42Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4nCalDY0NsKr37enF9UPPo",
					},
					href: "https://api.spotify.com/v1/albums/4nCalDY0NsKr37enF9UPPo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f2c8f96d7eaf881fe5aa2c79",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f2c8f96d7eaf881fe5aa2c79",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f2c8f96d7eaf881fe5aa2c79",
							width: 64,
						},
					],
					name: "LivePhish, Vol. 11 11/17/97 (McNichols Sports Arena, Denver, CO)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5wbIWUzTPuTxTyG6ouQKqz",
						},
						href: "https://api.spotify.com/v1/artists/5wbIWUzTPuTxTyG6ouQKqz",
						name: "Phish",
						uri: "spotify:artist:5wbIWUzTPuTxTyG6ouQKqz",
					},
				],
				external_ids: {
					isrc: "USKF40903108",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6k8x6fpCwFGlv8JB6cU70a",
				},
				href: "https://api.spotify.com/v1/tracks/6k8x6fpCwFGlv8JB6cU70a",
				id: "6k8x6fpCwFGlv8JB6cU70a",
				name: "Johnny B. Goode",
				uri: "spotify:track:6k8x6fpCwFGlv8JB6cU70a",
			},
		},
		{
			added_at: "2021-05-25T20:51:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2dwNxD6zrwPkRJlr08WOKA",
					},
					href: "https://api.spotify.com/v1/albums/2dwNxD6zrwPkRJlr08WOKA",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fd632c6df018130724e2fc57",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fd632c6df018130724e2fc57",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fd632c6df018130724e2fc57",
							width: 64,
						},
					],
					name: "Forest of Lost Children",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0hrb5WRiNlj8vh3WnCgXFq",
						},
						href: "https://api.spotify.com/v1/artists/0hrb5WRiNlj8vh3WnCgXFq",
						name: "Kikagaku Moyo",
						uri: "spotify:artist:0hrb5WRiNlj8vh3WnCgXFq",
					},
				],
				external_ids: {
					isrc: "QMMS41401303",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5skAQdEOEjdRVBcNtMtExs",
				},
				href: "https://api.spotify.com/v1/tracks/5skAQdEOEjdRVBcNtMtExs",
				id: "5skAQdEOEjdRVBcNtMtExs",
				name: "Smoke and Mirrors",
				uri: "spotify:track:5skAQdEOEjdRVBcNtMtExs",
			},
		},
		{
			added_at: "2021-05-25T20:52:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0YYboPBsKcVDrXiNfNIi7o",
					},
					href: "https://api.spotify.com/v1/albums/0YYboPBsKcVDrXiNfNIi7o",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27323a63417b4697694202c636a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0223a63417b4697694202c636a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485123a63417b4697694202c636a",
							width: 64,
						},
					],
					name: "Shake The Spirit",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3bhu7P5PfngueRHiB9hjcx",
						},
						href: "https://api.spotify.com/v1/artists/3bhu7P5PfngueRHiB9hjcx",
						name: "Elle King",
						uri: "spotify:artist:3bhu7P5PfngueRHiB9hjcx",
					},
				],
				external_ids: {
					isrc: "USRC11802047",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6duWrSlajEdgjAfaiKZV31",
				},
				href: "https://api.spotify.com/v1/tracks/6duWrSlajEdgjAfaiKZV31",
				id: "6duWrSlajEdgjAfaiKZV31",
				name: "Baby Outlaw",
				uri: "spotify:track:6duWrSlajEdgjAfaiKZV31",
			},
		},
		{
			added_at: "2021-05-25T20:52:17Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5desuSVmQddmKNvvU2ATcf",
					},
					href: "https://api.spotify.com/v1/albums/5desuSVmQddmKNvvU2ATcf",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273efc22118db71056fbf338083",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02efc22118db71056fbf338083",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851efc22118db71056fbf338083",
							width: 64,
						},
					],
					name: "Hoist",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5wbIWUzTPuTxTyG6ouQKqz",
						},
						href: "https://api.spotify.com/v1/artists/5wbIWUzTPuTxTyG6ouQKqz",
						name: "Phish",
						uri: "spotify:artist:5wbIWUzTPuTxTyG6ouQKqz",
					},
				],
				external_ids: {
					isrc: "USEE19400074",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3B1cnD5CuR6WSN71V7Rlco",
				},
				href: "https://api.spotify.com/v1/tracks/3B1cnD5CuR6WSN71V7Rlco",
				id: "3B1cnD5CuR6WSN71V7Rlco",
				name: "Down With Disease",
				uri: "spotify:track:3B1cnD5CuR6WSN71V7Rlco",
			},
		},
		{
			added_at: "2021-05-25T20:52:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3PQyWNJMdw5r89zH5MWqpy",
					},
					href: "https://api.spotify.com/v1/albums/3PQyWNJMdw5r89zH5MWqpy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d8fd0025ae4f41cc8d534bf8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d8fd0025ae4f41cc8d534bf8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d8fd0025ae4f41cc8d534bf8",
							width: 64,
						},
					],
					name: "La chusma inconsciente",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3wV40S9AyTLTE2b0Tp0Yo6",
						},
						href: "https://api.spotify.com/v1/artists/3wV40S9AyTLTE2b0Tp0Yo6",
						name: "Evelyn Cornejo",
						uri: "spotify:artist:3wV40S9AyTLTE2b0Tp0Yo6",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0tP6QVPr0eyylpTyfEXqZn",
						},
						href: "https://api.spotify.com/v1/artists/0tP6QVPr0eyylpTyfEXqZn",
						name: "Juan Ayala",
						uri: "spotify:artist:0tP6QVPr0eyylpTyfEXqZn",
					},
				],
				external_ids: {
					isrc: "ARC571702041",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1te43bc5VDTNEq9IEWhir7",
				},
				href: "https://api.spotify.com/v1/tracks/1te43bc5VDTNEq9IEWhir7",
				id: "1te43bc5VDTNEq9IEWhir7",
				name: "La chusma inconsciente",
				uri: "spotify:track:1te43bc5VDTNEq9IEWhir7",
			},
		},
		{
			added_at: "2021-05-25T20:52:42Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2Z4tNYxWSyAy7KtayftoYk",
					},
					href: "https://api.spotify.com/v1/albums/2Z4tNYxWSyAy7KtayftoYk",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730e95e767d918910861bdd71b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020e95e767d918910861bdd71b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510e95e767d918910861bdd71b",
							width: 64,
						},
					],
					name: "Meant for This",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4LzLMRGejol2nWDb61fLws",
						},
						href: "https://api.spotify.com/v1/artists/4LzLMRGejol2nWDb61fLws",
						name: "Atomic Drum Assembly",
						uri: "spotify:artist:4LzLMRGejol2nWDb61fLws",
					},
				],
				external_ids: {
					isrc: "UKSML1900015",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7GS4NLE4zZ9iXZl4VdDSn7",
				},
				href: "https://api.spotify.com/v1/tracks/7GS4NLE4zZ9iXZl4VdDSn7",
				id: "7GS4NLE4zZ9iXZl4VdDSn7",
				name: "Fuzzy",
				uri: "spotify:track:7GS4NLE4zZ9iXZl4VdDSn7",
			},
		},
		{
			added_at: "2021-05-25T20:52:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4E9MDitAixyeI6i82AcFbn",
					},
					href: "https://api.spotify.com/v1/albums/4E9MDitAixyeI6i82AcFbn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27362baa5b23c4d4fd819b831de",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0262baa5b23c4d4fd819b831de",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485162baa5b23c4d4fd819b831de",
							width: 64,
						},
					],
					name: "The Archer's Parade",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1LJuYVYyKSm7Tw9xGuulhS",
						},
						href: "https://api.spotify.com/v1/artists/1LJuYVYyKSm7Tw9xGuulhS",
						name: "Enter The Haggis",
						uri: "spotify:artist:1LJuYVYyKSm7Tw9xGuulhS",
					},
				],
				external_ids: {
					isrc: "CAAEX2000002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1BRwI8saXEFyvJfmRRm5sa",
				},
				href: "https://api.spotify.com/v1/tracks/1BRwI8saXEFyvJfmRRm5sa",
				id: "1BRwI8saXEFyvJfmRRm5sa",
				name: "Dryden Mine",
				uri: "spotify:track:1BRwI8saXEFyvJfmRRm5sa",
			},
		},
		{
			added_at: "2021-05-25T20:52:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6TnHmvNVu4K5gx5HOmeix2",
					},
					href: "https://api.spotify.com/v1/albums/6TnHmvNVu4K5gx5HOmeix2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ec37ff43698d4ca47d092efd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ec37ff43698d4ca47d092efd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ec37ff43698d4ca47d092efd",
							width: 64,
						},
					],
					name: "Ich bin das Chaos",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5tnBvlSSCNHIWS5IvOlnE8",
						},
						href: "https://api.spotify.com/v1/artists/5tnBvlSSCNHIWS5IvOlnE8",
						name: "Judith Holofernes",
						uri: "spotify:artist:5tnBvlSSCNHIWS5IvOlnE8",
					},
				],
				external_ids: {
					isrc: "DETO31600284",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3lYf4mGKYjMK706DnldaIa",
				},
				href: "https://api.spotify.com/v1/tracks/3lYf4mGKYjMK706DnldaIa",
				id: "3lYf4mGKYjMK706DnldaIa",
				name: "Analogpunk",
				uri: "spotify:track:3lYf4mGKYjMK706DnldaIa",
			},
		},
		{
			added_at: "2021-05-25T20:53:09Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2HM4djxg7rizgGx8XrKqGo",
					},
					href: "https://api.spotify.com/v1/albums/2HM4djxg7rizgGx8XrKqGo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2734a12e4fc1c755c9a3de83e83",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e024a12e4fc1c755c9a3de83e83",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048514a12e4fc1c755c9a3de83e83",
							width: 64,
						},
					],
					name: "Expedition ins O",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4uJ0Z35toYgdlrDGF4eFY2",
						},
						href: "https://api.spotify.com/v1/artists/4uJ0Z35toYgdlrDGF4eFY2",
						name: "Käptn Peng",
						uri: "spotify:artist:4uJ0Z35toYgdlrDGF4eFY2",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4Y7wUypNxLefo23dQexEFV",
						},
						href: "https://api.spotify.com/v1/artists/4Y7wUypNxLefo23dQexEFV",
						name: "Die Tentakel von Delphi",
						uri: "spotify:artist:4Y7wUypNxLefo23dQexEFV",
					},
				],
				external_ids: {
					isrc: "DEZ901300183",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4bkVbtSNfCa8TgTKGf3OCW",
				},
				href: "https://api.spotify.com/v1/tracks/4bkVbtSNfCa8TgTKGf3OCW",
				id: "4bkVbtSNfCa8TgTKGf3OCW",
				name: "Sockosophie",
				uri: "spotify:track:4bkVbtSNfCa8TgTKGf3OCW",
			},
		},
		{
			added_at: "2021-05-25T20:53:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3QcSBJBZqZ1m5iJ2SzsFCJ",
					},
					href: "https://api.spotify.com/v1/albums/3QcSBJBZqZ1m5iJ2SzsFCJ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737f9c3465e062c2556d212bd1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027f9c3465e062c2556d212bd1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517f9c3465e062c2556d212bd1",
							width: 64,
						},
					],
					name: "Formidable",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3yxkBjohRhCuyo2sn9IjwK",
						},
						href: "https://api.spotify.com/v1/artists/3yxkBjohRhCuyo2sn9IjwK",
						name: "La Bronze",
						uri: "spotify:artist:3yxkBjohRhCuyo2sn9IjwK",
					},
				],
				external_ids: {
					isrc: "CAJ621547020",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6b6EZlsyiCpCBWj2ZCOnmX",
				},
				href: "https://api.spotify.com/v1/tracks/6b6EZlsyiCpCBWj2ZCOnmX",
				id: "6b6EZlsyiCpCBWj2ZCOnmX",
				name: "Formidable",
				uri: "spotify:track:6b6EZlsyiCpCBWj2ZCOnmX",
			},
		},
		{
			added_at: "2021-05-25T20:53:33Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/33HIE0PoNIJRwjvgGB6iXL",
					},
					href: "https://api.spotify.com/v1/albums/33HIE0PoNIJRwjvgGB6iXL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27370240c994193b9cf69acb040",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0270240c994193b9cf69acb040",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485170240c994193b9cf69acb040",
							width: 64,
						},
					],
					name: "This City Isn't Big Enough",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4HemfSCDgnPiHQh8Z6iyd6",
						},
						href: "https://api.spotify.com/v1/artists/4HemfSCDgnPiHQh8Z6iyd6",
						name: "Apes of the State",
						uri: "spotify:artist:4HemfSCDgnPiHQh8Z6iyd6",
					},
				],
				external_ids: {
					isrc: "QM4DW1601634",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3DWAKDbWqivzjZ5wGQJP8Z",
				},
				href: "https://api.spotify.com/v1/tracks/3DWAKDbWqivzjZ5wGQJP8Z",
				id: "3DWAKDbWqivzjZ5wGQJP8Z",
				name: "Bill Collectors Theme Song",
				uri: "spotify:track:3DWAKDbWqivzjZ5wGQJP8Z",
			},
		},
		{
			added_at: "2021-05-25T20:53:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2b3RQnbP0kfVW71OJzgh71",
					},
					href: "https://api.spotify.com/v1/albums/2b3RQnbP0kfVW71OJzgh71",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b7653b9383c28f82bb571cbe",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b7653b9383c28f82bb571cbe",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b7653b9383c28f82bb571cbe",
							width: 64,
						},
					],
					name: "Iron Brass",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/27OMJyTDex4dZqZjsfDYwK",
						},
						href: "https://api.spotify.com/v1/artists/27OMJyTDex4dZqZjsfDYwK",
						name: "Brass Délirium",
						uri: "spotify:artist:27OMJyTDex4dZqZjsfDYwK",
					},
				],
				external_ids: {
					isrc: "NLPM11722912",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1Rv6StWj27YtxeoO07purn",
				},
				href: "https://api.spotify.com/v1/tracks/1Rv6StWj27YtxeoO07purn",
				id: "1Rv6StWj27YtxeoO07purn",
				name: "Carry on My Wayward Son - Brass Version",
				uri: "spotify:track:1Rv6StWj27YtxeoO07purn",
			},
		},
		{
			added_at: "2021-05-25T20:53:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3RUS8ORrDvni7BRvm92Xe7",
					},
					href: "https://api.spotify.com/v1/albums/3RUS8ORrDvni7BRvm92Xe7",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27395547dcbfd66bd7da92820c1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0295547dcbfd66bd7da92820c1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485195547dcbfd66bd7da92820c1",
							width: 64,
						},
					],
					name: "20.000 Meilen unter dem Yeah",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5HK21vFGCSj9b81nLOP9Cr",
						},
						href: "https://api.spotify.com/v1/artists/5HK21vFGCSj9b81nLOP9Cr",
						name: "Captain Gips",
						uri: "spotify:artist:5HK21vFGCSj9b81nLOP9Cr",
					},
				],
				external_ids: {
					isrc: "DEBT91300244",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2ZY3H0KvoUKMaR3HNpeOCx",
				},
				href: "https://api.spotify.com/v1/tracks/2ZY3H0KvoUKMaR3HNpeOCx",
				id: "2ZY3H0KvoUKMaR3HNpeOCx",
				name: "Hug Life",
				uri: "spotify:track:2ZY3H0KvoUKMaR3HNpeOCx",
			},
		},
		{
			added_at: "2021-05-25T20:54:01Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2rwi8vVy77g6ixrdTS3o8O",
					},
					href: "https://api.spotify.com/v1/albums/2rwi8vVy77g6ixrdTS3o8O",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273124954ea83148f6652188f81",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02124954ea83148f6652188f81",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851124954ea83148f6652188f81",
							width: 64,
						},
					],
					name: "Hypnophonic",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4bTTaQVaf03641We5lnIRI",
						},
						href: "https://api.spotify.com/v1/artists/4bTTaQVaf03641We5lnIRI",
						name: "Äl Jawala",
						uri: "spotify:artist:4bTTaQVaf03641We5lnIRI",
					},
				],
				external_ids: {
					isrc: "DESW71500081",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6rRX2qkhHxoxwJE0mgbafw",
				},
				href: "https://api.spotify.com/v1/tracks/6rRX2qkhHxoxwJE0mgbafw",
				id: "6rRX2qkhHxoxwJE0mgbafw",
				name: "Wake Up",
				uri: "spotify:track:6rRX2qkhHxoxwJE0mgbafw",
			},
		},
		{
			added_at: "2021-05-25T20:54:09Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/33HIE0PoNIJRwjvgGB6iXL",
					},
					href: "https://api.spotify.com/v1/albums/33HIE0PoNIJRwjvgGB6iXL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27370240c994193b9cf69acb040",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0270240c994193b9cf69acb040",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485170240c994193b9cf69acb040",
							width: 64,
						},
					],
					name: "This City Isn't Big Enough",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4HemfSCDgnPiHQh8Z6iyd6",
						},
						href: "https://api.spotify.com/v1/artists/4HemfSCDgnPiHQh8Z6iyd6",
						name: "Apes of the State",
						uri: "spotify:artist:4HemfSCDgnPiHQh8Z6iyd6",
					},
				],
				external_ids: {
					isrc: "QM4DW1601639",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4SYZZNgqbsyH3FveJFrYUA",
				},
				href: "https://api.spotify.com/v1/tracks/4SYZZNgqbsyH3FveJFrYUA",
				id: "4SYZZNgqbsyH3FveJFrYUA",
				name: "I Listened",
				uri: "spotify:track:4SYZZNgqbsyH3FveJFrYUA",
			},
		},
		{
			added_at: "2021-05-25T20:54:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1KPrzlaKozFUOMrDv7AH7Z",
					},
					href: "https://api.spotify.com/v1/albums/1KPrzlaKozFUOMrDv7AH7Z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731f0ca42352e23b6575e8735e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021f0ca42352e23b6575e8735e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511f0ca42352e23b6575e8735e",
							width: 64,
						},
					],
					name: "Das nullte Kapitel",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4uJ0Z35toYgdlrDGF4eFY2",
						},
						href: "https://api.spotify.com/v1/artists/4uJ0Z35toYgdlrDGF4eFY2",
						name: "Käptn Peng",
						uri: "spotify:artist:4uJ0Z35toYgdlrDGF4eFY2",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4Y7wUypNxLefo23dQexEFV",
						},
						href: "https://api.spotify.com/v1/artists/4Y7wUypNxLefo23dQexEFV",
						name: "Die Tentakel von Delphi",
						uri: "spotify:artist:4Y7wUypNxLefo23dQexEFV",
					},
				],
				external_ids: {
					isrc: "DEZ901700134",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1rEVYOEfQRHTCTU0UaeKwt",
				},
				href: "https://api.spotify.com/v1/tracks/1rEVYOEfQRHTCTU0UaeKwt",
				id: "1rEVYOEfQRHTCTU0UaeKwt",
				name: "Gelernt",
				uri: "spotify:track:1rEVYOEfQRHTCTU0UaeKwt",
			},
		},
		{
			added_at: "2021-05-25T20:54:35Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2lCbb5vW8kIWOuXPBKsRUV",
					},
					href: "https://api.spotify.com/v1/albums/2lCbb5vW8kIWOuXPBKsRUV",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f98bff086b0abb412dc04cb1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f98bff086b0abb412dc04cb1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f98bff086b0abb412dc04cb1",
							width: 64,
						},
					],
					name: "Atomic",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5mgr0FFpvy267wKVAYg8qp",
						},
						href: "https://api.spotify.com/v1/artists/5mgr0FFpvy267wKVAYg8qp",
						name: "Lit",
						uri: "spotify:artist:5mgr0FFpvy267wKVAYg8qp",
					},
				],
				external_ids: {
					isrc: "USRC10000400",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4aQ0Ay5BP6oSylwU3uZqiY",
				},
				href: "https://api.spotify.com/v1/tracks/4aQ0Ay5BP6oSylwU3uZqiY",
				id: "4aQ0Ay5BP6oSylwU3uZqiY",
				name: "Over My Head",
				uri: "spotify:track:4aQ0Ay5BP6oSylwU3uZqiY",
			},
		},
		{
			added_at: "2021-05-25T20:54:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0uRgp488f4SX8NcJ5p1GqI",
					},
					href: "https://api.spotify.com/v1/albums/0uRgp488f4SX8NcJ5p1GqI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e45db56c3d64cff1da2effaa",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e45db56c3d64cff1da2effaa",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e45db56c3d64cff1da2effaa",
							width: 64,
						},
					],
					name: "Foreplay",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/41DGOfz7IFMVvf9wKAzeZS",
						},
						href: "https://api.spotify.com/v1/artists/41DGOfz7IFMVvf9wKAzeZS",
						name: "Jalen Santoy",
						uri: "spotify:artist:41DGOfz7IFMVvf9wKAzeZS",
					},
				],
				external_ids: {
					isrc: "USUYG1106731",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/28luqgS4NCuFKP6YSOtia5",
				},
				href: "https://api.spotify.com/v1/tracks/28luqgS4NCuFKP6YSOtia5",
				id: "28luqgS4NCuFKP6YSOtia5",
				name: "Foreplay",
				uri: "spotify:track:28luqgS4NCuFKP6YSOtia5",
			},
		},
		{
			added_at: "2021-05-25T20:54:50Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6sBioVA395DP0zi1DBOXfP",
					},
					href: "https://api.spotify.com/v1/albums/6sBioVA395DP0zi1DBOXfP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731285a7f0958b9d9d157735cd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021285a7f0958b9d9d157735cd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511285a7f0958b9d9d157735cd",
							width: 64,
						},
					],
					name: "Why Do You Love Me Satan?",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/11uBWTI3N04egjQAL8nxiz",
						},
						href: "https://api.spotify.com/v1/artists/11uBWTI3N04egjQAL8nxiz",
						name: "Fucking Werewolf Asso",
						uri: "spotify:artist:11uBWTI3N04egjQAL8nxiz",
					},
				],
				external_ids: {
					isrc: "QM6P41494313",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/31deshMzthQpyEBKkawdwj",
				},
				href: "https://api.spotify.com/v1/tracks/31deshMzthQpyEBKkawdwj",
				id: "31deshMzthQpyEBKkawdwj",
				name: "Your Ex Doesn't Mark Treasures",
				uri: "spotify:track:31deshMzthQpyEBKkawdwj",
			},
		},
		{
			added_at: "2021-05-25T20:54:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1lb4LE7svFTW89hY0NCp4y",
					},
					href: "https://api.spotify.com/v1/albums/1lb4LE7svFTW89hY0NCp4y",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a138c9bd9ad88103238b9024",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a138c9bd9ad88103238b9024",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a138c9bd9ad88103238b9024",
							width: 64,
						},
					],
					name: "Mountains",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1JvTUHnkJ8yiTQfOKDdArt",
						},
						href: "https://api.spotify.com/v1/artists/1JvTUHnkJ8yiTQfOKDdArt",
						name: "Majozi",
						uri: "spotify:artist:1JvTUHnkJ8yiTQfOKDdArt",
					},
				],
				external_ids: {
					isrc: "ZAUM71500096",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6yOQXdBxlxCxafPqWwa6PY",
				},
				href: "https://api.spotify.com/v1/tracks/6yOQXdBxlxCxafPqWwa6PY",
				id: "6yOQXdBxlxCxafPqWwa6PY",
				name: "Fire",
				uri: "spotify:track:6yOQXdBxlxCxafPqWwa6PY",
			},
		},
		{
			added_at: "2021-05-25T20:55:14Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2D1unY2fNNBOILCQ6hPMMx",
					},
					href: "https://api.spotify.com/v1/albums/2D1unY2fNNBOILCQ6hPMMx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731ddf20d6d44f47ceddaeef28",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021ddf20d6d44f47ceddaeef28",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511ddf20d6d44f47ceddaeef28",
							width: 64,
						},
					],
					name: "Así Lo Hago Yo",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6HomUrLEVWcZjlXQTEjMyb",
						},
						href: "https://api.spotify.com/v1/artists/6HomUrLEVWcZjlXQTEjMyb",
						name: "Ona Mafalda",
						uri: "spotify:artist:6HomUrLEVWcZjlXQTEjMyb",
					},
				],
				external_ids: {
					isrc: "FR10S2150052",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4IiLt9R6h5faO3Fy7FRJOE",
				},
				href: "https://api.spotify.com/v1/tracks/4IiLt9R6h5faO3Fy7FRJOE",
				id: "4IiLt9R6h5faO3Fy7FRJOE",
				name: "Así Lo Hago Yo",
				uri: "spotify:track:4IiLt9R6h5faO3Fy7FRJOE",
			},
		},
		{
			added_at: "2021-05-25T20:55:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/10EDo7lcOhyu3uNarJe8f3",
					},
					href: "https://api.spotify.com/v1/albums/10EDo7lcOhyu3uNarJe8f3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273adbb180348724bfce63f422f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02adbb180348724bfce63f422f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851adbb180348724bfce63f422f",
							width: 64,
						},
					],
					name: "พื้นที่ทับซ้อน",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3KlfbBoTPmF2TwJxFzveRI",
						},
						href: "https://api.spotify.com/v1/artists/3KlfbBoTPmF2TwJxFzveRI",
						name: "Jintara Poonlarp",
						uri: "spotify:artist:3KlfbBoTPmF2TwJxFzveRI",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7xHveeQskRixx5G7G2bFLZ",
						},
						href: "https://api.spotify.com/v1/artists/7xHveeQskRixx5G7G2bFLZ",
						name: "กระต่าย พรรณนิภา",
						uri: "spotify:artist:7xHveeQskRixx5G7G2bFLZ",
					},
				],
				external_ids: {
					isrc: "FR59R1964034",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0XouAm93oemdV607wmzdbg",
				},
				href: "https://api.spotify.com/v1/tracks/0XouAm93oemdV607wmzdbg",
				id: "0XouAm93oemdV607wmzdbg",
				name: "พื้นที่ทับซ้อน",
				uri: "spotify:track:0XouAm93oemdV607wmzdbg",
			},
		},
		{
			added_at: "2021-05-25T20:55:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Vr0HJnNJoZAvLwnI7dhZl",
					},
					href: "https://api.spotify.com/v1/albums/5Vr0HJnNJoZAvLwnI7dhZl",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27302ec15ea01a9c5a212ba30bf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0202ec15ea01a9c5a212ba30bf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485102ec15ea01a9c5a212ba30bf",
							width: 64,
						},
					],
					name: "Beneath The Brine",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/44CB1c0W2h1XR2vB7AKpa7",
						},
						href: "https://api.spotify.com/v1/artists/44CB1c0W2h1XR2vB7AKpa7",
						name: "The Family Crest",
						uri: "spotify:artist:44CB1c0W2h1XR2vB7AKpa7",
					},
				],
				external_ids: {
					isrc: "QMM3X1304404",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5SuRudOviff3UMJYqCiNlx",
				},
				href: "https://api.spotify.com/v1/tracks/5SuRudOviff3UMJYqCiNlx",
				id: "5SuRudOviff3UMJYqCiNlx",
				name: "Howl",
				uri: "spotify:track:5SuRudOviff3UMJYqCiNlx",
			},
		},
		{
			added_at: "2021-05-25T20:56:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4KFyuG1e7yTOknV9Pm893S",
					},
					href: "https://api.spotify.com/v1/albums/4KFyuG1e7yTOknV9Pm893S",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739747d32371a2d8ae811d32b4",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029747d32371a2d8ae811d32b4",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519747d32371a2d8ae811d32b4",
							width: 64,
						},
					],
					name: "The Lost Boys Original Motion Picture Soundtrack",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0HyZTRkZ8UuhJKlIqBihqn",
						},
						href: "https://api.spotify.com/v1/artists/0HyZTRkZ8UuhJKlIqBihqn",
						name: "Tim Cappello",
						uri: "spotify:artist:0HyZTRkZ8UuhJKlIqBihqn",
					},
				],
				external_ids: {
					isrc: "USAT20109090",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0ClgwgBbok62NjS6iWxY4p",
				},
				href: "https://api.spotify.com/v1/tracks/0ClgwgBbok62NjS6iWxY4p",
				id: "0ClgwgBbok62NjS6iWxY4p",
				name: "I Still Believe",
				uri: "spotify:track:0ClgwgBbok62NjS6iWxY4p",
			},
		},
		{
			added_at: "2021-05-25T20:56:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1BJMCEXQ7JmuVlJ6cYbe3x",
					},
					href: "https://api.spotify.com/v1/albums/1BJMCEXQ7JmuVlJ6cYbe3x",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bdc6bc37f3812d2a834bffba",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bdc6bc37f3812d2a834bffba",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bdc6bc37f3812d2a834bffba",
							width: 64,
						},
					],
					name: "What Now",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/39vA9YljbnOApXKniLWBZv",
						},
						href: "https://api.spotify.com/v1/artists/39vA9YljbnOApXKniLWBZv",
						name: "Sylvan Esso",
						uri: "spotify:artist:39vA9YljbnOApXKniLWBZv",
					},
				],
				external_ids: {
					isrc: "USC4R1601982",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0idjTHGhGRBdWTmsalq3tF",
				},
				href: "https://api.spotify.com/v1/tracks/0idjTHGhGRBdWTmsalq3tF",
				id: "0idjTHGhGRBdWTmsalq3tF",
				name: "Radio",
				uri: "spotify:track:0idjTHGhGRBdWTmsalq3tF",
			},
		},
		{
			added_at: "2021-05-25T20:56:19Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1z8b6RN27ZzQPFfFpl2Ar9",
					},
					href: "https://api.spotify.com/v1/albums/1z8b6RN27ZzQPFfFpl2Ar9",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273081c99bd0e213c2637cebdf8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02081c99bd0e213c2637cebdf8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851081c99bd0e213c2637cebdf8",
							width: 64,
						},
					],
					name: "Earth in Revolt",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "CAODP2000015",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4MbINWd2Tr61selQ5AXsWt",
				},
				href: "https://api.spotify.com/v1/tracks/4MbINWd2Tr61selQ5AXsWt",
				id: "4MbINWd2Tr61selQ5AXsWt",
				name: "Earth in Revolt",
				uri: "spotify:track:4MbINWd2Tr61selQ5AXsWt",
			},
		},
		{
			added_at: "2021-05-25T20:56:25Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2xylDSNHqu5iJsmtxkyy9Z",
					},
					href: "https://api.spotify.com/v1/albums/2xylDSNHqu5iJsmtxkyy9Z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27349e08598d627378707884fed",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0249e08598d627378707884fed",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485149e08598d627378707884fed",
							width: 64,
						},
					],
					name: "Dam, Damn",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "QZES92027756",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1NqVion8GnrOX3cGMVPugv",
				},
				href: "https://api.spotify.com/v1/tracks/1NqVion8GnrOX3cGMVPugv",
				id: "1NqVion8GnrOX3cGMVPugv",
				name: "Dam, Damn",
				uri: "spotify:track:1NqVion8GnrOX3cGMVPugv",
			},
		},
		{
			added_at: "2021-05-25T20:56:32Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2aIBNK0YurTUSCLMZztA1x",
					},
					href: "https://api.spotify.com/v1/albums/2aIBNK0YurTUSCLMZztA1x",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27315c98178e76739cd31fe5566",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0215c98178e76739cd31fe5566",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485115c98178e76739cd31fe5566",
							width: 64,
						},
					],
					name: "Endless Space 2 (Original Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4DfwOelzJtTBZiXZ1tYo8D",
						},
						href: "https://api.spotify.com/v1/artists/4DfwOelzJtTBZiXZ1tYo8D",
						name: "Arnaud Roy",
						uri: "spotify:artist:4DfwOelzJtTBZiXZ1tYo8D",
					},
				],
				external_ids: {
					isrc: "USDY41745610",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7egKzZlshHm35DfzQxYT4V",
				},
				href: "https://api.spotify.com/v1/tracks/7egKzZlshHm35DfzQxYT4V",
				id: "7egKzZlshHm35DfzQxYT4V",
				name: "Across the Drift (Riftborn Theme)",
				uri: "spotify:track:7egKzZlshHm35DfzQxYT4V",
			},
		},
		{
			added_at: "2021-05-25T20:56:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7bSuHQPgcsVyhuvKFeaXJY",
					},
					href: "https://api.spotify.com/v1/albums/7bSuHQPgcsVyhuvKFeaXJY",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273976f9275c91171990657aa33",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02976f9275c91171990657aa33",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851976f9275c91171990657aa33",
							width: 64,
						},
					],
					name: "3T",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3QYKq7aMSiAu6gvfwNNFsv",
						},
						href: "https://api.spotify.com/v1/artists/3QYKq7aMSiAu6gvfwNNFsv",
						name: "YoungstaCPT",
						uri: "spotify:artist:3QYKq7aMSiAu6gvfwNNFsv",
					},
				],
				external_ids: {
					isrc: "US23A1501229",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5wJENB4XZqsAH8Wbcl1jY4",
				},
				href: "https://api.spotify.com/v1/tracks/5wJENB4XZqsAH8Wbcl1jY4",
				id: "5wJENB4XZqsAH8Wbcl1jY4",
				name: "The Cape Of Good Hope",
				uri: "spotify:track:5wJENB4XZqsAH8Wbcl1jY4",
			},
		},
		{
			added_at: "2021-05-25T20:56:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3LPNywXZclDOJzfdjg1NyE",
					},
					href: "https://api.spotify.com/v1/albums/3LPNywXZclDOJzfdjg1NyE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27357b7cedeb6f05357026d3e9c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0257b7cedeb6f05357026d3e9c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485157b7cedeb6f05357026d3e9c",
							width: 64,
						},
					],
					name: "Stup Virus",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7qiRNP9z0FhN63YcLmb8Ai",
						},
						href: "https://api.spotify.com/v1/artists/7qiRNP9z0FhN63YcLmb8Ai",
						name: "Stupeflip",
						uri: "spotify:artist:7qiRNP9z0FhN63YcLmb8Ai",
					},
				],
				external_ids: {
					isrc: "FR0Z21600020",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1TSEdNB2i9F30eMLmx6UIW",
				},
				href: "https://api.spotify.com/v1/tracks/1TSEdNB2i9F30eMLmx6UIW",
				id: "1TSEdNB2i9F30eMLmx6UIW",
				name: "The Antidote",
				uri: "spotify:track:1TSEdNB2i9F30eMLmx6UIW",
			},
		},
		{
			added_at: "2021-05-25T20:56:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6UFayanOUi9ybeZe9oDRep",
					},
					href: "https://api.spotify.com/v1/albums/6UFayanOUi9ybeZe9oDRep",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b9b583e89c2fc7eee3dffafa",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b9b583e89c2fc7eee3dffafa",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b9b583e89c2fc7eee3dffafa",
							width: 64,
						},
					],
					name: "KEN THE 390 ALL TIME BEST 〜 The 10th Anniversary 〜",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1tcHKxlx0TZ6MkHGO4QYv3",
						},
						href: "https://api.spotify.com/v1/artists/1tcHKxlx0TZ6MkHGO4QYv3",
						name: "KEN THE 390",
						uri: "spotify:artist:1tcHKxlx0TZ6MkHGO4QYv3",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0wygiZev26irRopIBGuoTR",
						},
						href: "https://api.spotify.com/v1/artists/0wygiZev26irRopIBGuoTR",
						name: "T-Pablow",
						uri: "spotify:artist:0wygiZev26irRopIBGuoTR",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4Kbxm7oCQujaslLxf9q7k2",
						},
						href: "https://api.spotify.com/v1/artists/4Kbxm7oCQujaslLxf9q7k2",
						name: "SKY-HI",
						uri: "spotify:artist:4Kbxm7oCQujaslLxf9q7k2",
					},
				],
				external_ids: {
					isrc: "JPB601603147",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7BUBM2XnhnWnYZhGDU1Mvm",
				},
				href: "https://api.spotify.com/v1/tracks/7BUBM2XnhnWnYZhGDU1Mvm",
				id: "7BUBM2XnhnWnYZhGDU1Mvm",
				name: "Turn Up",
				uri: "spotify:track:7BUBM2XnhnWnYZhGDU1Mvm",
			},
		},
		{
			added_at: "2021-05-25T20:57:14Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/20ri4VMeppyP7hXVzBopM3",
					},
					href: "https://api.spotify.com/v1/albums/20ri4VMeppyP7hXVzBopM3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e2c5dd2ecf5a253ffc5459bb",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e2c5dd2ecf5a253ffc5459bb",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e2c5dd2ecf5a253ffc5459bb",
							width: 64,
						},
					],
					name: "Small but Fortunate - EP",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2N4ZU6pkbOq3ZaXDIwJY07",
						},
						href: "https://api.spotify.com/v1/artists/2N4ZU6pkbOq3ZaXDIwJY07",
						name: "Heartland Nomads",
						uri: "spotify:artist:2N4ZU6pkbOq3ZaXDIwJY07",
					},
				],
				external_ids: {
					isrc: "ushm81616967",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0bmIMULMuxEpgeIR1H9QHN",
				},
				href: "https://api.spotify.com/v1/tracks/0bmIMULMuxEpgeIR1H9QHN",
				id: "0bmIMULMuxEpgeIR1H9QHN",
				name: "After All That You've Done",
				uri: "spotify:track:0bmIMULMuxEpgeIR1H9QHN",
			},
		},
		{
			added_at: "2021-05-25T20:57:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3T3bJi3cvwR5U7ihwgEwF1",
					},
					href: "https://api.spotify.com/v1/albums/3T3bJi3cvwR5U7ihwgEwF1",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b72cb7bed93d6e2fdf42cffe",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b72cb7bed93d6e2fdf42cffe",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b72cb7bed93d6e2fdf42cffe",
							width: 64,
						},
					],
					name: "Metropolis: The Chase Suite (Special Edition)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6ueGR6SWhUJfvEhqkvMsVs",
						},
						href: "https://api.spotify.com/v1/artists/6ueGR6SWhUJfvEhqkvMsVs",
						name: "Janelle Monáe",
						uri: "spotify:artist:6ueGR6SWhUJfvEhqkvMsVs",
					},
				],
				external_ids: {
					isrc: "USBB40801899",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4WehxcnPTxouLdfQhqANb3",
				},
				href: "https://api.spotify.com/v1/tracks/4WehxcnPTxouLdfQhqANb3",
				id: "4WehxcnPTxouLdfQhqANb3",
				name: "Many Moons",
				uri: "spotify:track:4WehxcnPTxouLdfQhqANb3",
			},
		},
		{
			added_at: "2021-05-25T20:58:53Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/20bkjspFsWh7ziPeFeB9xM",
					},
					href: "https://api.spotify.com/v1/albums/20bkjspFsWh7ziPeFeB9xM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273aa3a7399971d902e90e71095",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02aa3a7399971d902e90e71095",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851aa3a7399971d902e90e71095",
							width: 64,
						},
					],
					name: "Punch",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5Lm1CMoa8VOCBCLZesAcvc",
						},
						href: "https://api.spotify.com/v1/artists/5Lm1CMoa8VOCBCLZesAcvc",
						name: "Autoheart",
						uri: "spotify:artist:5Lm1CMoa8VOCBCLZesAcvc",
					},
				],
				external_ids: {
					isrc: "USV351345540",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1TsrGEUQWMA7t542V7ppuP",
				},
				href: "https://api.spotify.com/v1/tracks/1TsrGEUQWMA7t542V7ppuP",
				id: "1TsrGEUQWMA7t542V7ppuP",
				name: "Lent",
				uri: "spotify:track:1TsrGEUQWMA7t542V7ppuP",
			},
		},
		{
			added_at: "2021-05-25T20:59:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5VpFehGkXkYqqZeMehxRXo",
					},
					href: "https://api.spotify.com/v1/albums/5VpFehGkXkYqqZeMehxRXo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738240d3cef8ca4f545b66233d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028240d3cef8ca4f545b66233d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518240d3cef8ca4f545b66233d",
							width: 64,
						},
					],
					name: "Jump In",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4LzLMRGejol2nWDb61fLws",
						},
						href: "https://api.spotify.com/v1/artists/4LzLMRGejol2nWDb61fLws",
						name: "Atomic Drum Assembly",
						uri: "spotify:artist:4LzLMRGejol2nWDb61fLws",
					},
				],
				external_ids: {
					isrc: "UKSML1900006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4x7WkkEYYknsGuwLCxikBb",
				},
				href: "https://api.spotify.com/v1/tracks/4x7WkkEYYknsGuwLCxikBb",
				id: "4x7WkkEYYknsGuwLCxikBb",
				name: "5 Hand Clap",
				uri: "spotify:track:4x7WkkEYYknsGuwLCxikBb",
			},
		},
		{
			added_at: "2021-05-25T20:59:18Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3JTcvGpN6BFoaK9VPO59Ii",
					},
					href: "https://api.spotify.com/v1/albums/3JTcvGpN6BFoaK9VPO59Ii",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f3d802fd95f0e32ba3ab06ff",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f3d802fd95f0e32ba3ab06ff",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f3d802fd95f0e32ba3ab06ff",
							width: 64,
						},
					],
					name: "Fish & Chips",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7bcjgJLky9kVQ4GcrQTibn",
						},
						href: "https://api.spotify.com/v1/artists/7bcjgJLky9kVQ4GcrQTibn",
						name: "Grace Kelly",
						uri: "spotify:artist:7bcjgJLky9kVQ4GcrQTibn",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/12lHwk1GMNxnZF6pUMC4Sc",
						},
						href: "https://api.spotify.com/v1/artists/12lHwk1GMNxnZF6pUMC4Sc",
						name: "Leo P",
						uri: "spotify:artist:12lHwk1GMNxnZF6pUMC4Sc",
					},
				],
				external_ids: {
					isrc: "QM9SL1400027",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3Df8PG5JELd2kyXuzq0QlY",
				},
				href: "https://api.spotify.com/v1/tracks/3Df8PG5JELd2kyXuzq0QlY",
				id: "3Df8PG5JELd2kyXuzq0QlY",
				name: "Fish & Chips",
				uri: "spotify:track:3Df8PG5JELd2kyXuzq0QlY",
			},
		},
		{
			added_at: "2021-05-25T20:59:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/66sged5rvkN96Gwv6maDLL",
					},
					href: "https://api.spotify.com/v1/albums/66sged5rvkN96Gwv6maDLL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fc200cdfc5713deec7ec7d99",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fc200cdfc5713deec7ec7d99",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fc200cdfc5713deec7ec7d99",
							width: 64,
						},
					],
					name: "Hope & Sorrow",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3qwxSif06Qwzykdln8ZGfG",
						},
						href: "https://api.spotify.com/v1/artists/3qwxSif06Qwzykdln8ZGfG",
						name: "Wax Tailor",
						uri: "spotify:artist:3qwxSif06Qwzykdln8ZGfG",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0ea0AGPmJm32GT2ZRkk0Jg",
						},
						href: "https://api.spotify.com/v1/artists/0ea0AGPmJm32GT2ZRkk0Jg",
						name: "Marina Quaisse",
						uri: "spotify:artist:0ea0AGPmJm32GT2ZRkk0Jg",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/01L6jvexr6BpNIfs0wHGkn",
						},
						href: "https://api.spotify.com/v1/artists/01L6jvexr6BpNIfs0wHGkn",
						name: "ASM",
						uri: "spotify:artist:01L6jvexr6BpNIfs0wHGkn",
					},
				],
				external_ids: {
					isrc: "FR2DK0680070",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1Pcb0UUgHmTNQq2rojSq78",
				},
				href: "https://api.spotify.com/v1/tracks/1Pcb0UUgHmTNQq2rojSq78",
				id: "1Pcb0UUgHmTNQq2rojSq78",
				name: "Positively Inclined",
				uri: "spotify:track:1Pcb0UUgHmTNQq2rojSq78",
			},
		},
		{
			added_at: "2021-05-25T20:59:39Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5tdmyKWNxDlCvYCdJQKGoS",
					},
					href: "https://api.spotify.com/v1/albums/5tdmyKWNxDlCvYCdJQKGoS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733e7e7a06ef941871a2f51135",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023e7e7a06ef941871a2f51135",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513e7e7a06ef941871a2f51135",
							width: 64,
						},
					],
					name: "The Witcher (Music from the Netflix Original Series)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JnNzCUsHuDcUcBatOzuGP",
						},
						href: "https://api.spotify.com/v1/artists/0JnNzCUsHuDcUcBatOzuGP",
						name: "Sonya Belousova",
						uri: "spotify:artist:0JnNzCUsHuDcUcBatOzuGP",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2GGcFMw7PABKRpAS0lpYX6",
						},
						href: "https://api.spotify.com/v1/artists/2GGcFMw7PABKRpAS0lpYX6",
						name: "Giona Ostinelli",
						uri: "spotify:artist:2GGcFMw7PABKRpAS0lpYX6",
					},
				],
				external_ids: {
					isrc: "USQX92000221",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4UGOaZPk8uBm74Pc7hueQi",
				},
				href: "https://api.spotify.com/v1/tracks/4UGOaZPk8uBm74Pc7hueQi",
				id: "4UGOaZPk8uBm74Pc7hueQi",
				name: "Everytime You Leave",
				uri: "spotify:track:4UGOaZPk8uBm74Pc7hueQi",
			},
		},
		{
			added_at: "2021-05-25T20:59:49Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/54geghZhUleSbVnZEWE8Kx",
					},
					href: "https://api.spotify.com/v1/albums/54geghZhUleSbVnZEWE8Kx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273016caf2981eb3802a5538e3e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02016caf2981eb3802a5538e3e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851016caf2981eb3802a5538e3e",
							width: 64,
						},
					],
					name: "Divinity: Original Sin 2 (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7Fl4F5eJRtPMEl3jTYMUQt",
						},
						href: "https://api.spotify.com/v1/artists/7Fl4F5eJRtPMEl3jTYMUQt",
						name: "Borislav Slavov",
						uri: "spotify:artist:7Fl4F5eJRtPMEl3jTYMUQt",
					},
				],
				external_ids: {
					isrc: "FR10S1877287",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4CNeJ7jIAiPLDd2EjFsnyJ",
				},
				href: "https://api.spotify.com/v1/tracks/4CNeJ7jIAiPLDd2EjFsnyJ",
				id: "4CNeJ7jIAiPLDd2EjFsnyJ",
				name: "Rivellon",
				uri: "spotify:track:4CNeJ7jIAiPLDd2EjFsnyJ",
			},
		},
		{
			added_at: "2021-05-25T20:59:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/54geghZhUleSbVnZEWE8Kx",
					},
					href: "https://api.spotify.com/v1/albums/54geghZhUleSbVnZEWE8Kx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273016caf2981eb3802a5538e3e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02016caf2981eb3802a5538e3e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851016caf2981eb3802a5538e3e",
							width: 64,
						},
					],
					name: "Divinity: Original Sin 2 (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7Fl4F5eJRtPMEl3jTYMUQt",
						},
						href: "https://api.spotify.com/v1/artists/7Fl4F5eJRtPMEl3jTYMUQt",
						name: "Borislav Slavov",
						uri: "spotify:artist:7Fl4F5eJRtPMEl3jTYMUQt",
					},
				],
				external_ids: {
					isrc: "FR10S1877320",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6mvTVLdtCZfofsnhEVNuio",
				},
				href: "https://api.spotify.com/v1/tracks/6mvTVLdtCZfofsnhEVNuio",
				id: "6mvTVLdtCZfofsnhEVNuio",
				name: "Sing for Me - Lohse Version",
				uri: "spotify:track:6mvTVLdtCZfofsnhEVNuio",
			},
		},
		{
			added_at: "2021-05-25T21:00:10Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1VTO1nQUykwGQPaFYhMkCV",
					},
					href: "https://api.spotify.com/v1/albums/1VTO1nQUykwGQPaFYhMkCV",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273962c658ac3cc09008752de6c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02962c658ac3cc09008752de6c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851962c658ac3cc09008752de6c",
							width: 64,
						},
					],
					name: "Full Heal",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0msFH3bBUxrdUpEFqf2ZuO",
						},
						href: "https://api.spotify.com/v1/artists/0msFH3bBUxrdUpEFqf2ZuO",
						name: "Waking Aida",
						uri: "spotify:artist:0msFH3bBUxrdUpEFqf2ZuO",
					},
				],
				external_ids: {
					isrc: "GBHLW1501815",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5MHkE3coAG4i05NaTlCsus",
				},
				href: "https://api.spotify.com/v1/tracks/5MHkE3coAG4i05NaTlCsus",
				id: "5MHkE3coAG4i05NaTlCsus",
				name: "Blue Shelled",
				uri: "spotify:track:5MHkE3coAG4i05NaTlCsus",
			},
		},
		{
			added_at: "2021-05-25T21:00:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/58V2FHbOwheevE3GrzXfC0",
					},
					href: "https://api.spotify.com/v1/albums/58V2FHbOwheevE3GrzXfC0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d4760bc77085a1d14a24726b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d4760bc77085a1d14a24726b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d4760bc77085a1d14a24726b",
							width: 64,
						},
					],
					name: "With Love",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2A8lfnul2PK2wGs1Rgsb95",
						},
						href: "https://api.spotify.com/v1/artists/2A8lfnul2PK2wGs1Rgsb95",
						name: "Yom",
						uri: "spotify:artist:2A8lfnul2PK2wGs1Rgsb95",
					},
				],
				external_ids: {
					isrc: "FRY391013206",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4ohMwvod5tqAe2nT8ZpZAu",
				},
				href: "https://api.spotify.com/v1/tracks/4ohMwvod5tqAe2nT8ZpZAu",
				id: "4ohMwvod5tqAe2nT8ZpZAu",
				name: "Highway to Constantinople",
				uri: "spotify:track:4ohMwvod5tqAe2nT8ZpZAu",
			},
		},
		{
			added_at: "2021-05-25T21:00:28Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6oQ3rNYTyUSh9xsPmPt0jE",
					},
					href: "https://api.spotify.com/v1/albums/6oQ3rNYTyUSh9xsPmPt0jE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732996e8e83c3a3d1e95247e36",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022996e8e83c3a3d1e95247e36",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512996e8e83c3a3d1e95247e36",
							width: 64,
						},
					],
					name: "Kipo And The Age Of Wonderbeasts (Season 1 Mixtape)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1Z655SWPPTWDNgktUY19JR",
						},
						href: "https://api.spotify.com/v1/artists/1Z655SWPPTWDNgktUY19JR",
						name: "Daniel Rojas",
						uri: "spotify:artist:1Z655SWPPTWDNgktUY19JR",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4sOO6yAihCujmCOYKF84aI",
						},
						href: "https://api.spotify.com/v1/artists/4sOO6yAihCujmCOYKF84aI",
						name: "Michelle Gonzalez",
						uri: "spotify:artist:4sOO6yAihCujmCOYKF84aI",
					},
				],
				external_ids: {
					isrc: "USQ4E2005261",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0gWhYmqR5LtSwHmUMWjESk",
				},
				href: "https://api.spotify.com/v1/tracks/0gWhYmqR5LtSwHmUMWjESk",
				id: "0gWhYmqR5LtSwHmUMWjESk",
				name: "Don't Stop Now",
				uri: "spotify:track:0gWhYmqR5LtSwHmUMWjESk",
			},
		},
		{
			added_at: "2021-05-25T21:00:37Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0pJzCHsO6l84GIgFDmqklW",
					},
					href: "https://api.spotify.com/v1/albums/0pJzCHsO6l84GIgFDmqklW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c02c5baabb2fc45b84047c91",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c02c5baabb2fc45b84047c91",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c02c5baabb2fc45b84047c91",
							width: 64,
						},
					],
					name: "Time's End II: Majora's Mask (Music Inspired by the Game) [Remixes]",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5cf9GoOwKQ2GaBFZT6Wvwo",
						},
						href: "https://api.spotify.com/v1/artists/5cf9GoOwKQ2GaBFZT6Wvwo",
						name: "Theophany",
						uri: "spotify:artist:5cf9GoOwKQ2GaBFZT6Wvwo",
					},
				],
				external_ids: {
					isrc: "QZ6K41600006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4lTteyedqRHBWmqEzrcuMG",
				},
				href: "https://api.spotify.com/v1/tracks/4lTteyedqRHBWmqEzrcuMG",
				id: "4lTteyedqRHBWmqEzrcuMG",
				name: "Deku Palace - Remix",
				uri: "spotify:track:4lTteyedqRHBWmqEzrcuMG",
			},
		},
		{
			added_at: "2021-05-25T21:00:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6eAgddnBOSltLT7s6b7JgN",
					},
					href: "https://api.spotify.com/v1/albums/6eAgddnBOSltLT7s6b7JgN",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27354517e6b45b3a944e3626226",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0254517e6b45b3a944e3626226",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485154517e6b45b3a944e3626226",
							width: 64,
						},
					],
					name: "Southbound (Original Motion Picture Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/14u0T05uITnrkbvHv9htjy",
						},
						href: "https://api.spotify.com/v1/artists/14u0T05uITnrkbvHv9htjy",
						name: "The Gifted",
						uri: "spotify:artist:14u0T05uITnrkbvHv9htjy",
					},
				],
				external_ids: {
					isrc: "QMDA61508624",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2V7hcPABDNOJ1qN7uPz4dr",
				},
				href: "https://api.spotify.com/v1/tracks/2V7hcPABDNOJ1qN7uPz4dr",
				id: "2V7hcPABDNOJ1qN7uPz4dr",
				name: "Terminal Ferocity",
				uri: "spotify:track:2V7hcPABDNOJ1qN7uPz4dr",
			},
		},
		{
			added_at: "2021-07-12T18:43:27Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/42aoto1sBvka4dm2Uxd5av",
					},
					href: "https://api.spotify.com/v1/albums/42aoto1sBvka4dm2Uxd5av",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731f49b900ff403bf83a73da27",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021f49b900ff403bf83a73da27",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511f49b900ff403bf83a73da27",
							width: 64,
						},
					],
					name: "Early Bird",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/46oL0QioEQMSSvkxxifCok",
						},
						href: "https://api.spotify.com/v1/artists/46oL0QioEQMSSvkxxifCok",
						name: "B-complex",
						uri: "spotify:artist:46oL0QioEQMSSvkxxifCok",
					},
				],
				external_ids: {
					isrc: "DEZ721500237",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2W8icqT4BmJHYzXA5NK6B9",
				},
				href: "https://api.spotify.com/v1/tracks/2W8icqT4BmJHYzXA5NK6B9",
				id: "2W8icqT4BmJHYzXA5NK6B9",
				name: "Early Bird",
				uri: "spotify:track:2W8icqT4BmJHYzXA5NK6B9",
			},
		},
		{
			added_at: "2021-07-12T18:44:04Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6jm46oKPLCpP26iDJZpb1k",
					},
					href: "https://api.spotify.com/v1/albums/6jm46oKPLCpP26iDJZpb1k",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273555e5c7be2aed3d12fa3ce53",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02555e5c7be2aed3d12fa3ce53",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851555e5c7be2aed3d12fa3ce53",
							width: 64,
						},
					],
					name: "People",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/09kohMK0MSHgpmKWiQeQ5E",
						},
						href: "https://api.spotify.com/v1/artists/09kohMK0MSHgpmKWiQeQ5E",
						name: "The Burning Hell",
						uri: "spotify:artist:09kohMK0MSHgpmKWiQeQ5E",
					},
				],
				external_ids: {
					isrc: "TCABU1428163",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0CcoLA8qUu985eBFHWJltd",
				},
				href: "https://api.spotify.com/v1/tracks/0CcoLA8qUu985eBFHWJltd",
				id: "0CcoLA8qUu985eBFHWJltd",
				name: "Amateur Rappers",
				uri: "spotify:track:0CcoLA8qUu985eBFHWJltd",
			},
		},
		{
			added_at: "2021-07-12T18:44:16Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7zeQeo6KcOzoKoYuHGsxV0",
					},
					href: "https://api.spotify.com/v1/albums/7zeQeo6KcOzoKoYuHGsxV0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e66ded31d230a59f6691a7bd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e66ded31d230a59f6691a7bd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e66ded31d230a59f6691a7bd",
							width: 64,
						},
					],
					name: "Never Work",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/02JeXo3gnf1C2oB0RFqgl4",
						},
						href: "https://api.spotify.com/v1/artists/02JeXo3gnf1C2oB0RFqgl4",
						name: "Ariel Sharratt",
						uri: "spotify:artist:02JeXo3gnf1C2oB0RFqgl4",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6dgHdGPNTKmwKZawDhWjsf",
						},
						href: "https://api.spotify.com/v1/artists/6dgHdGPNTKmwKZawDhWjsf",
						name: "Mathias Kom",
						uri: "spotify:artist:6dgHdGPNTKmwKZawDhWjsf",
					},
				],
				external_ids: {
					isrc: "DEY211938107",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6zknNswy89NWL9weRdvO8J",
				},
				href: "https://api.spotify.com/v1/tracks/6zknNswy89NWL9weRdvO8J",
				id: "6zknNswy89NWL9weRdvO8J",
				name: "The Robots vs. Mrs. Patel",
				uri: "spotify:track:6zknNswy89NWL9weRdvO8J",
			},
		},
		{
			added_at: "2021-07-12T18:44:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6mtRtokPFBSEsvsfyAwFuJ",
					},
					href: "https://api.spotify.com/v1/albums/6mtRtokPFBSEsvsfyAwFuJ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e48ecd88cddcfd1d9e05745a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e48ecd88cddcfd1d9e05745a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e48ecd88cddcfd1d9e05745a",
							width: 64,
						},
					],
					name: "Scream: The TV Series Seasons 1 & 2 (Original Television Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1fbkVAnlEb34awQtWEDa6W",
						},
						href: "https://api.spotify.com/v1/artists/1fbkVAnlEb34awQtWEDa6W",
						name: "Jeremy Zuckerman",
						uri: "spotify:artist:1fbkVAnlEb34awQtWEDa6W",
					},
				],
				external_ids: {
					isrc: "USLS51690901",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2RqoMjGkGajT3d39tK2Gt8",
				},
				href: "https://api.spotify.com/v1/tracks/2RqoMjGkGajT3d39tK2Gt8",
				id: "2RqoMjGkGajT3d39tK2Gt8",
				name: "The Rules",
				uri: "spotify:track:2RqoMjGkGajT3d39tK2Gt8",
			},
		},
	],
};

var project51 = {
	items: [
		{
			added_at: "2021-07-12T18:45:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3fktCq03viuUu3pFwQqArW",
					},
					href: "https://api.spotify.com/v1/albums/3fktCq03viuUu3pFwQqArW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738f3157bd24f37b1996e20b61",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028f3157bd24f37b1996e20b61",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518f3157bd24f37b1996e20b61",
							width: 64,
						},
					],
					name: "Acceptance",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1WjBIvYAnZTkTh5UiZNwlR",
						},
						href: "https://api.spotify.com/v1/artists/1WjBIvYAnZTkTh5UiZNwlR",
						name: "Oliver Koletzki",
						uri: "spotify:artist:1WjBIvYAnZTkTh5UiZNwlR",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4jPpDbD1ERO3zjBon97ECM",
						},
						href: "https://api.spotify.com/v1/artists/4jPpDbD1ERO3zjBon97ECM",
						name: "Niko Schwind",
						uri: "spotify:artist:4jPpDbD1ERO3zjBon97ECM",
					},
				],
				external_ids: {
					isrc: "DEXO52017912",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2lXdClPLTHf6feWj03uEKH",
				},
				href: "https://api.spotify.com/v1/tracks/2lXdClPLTHf6feWj03uEKH",
				id: "2lXdClPLTHf6feWj03uEKH",
				name: "Acceptance",
				uri: "spotify:track:2lXdClPLTHf6feWj03uEKH",
			},
		},
		{
			added_at: "2021-07-12T18:45:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6Wk9SccyDfLuTBli6YDa9H",
					},
					href: "https://api.spotify.com/v1/albums/6Wk9SccyDfLuTBli6YDa9H",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27385e138b59aecb6fc27fa3f56",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0285e138b59aecb6fc27fa3f56",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485185e138b59aecb6fc27fa3f56",
							width: 64,
						},
					],
					name: "Fear In the Town of the Living Dead",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/41WV5TRkqaqE84nspGDiXZ",
						},
						href: "https://api.spotify.com/v1/artists/41WV5TRkqaqE84nspGDiXZ",
						name: "Fabio Frizzi",
						uri: "spotify:artist:41WV5TRkqaqE84nspGDiXZ",
					},
				],
				external_ids: {
					isrc: "IT7151160703",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/79KMm750gXCVN1DKkjCjey",
				},
				href: "https://api.spotify.com/v1/tracks/79KMm750gXCVN1DKkjCjey",
				id: "79KMm750gXCVN1DKkjCjey",
				name: "Mystery's Apotheosis",
				uri: "spotify:track:79KMm750gXCVN1DKkjCjey",
			},
		},
		{
			added_at: "2021-07-12T18:45:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1YmzE0FBAZp6okyiaPMe9q",
					},
					href: "https://api.spotify.com/v1/albums/1YmzE0FBAZp6okyiaPMe9q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a7c15c60264268390c527e49",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a7c15c60264268390c527e49",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a7c15c60264268390c527e49",
							width: 64,
						},
					],
					name: "Force Within",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5AlZJWZWGDivSUOb6ZwmcL",
						},
						href: "https://api.spotify.com/v1/artists/5AlZJWZWGDivSUOb6ZwmcL",
						name: "SireN",
						uri: "spotify:artist:5AlZJWZWGDivSUOb6ZwmcL",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0WYyiIRm1f3iJmfpgKIYJn",
						},
						href: "https://api.spotify.com/v1/artists/0WYyiIRm1f3iJmfpgKIYJn",
						name: "Jolene Shao",
						uri: "spotify:artist:0WYyiIRm1f3iJmfpgKIYJn",
					},
				],
				external_ids: {
					isrc: "TCAEB1948722",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/217E0nHzvPsf8qKUHGsDkg",
				},
				href: "https://api.spotify.com/v1/tracks/217E0nHzvPsf8qKUHGsDkg",
				id: "217E0nHzvPsf8qKUHGsDkg",
				name: "Force Within",
				uri: "spotify:track:217E0nHzvPsf8qKUHGsDkg",
			},
		},
		{
			added_at: "2021-07-12T18:45:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6yeQJW3vqFBYVtiKa9AFlU",
					},
					href: "https://api.spotify.com/v1/albums/6yeQJW3vqFBYVtiKa9AFlU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273de826d5be014063e933537d1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02de826d5be014063e933537d1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851de826d5be014063e933537d1",
							width: 64,
						},
					],
					name: "Barikata Pride",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4xhjJZS6jLaPkdRdDcr2rj",
						},
						href: "https://api.spotify.com/v1/artists/4xhjJZS6jLaPkdRdDcr2rj",
						name: "BATTEN GIRLS",
						uri: "spotify:artist:4xhjJZS6jLaPkdRdDcr2rj",
					},
				],
				external_ids: {
					isrc: "TCJPO2165229",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6k5EpDRTu9MAbpLVILchWu",
				},
				href: "https://api.spotify.com/v1/tracks/6k5EpDRTu9MAbpLVILchWu",
				id: "6k5EpDRTu9MAbpLVILchWu",
				name: "Barikata Pride",
				uri: "spotify:track:6k5EpDRTu9MAbpLVILchWu",
			},
		},
		{
			added_at: "2021-07-12T18:46:11Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6D1jCTzjOQDEndmIvsKNmV",
					},
					href: "https://api.spotify.com/v1/albums/6D1jCTzjOQDEndmIvsKNmV",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733a0fd202c0d37b0942305854",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023a0fd202c0d37b0942305854",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513a0fd202c0d37b0942305854",
							width: 64,
						},
					],
					name: "Lila Samt",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2qXe9nDyQBHyMLduqEwQZb",
						},
						href: "https://api.spotify.com/v1/artists/2qXe9nDyQBHyMLduqEwQZb",
						name: "Sookee",
						uri: "spotify:artist:2qXe9nDyQBHyMLduqEwQZb",
					},
				],
				external_ids: {
					isrc: "DEZ391400416",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7DAfvIsOZdEoZnNkTWLlbr",
				},
				href: "https://api.spotify.com/v1/tracks/7DAfvIsOZdEoZnNkTWLlbr",
				id: "7DAfvIsOZdEoZnNkTWLlbr",
				name: "Menschen sind komisch",
				uri: "spotify:track:7DAfvIsOZdEoZnNkTWLlbr",
			},
		},
		{
			added_at: "2021-07-12T18:46:49Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7KW4DCCHcUMXe5lmuYj6L4",
					},
					href: "https://api.spotify.com/v1/albums/7KW4DCCHcUMXe5lmuYj6L4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730429a7a4b542837e0b08e19b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020429a7a4b542837e0b08e19b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510429a7a4b542837e0b08e19b",
							width: 64,
						},
					],
					name: "Fog of War, Pt. 2",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6dmtXvWajv4QchLv0paiHP",
						},
						href: "https://api.spotify.com/v1/artists/6dmtXvWajv4QchLv0paiHP",
						name: "T.o.n.e-z",
						uri: "spotify:artist:6dmtXvWajv4QchLv0paiHP",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/70R9g8qvUPgPQXHqy6nlYU",
						},
						href: "https://api.spotify.com/v1/artists/70R9g8qvUPgPQXHqy6nlYU",
						name: "Rebecca Strong",
						uri: "spotify:artist:70R9g8qvUPgPQXHqy6nlYU",
					},
				],
				external_ids: {
					isrc: "QZFYX1907161",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6Pbkzx69eYnqmzOJjfYUGf",
				},
				href: "https://api.spotify.com/v1/tracks/6Pbkzx69eYnqmzOJjfYUGf",
				id: "6Pbkzx69eYnqmzOJjfYUGf",
				name: "My Nightmare",
				uri: "spotify:track:6Pbkzx69eYnqmzOJjfYUGf",
			},
		},
		{
			added_at: "2021-07-12T18:46:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/31ajEKC4KLOWTnaP0IkJun",
					},
					href: "https://api.spotify.com/v1/albums/31ajEKC4KLOWTnaP0IkJun",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27388eb9ca46034b392aa6c5124",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0288eb9ca46034b392aa6c5124",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485188eb9ca46034b392aa6c5124",
							width: 64,
						},
					],
					name: "Webs",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5rgp60RQWM2lsyrHloYD7D",
						},
						href: "https://api.spotify.com/v1/artists/5rgp60RQWM2lsyrHloYD7D",
						name: "RamonPang",
						uri: "spotify:artist:5rgp60RQWM2lsyrHloYD7D",
					},
				],
				external_ids: {
					isrc: "QZHNC2030932",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5P5h3Cq2HjIkd7yARy2ME2",
				},
				href: "https://api.spotify.com/v1/tracks/5P5h3Cq2HjIkd7yARy2ME2",
				id: "5P5h3Cq2HjIkd7yARy2ME2",
				name: "Webs",
				uri: "spotify:track:5P5h3Cq2HjIkd7yARy2ME2",
			},
		},
		{
			added_at: "2021-07-12T18:47:15Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/06lvZ4YlyDpUtvQax1E0q3",
					},
					href: "https://api.spotify.com/v1/albums/06lvZ4YlyDpUtvQax1E0q3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b8b8e341a8bdd7a3dcc4e410",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b8b8e341a8bdd7a3dcc4e410",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b8b8e341a8bdd7a3dcc4e410",
							width: 64,
						},
					],
					name: "Too Big to Fail",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0vTPs09qUvi059GtFhnrIt",
						},
						href: "https://api.spotify.com/v1/artists/0vTPs09qUvi059GtFhnrIt",
						name: "One Love Brass Band",
						uri: "spotify:artist:0vTPs09qUvi059GtFhnrIt",
					},
				],
				external_ids: {
					isrc: "USYF61600002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3ocLiRrjCgDAMHW4xZY8LZ",
				},
				href: "https://api.spotify.com/v1/tracks/3ocLiRrjCgDAMHW4xZY8LZ",
				id: "3ocLiRrjCgDAMHW4xZY8LZ",
				name: "Too Big to Fail",
				uri: "spotify:track:3ocLiRrjCgDAMHW4xZY8LZ",
			},
		},
		{
			added_at: "2021-09-28T13:30:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7k7gYGrKpsC6e1kAmL2nvz",
					},
					href: "https://api.spotify.com/v1/albums/7k7gYGrKpsC6e1kAmL2nvz",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737feb8b8cdea9479b3159f631",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027feb8b8cdea9479b3159f631",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517feb8b8cdea9479b3159f631",
							width: 64,
						},
					],
					name: "Disenchanted Hearts Unite",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3KtOvpYuKClAuYxJqdITm6",
						},
						href: "https://api.spotify.com/v1/artists/3KtOvpYuKClAuYxJqdITm6",
						name: "Tullycraft",
						uri: "spotify:artist:3KtOvpYuKClAuYxJqdITm6",
					},
				],
				external_ids: {
					isrc: "US4CB0510297",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0XVQtD2C7x44m4OEO02Pbx",
				},
				href: "https://api.spotify.com/v1/tracks/0XVQtD2C7x44m4OEO02Pbx",
				id: "0XVQtD2C7x44m4OEO02Pbx",
				name: "Secretly Minnesotan",
				uri: "spotify:track:0XVQtD2C7x44m4OEO02Pbx",
			},
		},
		{
			added_at: "2021-09-28T13:31:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5SP5LHmSHGHwpvsL4eE46w",
					},
					href: "https://api.spotify.com/v1/albums/5SP5LHmSHGHwpvsL4eE46w",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739a77b411f42a7311e6dad68c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029a77b411f42a7311e6dad68c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519a77b411f42a7311e6dad68c",
							width: 64,
						},
					],
					name: "Mel Bryant & the Mercy Makers",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/504bzeQSGBk6rSsfrPjjvw",
						},
						href: "https://api.spotify.com/v1/artists/504bzeQSGBk6rSsfrPjjvw",
						name: "Mel Bryant & the Mercy Makers",
						uri: "spotify:artist:504bzeQSGBk6rSsfrPjjvw",
					},
				],
				external_ids: {
					isrc: "QZDA82099697",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4Cu9eIDavwgabGjIhiu5Be",
				},
				href: "https://api.spotify.com/v1/tracks/4Cu9eIDavwgabGjIhiu5Be",
				id: "4Cu9eIDavwgabGjIhiu5Be",
				name: "Never Thought",
				uri: "spotify:track:4Cu9eIDavwgabGjIhiu5Be",
			},
		},
		{
			added_at: "2021-09-28T13:31:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5r5xol9bAOBhk8UFlt97XL",
					},
					href: "https://api.spotify.com/v1/albums/5r5xol9bAOBhk8UFlt97XL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e4df8ef9668cc5ee4be76a42",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e4df8ef9668cc5ee4be76a42",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e4df8ef9668cc5ee4be76a42",
							width: 64,
						},
					],
					name: "Vetvi",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2PQ9UX4kWDE3mf2fYGRzqF",
						},
						href: "https://api.spotify.com/v1/artists/2PQ9UX4kWDE3mf2fYGRzqF",
						name: "Theodor Bastard",
						uri: "spotify:artist:2PQ9UX4kWDE3mf2fYGRzqF",
					},
				],
				external_ids: {
					isrc: "USCGJ1542974",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/13XiPe0elBWmYigTRsbTNm",
				},
				href: "https://api.spotify.com/v1/tracks/13XiPe0elBWmYigTRsbTNm",
				id: "13XiPe0elBWmYigTRsbTNm",
				name: "Kukushka",
				uri: "spotify:track:13XiPe0elBWmYigTRsbTNm",
			},
		},
		{
			added_at: "2021-09-28T13:31:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4mlMp0NnvzrQJhmLla8m7f",
					},
					href: "https://api.spotify.com/v1/albums/4mlMp0NnvzrQJhmLla8m7f",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ba106c2236e04d4460ea5145",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ba106c2236e04d4460ea5145",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ba106c2236e04d4460ea5145",
							width: 64,
						},
					],
					name: "Seafarer",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/03wtLmrx51o98GKld7O0RU",
						},
						href: "https://api.spotify.com/v1/artists/03wtLmrx51o98GKld7O0RU",
						name: "Lindy-Fay Hella",
						uri: "spotify:artist:03wtLmrx51o98GKld7O0RU",
					},
				],
				external_ids: {
					isrc: "DENI11900054",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5EriQ99E48OccHlhOkkzXj",
				},
				href: "https://api.spotify.com/v1/tracks/5EriQ99E48OccHlhOkkzXj",
				id: "5EriQ99E48OccHlhOkkzXj",
				name: "Seafarer",
				uri: "spotify:track:5EriQ99E48OccHlhOkkzXj",
			},
		},
		{
			added_at: "2021-09-28T13:31:39Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6YIA45KnCATXRzPFOeA9S8",
					},
					href: "https://api.spotify.com/v1/albums/6YIA45KnCATXRzPFOeA9S8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a949df0e18e6405dbd0f3bbc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a949df0e18e6405dbd0f3bbc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a949df0e18e6405dbd0f3bbc",
							width: 64,
						},
					],
					name: "The Gereg",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0b2B3PwcYzQAhuJacmcYgc",
						},
						href: "https://api.spotify.com/v1/artists/0b2B3PwcYzQAhuJacmcYgc",
						name: "The HU",
						uri: "spotify:artist:0b2B3PwcYzQAhuJacmcYgc",
					},
				],
				external_ids: {
					isrc: "TCADY1880557",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5hISmTJXBXdOes4htbUhGk",
				},
				href: "https://api.spotify.com/v1/tracks/5hISmTJXBXdOes4htbUhGk",
				id: "5hISmTJXBXdOes4htbUhGk",
				name: "Wolf Totem",
				uri: "spotify:track:5hISmTJXBXdOes4htbUhGk",
			},
		},
		{
			added_at: "2021-09-28T13:31:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0bPiaza1NaQbzdg8s1CJOn",
					},
					href: "https://api.spotify.com/v1/albums/0bPiaza1NaQbzdg8s1CJOn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737385dd2ccea282a4aa44acb0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027385dd2ccea282a4aa44acb0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517385dd2ccea282a4aa44acb0",
							width: 64,
						},
					],
					name: "Juno Goes to the Big House",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0KZzhF4tqJGaVOrXXONmCX",
						},
						href: "https://api.spotify.com/v1/artists/0KZzhF4tqJGaVOrXXONmCX",
						name: "Sorry Mom",
						uri: "spotify:artist:0KZzhF4tqJGaVOrXXONmCX",
					},
				],
				external_ids: {
					isrc: "QZHN32142623",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/70WFvp0yF9m1asIb60gKcj",
				},
				href: "https://api.spotify.com/v1/tracks/70WFvp0yF9m1asIb60gKcj",
				id: "70WFvp0yF9m1asIb60gKcj",
				name: "I Fucked Yr Mom",
				uri: "spotify:track:70WFvp0yF9m1asIb60gKcj",
			},
		},
		{
			added_at: "2021-09-28T13:32:07Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1KPrzlaKozFUOMrDv7AH7Z",
					},
					href: "https://api.spotify.com/v1/albums/1KPrzlaKozFUOMrDv7AH7Z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731f0ca42352e23b6575e8735e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021f0ca42352e23b6575e8735e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511f0ca42352e23b6575e8735e",
							width: 64,
						},
					],
					name: "Das nullte Kapitel",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4uJ0Z35toYgdlrDGF4eFY2",
						},
						href: "https://api.spotify.com/v1/artists/4uJ0Z35toYgdlrDGF4eFY2",
						name: "Käptn Peng",
						uri: "spotify:artist:4uJ0Z35toYgdlrDGF4eFY2",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4Y7wUypNxLefo23dQexEFV",
						},
						href: "https://api.spotify.com/v1/artists/4Y7wUypNxLefo23dQexEFV",
						name: "Die Tentakel von Delphi",
						uri: "spotify:artist:4Y7wUypNxLefo23dQexEFV",
					},
				],
				external_ids: {
					isrc: "DEZ901700134",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1rEVYOEfQRHTCTU0UaeKwt",
				},
				href: "https://api.spotify.com/v1/tracks/1rEVYOEfQRHTCTU0UaeKwt",
				id: "1rEVYOEfQRHTCTU0UaeKwt",
				name: "Gelernt",
				uri: "spotify:track:1rEVYOEfQRHTCTU0UaeKwt",
			},
		},
		{
			added_at: "2021-09-28T13:32:15Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6I3Q8oaO7PLkNXy2GZwLyx",
					},
					href: "https://api.spotify.com/v1/albums/6I3Q8oaO7PLkNXy2GZwLyx",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730f69c77c14cec20451f34de5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020f69c77c14cec20451f34de5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510f69c77c14cec20451f34de5",
							width: 64,
						},
					],
					name: "Distant Calls",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3FLAsHmd1U0io4Qfd5Bobv",
						},
						href: "https://api.spotify.com/v1/artists/3FLAsHmd1U0io4Qfd5Bobv",
						name: "Andrey Vinogradov",
						uri: "spotify:artist:3FLAsHmd1U0io4Qfd5Bobv",
					},
				],
				external_ids: {
					isrc: "uscgh2072041",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2LdrZbFwSWcgcjacbF4Rds",
				},
				href: "https://api.spotify.com/v1/tracks/2LdrZbFwSWcgcjacbF4Rds",
				id: "2LdrZbFwSWcgcjacbF4Rds",
				name: "Reverse Dance",
				uri: "spotify:track:2LdrZbFwSWcgcjacbF4Rds",
			},
		},
		{
			added_at: "2021-09-28T13:32:29Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0e2wc6hSRQAz4miIT8oANo",
					},
					href: "https://api.spotify.com/v1/albums/0e2wc6hSRQAz4miIT8oANo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273239e91986b6d36deabfe7912",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02239e91986b6d36deabfe7912",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851239e91986b6d36deabfe7912",
							width: 64,
						},
					],
					name: "Visions",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4ryUQQjxKmNpnOgXe5jFmH",
						},
						href: "https://api.spotify.com/v1/artists/4ryUQQjxKmNpnOgXe5jFmH",
						name: "Guilhem Desq",
						uri: "spotify:artist:4ryUQQjxKmNpnOgXe5jFmH",
					},
				],
				external_ids: {
					isrc: "FR9W11718306",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1IFcut13RX9SduibZiDc1B",
				},
				href: "https://api.spotify.com/v1/tracks/1IFcut13RX9SduibZiDc1B",
				id: "1IFcut13RX9SduibZiDc1B",
				name: "Le château magique",
				uri: "spotify:track:1IFcut13RX9SduibZiDc1B",
			},
		},
		{
			added_at: "2021-09-28T13:32:43Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5jxfwbREGFGqfq5lQWbKHu",
					},
					href: "https://api.spotify.com/v1/albums/5jxfwbREGFGqfq5lQWbKHu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e587d0b83b8f0e438008c498",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e587d0b83b8f0e438008c498",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e587d0b83b8f0e438008c498",
							width: 64,
						},
					],
					name: "Sound Collection",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1px9GAyQx638IcEW9cb7Jx",
						},
						href: "https://api.spotify.com/v1/artists/1px9GAyQx638IcEW9cb7Jx",
						name: "Aun J-Classic Orchestra",
						uri: "spotify:artist:1px9GAyQx638IcEW9cb7Jx",
					},
				],
				external_ids: {
					isrc: "JPZ921216614",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1LKvEifUwo7GMYW0236NjD",
				},
				href: "https://api.spotify.com/v1/tracks/1LKvEifUwo7GMYW0236NjD",
				id: "1LKvEifUwo7GMYW0236NjD",
				name: "乱〜RAN",
				uri: "spotify:track:1LKvEifUwo7GMYW0236NjD",
			},
		},
		{
			added_at: "2021-09-28T13:33:01Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1U4uAuysKEYk4NuVfXJ0Fo",
					},
					href: "https://api.spotify.com/v1/albums/1U4uAuysKEYk4NuVfXJ0Fo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273db079862bcc48709be44911f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02db079862bcc48709be44911f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851db079862bcc48709be44911f",
							width: 64,
						},
					],
					name: "The Dark Crystal: Age of Resistance, Vol. 1 (Music from the Netflix Original Series)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7LbEDjJKrmWoMcN3OpaNnR",
						},
						href: "https://api.spotify.com/v1/artists/7LbEDjJKrmWoMcN3OpaNnR",
						name: "Daniel Pemberton",
						uri: "spotify:artist:7LbEDjJKrmWoMcN3OpaNnR",
					},
				],
				external_ids: {
					isrc: "QZ8BZ1900449",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7e7VTU1EMQNPEtUmEzbphl",
				},
				href: "https://api.spotify.com/v1/tracks/7e7VTU1EMQNPEtUmEzbphl",
				id: "7e7VTU1EMQNPEtUmEzbphl",
				name: "Rian + Mira Dreamfast",
				uri: "spotify:track:7e7VTU1EMQNPEtUmEzbphl",
			},
		},
		{
			added_at: "2021-09-28T13:33:09Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3ca8rTTGzriBOcq2JnHchZ",
					},
					href: "https://api.spotify.com/v1/albums/3ca8rTTGzriBOcq2JnHchZ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739d36f9d7165c0b14777cb676",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029d36f9d7165c0b14777cb676",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519d36f9d7165c0b14777cb676",
							width: 64,
						},
					],
					name: "North Hills",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0CDUUM6KNRvgBFYIbWxJwV",
						},
						href: "https://api.spotify.com/v1/artists/0CDUUM6KNRvgBFYIbWxJwV",
						name: "Dawes",
						uri: "spotify:artist:0CDUUM6KNRvgBFYIbWxJwV",
					},
				],
				external_ids: {
					isrc: "USD010800005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6y9Jj7NVcBOCsnn9Ps2CPN",
				},
				href: "https://api.spotify.com/v1/tracks/6y9Jj7NVcBOCsnn9Ps2CPN",
				id: "6y9Jj7NVcBOCsnn9Ps2CPN",
				name: "When My Time Comes",
				uri: "spotify:track:6y9Jj7NVcBOCsnn9Ps2CPN",
			},
		},
		{
			added_at: "2021-09-28T13:33:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6ywz37u44PjnZzDpvDRx12",
					},
					href: "https://api.spotify.com/v1/albums/6ywz37u44PjnZzDpvDRx12",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a5508c161fcd4472d66ce4be",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a5508c161fcd4472d66ce4be",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a5508c161fcd4472d66ce4be",
							width: 64,
						},
					],
					name: "Move",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7DBXiFez54rbGjqw1tWi5w",
						},
						href: "https://api.spotify.com/v1/artists/7DBXiFez54rbGjqw1tWi5w",
						name: "I Fight Dragons",
						uri: "spotify:artist:7DBXiFez54rbGjqw1tWi5w",
					},
				],
				external_ids: {
					isrc: "QZK6N2194627",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1TPkED0JIjWUamWxbzgjRh",
				},
				href: "https://api.spotify.com/v1/tracks/1TPkED0JIjWUamWxbzgjRh",
				id: "1TPkED0JIjWUamWxbzgjRh",
				name: "Move",
				uri: "spotify:track:1TPkED0JIjWUamWxbzgjRh",
			},
		},
		{
			added_at: "2021-12-29T15:18:24Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/00ZYGi6nctIRRxcEQoFk5q",
					},
					href: "https://api.spotify.com/v1/albums/00ZYGi6nctIRRxcEQoFk5q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735abb5b1605504c292c3596c9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025abb5b1605504c292c3596c9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515abb5b1605504c292c3596c9",
							width: 64,
						},
					],
					name: "Music Inspired By The Witcher 3: Wild Hunt",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0w0HPjk2dHxh88brnNOBUA",
						},
						href: "https://api.spotify.com/v1/artists/0w0HPjk2dHxh88brnNOBUA",
						name: "Gilead",
						uri: "spotify:artist:0w0HPjk2dHxh88brnNOBUA",
					},
				],
				external_ids: {
					isrc: "PLI361210520",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0Nd3gxlMRmI0s5HdLK7miH",
				},
				href: "https://api.spotify.com/v1/tracks/0Nd3gxlMRmI0s5HdLK7miH",
				id: "0Nd3gxlMRmI0s5HdLK7miH",
				name: "Vatt'ghern",
				uri: "spotify:track:0Nd3gxlMRmI0s5HdLK7miH",
			},
		},
		{
			added_at: "2021-12-29T15:18:33Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2gGPKURfX0FxDL0tgJsas1",
					},
					href: "https://api.spotify.com/v1/albums/2gGPKURfX0FxDL0tgJsas1",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273730ed87b6bb3bb39665504fb",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02730ed87b6bb3bb39665504fb",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851730ed87b6bb3bb39665504fb",
							width: 64,
						},
					],
					name: "The Mitchells vs The Machines (Original Motion Picture Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5kdYrM3h2sB1Eid5tDf6Hk",
						},
						href: "https://api.spotify.com/v1/artists/5kdYrM3h2sB1Eid5tDf6Hk",
						name: "Alex Lahey",
						uri: "spotify:artist:5kdYrM3h2sB1Eid5tDf6Hk",
					},
				],
				external_ids: {
					isrc: "US4DG2000296",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7e6FePRWR5WXUxjf5SaKGi",
				},
				href: "https://api.spotify.com/v1/tracks/7e6FePRWR5WXUxjf5SaKGi",
				id: "7e6FePRWR5WXUxjf5SaKGi",
				name: "On My Way",
				uri: "spotify:track:7e6FePRWR5WXUxjf5SaKGi",
			},
		},
		{
			added_at: "2021-12-29T15:18:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/07aaKzFZ3GiSdL5sLp5GMl",
					},
					href: "https://api.spotify.com/v1/albums/07aaKzFZ3GiSdL5sLp5GMl",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730ea88fda803aec4a3b64159e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020ea88fda803aec4a3b64159e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510ea88fda803aec4a3b64159e",
							width: 64,
						},
					],
					name: "that's some spooky stuff",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5tXUIbGjW1uqXoy8cPW8MB",
						},
						href: "https://api.spotify.com/v1/artists/5tXUIbGjW1uqXoy8cPW8MB",
						name: "meganeko",
						uri: "spotify:artist:5tXUIbGjW1uqXoy8cPW8MB",
					},
				],
				external_ids: {
					isrc: "SEYOK1772093",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4QbdKT1LrqQEZHRDu8kU4O",
				},
				href: "https://api.spotify.com/v1/tracks/4QbdKT1LrqQEZHRDu8kU4O",
				id: "4QbdKT1LrqQEZHRDu8kU4O",
				name: "that's some spooky stuff",
				uri: "spotify:track:4QbdKT1LrqQEZHRDu8kU4O",
			},
		},
		{
			added_at: "2021-12-29T15:18:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/23JijmRgLWloEMnFUwHJa2",
					},
					href: "https://api.spotify.com/v1/albums/23JijmRgLWloEMnFUwHJa2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730e68fefa1408603f54a4d664",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020e68fefa1408603f54a4d664",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510e68fefa1408603f54a4d664",
							width: 64,
						},
					],
					name: "I'm Allergic To Dogs!",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0NB5HROxc8dDBXpkIi1v3d",
						},
						href: "https://api.spotify.com/v1/artists/0NB5HROxc8dDBXpkIi1v3d",
						name: "Remi Wolf",
						uri: "spotify:artist:0NB5HROxc8dDBXpkIi1v3d",
					},
				],
				external_ids: {
					isrc: "USUG12002141",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1xNknVNOolLB4oQeEtNBX2",
				},
				href: "https://api.spotify.com/v1/tracks/1xNknVNOolLB4oQeEtNBX2",
				id: "1xNknVNOolLB4oQeEtNBX2",
				name: "Hello Hello Hello",
				uri: "spotify:track:1xNknVNOolLB4oQeEtNBX2",
			},
		},
		{
			added_at: "2021-12-29T15:19:09Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1HhYq0O2RJjb6qOZ6iOVip",
					},
					href: "https://api.spotify.com/v1/albums/1HhYq0O2RJjb6qOZ6iOVip",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273445ba5aad0cfff1d1dbafc16",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02445ba5aad0cfff1d1dbafc16",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851445ba5aad0cfff1d1dbafc16",
							width: 64,
						},
					],
					name: "Lastman (Bande sonore originale de la série)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3mmSetlOpSY5RqzThxN3y7",
						},
						href: "https://api.spotify.com/v1/artists/3mmSetlOpSY5RqzThxN3y7",
						name: "Fred Avril",
						uri: "spotify:artist:3mmSetlOpSY5RqzThxN3y7",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0I0rJLmOcQ9CBb3KxYw6Xd",
						},
						href: "https://api.spotify.com/v1/artists/0I0rJLmOcQ9CBb3KxYw6Xd",
						name: "Philippe Monthaye",
						uri: "spotify:artist:0I0rJLmOcQ9CBb3KxYw6Xd",
					},
				],
				external_ids: {
					isrc: "FR9W11703204",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4CFPvGgBt837YvAmH4qa9x",
				},
				href: "https://api.spotify.com/v1/tracks/4CFPvGgBt837YvAmH4qa9x",
				id: "4CFPvGgBt837YvAmH4qa9x",
				name: "Fire (Lastman Theme)",
				uri: "spotify:track:4CFPvGgBt837YvAmH4qa9x",
			},
		},
		{
			added_at: "2021-12-29T15:19:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/418tEkWnpAD7HHYWZfNgj4",
					},
					href: "https://api.spotify.com/v1/albums/418tEkWnpAD7HHYWZfNgj4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d1326b56c5f90589a50d0665",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d1326b56c5f90589a50d0665",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d1326b56c5f90589a50d0665",
							width: 64,
						},
					],
					name: "0 A.D. (Original Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/15CY3W5z62xKPpnPVSvz4E",
						},
						href: "https://api.spotify.com/v1/artists/15CY3W5z62xKPpnPVSvz4E",
						name: "Omri Lahav",
						uri: "spotify:artist:15CY3W5z62xKPpnPVSvz4E",
					},
				],
				external_ids: {
					isrc: "QZ6K41801368",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7zZcO839khupVn8e5YeeMk",
				},
				href: "https://api.spotify.com/v1/tracks/7zZcO839khupVn8e5YeeMk",
				id: "7zZcO839khupVn8e5YeeMk",
				name: "Honor Bound (0 A.D. Main Theme)",
				uri: "spotify:track:7zZcO839khupVn8e5YeeMk",
			},
		},
		{
			added_at: "2021-12-29T15:19:29Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3KT4VUjIHUenPEhEtWw6LQ",
					},
					href: "https://api.spotify.com/v1/albums/3KT4VUjIHUenPEhEtWw6LQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739c96602afd48742f988e363d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029c96602afd48742f988e363d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519c96602afd48742f988e363d",
							width: 64,
						},
					],
					name: "Warfare",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/20D6Jrpn4bZvOBq63Jisfx",
						},
						href: "https://api.spotify.com/v1/artists/20D6Jrpn4bZvOBq63Jisfx",
						name: "Katie Garfield",
						uri: "spotify:artist:20D6Jrpn4bZvOBq63Jisfx",
					},
				],
				external_ids: {
					isrc: "TCADR1870537",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3sUjhuPqm8fzLUrVCt208C",
				},
				href: "https://api.spotify.com/v1/tracks/3sUjhuPqm8fzLUrVCt208C",
				id: "3sUjhuPqm8fzLUrVCt208C",
				name: "Warfare",
				uri: "spotify:track:3sUjhuPqm8fzLUrVCt208C",
			},
		},
		{
			added_at: "2021-12-29T15:19:38Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5tqZLKfkECxhy2LJKoviuD",
					},
					href: "https://api.spotify.com/v1/albums/5tqZLKfkECxhy2LJKoviuD",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273db674a452a9cb50deb2baad0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02db674a452a9cb50deb2baad0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851db674a452a9cb50deb2baad0",
							width: 64,
						},
					],
					name: "Outside Voices",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0pCNk4D3E2xtszsm6hMsWr",
						},
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
				],
				external_ids: {
					isrc: "QMRSZ2102236",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2R4wc75daS9N4SH0RjGTGd",
				},
				href: "https://api.spotify.com/v1/tracks/2R4wc75daS9N4SH0RjGTGd",
				id: "2R4wc75daS9N4SH0RjGTGd",
				name: "I'm Afraid Of The Internet",
				uri: "spotify:track:2R4wc75daS9N4SH0RjGTGd",
			},
		},
		{
			added_at: "2021-12-29T15:19:45Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/351NUGZ1NAx2nyC00frzf3",
					},
					href: "https://api.spotify.com/v1/albums/351NUGZ1NAx2nyC00frzf3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273233095675c08e1f2fdb04402",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02233095675c08e1f2fdb04402",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851233095675c08e1f2fdb04402",
							width: 64,
						},
					],
					name: "Obstinate Brain",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "CAODP2000030",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/03pwp0qkjeihxRdmKl0haF",
				},
				href: "https://api.spotify.com/v1/tracks/03pwp0qkjeihxRdmKl0haF",
				id: "03pwp0qkjeihxRdmKl0haF",
				name: "Obstinate Brain",
				uri: "spotify:track:03pwp0qkjeihxRdmKl0haF",
			},
		},
		{
			added_at: "2021-12-29T15:19:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3iIBAbZkNYkvyEXdRe6pIZ",
					},
					href: "https://api.spotify.com/v1/albums/3iIBAbZkNYkvyEXdRe6pIZ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ab511b4193b46a6530600879",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ab511b4193b46a6530600879",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ab511b4193b46a6530600879",
							width: 64,
						},
					],
					name: "Left Of Cool",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5Zmur9D9gpr6tXyDrpnbOe",
						},
						href: "https://api.spotify.com/v1/artists/5Zmur9D9gpr6tXyDrpnbOe",
						name: "Béla Fleck and the Flecktones",
						uri: "spotify:artist:5Zmur9D9gpr6tXyDrpnbOe",
					},
				],
				external_ids: {
					isrc: "USWB19800215",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/22Ff1mPDh7MP3BQsZQT1Vj",
				},
				href: "https://api.spotify.com/v1/tracks/22Ff1mPDh7MP3BQsZQT1Vj",
				id: "22Ff1mPDh7MP3BQsZQT1Vj",
				name: "Big Country",
				uri: "spotify:track:22Ff1mPDh7MP3BQsZQT1Vj",
			},
		},
		{
			added_at: "2021-12-29T15:20:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5CoGyltsqHpgeuUffsU04Z",
					},
					href: "https://api.spotify.com/v1/albums/5CoGyltsqHpgeuUffsU04Z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c245c2621850589e8c8a7f3e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c245c2621850589e8c8a7f3e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c245c2621850589e8c8a7f3e",
							width: 64,
						},
					],
					name: "Exile",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3j24yoSFDD11h1OszJFfVY",
						},
						href: "https://api.spotify.com/v1/artists/3j24yoSFDD11h1OszJFfVY",
						name: "Sabrepulse",
						uri: "spotify:artist:3j24yoSFDD11h1OszJFfVY",
					},
				],
				external_ids: {
					isrc: "FR2X41816822",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0QyCOuZ3ulCIlNtSlHwmw8",
				},
				href: "https://api.spotify.com/v1/tracks/0QyCOuZ3ulCIlNtSlHwmw8",
				id: "0QyCOuZ3ulCIlNtSlHwmw8",
				name: "In the End We Are All Cosmic",
				uri: "spotify:track:0QyCOuZ3ulCIlNtSlHwmw8",
			},
		},
		{
			added_at: "2021-12-29T15:20:11Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2LsmD4QH5XNeP2pZ9H5C9h",
					},
					href: "https://api.spotify.com/v1/albums/2LsmD4QH5XNeP2pZ9H5C9h",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273069c911341d0f3d21f000f36",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02069c911341d0f3d21f000f36",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851069c911341d0f3d21f000f36",
							width: 64,
						},
					],
					name: "Even If We Don't Get Along",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/04KTuIKAn0UgWuZiWvBXoo",
						},
						href: "https://api.spotify.com/v1/artists/04KTuIKAn0UgWuZiWvBXoo",
						name: "Emanuel and the Fear",
						uri: "spotify:artist:04KTuIKAn0UgWuZiWvBXoo",
					},
				],
				external_ids: {
					isrc: "USSWN2100503",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4Xzbl76n3S0cPFwTw1m7r0",
				},
				href: "https://api.spotify.com/v1/tracks/4Xzbl76n3S0cPFwTw1m7r0",
				id: "4Xzbl76n3S0cPFwTw1m7r0",
				name: "Even If We Don't Get Along",
				uri: "spotify:track:4Xzbl76n3S0cPFwTw1m7r0",
			},
		},
		{
			added_at: "2021-12-29T15:20:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6NxZLVLGvjUsDz2rqdWGc4",
					},
					href: "https://api.spotify.com/v1/albums/6NxZLVLGvjUsDz2rqdWGc4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d189fc00c4c1c96e444d5fd2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d189fc00c4c1c96e444d5fd2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d189fc00c4c1c96e444d5fd2",
							width: 64,
						},
					],
					name: "Emanuel and the Fear - EP",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/04KTuIKAn0UgWuZiWvBXoo",
						},
						href: "https://api.spotify.com/v1/artists/04KTuIKAn0UgWuZiWvBXoo",
						name: "Emanuel and the Fear",
						uri: "spotify:artist:04KTuIKAn0UgWuZiWvBXoo",
					},
				],
				external_ids: {
					isrc: "USCL80900404",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6DG1cqIP71TEcpmbRbxFfi",
				},
				href: "https://api.spotify.com/v1/tracks/6DG1cqIP71TEcpmbRbxFfi",
				id: "6DG1cqIP71TEcpmbRbxFfi",
				name: "We're All Alright Tonight",
				uri: "spotify:track:6DG1cqIP71TEcpmbRbxFfi",
			},
		},
		{
			added_at: "2021-12-30T15:37:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Sq7ZgoJQQEY54oupmAtbu",
					},
					href: "https://api.spotify.com/v1/albums/5Sq7ZgoJQQEY54oupmAtbu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273eca9e4df1c2f9521aa2a85da",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02eca9e4df1c2f9521aa2a85da",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851eca9e4df1c2f9521aa2a85da",
							width: 64,
						},
					],
					name: "Thirstier",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3lrDYjsghBMfUTiLziD9q9",
						},
						href: "https://api.spotify.com/v1/artists/3lrDYjsghBMfUTiLziD9q9",
						name: "TORRES",
						uri: "spotify:artist:3lrDYjsghBMfUTiLziD9q9",
					},
				],
				external_ids: {
					isrc: "USMRG2175706",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4bmfLrrmwlBXJeyx448iMf",
				},
				href: "https://api.spotify.com/v1/tracks/4bmfLrrmwlBXJeyx448iMf",
				id: "4bmfLrrmwlBXJeyx448iMf",
				name: "Hug From a Dinosaur",
				uri: "spotify:track:4bmfLrrmwlBXJeyx448iMf",
			},
		},
		{
			added_at: "2022-01-21T16:03:18Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/64phTg2GszUYrFFDrfR5mj",
					},
					href: "https://api.spotify.com/v1/albums/64phTg2GszUYrFFDrfR5mj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735841d8df171c11e587cf8468",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025841d8df171c11e587cf8468",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515841d8df171c11e587cf8468",
							width: 64,
						},
					],
					name: "No Boyfriend November",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1EmAfvxlLwPpJRJ3hc6zr1",
						},
						href: "https://api.spotify.com/v1/artists/1EmAfvxlLwPpJRJ3hc6zr1",
						name: "Local News Legend",
						uri: "spotify:artist:1EmAfvxlLwPpJRJ3hc6zr1",
					},
				],
				external_ids: {
					isrc: "USDHM2107907",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7rJ4d23Fm0R3JzsvPLMHrn",
				},
				href: "https://api.spotify.com/v1/tracks/7rJ4d23Fm0R3JzsvPLMHrn",
				id: "7rJ4d23Fm0R3JzsvPLMHrn",
				name: "Get the Fuck Outta Here",
				uri: "spotify:track:7rJ4d23Fm0R3JzsvPLMHrn",
			},
		},
		{
			added_at: "2022-01-21T16:03:39Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2xBkc65OgZGIkPvGBwicky",
					},
					href: "https://api.spotify.com/v1/albums/2xBkc65OgZGIkPvGBwicky",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b5a8fec45d2aa09f7f7ac9ec",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b5a8fec45d2aa09f7f7ac9ec",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b5a8fec45d2aa09f7f7ac9ec",
							width: 64,
						},
					],
					name: "Exiles",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2VZNmg4vCnew4Pavo8zDdW",
						},
						href: "https://api.spotify.com/v1/artists/2VZNmg4vCnew4Pavo8zDdW",
						name: "Max Richter",
						uri: "spotify:artist:2VZNmg4vCnew4Pavo8zDdW",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1PlMcwoF2G03BqB1MDbXVt",
						},
						href: "https://api.spotify.com/v1/artists/1PlMcwoF2G03BqB1MDbXVt",
						name: "Baltic Sea Philharmonic",
						uri: "spotify:artist:1PlMcwoF2G03BqB1MDbXVt",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2WgYGKKKnmn7t11fcHZnt7",
						},
						href: "https://api.spotify.com/v1/artists/2WgYGKKKnmn7t11fcHZnt7",
						name: "Kristjan Järvi",
						uri: "spotify:artist:2WgYGKKKnmn7t11fcHZnt7",
					},
				],
				external_ids: {
					isrc: "DEN961904820",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2r5b69iXdPFwV7Mu5jkvRm",
				},
				href: "https://api.spotify.com/v1/tracks/2r5b69iXdPFwV7Mu5jkvRm",
				id: "2r5b69iXdPFwV7Mu5jkvRm",
				name: "Flowers Of Herself",
				uri: "spotify:track:2r5b69iXdPFwV7Mu5jkvRm",
			},
		},
		{
			added_at: "2022-01-21T16:03:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7rEcSbHJu1nlLZejCUVSrS",
					},
					href: "https://api.spotify.com/v1/albums/7rEcSbHJu1nlLZejCUVSrS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a00010454110ee40314347e5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a00010454110ee40314347e5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a00010454110ee40314347e5",
							width: 64,
						},
					],
					name: "Anthologio Gia Mikrous Kai Megalous",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0aFk1wZrmQnSHmbSMiZUes",
						},
						href: "https://api.spotify.com/v1/artists/0aFk1wZrmQnSHmbSMiZUes",
						name: "Onirama",
						uri: "spotify:artist:0aFk1wZrmQnSHmbSMiZUes",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0ItFUeOKHAShkEa2fb9mg3",
						},
						href: "https://api.spotify.com/v1/artists/0ItFUeOKHAShkEa2fb9mg3",
						name: "High & Mighty Brass Band",
						uri: "spotify:artist:0ItFUeOKHAShkEa2fb9mg3",
					},
				],
				external_ids: {
					isrc: "GRUM72102804",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3EfhKQDiL7YMRLPyeciBi2",
				},
				href: "https://api.spotify.com/v1/tracks/3EfhKQDiL7YMRLPyeciBi2",
				id: "3EfhKQDiL7YMRLPyeciBi2",
				name: "Tha 'Rthei Tha 'Rthei",
				uri: "spotify:track:3EfhKQDiL7YMRLPyeciBi2",
			},
		},
		{
			added_at: "2022-01-21T16:04:07Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/23qhNkm9OvDKMiJBe5iCP8",
					},
					href: "https://api.spotify.com/v1/albums/23qhNkm9OvDKMiJBe5iCP8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bfdb54c9653e993c4568ad58",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bfdb54c9653e993c4568ad58",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bfdb54c9653e993c4568ad58",
							width: 64,
						},
					],
					name: "Infinity Train: Book 1 (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1PcontOY3kO0vGS2m44l5V",
						},
						href: "https://api.spotify.com/v1/artists/1PcontOY3kO0vGS2m44l5V",
						name: "Infinity Train",
						uri: "spotify:artist:1PcontOY3kO0vGS2m44l5V",
					},
				],
				external_ids: {
					isrc: "TCAEL1933728",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1YoUzmz4IMWaFBtB2SNuXC",
				},
				href: "https://api.spotify.com/v1/tracks/1YoUzmz4IMWaFBtB2SNuXC",
				id: "1YoUzmz4IMWaFBtB2SNuXC",
				name: "Running Away - Extended",
				uri: "spotify:track:1YoUzmz4IMWaFBtB2SNuXC",
			},
		},
		{
			added_at: "2022-01-21T16:04:19Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/23qhNkm9OvDKMiJBe5iCP8",
					},
					href: "https://api.spotify.com/v1/albums/23qhNkm9OvDKMiJBe5iCP8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bfdb54c9653e993c4568ad58",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bfdb54c9653e993c4568ad58",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bfdb54c9653e993c4568ad58",
							width: 64,
						},
					],
					name: "Infinity Train: Book 1 (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1PcontOY3kO0vGS2m44l5V",
						},
						href: "https://api.spotify.com/v1/artists/1PcontOY3kO0vGS2m44l5V",
						name: "Infinity Train",
						uri: "spotify:artist:1PcontOY3kO0vGS2m44l5V",
					},
				],
				external_ids: {
					isrc: "TCAEN1919154",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0eHovIlEJJOv6BfzbOgvVb",
				},
				href: "https://api.spotify.com/v1/tracks/0eHovIlEJJOv6BfzbOgvVb",
				id: "0eHovIlEJJOv6BfzbOgvVb",
				name: "Time Me!",
				uri: "spotify:track:0eHovIlEJJOv6BfzbOgvVb",
			},
		},
		{
			added_at: "2022-01-21T16:04:31Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/61WdmHoVHjsE475mv4zvkO",
					},
					href: "https://api.spotify.com/v1/albums/61WdmHoVHjsE475mv4zvkO",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732fccfada19bd36119416f017",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022fccfada19bd36119416f017",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512fccfada19bd36119416f017",
							width: 64,
						},
					],
					name: "Trips & Ticks",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/03SZv6slUnLnHI3IfwG0gl",
						},
						href: "https://api.spotify.com/v1/artists/03SZv6slUnLnHI3IfwG0gl",
						name: "Grossstadtgeflüster",
						uri: "spotify:artist:03SZv6slUnLnHI3IfwG0gl",
					},
				],
				external_ids: {
					isrc: "DELV41801880",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3RUytZYw4jWOKGUDLABemc",
				},
				href: "https://api.spotify.com/v1/tracks/3RUytZYw4jWOKGUDLABemc",
				id: "3RUytZYw4jWOKGUDLABemc",
				name: "Feierabend",
				uri: "spotify:track:3RUytZYw4jWOKGUDLABemc",
			},
		},
		{
			added_at: "2022-01-21T16:04:42Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3c5nMaXOVRSlECOQPB4TAy",
					},
					href: "https://api.spotify.com/v1/albums/3c5nMaXOVRSlECOQPB4TAy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273dfc042c6fbb0a855d360691c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02dfc042c6fbb0a855d360691c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851dfc042c6fbb0a855d360691c",
							width: 64,
						},
					],
					name: "Flugmodus",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0iFq8SzyZaaQ2Fn6CLDxqW",
						},
						href: "https://api.spotify.com/v1/artists/0iFq8SzyZaaQ2Fn6CLDxqW",
						name: "Clueso",
						uri: "spotify:artist:0iFq8SzyZaaQ2Fn6CLDxqW",
					},
				],
				external_ids: {
					isrc: "DEE861904357",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2iNzRQE0MlCaSHbHGzmbN2",
				},
				href: "https://api.spotify.com/v1/tracks/2iNzRQE0MlCaSHbHGzmbN2",
				id: "2iNzRQE0MlCaSHbHGzmbN2",
				name: "Flugmodus",
				uri: "spotify:track:2iNzRQE0MlCaSHbHGzmbN2",
			},
		},
		{
			added_at: "2023-08-22T16:12:05Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2jo9sabEW5uPMD7AGJidGL",
					},
					href: "https://api.spotify.com/v1/albums/2jo9sabEW5uPMD7AGJidGL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735ccf969cb33ec5dd6ca1833b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025ccf969cb33ec5dd6ca1833b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515ccf969cb33ec5dd6ca1833b",
							width: 64,
						},
					],
					name: "Zombi",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3uvvx5esPys9Po0bsPrrZS",
						},
						href: "https://api.spotify.com/v1/artists/3uvvx5esPys9Po0bsPrrZS",
						name: "Kante",
						uri: "spotify:artist:3uvvx5esPys9Po0bsPrrZS",
					},
				],
				external_ids: {
					isrc: "DEQ330408803",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2bcwmJcNgARW2qhOkj0BJs",
				},
				href: "https://api.spotify.com/v1/tracks/2bcwmJcNgARW2qhOkj0BJs",
				id: "2bcwmJcNgARW2qhOkj0BJs",
				name: "Zombi",
				uri: "spotify:track:2bcwmJcNgARW2qhOkj0BJs",
			},
		},
		{
			added_at: "2023-08-22T16:12:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2PjlaxlMunGOUvcRzlTbtE",
					},
					href: "https://api.spotify.com/v1/albums/2PjlaxlMunGOUvcRzlTbtE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730a60fb0deda858270cca82ee",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020a60fb0deda858270cca82ee",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510a60fb0deda858270cca82ee",
							width: 64,
						},
					],
					name: "Dirty Computer",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6ueGR6SWhUJfvEhqkvMsVs",
						},
						href: "https://api.spotify.com/v1/artists/6ueGR6SWhUJfvEhqkvMsVs",
						name: "Janelle Monáe",
						uri: "spotify:artist:6ueGR6SWhUJfvEhqkvMsVs",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4G4om3U7TKES0hDBQYYVy7",
						},
						href: "https://api.spotify.com/v1/artists/4G4om3U7TKES0hDBQYYVy7",
						name: "Zoë Kravitz",
						uri: "spotify:artist:4G4om3U7TKES0hDBQYYVy7",
					},
				],
				external_ids: {
					isrc: "USAT21800754",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1Z2MfAx1nJ09NzGjodnvRW",
				},
				href: "https://api.spotify.com/v1/tracks/1Z2MfAx1nJ09NzGjodnvRW",
				id: "1Z2MfAx1nJ09NzGjodnvRW",
				name: "Screwed (feat. Zoë Kravitz)",
				uri: "spotify:track:1Z2MfAx1nJ09NzGjodnvRW",
			},
		},
		{
			added_at: "2023-08-22T16:13:00Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3W3ENDBQMJ9bD2qmxWI2f0",
					},
					href: "https://api.spotify.com/v1/albums/3W3ENDBQMJ9bD2qmxWI2f0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d72a5fd87f83f66d2e1fecc9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d72a5fd87f83f66d2e1fecc9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d72a5fd87f83f66d2e1fecc9",
							width: 64,
						},
					],
					name: "Alium",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3ceOFG1q86nQVpJliylpgA",
						},
						href: "https://api.spotify.com/v1/artists/3ceOFG1q86nQVpJliylpgA",
						name: "Submotion Orchestra",
						uri: "spotify:artist:3ceOFG1q86nQVpJliylpgA",
					},
				],
				external_ids: {
					isrc: "GBCFB1405002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4FULAlQuDeDlv1FidteGv0",
				},
				href: "https://api.spotify.com/v1/tracks/4FULAlQuDeDlv1FidteGv0",
				id: "4FULAlQuDeDlv1FidteGv0",
				name: "Awakening",
				uri: "spotify:track:4FULAlQuDeDlv1FidteGv0",
			},
		},
		{
			added_at: "2023-08-22T16:13:27Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4BjBrDoieEiMvToL3vKiuv",
					},
					href: "https://api.spotify.com/v1/albums/4BjBrDoieEiMvToL3vKiuv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273758aa30fa098a91966c54dbf",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02758aa30fa098a91966c54dbf",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851758aa30fa098a91966c54dbf",
							width: 64,
						},
					],
					name: "Medieval Gaming Vol. 1",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3v6OSSvIDKIzqYo1JJZdhT",
						},
						href: "https://api.spotify.com/v1/artists/3v6OSSvIDKIzqYo1JJZdhT",
						name: "LjB0",
						uri: "spotify:artist:3v6OSSvIDKIzqYo1JJZdhT",
					},
				],
				external_ids: {
					isrc: "QZGWW2133373",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1XMSctkag8FKWolLuu8h2g",
				},
				href: "https://api.spotify.com/v1/tracks/1XMSctkag8FKWolLuu8h2g",
				id: "1XMSctkag8FKWolLuu8h2g",
				name: "At Doom's Gate - 2016",
				uri: "spotify:track:1XMSctkag8FKWolLuu8h2g",
			},
		},
		{
			added_at: "2023-08-22T16:13:43Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4xPYddRQPYB5jbTB3e7tL5",
					},
					href: "https://api.spotify.com/v1/albums/4xPYddRQPYB5jbTB3e7tL5",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d46caefb22d460eb8ca14db0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d46caefb22d460eb8ca14db0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d46caefb22d460eb8ca14db0",
							width: 64,
						},
					],
					name: "Pata Pata",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/18RkLKfeoUgZflWv9os25W",
						},
						href: "https://api.spotify.com/v1/artists/18RkLKfeoUgZflWv9os25W",
						name: "Miriam Makeba",
						uri: "spotify:artist:18RkLKfeoUgZflWv9os25W",
					},
				],
				external_ids: {
					isrc: "DEG931900075",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1BLXxFPDL2BT37nHKD7KrA",
				},
				href: "https://api.spotify.com/v1/tracks/1BLXxFPDL2BT37nHKD7KrA",
				id: "1BLXxFPDL2BT37nHKD7KrA",
				name: "Pata Pata - Stereo Version",
				uri: "spotify:track:1BLXxFPDL2BT37nHKD7KrA",
			},
		},
		{
			added_at: "2023-08-22T16:15:43Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3ynXyaokirPqXEDb1LSUGI",
					},
					href: "https://api.spotify.com/v1/albums/3ynXyaokirPqXEDb1LSUGI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c1e4d65144304f4ead4b1c24",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c1e4d65144304f4ead4b1c24",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c1e4d65144304f4ead4b1c24",
							width: 64,
						},
					],
					name: "ใครคือเรา - Single",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/76VTagPgPgPlFE7hfjT0Zt",
						},
						href: "https://api.spotify.com/v1/artists/76VTagPgPgPlFE7hfjT0Zt",
						name: "Bodyslam",
						uri: "spotify:artist:76VTagPgPgPlFE7hfjT0Zt",
					},
				],
				external_ids: {
					isrc: "THG011800260",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1kkkixB3Ids34krb3rqBID",
				},
				href: "https://api.spotify.com/v1/tracks/1kkkixB3Ids34krb3rqBID",
				id: "1kkkixB3Ids34krb3rqBID",
				name: "ใครคือเรา",
				uri: "spotify:track:1kkkixB3Ids34krb3rqBID",
			},
		},
		{
			added_at: "2023-08-22T16:16:02Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6HZpSo8gZwORAezVOd5O3z",
					},
					href: "https://api.spotify.com/v1/albums/6HZpSo8gZwORAezVOd5O3z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273233f232d54a9491873633e8d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02233f232d54a9491873633e8d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851233f232d54a9491873633e8d",
							width: 64,
						},
					],
					name: "Old Soul Rebel",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6I3WzI96mccqCYFasXQYgB",
						},
						href: "https://api.spotify.com/v1/artists/6I3WzI96mccqCYFasXQYgB",
						name: "Old Soul Rebel",
						uri: "spotify:artist:6I3WzI96mccqCYFasXQYgB",
					},
				],
				external_ids: {
					isrc: "QZNWU2105185",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4hrMec1Zrr8dcEEhVw37Fg",
				},
				href: "https://api.spotify.com/v1/tracks/4hrMec1Zrr8dcEEhVw37Fg",
				id: "4hrMec1Zrr8dcEEhVw37Fg",
				name: "One Day - Radio Edit",
				uri: "spotify:track:4hrMec1Zrr8dcEEhVw37Fg",
			},
		},
		{
			added_at: "2023-08-22T16:16:17Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/30HepWMAKuXCNF9bzd5dRA",
					},
					href: "https://api.spotify.com/v1/albums/30HepWMAKuXCNF9bzd5dRA",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273aba0b6dd72db43af9f895953",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02aba0b6dd72db43af9f895953",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851aba0b6dd72db43af9f895953",
							width: 64,
						},
					],
					name: "Songbook Vol. 2",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7pQXfjCzKMCrcQnp9TAn3z",
						},
						href: "https://api.spotify.com/v1/artists/7pQXfjCzKMCrcQnp9TAn3z",
						name: "The Westerlies",
						uri: "spotify:artist:7pQXfjCzKMCrcQnp9TAn3z",
					},
				],
				external_ids: {
					isrc: "USME32200092",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/24IRhhGH01ubBAFj7QATFA",
				},
				href: "https://api.spotify.com/v1/tracks/24IRhhGH01ubBAFj7QATFA",
				id: "24IRhhGH01ubBAFj7QATFA",
				name: "Dover",
				uri: "spotify:track:24IRhhGH01ubBAFj7QATFA",
			},
		},
	],
};

var project101 = {
	items: [
		{
			added_at: "2023-08-22T16:16:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0KDSs2sUII429KDdUZAdPT",
					},
					href: "https://api.spotify.com/v1/albums/0KDSs2sUII429KDdUZAdPT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27318e7e447b56e4198da58f458",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0218e7e447b56e4198da58f458",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485118e7e447b56e4198da58f458",
							width: 64,
						},
					],
					name: "Glow",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1s2pki7lATUaBOL76E3vCV",
						},
						href: "https://api.spotify.com/v1/artists/1s2pki7lATUaBOL76E3vCV",
						name: "Kaki King",
						uri: "spotify:artist:1s2pki7lATUaBOL76E3vCV",
					},
				],
				external_ids: {
					isrc: "USRV41200601",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3lfNlcUKtrky8uyLEaWG4r",
				},
				href: "https://api.spotify.com/v1/tracks/3lfNlcUKtrky8uyLEaWG4r",
				id: "3lfNlcUKtrky8uyLEaWG4r",
				name: "Great Round Burn",
				uri: "spotify:track:3lfNlcUKtrky8uyLEaWG4r",
			},
		},
		{
			added_at: "2023-08-22T16:16:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4mpBiBTgBbGdgmw6nh22Tk",
					},
					href: "https://api.spotify.com/v1/albums/4mpBiBTgBbGdgmw6nh22Tk",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a7187258065e933b28d8a7f1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a7187258065e933b28d8a7f1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a7187258065e933b28d8a7f1",
							width: 64,
						},
					],
					name: "Hadal Ahbek",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6dO0RkhFhjMwLtLQqNgL8r",
						},
						href: "https://api.spotify.com/v1/artists/6dO0RkhFhjMwLtLQqNgL8r",
						name: "Issam Alnajjar",
						uri: "spotify:artist:6dO0RkhFhjMwLtLQqNgL8r",
					},
				],
				external_ids: {
					isrc: "USL4Q2071965",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0UdZzUSOLhqIFCU7wHWkgp",
				},
				href: "https://api.spotify.com/v1/tracks/0UdZzUSOLhqIFCU7wHWkgp",
				id: "0UdZzUSOLhqIFCU7wHWkgp",
				name: "Hadal Ahbek",
				uri: "spotify:track:0UdZzUSOLhqIFCU7wHWkgp",
			},
		},
		{
			added_at: "2023-08-22T16:17:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3N7dpGsD5vvustwM99RfoK",
					},
					href: "https://api.spotify.com/v1/albums/3N7dpGsD5vvustwM99RfoK",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e824bc89665bd6e5a31ae9b0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e824bc89665bd6e5a31ae9b0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e824bc89665bd6e5a31ae9b0",
							width: 64,
						},
					],
					name: "A.d.a",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4LzLMRGejol2nWDb61fLws",
						},
						href: "https://api.spotify.com/v1/artists/4LzLMRGejol2nWDb61fLws",
						name: "Atomic Drum Assembly",
						uri: "spotify:artist:4LzLMRGejol2nWDb61fLws",
					},
				],
				external_ids: {
					isrc: "UKSML2100009",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5bkfVkmtbTzhrSGzVPAN6c",
				},
				href: "https://api.spotify.com/v1/tracks/5bkfVkmtbTzhrSGzVPAN6c",
				id: "5bkfVkmtbTzhrSGzVPAN6c",
				name: "Next to You",
				uri: "spotify:track:5bkfVkmtbTzhrSGzVPAN6c",
			},
		},
		{
			added_at: "2023-08-22T16:17:23Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7COTJEh61fok2wxIfBbMH0",
					},
					href: "https://api.spotify.com/v1/albums/7COTJEh61fok2wxIfBbMH0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273dbbb8edffdc73d7603421267",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02dbbb8edffdc73d7603421267",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851dbbb8edffdc73d7603421267",
							width: 64,
						},
					],
					name: "Fly, Fly My Sadness",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6OxyG688AdDLBKo5yrJXU9",
						},
						href: "https://api.spotify.com/v1/artists/6OxyG688AdDLBKo5yrJXU9",
						name: "Bulgarian Voices Angelite",
						uri: "spotify:artist:6OxyG688AdDLBKo5yrJXU9",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1bK0K2tuAcvMScEWIHt54t",
						},
						href: "https://api.spotify.com/v1/artists/1bK0K2tuAcvMScEWIHt54t",
						name: "Huun-Huur-Tu",
						uri: "spotify:artist:1bK0K2tuAcvMScEWIHt54t",
					},
				],
				external_ids: {
					isrc: "DEA710203780",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7hAK6BNmKkuH4TukUoGgFY",
				},
				href: "https://api.spotify.com/v1/tracks/7hAK6BNmKkuH4TukUoGgFY",
				id: "7hAK6BNmKkuH4TukUoGgFY",
				name: "Legend",
				uri: "spotify:track:7hAK6BNmKkuH4TukUoGgFY",
			},
		},
		{
			added_at: "2023-08-22T16:17:34Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1l1QBbSVtl4QuOLzNXOEAM",
					},
					href: "https://api.spotify.com/v1/albums/1l1QBbSVtl4QuOLzNXOEAM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27317c66dbeae749b63b94fb00b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0217c66dbeae749b63b94fb00b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485117c66dbeae749b63b94fb00b",
							width: 64,
						},
					],
					name: "After You",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1VyVjE6tvQiM8T8a3WcYQd",
						},
						href: "https://api.spotify.com/v1/artists/1VyVjE6tvQiM8T8a3WcYQd",
						name: "Jack Peñate",
						uri: "spotify:artist:1VyVjE6tvQiM8T8a3WcYQd",
					},
				],
				external_ids: {
					isrc: "GBBKS1900092",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0uqnNPrbAqWCCeExwM3eol",
				},
				href: "https://api.spotify.com/v1/tracks/0uqnNPrbAqWCCeExwM3eol",
				id: "0uqnNPrbAqWCCeExwM3eol",
				name: "Murder",
				uri: "spotify:track:0uqnNPrbAqWCCeExwM3eol",
			},
		},
		{
			added_at: "2023-08-22T16:17:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6CdX4SQfQ9Hw9x0lrycAZI",
					},
					href: "https://api.spotify.com/v1/albums/6CdX4SQfQ9Hw9x0lrycAZI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f8969903d31f031b84885dd9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f8969903d31f031b84885dd9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f8969903d31f031b84885dd9",
							width: 64,
						},
					],
					name: "Voodoo Sonic (The Trilogy, Pt. 3)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/65EXuYHVoehCKqp0kOS6px",
						},
						href: "https://api.spotify.com/v1/artists/65EXuYHVoehCKqp0kOS6px",
						name: "Parov Stelar",
						uri: "spotify:artist:65EXuYHVoehCKqp0kOS6px",
					},
				],
				external_ids: {
					isrc: "ATE612010013",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0vL1FjAmiEla8f3Q9f20ag",
				},
				href: "https://api.spotify.com/v1/tracks/0vL1FjAmiEla8f3Q9f20ag",
				id: "0vL1FjAmiEla8f3Q9f20ag",
				name: "Black Marlin",
				uri: "spotify:track:0vL1FjAmiEla8f3Q9f20ag",
			},
		},
		{
			added_at: "2023-08-22T16:18:05Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0tS6CYJm9suWmMXQraRsse",
					},
					href: "https://api.spotify.com/v1/albums/0tS6CYJm9suWmMXQraRsse",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273775081332ae71fd58a63f1af",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02775081332ae71fd58a63f1af",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851775081332ae71fd58a63f1af",
							width: 64,
						},
					],
					name: "MEEMS",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3Ndm5qxyPRcCynmjgvvmev",
						},
						href: "https://api.spotify.com/v1/artists/3Ndm5qxyPRcCynmjgvvmev",
						name: "Miracles of Modern Science",
						uri: "spotify:artist:3Ndm5qxyPRcCynmjgvvmev",
					},
				],
				external_ids: {
					isrc: "QMVXC1300002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6SByitZ1eyzAiSwq3eHvSC",
				},
				href: "https://api.spotify.com/v1/tracks/6SByitZ1eyzAiSwq3eHvSC",
				id: "6SByitZ1eyzAiSwq3eHvSC",
				name: "Dear Pressure",
				uri: "spotify:track:6SByitZ1eyzAiSwq3eHvSC",
			},
		},
		{
			added_at: "2023-08-22T16:18:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7c0DRALsdT9K7FLQBTR9PS",
					},
					href: "https://api.spotify.com/v1/albums/7c0DRALsdT9K7FLQBTR9PS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b5f0f447f0b9d080d970b758",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b5f0f447f0b9d080d970b758",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b5f0f447f0b9d080d970b758",
							width: 64,
						},
					],
					name: "Gliss Riffer",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5Z3IWpvwOvoaWodujHw7xh",
						},
						href: "https://api.spotify.com/v1/artists/5Z3IWpvwOvoaWodujHw7xh",
						name: "Dan Deacon",
						uri: "spotify:artist:5Z3IWpvwOvoaWodujHw7xh",
					},
				],
				external_ids: {
					isrc: "GBCEL1400551",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0mGuPObwvSVHYN4oKqlqz5",
				},
				href: "https://api.spotify.com/v1/tracks/0mGuPObwvSVHYN4oKqlqz5",
				id: "0mGuPObwvSVHYN4oKqlqz5",
				name: "Feel the Lightning",
				uri: "spotify:track:0mGuPObwvSVHYN4oKqlqz5",
			},
		},
		{
			added_at: "2023-08-22T16:18:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/48n3D5pVT6Lk6fVm16GcK8",
					},
					href: "https://api.spotify.com/v1/albums/48n3D5pVT6Lk6fVm16GcK8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e49733a6b32a9fecb02502a3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e49733a6b32a9fecb02502a3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e49733a6b32a9fecb02502a3",
							width: 64,
						},
					],
					name: "Wildlife Pop (Deluxe Edition)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2ot2iyWGOnT9afKQxy9iNd",
						},
						href: "https://api.spotify.com/v1/artists/2ot2iyWGOnT9afKQxy9iNd",
						name: "Stepdad",
						uri: "spotify:artist:2ot2iyWGOnT9afKQxy9iNd",
					},
				],
				external_ids: {
					isrc: "QMYL21100026",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6bTbkW8kwKiWGH8F4WsNFb",
				},
				href: "https://api.spotify.com/v1/tracks/6bTbkW8kwKiWGH8F4WsNFb",
				id: "6bTbkW8kwKiWGH8F4WsNFb",
				name: "My Leather, My Fur, My Nails",
				uri: "spotify:track:6bTbkW8kwKiWGH8F4WsNFb",
			},
		},
		{
			added_at: "2023-08-22T16:18:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4uxSHVor85PelPt5yOAa7c",
					},
					href: "https://api.spotify.com/v1/albums/4uxSHVor85PelPt5yOAa7c",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731d9f033fe5961c7d4dbfdf45",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021d9f033fe5961c7d4dbfdf45",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511d9f033fe5961c7d4dbfdf45",
							width: 64,
						},
					],
					name: "EXTREME MEATPUNKS FOREVER: BOUND BY ASH (Original Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1kojYuDLdaioWO2lB0RrWF",
						},
						href: "https://api.spotify.com/v1/artists/1kojYuDLdaioWO2lB0RrWF",
						name: "Josie Brechner",
						uri: "spotify:artist:1kojYuDLdaioWO2lB0RrWF",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4QV2L8ZZXi1oaYLMADnQDT",
						},
						href: "https://api.spotify.com/v1/artists/4QV2L8ZZXi1oaYLMADnQDT",
						name: "Michaela Nachtigall",
						uri: "spotify:artist:4QV2L8ZZXi1oaYLMADnQDT",
					},
				],
				external_ids: {
					isrc: "GBSMU8983987",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3bRzt52uI53MsPdCzIm6IX",
				},
				href: "https://api.spotify.com/v1/tracks/3bRzt52uI53MsPdCzIm6IX",
				id: "3bRzt52uI53MsPdCzIm6IX",
				name: "INFRA BRAD",
				uri: "spotify:track:3bRzt52uI53MsPdCzIm6IX",
			},
		},
		{
			added_at: "2023-08-22T16:18:39Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1eDQeINx6RrlqnflDkykAp",
					},
					href: "https://api.spotify.com/v1/albums/1eDQeINx6RrlqnflDkykAp",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273aa11fde63d2f693f1abb36c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02aa11fde63d2f693f1abb36c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851aa11fde63d2f693f1abb36c8",
							width: 64,
						},
					],
					name: "Garbage Island",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/09kohMK0MSHgpmKWiQeQ5E",
						},
						href: "https://api.spotify.com/v1/artists/09kohMK0MSHgpmKWiQeQ5E",
						name: "The Burning Hell",
						uri: "spotify:artist:09kohMK0MSHgpmKWiQeQ5E",
					},
				],
				external_ids: {
					isrc: "DEY212145202",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6yPjWIqAoJLPxI3oq7845C",
				},
				href: "https://api.spotify.com/v1/tracks/6yPjWIqAoJLPxI3oq7845C",
				id: "6yPjWIqAoJLPxI3oq7845C",
				name: "Nigel The Gannet",
				uri: "spotify:track:6yPjWIqAoJLPxI3oq7845C",
			},
		},
		{
			added_at: "2023-08-22T16:18:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4XLRkzNBGmfMvd8OOvrJz3",
					},
					href: "https://api.spotify.com/v1/albums/4XLRkzNBGmfMvd8OOvrJz3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ee51f4865f4c403705948313",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ee51f4865f4c403705948313",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ee51f4865f4c403705948313",
							width: 64,
						},
					],
					name: "The Fifty Year Storm",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1StknjApm2ZXV4eLdlCQDW",
						},
						href: "https://api.spotify.com/v1/artists/1StknjApm2ZXV4eLdlCQDW",
						name: "The New Law",
						uri: "spotify:artist:1StknjApm2ZXV4eLdlCQDW",
					},
				],
				external_ids: {
					isrc: "TCABC1196042",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5kNylCZROyCVQyuVYa2bxG",
				},
				href: "https://api.spotify.com/v1/tracks/5kNylCZROyCVQyuVYa2bxG",
				id: "5kNylCZROyCVQyuVYa2bxG",
				name: "Get Your Gun",
				uri: "spotify:track:5kNylCZROyCVQyuVYa2bxG",
			},
		},
		{
			added_at: "2023-08-22T16:19:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2ZJ7ZYvPRBiIB4Y0qgm0UR",
					},
					href: "https://api.spotify.com/v1/albums/2ZJ7ZYvPRBiIB4Y0qgm0UR",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2734074a6eaac917b17200ddfe1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e024074a6eaac917b17200ddfe1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048514074a6eaac917b17200ddfe1",
							width: 64,
						},
					],
					name: "Hide and Hair",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4IeC7nJG3VMbzXlObCCsYC",
						},
						href: "https://api.spotify.com/v1/artists/4IeC7nJG3VMbzXlObCCsYC",
						name: "The Trials of Cato",
						uri: "spotify:artist:4IeC7nJG3VMbzXlObCCsYC",
					},
				],
				external_ids: {
					isrc: "UKJ2U1800001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5DcGeiKio3V6AUZpS44zpC",
				},
				href: "https://api.spotify.com/v1/tracks/5DcGeiKio3V6AUZpS44zpC",
				id: "5DcGeiKio3V6AUZpS44zpC",
				name: "Difyrrwch",
				uri: "spotify:track:5DcGeiKio3V6AUZpS44zpC",
			},
		},
		{
			added_at: "2023-08-22T16:19:16Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0FJvgU7rMSEoadQiSXkae1",
					},
					href: "https://api.spotify.com/v1/albums/0FJvgU7rMSEoadQiSXkae1",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739baeafae44dad159dbac51d6",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029baeafae44dad159dbac51d6",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519baeafae44dad159dbac51d6",
							width: 64,
						},
					],
					name: "Orphan Black (Original Television Score)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5M0jUxPRzeOuhtiirkZX5i",
						},
						href: "https://api.spotify.com/v1/artists/5M0jUxPRzeOuhtiirkZX5i",
						name: "Trevor Yuile",
						uri: "spotify:artist:5M0jUxPRzeOuhtiirkZX5i",
					},
				],
				external_ids: {
					isrc: "US3M51532121",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3ts9GJaResmZ6Bq0KTKhSZ",
				},
				href: "https://api.spotify.com/v1/tracks/3ts9GJaResmZ6Bq0KTKhSZ",
				id: "3ts9GJaResmZ6Bq0KTKhSZ",
				name: "Endless Forms Most Beautiful",
				uri: "spotify:track:3ts9GJaResmZ6Bq0KTKhSZ",
			},
		},
		{
			added_at: "2023-08-22T16:19:26Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/66FNxlIEDo28zeNIJJ50nG",
					},
					href: "https://api.spotify.com/v1/albums/66FNxlIEDo28zeNIJJ50nG",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739959852c0451aa1c4b31ea97",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029959852c0451aa1c4b31ea97",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519959852c0451aa1c4b31ea97",
							width: 64,
						},
					],
					name: "0181",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5ZzXaAuivVXuQaHCaRuxlD",
						},
						href: "https://api.spotify.com/v1/artists/5ZzXaAuivVXuQaHCaRuxlD",
						name: "00110100 01010100",
						uri: "spotify:artist:5ZzXaAuivVXuQaHCaRuxlD",
					},
				],
				external_ids: {
					isrc: "FR96X1750516",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0m01nK93kMYhuCeoBRKnnL",
				},
				href: "https://api.spotify.com/v1/tracks/0m01nK93kMYhuCeoBRKnnL",
				id: "0m01nK93kMYhuCeoBRKnnL",
				name: "0181 000 0010",
				uri: "spotify:track:0m01nK93kMYhuCeoBRKnnL",
			},
		},
		{
			added_at: "2023-08-22T16:19:34Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7MDFWbbFE27CuKen5DHAL3",
					},
					href: "https://api.spotify.com/v1/albums/7MDFWbbFE27CuKen5DHAL3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27307cdfab287794d3f762106fa",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0207cdfab287794d3f762106fa",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485107cdfab287794d3f762106fa",
							width: 64,
						},
					],
					name: "Join Us",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5nrAu9uBcj8NcdZHo09qG9",
						},
						href: "https://api.spotify.com/v1/artists/5nrAu9uBcj8NcdZHo09qG9",
						name: "Le Matos",
						uri: "spotify:artist:5nrAu9uBcj8NcdZHo09qG9",
					},
				],
				external_ids: {
					isrc: "CAXV21500071",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3pnkXMmZ9JqMqeo2VCg1hy",
				},
				href: "https://api.spotify.com/v1/tracks/3pnkXMmZ9JqMqeo2VCg1hy",
				id: "3pnkXMmZ9JqMqeo2VCg1hy",
				name: "Sarah",
				uri: "spotify:track:3pnkXMmZ9JqMqeo2VCg1hy",
			},
		},
		{
			added_at: "2023-08-22T16:19:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0sKSJdzhrLfHmw44JnSbJF",
					},
					href: "https://api.spotify.com/v1/albums/0sKSJdzhrLfHmw44JnSbJF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b98c1a8dafc12aad54f1e489",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b98c1a8dafc12aad54f1e489",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b98c1a8dafc12aad54f1e489",
							width: 64,
						},
					],
					name: "Tuba Mech Warrior Boss Theme",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0F3ibOTPCZmPEm4n9yYwvd",
						},
						href: "https://api.spotify.com/v1/artists/0F3ibOTPCZmPEm4n9yYwvd",
						name: "Noah Giesler",
						uri: "spotify:artist:0F3ibOTPCZmPEm4n9yYwvd",
					},
				],
				external_ids: {
					isrc: "QZNWQ2066821",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1nwHVhIlasYeX4nCgT72g6",
				},
				href: "https://api.spotify.com/v1/tracks/1nwHVhIlasYeX4nCgT72g6",
				id: "1nwHVhIlasYeX4nCgT72g6",
				name: "Tuba Mech Warrior Boss Theme",
				uri: "spotify:track:1nwHVhIlasYeX4nCgT72g6",
			},
		},
		{
			added_at: "2023-08-22T16:19:56Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2I1cGGvPYZBMFSHo3u2aCr",
					},
					href: "https://api.spotify.com/v1/albums/2I1cGGvPYZBMFSHo3u2aCr",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c46d9b0575f3b6f9b898ce8d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c46d9b0575f3b6f9b898ce8d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c46d9b0575f3b6f9b898ce8d",
							width: 64,
						},
					],
					name: "Blasphemous: The Stir of Dawn (Original Game Sountrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5t8oeNB7ScFOsV5Jkr0EtE",
						},
						href: "https://api.spotify.com/v1/artists/5t8oeNB7ScFOsV5Jkr0EtE",
						name: "Carlos Viola",
						uri: "spotify:artist:5t8oeNB7ScFOsV5Jkr0EtE",
					},
				],
				external_ids: {
					isrc: "QZK6P2025949",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2I7mMEGOQutxUtM4B1SjxC",
				},
				href: "https://api.spotify.com/v1/tracks/2I7mMEGOQutxUtM4B1SjxC",
				id: "2I7mMEGOQutxUtM4B1SjxC",
				name: "Baile de Violetas - Guitar Version",
				uri: "spotify:track:2I7mMEGOQutxUtM4B1SjxC",
			},
		},
		{
			added_at: "2023-08-22T16:20:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5YM1uhSX5HVZlTaaINmVpY",
					},
					href: "https://api.spotify.com/v1/albums/5YM1uhSX5HVZlTaaINmVpY",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b58c4c5ab38a722b4aee1dd0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b58c4c5ab38a722b4aee1dd0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b58c4c5ab38a722b4aee1dd0",
							width: 64,
						},
					],
					name: "Candle Kid (EP)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1GouucbsEn1Bb61DI4TSZS",
						},
						href: "https://api.spotify.com/v1/artists/1GouucbsEn1Bb61DI4TSZS",
						name: "Candle Kid",
						uri: "spotify:artist:1GouucbsEn1Bb61DI4TSZS",
					},
				],
				external_ids: {
					isrc: "QZDA72114045",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4VGUVQVFLm6zexNxSEs131",
				},
				href: "https://api.spotify.com/v1/tracks/4VGUVQVFLm6zexNxSEs131",
				id: "4VGUVQVFLm6zexNxSEs131",
				name: "Waiting for Death",
				uri: "spotify:track:4VGUVQVFLm6zexNxSEs131",
			},
		},
		{
			added_at: "2023-08-22T16:20:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4uxSHVor85PelPt5yOAa7c",
					},
					href: "https://api.spotify.com/v1/albums/4uxSHVor85PelPt5yOAa7c",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731d9f033fe5961c7d4dbfdf45",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021d9f033fe5961c7d4dbfdf45",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511d9f033fe5961c7d4dbfdf45",
							width: 64,
						},
					],
					name: "EXTREME MEATPUNKS FOREVER: BOUND BY ASH (Original Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1kojYuDLdaioWO2lB0RrWF",
						},
						href: "https://api.spotify.com/v1/artists/1kojYuDLdaioWO2lB0RrWF",
						name: "Josie Brechner",
						uri: "spotify:artist:1kojYuDLdaioWO2lB0RrWF",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/53vUErHk3zSntb6GmWHDuS",
						},
						href: "https://api.spotify.com/v1/artists/53vUErHk3zSntb6GmWHDuS",
						name: "Sarah Hubbard",
						uri: "spotify:artist:53vUErHk3zSntb6GmWHDuS",
					},
				],
				external_ids: {
					isrc: "GBSMU8983980",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4Uy5R7FMWJfOsffSVE8M7X",
				},
				href: "https://api.spotify.com/v1/tracks/4Uy5R7FMWJfOsffSVE8M7X",
				id: "4Uy5R7FMWJfOsffSVE8M7X",
				name: "Mountain Time",
				uri: "spotify:track:4Uy5R7FMWJfOsffSVE8M7X",
			},
		},
		{
			added_at: "2023-08-22T16:20:31Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2f6z6gQUUTEVcegql9DbUD",
					},
					href: "https://api.spotify.com/v1/albums/2f6z6gQUUTEVcegql9DbUD",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ce6333eab30e34f90e3fe883",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ce6333eab30e34f90e3fe883",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ce6333eab30e34f90e3fe883",
							width: 64,
						},
					],
					name: "Reconfig",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/68bAI2WX5wKSRMTx1qZafO",
						},
						href: "https://api.spotify.com/v1/artists/68bAI2WX5wKSRMTx1qZafO",
						name: "Shortwire",
						uri: "spotify:artist:68bAI2WX5wKSRMTx1qZafO",
					},
				],
				external_ids: {
					isrc: "GBSMU5156909",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1lZKN7UQZoBESyCg81jXNn",
				},
				href: "https://api.spotify.com/v1/tracks/1lZKN7UQZoBESyCg81jXNn",
				id: "1lZKN7UQZoBESyCg81jXNn",
				name: "Reconfig",
				uri: "spotify:track:1lZKN7UQZoBESyCg81jXNn",
			},
		},
		{
			added_at: "2023-08-22T16:20:41Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1zxAn2q8xIOZAj93KVLZ1q",
					},
					href: "https://api.spotify.com/v1/albums/1zxAn2q8xIOZAj93KVLZ1q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27303e0368dbdbd2e4b80a0a363",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0203e0368dbdbd2e4b80a0a363",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485103e0368dbdbd2e4b80a0a363",
							width: 64,
						},
					],
					name: "Midnight Signals (Original Motion Picture Score)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3I0ceM8qfqhCKGepaswmVg",
						},
						href: "https://api.spotify.com/v1/artists/3I0ceM8qfqhCKGepaswmVg",
						name: "Starcadian",
						uri: "spotify:artist:3I0ceM8qfqhCKGepaswmVg",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7ATbg3F34QymewYIV20RZl",
						},
						href: "https://api.spotify.com/v1/artists/7ATbg3F34QymewYIV20RZl",
						name: "HAYLEY",
						uri: "spotify:artist:7ATbg3F34QymewYIV20RZl",
					},
				],
				external_ids: {
					isrc: "TCADI1720681",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6zeAe94aC36a94QS0VhZJM",
				},
				href: "https://api.spotify.com/v1/tracks/6zeAe94aC36a94QS0VhZJM",
				id: "6zeAe94aC36a94QS0VhZJM",
				name: "New Cydonia (feat. Hayley)",
				uri: "spotify:track:6zeAe94aC36a94QS0VhZJM",
			},
		},
		{
			added_at: "2023-08-22T16:20:57Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7eMjotsUnyUxVYv6TF30u0",
					},
					href: "https://api.spotify.com/v1/albums/7eMjotsUnyUxVYv6TF30u0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730c5c6618f0237e04e6ebc03b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020c5c6618f0237e04e6ebc03b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510c5c6618f0237e04e6ebc03b",
							width: 64,
						},
					],
					name: "Between the Break",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/04KTuIKAn0UgWuZiWvBXoo",
						},
						href: "https://api.spotify.com/v1/artists/04KTuIKAn0UgWuZiWvBXoo",
						name: "Emanuel and the Fear",
						uri: "spotify:artist:04KTuIKAn0UgWuZiWvBXoo",
					},
				],
				external_ids: {
					isrc: "USSWN2100507",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6ZgA0dKnGAQ8eIIcsyMgyu",
				},
				href: "https://api.spotify.com/v1/tracks/6ZgA0dKnGAQ8eIIcsyMgyu",
				id: "6ZgA0dKnGAQ8eIIcsyMgyu",
				name: "The Ordinary Line",
				uri: "spotify:track:6ZgA0dKnGAQ8eIIcsyMgyu",
			},
		},
		{
			added_at: "2023-08-22T16:21:07Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1EUjKZgei59l2lZ5IY1cb8",
					},
					href: "https://api.spotify.com/v1/albums/1EUjKZgei59l2lZ5IY1cb8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738c94f3a46b240df8136c5bfd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028c94f3a46b240df8136c5bfd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518c94f3a46b240df8136c5bfd",
							width: 64,
						},
					],
					name: "Amado",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2mMa0OvTcff113jwraYCno",
						},
						href: "https://api.spotify.com/v1/artists/2mMa0OvTcff113jwraYCno",
						name: "Tosca Tango Orchestra",
						uri: "spotify:artist:2mMa0OvTcff113jwraYCno",
					},
				],
				external_ids: {
					isrc: "QZHN72025401",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3TSDj1RBYvRIuUqv3yTYAN",
				},
				href: "https://api.spotify.com/v1/tracks/3TSDj1RBYvRIuUqv3yTYAN",
				id: "3TSDj1RBYvRIuUqv3yTYAN",
				name: "El Cholulo",
				uri: "spotify:track:3TSDj1RBYvRIuUqv3yTYAN",
			},
		},
		{
			added_at: "2023-08-22T16:21:20Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7n5BDr1bzibmIOHnSb4Yxe",
					},
					href: "https://api.spotify.com/v1/albums/7n5BDr1bzibmIOHnSb4Yxe",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737aff8ed7898236b4446e926d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027aff8ed7898236b4446e926d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517aff8ed7898236b4446e926d",
							width: 64,
						},
					],
					name: "If",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3wXmzS82o6WbkG88Z4kNyK",
						},
						href: "https://api.spotify.com/v1/artists/3wXmzS82o6WbkG88Z4kNyK",
						name: "Phil Lober",
						uri: "spotify:artist:3wXmzS82o6WbkG88Z4kNyK",
					},
				],
				external_ids: {
					isrc: "uscgj1650496",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6ZlLUOdFKtrYoHS2Ih6abW",
				},
				href: "https://api.spotify.com/v1/tracks/6ZlLUOdFKtrYoHS2Ih6abW",
				id: "6ZlLUOdFKtrYoHS2Ih6abW",
				name: "Alive",
				uri: "spotify:track:6ZlLUOdFKtrYoHS2Ih6abW",
			},
		},
		{
			added_at: "2023-08-22T16:21:28Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3vvtrA4QkyqBmdFWj8BC7X",
					},
					href: "https://api.spotify.com/v1/albums/3vvtrA4QkyqBmdFWj8BC7X",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731a7a214d02184eb0689f93f0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021a7a214d02184eb0689f93f0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511a7a214d02184eb0689f93f0",
							width: 64,
						},
					],
					name: "Hexadecagon",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7EFRvnUHNLWOYVPg8AuI7o",
						},
						href: "https://api.spotify.com/v1/artists/7EFRvnUHNLWOYVPg8AuI7o",
						name: "The Octopus Project",
						uri: "spotify:artist:7EFRvnUHNLWOYVPg8AuI7o",
					},
				],
				external_ids: {
					isrc: "USA3K1010001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4YH9ewfKo5NWA2RBiUr9UJ",
				},
				href: "https://api.spotify.com/v1/tracks/4YH9ewfKo5NWA2RBiUr9UJ",
				id: "4YH9ewfKo5NWA2RBiUr9UJ",
				name: "Fuguefat",
				uri: "spotify:track:4YH9ewfKo5NWA2RBiUr9UJ",
			},
		},
		{
			added_at: "2023-08-22T16:21:37Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4MXyF2A6uBBjhUopbmAbxv",
					},
					href: "https://api.spotify.com/v1/albums/4MXyF2A6uBBjhUopbmAbxv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731276f1b0959f8a138235033c",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021276f1b0959f8a138235033c",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511276f1b0959f8a138235033c",
							width: 64,
						},
					],
					name: "Hold On, I'm Coming",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2Ms1LcMZ8KlCjez6SzlIe3",
						},
						href: "https://api.spotify.com/v1/artists/2Ms1LcMZ8KlCjez6SzlIe3",
						name: "Book",
						uri: "spotify:artist:2Ms1LcMZ8KlCjez6SzlIe3",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3r94TD6vkofdmiRbu6KXC0",
						},
						href: "https://api.spotify.com/v1/artists/3r94TD6vkofdmiRbu6KXC0",
						name: "Ndidi O",
						uri: "spotify:artist:3r94TD6vkofdmiRbu6KXC0",
					},
				],
				external_ids: {
					isrc: "QZ5FN1892830",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2lcq9j4FKjY19oyQ21cKty",
				},
				href: "https://api.spotify.com/v1/tracks/2lcq9j4FKjY19oyQ21cKty",
				id: "2lcq9j4FKjY19oyQ21cKty",
				name: "Hold On, I'm Coming (feat. Ndidi O.)",
				uri: "spotify:track:2lcq9j4FKjY19oyQ21cKty",
			},
		},
		{
			added_at: "2023-08-22T16:21:45Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3wITH77YIxYdtVv1W4W1SI",
					},
					href: "https://api.spotify.com/v1/albums/3wITH77YIxYdtVv1W4W1SI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b3bf69edf9add28fa892243f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b3bf69edf9add28fa892243f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b3bf69edf9add28fa892243f",
							width: 64,
						},
					],
					name: "Birds of Prey: The Album",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2RVvqRBon9NgaGXKfywDSs",
						},
						href: "https://api.spotify.com/v1/artists/2RVvqRBon9NgaGXKfywDSs",
						name: "Maisie Peters",
						uri: "spotify:artist:2RVvqRBon9NgaGXKfywDSs",
					},
				],
				external_ids: {
					isrc: "USAT21907517",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2f5IZC0qm02BOmKp5rbZgU",
				},
				href: "https://api.spotify.com/v1/tracks/2f5IZC0qm02BOmKp5rbZgU",
				id: "2f5IZC0qm02BOmKp5rbZgU",
				name: "Smile",
				uri: "spotify:track:2f5IZC0qm02BOmKp5rbZgU",
			},
		},
		{
			added_at: "2023-08-22T16:21:53Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5ogYKSRRlVAgMzv09HFeIn",
					},
					href: "https://api.spotify.com/v1/albums/5ogYKSRRlVAgMzv09HFeIn",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c44ea63878762e1f3791a551",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c44ea63878762e1f3791a551",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c44ea63878762e1f3791a551",
							width: 64,
						},
					],
					name: "The Dream",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3XHO7cRUPCLOr6jwp8vsx5",
						},
						href: "https://api.spotify.com/v1/artists/3XHO7cRUPCLOr6jwp8vsx5",
						name: "alt-J",
						uri: "spotify:artist:3XHO7cRUPCLOr6jwp8vsx5",
					},
				],
				external_ids: {
					isrc: "GB5KW2102485",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2cS0uhk7nfaMmF5In6wzIV",
				},
				href: "https://api.spotify.com/v1/tracks/2cS0uhk7nfaMmF5In6wzIV",
				id: "2cS0uhk7nfaMmF5In6wzIV",
				name: "Hard Drive Gold",
				uri: "spotify:track:2cS0uhk7nfaMmF5In6wzIV",
			},
		},
		{
			added_at: "2023-08-22T16:22:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4FBJ9YRzqMOPlaPFy6v1Zu",
					},
					href: "https://api.spotify.com/v1/albums/4FBJ9YRzqMOPlaPFy6v1Zu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730c06daa7bee00e3c50a13dab",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020c06daa7bee00e3c50a13dab",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510c06daa7bee00e3c50a13dab",
							width: 64,
						},
					],
					name: "Extreme Meatpunks Forever: Powered by Blood (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1SEjfEeVT83dTtq4TzzCBH",
						},
						href: "https://api.spotify.com/v1/artists/1SEjfEeVT83dTtq4TzzCBH",
						name: "Visager",
						uri: "spotify:artist:1SEjfEeVT83dTtq4TzzCBH",
					},
				],
				external_ids: {
					isrc: "QZES71861401",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1z82EEh3uSXApS8NUBkkAD",
				},
				href: "https://api.spotify.com/v1/tracks/1z82EEh3uSXApS8NUBkkAD",
				id: "1z82EEh3uSXApS8NUBkkAD",
				name: "Roots Among Ash",
				uri: "spotify:track:1z82EEh3uSXApS8NUBkkAD",
			},
		},
		{
			added_at: "2023-08-22T16:22:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0TxrSNATtjoyWEM0c4BR7t",
					},
					href: "https://api.spotify.com/v1/albums/0TxrSNATtjoyWEM0c4BR7t",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273446ac0038a67e1227aede0c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02446ac0038a67e1227aede0c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851446ac0038a67e1227aede0c8",
							width: 64,
						},
					],
					name: "Giver (Wankelmut & Fynn Remix)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0pCNk4D3E2xtszsm6hMsWr",
						},
						href: "https://api.spotify.com/v1/artists/0pCNk4D3E2xtszsm6hMsWr",
						name: "K.Flay",
						uri: "spotify:artist:0pCNk4D3E2xtszsm6hMsWr",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/01e2lCvLZ4fLUIRy68nptH",
						},
						href: "https://api.spotify.com/v1/artists/01e2lCvLZ4fLUIRy68nptH",
						name: "Wankelmut",
						uri: "spotify:artist:01e2lCvLZ4fLUIRy68nptH",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4xuvLbpdu8lDCLSnpZY45m",
						},
						href: "https://api.spotify.com/v1/artists/4xuvLbpdu8lDCLSnpZY45m",
						name: "Fynn",
						uri: "spotify:artist:4xuvLbpdu8lDCLSnpZY45m",
					},
				],
				external_ids: {
					isrc: "USUM71803421",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2UQfJNS8G3q7Y13FwLDDPy",
				},
				href: "https://api.spotify.com/v1/tracks/2UQfJNS8G3q7Y13FwLDDPy",
				id: "2UQfJNS8G3q7Y13FwLDDPy",
				name: "Giver - Wankelmut & Fynn Remix",
				uri: "spotify:track:2UQfJNS8G3q7Y13FwLDDPy",
			},
		},
		{
			added_at: "2023-08-22T16:22:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1I3rBU8JnZCc0Dobd29JXI",
					},
					href: "https://api.spotify.com/v1/albums/1I3rBU8JnZCc0Dobd29JXI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f66d98fd5a43f4320f62af67",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f66d98fd5a43f4320f62af67",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f66d98fd5a43f4320f62af67",
							width: 64,
						},
					],
					name: "Channel the Spirits (Special Edition)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0Z5FMozvx15nUSUA6a9kkU",
						},
						href: "https://api.spotify.com/v1/artists/0Z5FMozvx15nUSUA6a9kkU",
						name: "The Comet Is Coming",
						uri: "spotify:artist:0Z5FMozvx15nUSUA6a9kkU",
					},
				],
				external_ids: {
					isrc: "GBCKB1510401",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2oETXgIQG8AfNngB8TefLd",
				},
				href: "https://api.spotify.com/v1/tracks/2oETXgIQG8AfNngB8TefLd",
				id: "2oETXgIQG8AfNngB8TefLd",
				name: "Neon Baby",
				uri: "spotify:track:2oETXgIQG8AfNngB8TefLd",
			},
		},
		{
			added_at: "2023-08-22T16:22:39Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3BbVnqlz9NNsZTtRTcebQW",
					},
					href: "https://api.spotify.com/v1/albums/3BbVnqlz9NNsZTtRTcebQW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273909a06389013f1856b0f95ed",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02909a06389013f1856b0f95ed",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851909a06389013f1856b0f95ed",
							width: 64,
						},
					],
					name: "STARS",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4CyxMgnF71FyOWADVWxJRE",
						},
						href: "https://api.spotify.com/v1/artists/4CyxMgnF71FyOWADVWxJRE",
						name: "Strawberry Girls",
						uri: "spotify:artist:4CyxMgnF71FyOWADVWxJRE",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1dtiGEl2aljrMiP2QqqoZZ",
						},
						href: "https://api.spotify.com/v1/artists/1dtiGEl2aljrMiP2QqqoZZ",
						name: "Ben Rosett",
						uri: "spotify:artist:1dtiGEl2aljrMiP2QqqoZZ",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6fNYrNkLY7J6Ujdtc265Ef",
						},
						href: "https://api.spotify.com/v1/artists/6fNYrNkLY7J6Ujdtc265Ef",
						name: "Zachary Garren",
						uri: "spotify:artist:6fNYrNkLY7J6Ujdtc265Ef",
					},
				],
				external_ids: {
					isrc: "QZMEP2263343",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0AdoqzlRPEDV7GVlGitsxp",
				},
				href: "https://api.spotify.com/v1/tracks/0AdoqzlRPEDV7GVlGitsxp",
				id: "0AdoqzlRPEDV7GVlGitsxp",
				name: "STARS",
				uri: "spotify:track:0AdoqzlRPEDV7GVlGitsxp",
			},
		},
		{
			added_at: "2023-08-22T16:22:53Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3X09Qtfb6CNTLhV0JUrDWc",
					},
					href: "https://api.spotify.com/v1/albums/3X09Qtfb6CNTLhV0JUrDWc",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273962272d12a4fb134f7aa822f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02962272d12a4fb134f7aa822f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851962272d12a4fb134f7aa822f",
							width: 64,
						},
					],
					name: "Preludes, Airs And Yodels (A Penguin Cafe Primer)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6rAZ6OYwAXqykSlPxqGy8E",
						},
						href: "https://api.spotify.com/v1/artists/6rAZ6OYwAXqykSlPxqGy8E",
						name: "Penguin Cafe Orchestra",
						uri: "spotify:artist:6rAZ6OYwAXqykSlPxqGy8E",
					},
				],
				external_ids: {
					isrc: "GBAAA8700127",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1MIwRUsj23h7cYn6mNiqHw",
				},
				href: "https://api.spotify.com/v1/tracks/1MIwRUsj23h7cYn6mNiqHw",
				id: "1MIwRUsj23h7cYn6mNiqHw",
				name: "Perpetuum Mobile",
				uri: "spotify:track:1MIwRUsj23h7cYn6mNiqHw",
			},
		},
		{
			added_at: "2023-08-22T16:23:49Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1mueBELcaHKvyjhvGidfsW",
					},
					href: "https://api.spotify.com/v1/albums/1mueBELcaHKvyjhvGidfsW",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d4a4105f63f2a225e8f356a2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d4a4105f63f2a225e8f356a2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d4a4105f63f2a225e8f356a2",
							width: 64,
						},
					],
					name: "Dumber and Older",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5rFQl8QehNSMIJVnyhTmzY",
						},
						href: "https://api.spotify.com/v1/artists/5rFQl8QehNSMIJVnyhTmzY",
						name: "Cataldo",
						uri: "spotify:artist:5rFQl8QehNSMIJVnyhTmzY",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1",
						},
						href: "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
						name: "Your Smith",
						uri: "spotify:artist:2kTZfKGZEj8R76z3ooKOF1",
					},
				],
				external_ids: {
					isrc: "QZUGV2200002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4bxd8O25vMh2maAL31iQ23",
				},
				href: "https://api.spotify.com/v1/tracks/4bxd8O25vMh2maAL31iQ23",
				id: "4bxd8O25vMh2maAL31iQ23",
				name: "A Good Moment at the Wrong Time",
				uri: "spotify:track:4bxd8O25vMh2maAL31iQ23",
			},
		},
		{
			added_at: "2023-08-22T16:23:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/18L36uUa7xLegzjkvr10ev",
					},
					href: "https://api.spotify.com/v1/albums/18L36uUa7xLegzjkvr10ev",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273603bd5d38b6746ae0d913202",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02603bd5d38b6746ae0d913202",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851603bd5d38b6746ae0d913202",
							width: 64,
						},
					],
					name: "Alive",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7DeuppKQdCVhuWrzzCBBpc",
						},
						href: "https://api.spotify.com/v1/artists/7DeuppKQdCVhuWrzzCBBpc",
						name: "Hiromi",
						uri: "spotify:artist:7DeuppKQdCVhuWrzzCBBpc",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4jSvNq6yedPhkC4p3zlznC",
						},
						href: "https://api.spotify.com/v1/artists/4jSvNq6yedPhkC4p3zlznC",
						name: "Anthony Jackson",
						uri: "spotify:artist:4jSvNq6yedPhkC4p3zlznC",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1OGCS507PQzgLappLg26AK",
						},
						href: "https://api.spotify.com/v1/artists/1OGCS507PQzgLappLg26AK",
						name: "Simon Phillips",
						uri: "spotify:artist:1OGCS507PQzgLappLg26AK",
					},
				],
				external_ids: {
					isrc: "USTE11400322",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/51WozCH6KrpMsf6MSsftkD",
				},
				href: "https://api.spotify.com/v1/tracks/51WozCH6KrpMsf6MSsftkD",
				id: "51WozCH6KrpMsf6MSsftkD",
				name: "Seeker",
				uri: "spotify:track:51WozCH6KrpMsf6MSsftkD",
			},
		},
		{
			added_at: "2023-08-22T16:24:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6Q55ods6yVhg1035RgH2kU",
					},
					href: "https://api.spotify.com/v1/albums/6Q55ods6yVhg1035RgH2kU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273335e628ccdf95c5a4c5a4053",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02335e628ccdf95c5a4c5a4053",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851335e628ccdf95c5a4c5a4053",
							width: 64,
						},
					],
					name: "Pyre (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1",
						},
						href: "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
						name: "Darren Korb",
						uri: "spotify:artist:0ZMWrgLff357yxLyEU77a1",
					},
				],
				external_ids: {
					isrc: "TCADE1746756",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/12lroPHknN4YV3GgLM1nUi",
				},
				href: "https://api.spotify.com/v1/tracks/12lroPHknN4YV3GgLM1nUi",
				id: "12lroPHknN4YV3GgLM1nUi",
				name: "Grand Ceremony",
				uri: "spotify:track:12lroPHknN4YV3GgLM1nUi",
			},
		},
		{
			added_at: "2023-08-22T16:24:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5SksI3cYqzYcoHynmJMt9J",
					},
					href: "https://api.spotify.com/v1/albums/5SksI3cYqzYcoHynmJMt9J",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ab5dc8cc63d7cfa1f07732c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ab5dc8cc63d7cfa1f07732c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ab5dc8cc63d7cfa1f07732c8",
							width: 64,
						},
					],
					name: "Dark As Night",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/35fFUv2850L9CQjjNrLBpb",
						},
						href: "https://api.spotify.com/v1/artists/35fFUv2850L9CQjjNrLBpb",
						name: "Nahko And Medicine For The People",
						uri: "spotify:artist:35fFUv2850L9CQjjNrLBpb",
					},
				],
				external_ids: {
					isrc: "QMMTR1300026",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7FYhcvDVBiqNfpEx1rfxQF",
				},
				href: "https://api.spotify.com/v1/tracks/7FYhcvDVBiqNfpEx1rfxQF",
				id: "7FYhcvDVBiqNfpEx1rfxQF",
				name: "Budding Trees",
				uri: "spotify:track:7FYhcvDVBiqNfpEx1rfxQF",
			},
		},
		{
			added_at: "2023-08-22T16:24:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2D8dI9dOedyRcaXlxgApZu",
					},
					href: "https://api.spotify.com/v1/albums/2D8dI9dOedyRcaXlxgApZu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a97fd50e89d68b9bf935f809",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a97fd50e89d68b9bf935f809",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a97fd50e89d68b9bf935f809",
							width: 64,
						},
					],
					name: "The Robots in Love - EP",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3Fkmpn0FHCZfBWzXbQu77B",
						},
						href: "https://api.spotify.com/v1/artists/3Fkmpn0FHCZfBWzXbQu77B",
						name: "Beautiful Small Machines",
						uri: "spotify:artist:3Fkmpn0FHCZfBWzXbQu77B",
					},
				],
				external_ids: {
					isrc: "usl4q0847847",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6skJ0Q5jBXmyPjcblwf4uu",
				},
				href: "https://api.spotify.com/v1/tracks/6skJ0Q5jBXmyPjcblwf4uu",
				id: "6skJ0Q5jBXmyPjcblwf4uu",
				name: "Robots in Love",
				uri: "spotify:track:6skJ0Q5jBXmyPjcblwf4uu",
			},
		},
		{
			added_at: "2023-08-22T16:24:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3beknk0evqovvpH2auH3rI",
					},
					href: "https://api.spotify.com/v1/albums/3beknk0evqovvpH2auH3rI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273031fc4721f64d6053f9b28b9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02031fc4721f64d6053f9b28b9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851031fc4721f64d6053f9b28b9",
							width: 64,
						},
					],
					name: "The Hypnoflip Invasion",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7qiRNP9z0FhN63YcLmb8Ai",
						},
						href: "https://api.spotify.com/v1/artists/7qiRNP9z0FhN63YcLmb8Ai",
						name: "Stupeflip",
						uri: "spotify:artist:7qiRNP9z0FhN63YcLmb8Ai",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7qORCGgutS0QON7vez8C4N",
						},
						href: "https://api.spotify.com/v1/artists/7qORCGgutS0QON7vez8C4N",
						name: "Cadillac",
						uri: "spotify:artist:7qORCGgutS0QON7vez8C4N",
					},
				],
				external_ids: {
					isrc: "FR0Z21000064",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/178zd1WV9MN2rVab2TsfDE",
				},
				href: "https://api.spotify.com/v1/tracks/178zd1WV9MN2rVab2TsfDE",
				id: "178zd1WV9MN2rVab2TsfDE",
				name: "Stupeflip vite !!!",
				uri: "spotify:track:178zd1WV9MN2rVab2TsfDE",
			},
		},
		{
			added_at: "2023-08-22T16:24:57Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5HOaRBq2wF1vi6dR7ZXzTH",
					},
					href: "https://api.spotify.com/v1/albums/5HOaRBq2wF1vi6dR7ZXzTH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273cc55bd7a8065b64ee115f2cc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02cc55bd7a8065b64ee115f2cc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851cc55bd7a8065b64ee115f2cc",
							width: 64,
						},
					],
					name: "Running From A Gamble",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3lQPc6jpkeuF87zv2DdNIT",
						},
						href: "https://api.spotify.com/v1/artists/3lQPc6jpkeuF87zv2DdNIT",
						name: "Company of Thieves",
						uri: "spotify:artist:3lQPc6jpkeuF87zv2DdNIT",
					},
				],
				external_ids: {
					isrc: "USWU31100003",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1wVoKHmLHKSV2qkOsRiw6h",
				},
				href: "https://api.spotify.com/v1/tracks/1wVoKHmLHKSV2qkOsRiw6h",
				id: "1wVoKHmLHKSV2qkOsRiw6h",
				name: "Tallulah",
				uri: "spotify:track:1wVoKHmLHKSV2qkOsRiw6h",
			},
		},
		{
			added_at: "2023-08-22T16:25:27Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6PfNsFV9wm1apQ1R6xDsaF",
					},
					href: "https://api.spotify.com/v1/albums/6PfNsFV9wm1apQ1R6xDsaF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27342e927c4dd0b2fcfeb263dae",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0242e927c4dd0b2fcfeb263dae",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485142e927c4dd0b2fcfeb263dae",
							width: 64,
						},
					],
					name: "Y∞Y",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3OWidNSeqnJeqGLpa2T3of",
						},
						href: "https://api.spotify.com/v1/artists/3OWidNSeqnJeqGLpa2T3of",
						name: "YY",
						uri: "spotify:artist:3OWidNSeqnJeqGLpa2T3of",
					},
				],
				external_ids: {
					isrc: "TCJPH1829932",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6iK4AyAi61dZKQ4qlhYI5m",
				},
				href: "https://api.spotify.com/v1/tracks/6iK4AyAi61dZKQ4qlhYI5m",
				id: "6iK4AyAi61dZKQ4qlhYI5m",
				name: "Y∞Y",
				uri: "spotify:track:6iK4AyAi61dZKQ4qlhYI5m",
			},
		},
		{
			added_at: "2023-08-22T16:25:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/53N4FKFKdWe2i5JeRgEOkt",
					},
					href: "https://api.spotify.com/v1/albums/53N4FKFKdWe2i5JeRgEOkt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27358c5697880705e8e32952dd3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0258c5697880705e8e32952dd3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485158c5697880705e8e32952dd3",
							width: 64,
						},
					],
					name: "Bears & Bulls",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/40N10exWtaCVUtBMftQn3t",
						},
						href: "https://api.spotify.com/v1/artists/40N10exWtaCVUtBMftQn3t",
						name: "The Stone Foxes",
						uri: "spotify:artist:40N10exWtaCVUtBMftQn3t",
					},
				],
				external_ids: {
					isrc: "USTNT1010001",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2GqgXmOkCYkmnNo4EEz4DU",
				},
				href: "https://api.spotify.com/v1/tracks/2GqgXmOkCYkmnNo4EEz4DU",
				id: "2GqgXmOkCYkmnNo4EEz4DU",
				name: "Stomp",
				uri: "spotify:track:2GqgXmOkCYkmnNo4EEz4DU",
			},
		},
		{
			added_at: "2023-08-22T16:25:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3m2LYhF9CGykcn6akFTPJH",
					},
					href: "https://api.spotify.com/v1/albums/3m2LYhF9CGykcn6akFTPJH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733ec7b41b792961d53c682e85",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023ec7b41b792961d53c682e85",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513ec7b41b792961d53c682e85",
							width: 64,
						},
					],
					name: "Queer As Folk",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4bFdVUzXSr2unwjEoOe5dY",
						},
						href: "https://api.spotify.com/v1/artists/4bFdVUzXSr2unwjEoOe5dY",
						name: "Grace Petrie",
						uri: "spotify:artist:4bFdVUzXSr2unwjEoOe5dY",
					},
				],
				external_ids: {
					isrc: "UKQ7M1806006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/51z4LG6qPbHiwGg7Sg03hq",
				},
				href: "https://api.spotify.com/v1/tracks/51z4LG6qPbHiwGg7Sg03hq",
				id: "51z4LG6qPbHiwGg7Sg03hq",
				name: "Black Tie",
				uri: "spotify:track:51z4LG6qPbHiwGg7Sg03hq",
			},
		},
		{
			added_at: "2023-08-22T16:25:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1rGpfyM79C6gkKgupSInzU",
					},
					href: "https://api.spotify.com/v1/albums/1rGpfyM79C6gkKgupSInzU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d4e412d3ec0c58e6c7825644",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d4e412d3ec0c58e6c7825644",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d4e412d3ec0c58e6c7825644",
							width: 64,
						},
					],
					name: "Every Time You Go Somewhere",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4tT8fWyOy0hVI7jo9fJmXX",
						},
						href: "https://api.spotify.com/v1/artists/4tT8fWyOy0hVI7jo9fJmXX",
						name: "Mal Blum",
						uri: "spotify:artist:4tT8fWyOy0hVI7jo9fJmXX",
					},
				],
				external_ids: {
					isrc: "USTCF1041770",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2aoGGs10SIjwkknKeACT8u",
				},
				href: "https://api.spotify.com/v1/tracks/2aoGGs10SIjwkknKeACT8u",
				id: "2aoGGs10SIjwkknKeACT8u",
				name: "San Cristóbal",
				uri: "spotify:track:2aoGGs10SIjwkknKeACT8u",
			},
		},
		{
			added_at: "2023-08-22T16:26:02Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4GD3KAUl5dELv3D7N9Hs92",
					},
					href: "https://api.spotify.com/v1/albums/4GD3KAUl5dELv3D7N9Hs92",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a09d4af3259b07bb9170cb25",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a09d4af3259b07bb9170cb25",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a09d4af3259b07bb9170cb25",
							width: 64,
						},
					],
					name: "IKAZUCHI (Short Version)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1C08PKH51P2fcJMrPOFRwI",
						},
						href: "https://api.spotify.com/v1/artists/1C08PKH51P2fcJMrPOFRwI",
						name: "Yoshida Brothers",
						uri: "spotify:artist:1C08PKH51P2fcJMrPOFRwI",
					},
				],
				external_ids: {
					isrc: "JPWP01900151",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5RHGHKamL6TVt7OjsLKeLP",
				},
				href: "https://api.spotify.com/v1/tracks/5RHGHKamL6TVt7OjsLKeLP",
				id: "5RHGHKamL6TVt7OjsLKeLP",
				name: "IKAZUCHI - Short Version",
				uri: "spotify:track:5RHGHKamL6TVt7OjsLKeLP",
			},
		},
		{
			added_at: "2023-08-22T16:26:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3YtKqUdTPnQhHClpaJvMdU",
					},
					href: "https://api.spotify.com/v1/albums/3YtKqUdTPnQhHClpaJvMdU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27349c2aa4423e49daae015303f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0249c2aa4423e49daae015303f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485149c2aa4423e49daae015303f",
							width: 64,
						},
					],
					name: "Go Time",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6CjlH63WSyci6pUFByyRTy",
						},
						href: "https://api.spotify.com/v1/artists/6CjlH63WSyci6pUFByyRTy",
						name: "typo.s",
						uri: "spotify:artist:6CjlH63WSyci6pUFByyRTy",
					},
				],
				external_ids: {
					isrc: "GB5KW2003068",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4UCzIqfaCGFZhxo1EP0dgn",
				},
				href: "https://api.spotify.com/v1/tracks/4UCzIqfaCGFZhxo1EP0dgn",
				id: "4UCzIqfaCGFZhxo1EP0dgn",
				name: "Go Time",
				uri: "spotify:track:4UCzIqfaCGFZhxo1EP0dgn",
			},
		},
		{
			added_at: "2023-08-22T16:26:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2TMmy40dRSP7IwuDRpC8Td",
					},
					href: "https://api.spotify.com/v1/albums/2TMmy40dRSP7IwuDRpC8Td",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735713935fafa3e0dd3a05f18d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025713935fafa3e0dd3a05f18d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515713935fafa3e0dd3a05f18d",
							width: 64,
						},
					],
					name: "吉田兄弟ベスト 弐 -2005〜2009-",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1C08PKH51P2fcJMrPOFRwI",
						},
						href: "https://api.spotify.com/v1/artists/1C08PKH51P2fcJMrPOFRwI",
						name: "Yoshida Brothers",
						uri: "spotify:artist:1C08PKH51P2fcJMrPOFRwI",
					},
				],
				external_ids: {
					isrc: "JPSR00403006",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/06O5DkFDZG0B4lagnnpFYY",
				},
				href: "https://api.spotify.com/v1/tracks/06O5DkFDZG0B4lagnnpFYY",
				id: "06O5DkFDZG0B4lagnnpFYY",
				name: "RISING",
				uri: "spotify:track:06O5DkFDZG0B4lagnnpFYY",
			},
		},
		{
			added_at: "2023-08-22T16:26:32Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1Ov6KBLtcdFnYujPydOnyk",
					},
					href: "https://api.spotify.com/v1/albums/1Ov6KBLtcdFnYujPydOnyk",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27341fb00c1c2e3828726dab423",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0241fb00c1c2e3828726dab423",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485141fb00c1c2e3828726dab423",
							width: 64,
						},
					],
					name: "The Spot",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1",
						},
						href: "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
						name: "Your Smith",
						uri: "spotify:artist:2kTZfKGZEj8R76z3ooKOF1",
					},
				],
				external_ids: {
					isrc: "QM24S1816024",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4yxXkWXs6GaHCrpmSqGzEw",
				},
				href: "https://api.spotify.com/v1/tracks/4yxXkWXs6GaHCrpmSqGzEw",
				id: "4yxXkWXs6GaHCrpmSqGzEw",
				name: "The Spot",
				uri: "spotify:track:4yxXkWXs6GaHCrpmSqGzEw",
			},
		},
		{
			added_at: "2023-08-22T16:26:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3y7ArxHNtZoTVWSwR4lkQT",
					},
					href: "https://api.spotify.com/v1/albums/3y7ArxHNtZoTVWSwR4lkQT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733c893f419757910dca22bb74",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023c893f419757910dca22bb74",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513c893f419757910dca22bb74",
							width: 64,
						},
					],
					name: "!!Going Places!!",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/09L3cUdx0hq6qn5bKuJJ4I",
						},
						href: "https://api.spotify.com/v1/artists/09L3cUdx0hq6qn5bKuJJ4I",
						name: "Herb Alpert & The Tijuana Brass",
						uri: "spotify:artist:09L3cUdx0hq6qn5bKuJJ4I",
					},
				],
				external_ids: {
					isrc: "QM4221500168",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1XH56uw93V08fSPa7cwY7Y",
				},
				href: "https://api.spotify.com/v1/tracks/1XH56uw93V08fSPa7cwY7Y",
				id: "1XH56uw93V08fSPa7cwY7Y",
				name: "Walk, Don't Run",
				uri: "spotify:track:1XH56uw93V08fSPa7cwY7Y",
			},
		},
	],
};

var project151 = {
	items: [
		{
			added_at: "2023-08-22T16:27:01Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6li3uLQDzsRJD347Qalkng",
					},
					href: "https://api.spotify.com/v1/albums/6li3uLQDzsRJD347Qalkng",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731e0b7f265f555e1fd282f2d1",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021e0b7f265f555e1fd282f2d1",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511e0b7f265f555e1fd282f2d1",
							width: 64,
						},
					],
					name: "All out of Tears",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1kqmfPNXoed2ueFvyMfNP7",
						},
						href: "https://api.spotify.com/v1/artists/1kqmfPNXoed2ueFvyMfNP7",
						name: "Z Berg",
						uri: "spotify:artist:1kqmfPNXoed2ueFvyMfNP7",
					},
				],
				external_ids: {
					isrc: "GBKPL1822347",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/12Yiom7l3OsVelYHXNNBa9",
				},
				href: "https://api.spotify.com/v1/tracks/12Yiom7l3OsVelYHXNNBa9",
				id: "12Yiom7l3OsVelYHXNNBa9",
				name: "All out of Tears",
				uri: "spotify:track:12Yiom7l3OsVelYHXNNBa9",
			},
		},
		{
			added_at: "2023-08-22T16:27:17Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0J71qNQpRmj3yg66yxXxMj",
					},
					href: "https://api.spotify.com/v1/albums/0J71qNQpRmj3yg66yxXxMj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273834ffc9594b418a98d8de058",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02834ffc9594b418a98d8de058",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851834ffc9594b418a98d8de058",
							width: 64,
						},
					],
					name: "Edge of Depression",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6Ia1SL7mokKgBkA1GLTn5S",
						},
						href: "https://api.spotify.com/v1/artists/6Ia1SL7mokKgBkA1GLTn5S",
						name: "Felix Ayerza",
						uri: "spotify:artist:6Ia1SL7mokKgBkA1GLTn5S",
					},
				],
				external_ids: {
					isrc: "US83Z1808959",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4jaEA14J6PkWeTL7biiU9w",
				},
				href: "https://api.spotify.com/v1/tracks/4jaEA14J6PkWeTL7biiU9w",
				id: "4jaEA14J6PkWeTL7biiU9w",
				name: "Edge of Depression",
				uri: "spotify:track:4jaEA14J6PkWeTL7biiU9w",
			},
		},
		{
			added_at: "2023-08-22T16:27:28Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6w8FlpM4WCoQNK94V0xruX",
					},
					href: "https://api.spotify.com/v1/albums/6w8FlpM4WCoQNK94V0xruX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27304121a7c840dfa709600d0c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0204121a7c840dfa709600d0c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485104121a7c840dfa709600d0c8",
							width: 64,
						},
					],
					name: "Canaries in a Coal Mine",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/21K0gLOe4i0o6l1MHd5a6W",
						},
						href: "https://api.spotify.com/v1/artists/21K0gLOe4i0o6l1MHd5a6W",
						name: "Bukahara",
						uri: "spotify:artist:21K0gLOe4i0o6l1MHd5a6W",
					},
				],
				external_ids: {
					isrc: "QMEU32001067",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3gNGs3jVDgvbJUD8nNCZD0",
				},
				href: "https://api.spotify.com/v1/tracks/3gNGs3jVDgvbJUD8nNCZD0",
				id: "3gNGs3jVDgvbJUD8nNCZD0",
				name: "Happy",
				uri: "spotify:track:3gNGs3jVDgvbJUD8nNCZD0",
			},
		},
		{
			added_at: "2023-08-22T16:27:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/42lkLi4VzL1oppZJ06AR9p",
					},
					href: "https://api.spotify.com/v1/albums/42lkLi4VzL1oppZJ06AR9p",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27321849de93e8105c8201aa43d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0221849de93e8105c8201aa43d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485121849de93e8105c8201aa43d",
							width: 64,
						},
					],
					name: "Трое",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4CU795ZKZ6Vn5GvkXrbxy9",
						},
						href: "https://api.spotify.com/v1/artists/4CU795ZKZ6Vn5GvkXrbxy9",
						name: "FolkBeat",
						uri: "spotify:artist:4CU795ZKZ6Vn5GvkXrbxy9",
					},
				],
				external_ids: {
					isrc: "FR10S1978517",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/79hGpLouwH0l1gVaJ6e6ER",
				},
				href: "https://api.spotify.com/v1/tracks/79hGpLouwH0l1gVaJ6e6ER",
				id: "79hGpLouwH0l1gVaJ6e6ER",
				name: "Синяя река",
				uri: "spotify:track:79hGpLouwH0l1gVaJ6e6ER",
			},
		},
		{
			added_at: "2023-08-22T16:27:48Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7M366GEGwjLrLSvXUKdsIX",
					},
					href: "https://api.spotify.com/v1/albums/7M366GEGwjLrLSvXUKdsIX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735b245a2978d650174fa74cc2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025b245a2978d650174fa74cc2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515b245a2978d650174fa74cc2",
							width: 64,
						},
					],
					name: "Some Loud Thunder",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1jSaZgaKHmgc7VTgML528r",
						},
						href: "https://api.spotify.com/v1/artists/1jSaZgaKHmgc7VTgML528r",
						name: "Clap Your Hands Say Yeah",
						uri: "spotify:artist:1jSaZgaKHmgc7VTgML528r",
					},
				],
				external_ids: {
					isrc: "US99Z0600005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6M7681fCrvo6Pqx5fcDGgY",
				},
				href: "https://api.spotify.com/v1/tracks/6M7681fCrvo6Pqx5fcDGgY",
				id: "6M7681fCrvo6Pqx5fcDGgY",
				name: "Satan Said Dance",
				uri: "spotify:track:6M7681fCrvo6Pqx5fcDGgY",
			},
		},
		{
			added_at: "2023-08-22T16:27:56Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4E0Ywn4UsTPrWaFvpiuOt8",
					},
					href: "https://api.spotify.com/v1/albums/4E0Ywn4UsTPrWaFvpiuOt8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fc8285b4f20f2636a27464bd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fc8285b4f20f2636a27464bd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fc8285b4f20f2636a27464bd",
							width: 64,
						},
					],
					name: "Kaleidoscopes",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7ixzNQXQ64I2ayrtyhlF7i",
						},
						href: "https://api.spotify.com/v1/artists/7ixzNQXQ64I2ayrtyhlF7i",
						name: "Transviolet",
						uri: "spotify:artist:7ixzNQXQ64I2ayrtyhlF7i",
					},
				],
				external_ids: {
					isrc: "USSM11704861",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7G6vEhuSJqAht3Q22WUe2u",
				},
				href: "https://api.spotify.com/v1/tracks/7G6vEhuSJqAht3Q22WUe2u",
				id: "7G6vEhuSJqAht3Q22WUe2u",
				name: "The Hamptons",
				uri: "spotify:track:7G6vEhuSJqAht3Q22WUe2u",
			},
		},
		{
			added_at: "2023-08-22T16:28:29Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0eF8omWNFE3HQEcKoZZhDC",
					},
					href: "https://api.spotify.com/v1/albums/0eF8omWNFE3HQEcKoZZhDC",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730f391ecc755fda7734f42342",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020f391ecc755fda7734f42342",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510f391ecc755fda7734f42342",
							width: 64,
						},
					],
					name: "JOJO'S BIZARRE ADVENTURE -Stardust Crusaders O.S.T [Departure]",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/56DDzGJXY0xndL9wu9aHUD",
						},
						href: "https://api.spotify.com/v1/artists/56DDzGJXY0xndL9wu9aHUD",
						name: "Yugo Kanno",
						uri: "spotify:artist:56DDzGJXY0xndL9wu9aHUD",
					},
				],
				external_ids: {
					isrc: "JPQ461400127",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0nA51z4UszHDnVihedcPFQ",
				},
				href: "https://api.spotify.com/v1/tracks/0nA51z4UszHDnVihedcPFQ",
				id: "0nA51z4UszHDnVihedcPFQ",
				name: "Kouketsunaru Kyoukou",
				uri: "spotify:track:0nA51z4UszHDnVihedcPFQ",
			},
		},
		{
			added_at: "2023-08-22T16:28:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3IsnebH7a085bEoQKee9UX",
					},
					href: "https://api.spotify.com/v1/albums/3IsnebH7a085bEoQKee9UX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739047d1240dc46757ea2ea6ed",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029047d1240dc46757ea2ea6ed",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519047d1240dc46757ea2ea6ed",
							width: 64,
						},
					],
					name: "From The Wreckage",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5GMZzcgmUwopsHBB7TyCsy",
						},
						href: "https://api.spotify.com/v1/artists/5GMZzcgmUwopsHBB7TyCsy",
						name: "The Wind and The Wave",
						uri: "spotify:artist:5GMZzcgmUwopsHBB7TyCsy",
					},
				],
				external_ids: {
					isrc: "USRC11400304",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0l0fgtFUOrcsk2Xks5EBd3",
				},
				href: "https://api.spotify.com/v1/tracks/0l0fgtFUOrcsk2Xks5EBd3",
				id: "0l0fgtFUOrcsk2Xks5EBd3",
				name: "With Your Two Hands",
				uri: "spotify:track:0l0fgtFUOrcsk2Xks5EBd3",
			},
		},
		{
			added_at: "2023-08-22T16:28:55Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7KXKBf4FtIfNB88RNhuJNX",
					},
					href: "https://api.spotify.com/v1/albums/7KXKBf4FtIfNB88RNhuJNX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735b8b1973d1a1f5bde1caa004",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025b8b1973d1a1f5bde1caa004",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515b8b1973d1a1f5bde1caa004",
							width: 64,
						},
					],
					name: "MARVEL SNAP (Original Video Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6Iqjhmr12uPpkWTLuTKjAp",
						},
						href: "https://api.spotify.com/v1/artists/6Iqjhmr12uPpkWTLuTKjAp",
						name: "Christopher Alan Grabar",
						uri: "spotify:artist:6Iqjhmr12uPpkWTLuTKjAp",
					},
				],
				external_ids: {
					isrc: "USHR12244894",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/40Dv9hHSG2tU63UqcYHJme",
				},
				href: "https://api.spotify.com/v1/tracks/40Dv9hHSG2tU63UqcYHJme",
				id: "40Dv9hHSG2tU63UqcYHJme",
				name: "Sometimes You Win!",
				uri: "spotify:track:40Dv9hHSG2tU63UqcYHJme",
			},
		},
		{
			added_at: "2023-08-22T16:29:05Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1TDa3jFSZ9fDherTY2LGO2",
					},
					href: "https://api.spotify.com/v1/albums/1TDa3jFSZ9fDherTY2LGO2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27330b1bb752d5823fdf8bcaa64",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0230b1bb752d5823fdf8bcaa64",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485130b1bb752d5823fdf8bcaa64",
							width: 64,
						},
					],
					name: "Level Two",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1sSph4lgc4BGfJEvU16ROp",
						},
						href: "https://api.spotify.com/v1/artists/1sSph4lgc4BGfJEvU16ROp",
						name: "Mathematicians",
						uri: "spotify:artist:1sSph4lgc4BGfJEvU16ROp",
					},
				],
				external_ids: {
					isrc: "ushm20768584",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/27D6NRyGgI1WtV1d1xpg20",
				},
				href: "https://api.spotify.com/v1/tracks/27D6NRyGgI1WtV1d1xpg20",
				id: "27D6NRyGgI1WtV1d1xpg20",
				name: "XOXO",
				uri: "spotify:track:27D6NRyGgI1WtV1d1xpg20",
			},
		},
		{
			added_at: "2023-08-22T16:29:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1TDa3jFSZ9fDherTY2LGO2",
					},
					href: "https://api.spotify.com/v1/albums/1TDa3jFSZ9fDherTY2LGO2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27330b1bb752d5823fdf8bcaa64",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0230b1bb752d5823fdf8bcaa64",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485130b1bb752d5823fdf8bcaa64",
							width: 64,
						},
					],
					name: "Level Two",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1sSph4lgc4BGfJEvU16ROp",
						},
						href: "https://api.spotify.com/v1/artists/1sSph4lgc4BGfJEvU16ROp",
						name: "Mathematicians",
						uri: "spotify:artist:1sSph4lgc4BGfJEvU16ROp",
					},
				],
				external_ids: {
					isrc: "ushm20768582",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3pSwd3veVn84RHRL2wXHnV",
				},
				href: "https://api.spotify.com/v1/tracks/3pSwd3veVn84RHRL2wXHnV",
				id: "3pSwd3veVn84RHRL2wXHnV",
				name: "Weapons of Math Instruction",
				uri: "spotify:track:3pSwd3veVn84RHRL2wXHnV",
			},
		},
		{
			added_at: "2023-08-22T16:29:26Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/09yD0NZRusM5mYKA8biNKU",
					},
					href: "https://api.spotify.com/v1/albums/09yD0NZRusM5mYKA8biNKU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e37924df4c3cb6eddfe3e7fd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e37924df4c3cb6eddfe3e7fd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e37924df4c3cb6eddfe3e7fd",
							width: 64,
						},
					],
					name: "เจ็บคอ",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7xHveeQskRixx5G7G2bFLZ",
						},
						href: "https://api.spotify.com/v1/artists/7xHveeQskRixx5G7G2bFLZ",
						name: "กระต่าย พรรณนิภา",
						uri: "spotify:artist:7xHveeQskRixx5G7G2bFLZ",
					},
				],
				external_ids: {
					isrc: "FR2X42149988",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/07FsS0TPr3kawG29ZNQ4Pd",
				},
				href: "https://api.spotify.com/v1/tracks/07FsS0TPr3kawG29ZNQ4Pd",
				id: "07FsS0TPr3kawG29ZNQ4Pd",
				name: "เจ็บคอ",
				uri: "spotify:track:07FsS0TPr3kawG29ZNQ4Pd",
			},
		},
		{
			added_at: "2023-08-22T16:29:34Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6k3vC8nep1BfqAIJ81L6OL",
					},
					href: "https://api.spotify.com/v1/albums/6k3vC8nep1BfqAIJ81L6OL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273028c3bb4b81ee71dd73d1596",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02028c3bb4b81ee71dd73d1596",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851028c3bb4b81ee71dd73d1596",
							width: 64,
						},
					],
					name: "An Awesome Wave",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3XHO7cRUPCLOr6jwp8vsx5",
						},
						href: "https://api.spotify.com/v1/artists/3XHO7cRUPCLOr6jwp8vsx5",
						name: "alt-J",
						uri: "spotify:artist:3XHO7cRUPCLOr6jwp8vsx5",
					},
				],
				external_ids: {
					isrc: "GBZUZ1200067",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3n69hLUdIsSa1WlRmjMZlW",
				},
				href: "https://api.spotify.com/v1/tracks/3n69hLUdIsSa1WlRmjMZlW",
				id: "3n69hLUdIsSa1WlRmjMZlW",
				name: "Breezeblocks",
				uri: "spotify:track:3n69hLUdIsSa1WlRmjMZlW",
			},
		},
		{
			added_at: "2023-08-22T16:29:43Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3xQOtpKy8xSsnQ2M85FWBH",
					},
					href: "https://api.spotify.com/v1/albums/3xQOtpKy8xSsnQ2M85FWBH",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f0be684aeada29ba1b210d8f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f0be684aeada29ba1b210d8f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f0be684aeada29ba1b210d8f",
							width: 64,
						},
					],
					name: "see you in the light (deluxe)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6ykTQoJQsIFiHJg8IzOMu0",
						},
						href: "https://api.spotify.com/v1/artists/6ykTQoJQsIFiHJg8IzOMu0",
						name: "Caroline Culver",
						uri: "spotify:artist:6ykTQoJQsIFiHJg8IzOMu0",
					},
				],
				external_ids: {
					isrc: "USLZJ2236256",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4AcSdZHkVXRLj54DXC0Tn2",
				},
				href: "https://api.spotify.com/v1/tracks/4AcSdZHkVXRLj54DXC0Tn2",
				id: "4AcSdZHkVXRLj54DXC0Tn2",
				name: "Summer 2019",
				uri: "spotify:track:4AcSdZHkVXRLj54DXC0Tn2",
			},
		},
		{
			added_at: "2023-08-22T16:29:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6TPMkWwD9IfpKnPc3rQrGS",
					},
					href: "https://api.spotify.com/v1/albums/6TPMkWwD9IfpKnPc3rQrGS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27313c657d9d7cd462b37d207b5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0213c657d9d7cd462b37d207b5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485113c657d9d7cd462b37d207b5",
							width: 64,
						},
					],
					name: "Tasmanian Glow",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4CyxMgnF71FyOWADVWxJRE",
						},
						href: "https://api.spotify.com/v1/artists/4CyxMgnF71FyOWADVWxJRE",
						name: "Strawberry Girls",
						uri: "spotify:artist:4CyxMgnF71FyOWADVWxJRE",
					},
				],
				external_ids: {
					isrc: "USF289801868",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7o6SIcCSVfdgqMafAkCWoL",
				},
				href: "https://api.spotify.com/v1/tracks/7o6SIcCSVfdgqMafAkCWoL",
				id: "7o6SIcCSVfdgqMafAkCWoL",
				name: "Moonwalker",
				uri: "spotify:track:7o6SIcCSVfdgqMafAkCWoL",
			},
		},
		{
			added_at: "2023-08-22T16:30:02Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/12sIChYxTgbZVVYJfPFBNi",
					},
					href: "https://api.spotify.com/v1/albums/12sIChYxTgbZVVYJfPFBNi",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ca0ea9794861f6e3713804fe",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ca0ea9794861f6e3713804fe",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ca0ea9794861f6e3713804fe",
							width: 64,
						},
					],
					name: "Andor: Vol. 3 (Episodes 9-12) [Original Score]",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/18oYqNtcLUHrqO7LfX7qni",
						},
						href: "https://api.spotify.com/v1/artists/18oYqNtcLUHrqO7LfX7qni",
						name: "Nicholas Britell",
						uri: "spotify:artist:18oYqNtcLUHrqO7LfX7qni",
					},
				],
				external_ids: {
					isrc: "USWD12219305",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0LAJfsX27yFaqyuBFKN8qo",
				},
				href: "https://api.spotify.com/v1/tracks/0LAJfsX27yFaqyuBFKN8qo",
				id: "0LAJfsX27yFaqyuBFKN8qo",
				name: "Andor (Main Title Theme) - Episode 12",
				uri: "spotify:track:0LAJfsX27yFaqyuBFKN8qo",
			},
		},
		{
			added_at: "2023-08-22T16:30:25Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1eDQeINx6RrlqnflDkykAp",
					},
					href: "https://api.spotify.com/v1/albums/1eDQeINx6RrlqnflDkykAp",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273aa11fde63d2f693f1abb36c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02aa11fde63d2f693f1abb36c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851aa11fde63d2f693f1abb36c8",
							width: 64,
						},
					],
					name: "Garbage Island",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/09kohMK0MSHgpmKWiQeQ5E",
						},
						href: "https://api.spotify.com/v1/artists/09kohMK0MSHgpmKWiQeQ5E",
						name: "The Burning Hell",
						uri: "spotify:artist:09kohMK0MSHgpmKWiQeQ5E",
					},
				],
				external_ids: {
					isrc: "DEY212145208",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0yVH3C0kd2sbl3ZMbJtoLN",
				},
				href: "https://api.spotify.com/v1/tracks/0yVH3C0kd2sbl3ZMbJtoLN",
				id: "0yVH3C0kd2sbl3ZMbJtoLN",
				name: "All I Need",
				uri: "spotify:track:0yVH3C0kd2sbl3ZMbJtoLN",
			},
		},
		{
			added_at: "2023-08-22T16:30:34Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/66cyBjBDqSWQgh5Ix3geNl",
					},
					href: "https://api.spotify.com/v1/albums/66cyBjBDqSWQgh5Ix3geNl",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273364f9ffb7ceaf0e191cdb8c3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02364f9ffb7ceaf0e191cdb8c3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851364f9ffb7ceaf0e191cdb8c3",
							width: 64,
						},
					],
					name: "The Same Old Blood Rush With A New Touch",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7AsPubxWM5tfW4hTZEL3aP",
						},
						href: "https://api.spotify.com/v1/artists/7AsPubxWM5tfW4hTZEL3aP",
						name: "Cute Is What We Aim For",
						uri: "spotify:artist:7AsPubxWM5tfW4hTZEL3aP",
					},
				],
				external_ids: {
					isrc: "US56V0608708",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6uzuW7L1t1UhnzbfXwtMtQ",
				},
				href: "https://api.spotify.com/v1/tracks/6uzuW7L1t1UhnzbfXwtMtQ",
				id: "6uzuW7L1t1UhnzbfXwtMtQ",
				name: "The Curse of Curves",
				uri: "spotify:track:6uzuW7L1t1UhnzbfXwtMtQ",
			},
		},
		{
			added_at: "2023-08-22T16:30:50Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4pFPIHBK3YjY7mcFt0seqi",
					},
					href: "https://api.spotify.com/v1/albums/4pFPIHBK3YjY7mcFt0seqi",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a2973d610b106fa270a043b4",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a2973d610b106fa270a043b4",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a2973d610b106fa270a043b4",
							width: 64,
						},
					],
					name: "Two Ribbons",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4qNZw759AdHSMugyDMrIlF",
						},
						href: "https://api.spotify.com/v1/artists/4qNZw759AdHSMugyDMrIlF",
						name: "Let's Eat Grandma",
						uri: "spotify:artist:4qNZw759AdHSMugyDMrIlF",
					},
				],
				external_ids: {
					isrc: "GBKZV2100100",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0BnepvoveEw7fJIpuwdLT4",
				},
				href: "https://api.spotify.com/v1/tracks/0BnepvoveEw7fJIpuwdLT4",
				id: "0BnepvoveEw7fJIpuwdLT4",
				name: "Happy New Year",
				uri: "spotify:track:0BnepvoveEw7fJIpuwdLT4",
			},
		},
		{
			added_at: "2023-08-22T16:31:04Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6w8FlpM4WCoQNK94V0xruX",
					},
					href: "https://api.spotify.com/v1/albums/6w8FlpM4WCoQNK94V0xruX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27304121a7c840dfa709600d0c8",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0204121a7c840dfa709600d0c8",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485104121a7c840dfa709600d0c8",
							width: 64,
						},
					],
					name: "Canaries in a Coal Mine",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/21K0gLOe4i0o6l1MHd5a6W",
						},
						href: "https://api.spotify.com/v1/artists/21K0gLOe4i0o6l1MHd5a6W",
						name: "Bukahara",
						uri: "spotify:artist:21K0gLOe4i0o6l1MHd5a6W",
					},
				],
				external_ids: {
					isrc: "QMEU32001070",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1q02JO1zluqjvK8lzr0uq7",
				},
				href: "https://api.spotify.com/v1/tracks/1q02JO1zluqjvK8lzr0uq7",
				id: "1q02JO1zluqjvK8lzr0uq7",
				name: "We Are Still Here!",
				uri: "spotify:track:1q02JO1zluqjvK8lzr0uq7",
			},
		},
		{
			added_at: "2023-08-22T16:31:14Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1VdBmJGiLJRbGSWw1fnG9G",
					},
					href: "https://api.spotify.com/v1/albums/1VdBmJGiLJRbGSWw1fnG9G",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fe4975b7199b0e4250e321f0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fe4975b7199b0e4250e321f0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fe4975b7199b0e4250e321f0",
							width: 64,
						},
					],
					name: "Phantasma",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/21K0gLOe4i0o6l1MHd5a6W",
						},
						href: "https://api.spotify.com/v1/artists/21K0gLOe4i0o6l1MHd5a6W",
						name: "Bukahara",
						uri: "spotify:artist:21K0gLOe4i0o6l1MHd5a6W",
					},
				],
				external_ids: {
					isrc: "SE30H1727019",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7uZarKmuXZ6jIdILSilsl3",
				},
				href: "https://api.spotify.com/v1/tracks/7uZarKmuXZ6jIdILSilsl3",
				id: "7uZarKmuXZ6jIdILSilsl3",
				name: "No!",
				uri: "spotify:track:7uZarKmuXZ6jIdILSilsl3",
			},
		},
		{
			added_at: "2023-08-22T16:31:23Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/298x29sNXaH7yDgXLoKiQX",
					},
					href: "https://api.spotify.com/v1/albums/298x29sNXaH7yDgXLoKiQX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732fc2abec424f2add74535274",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022fc2abec424f2add74535274",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512fc2abec424f2add74535274",
							width: 64,
						},
					],
					name: "Dame Fortune",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1O3ZOjqFLEnbpZexcRjocn",
						},
						href: "https://api.spotify.com/v1/artists/1O3ZOjqFLEnbpZexcRjocn",
						name: "RJD2",
						uri: "spotify:artist:1O3ZOjqFLEnbpZexcRjocn",
					},
				],
				external_ids: {
					isrc: "QMBZ91536819",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/37UaaIeFOt7iesXjWl8vDH",
				},
				href: "https://api.spotify.com/v1/tracks/37UaaIeFOt7iesXjWl8vDH",
				id: "37UaaIeFOt7iesXjWl8vDH",
				name: "The Sheboygan Left",
				uri: "spotify:track:37UaaIeFOt7iesXjWl8vDH",
			},
		},
		{
			added_at: "2023-08-22T16:31:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5z3YYg8ZszvGO836MiYu1o",
					},
					href: "https://api.spotify.com/v1/albums/5z3YYg8ZszvGO836MiYu1o",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273198626745f4f0a9b77810436",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02198626745f4f0a9b77810436",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851198626745f4f0a9b77810436",
							width: 64,
						},
					],
					name: "how does your girlfriend feel about it",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2CUeVZl8E9ouggdBhyclFx",
						},
						href: "https://api.spotify.com/v1/artists/2CUeVZl8E9ouggdBhyclFx",
						name: "Chloe Lilac",
						uri: "spotify:artist:2CUeVZl8E9ouggdBhyclFx",
					},
				],
				external_ids: {
					isrc: "QZGLS2267534",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6Z1nBzbcsdCvoLF2G3Cl35",
				},
				href: "https://api.spotify.com/v1/tracks/6Z1nBzbcsdCvoLF2G3Cl35",
				id: "6Z1nBzbcsdCvoLF2G3Cl35",
				name: "how does your girlfriend feel about it",
				uri: "spotify:track:6Z1nBzbcsdCvoLF2G3Cl35",
			},
		},
		{
			added_at: "2023-08-22T16:31:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6PlME9QrqpKto5MpYTrYsX",
					},
					href: "https://api.spotify.com/v1/albums/6PlME9QrqpKto5MpYTrYsX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2736083b0ecb07463e9869a0027",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e026083b0ecb07463e9869a0027",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048516083b0ecb07463e9869a0027",
							width: 64,
						},
					],
					name: "Weight",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2cyyGl4qnHZL0o16t0fpJl",
						},
						href: "https://api.spotify.com/v1/artists/2cyyGl4qnHZL0o16t0fpJl",
						name: "Angel Haze",
						uri: "spotify:artist:2cyyGl4qnHZL0o16t0fpJl",
					},
				],
				external_ids: {
					isrc: "TCAFI2019384",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/74qc0EjjUi8Nzbq9pgS7Pc",
				},
				href: "https://api.spotify.com/v1/tracks/74qc0EjjUi8Nzbq9pgS7Pc",
				id: "74qc0EjjUi8Nzbq9pgS7Pc",
				name: "Weight",
				uri: "spotify:track:74qc0EjjUi8Nzbq9pgS7Pc",
			},
		},
		{
			added_at: "2023-08-22T16:31:58Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5pyhv2vzc7mkiblMIhSXWs",
					},
					href: "https://api.spotify.com/v1/albums/5pyhv2vzc7mkiblMIhSXWs",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27380f63ec75521ff53737cbe72",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0280f63ec75521ff53737cbe72",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485180f63ec75521ff53737cbe72",
							width: 64,
						},
					],
					name: "New Start",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6psCCMHymYfQy6VvYRr6cs",
						},
						href: "https://api.spotify.com/v1/artists/6psCCMHymYfQy6VvYRr6cs",
						name: "Loving Caliber",
						uri: "spotify:artist:6psCCMHymYfQy6VvYRr6cs",
					},
				],
				external_ids: {
					isrc: "SE5Q51816196",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7B9e2uE6qME0SQtyepKyC3",
				},
				href: "https://api.spotify.com/v1/tracks/7B9e2uE6qME0SQtyepKyC3",
				id: "7B9e2uE6qME0SQtyepKyC3",
				name: "We're Just Friends",
				uri: "spotify:track:7B9e2uE6qME0SQtyepKyC3",
			},
		},
		{
			added_at: "2023-08-22T16:32:10Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/78hVLZZJhaXgrnfXKc6yxF",
					},
					href: "https://api.spotify.com/v1/albums/78hVLZZJhaXgrnfXKc6yxF",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730a043c8c45330aa972c46339",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020a043c8c45330aa972c46339",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510a043c8c45330aa972c46339",
							width: 64,
						},
					],
					name: "Nena",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6Tz0QRoe083BcOo2YbG9lV",
						},
						href: "https://api.spotify.com/v1/artists/6Tz0QRoe083BcOo2YbG9lV",
						name: "Nena",
						uri: "spotify:artist:6Tz0QRoe083BcOo2YbG9lV",
					},
				],
				external_ids: {
					isrc: "DEE868300002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/27DEhFC0G2olRFgCTksnfw",
				},
				href: "https://api.spotify.com/v1/tracks/27DEhFC0G2olRFgCTksnfw",
				id: "27DEhFC0G2olRFgCTksnfw",
				name: "Nur geträumt",
				uri: "spotify:track:27DEhFC0G2olRFgCTksnfw",
			},
		},
		{
			added_at: "2023-08-22T16:32:19Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa",
					},
					href: "https://api.spotify.com/v1/albums/4m2880jivSbbyEGAKfITCa",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029b9b36b0e22870b9f542d937",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
							width: 64,
						},
					],
					name: "Random Access Memories",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
						},
						href: "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
						name: "Daft Punk",
						uri: "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi",
					},
				],
				external_ids: {
					isrc: "USQX91300101",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0dEIca2nhcxDUV8C5QkPYb",
				},
				href: "https://api.spotify.com/v1/tracks/0dEIca2nhcxDUV8C5QkPYb",
				id: "0dEIca2nhcxDUV8C5QkPYb",
				name: "Give Life Back to Music",
				uri: "spotify:track:0dEIca2nhcxDUV8C5QkPYb",
			},
		},
		{
			added_at: "2023-08-22T16:32:30Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/48TLSzU4QCZeZBanQpkbbU",
					},
					href: "https://api.spotify.com/v1/albums/48TLSzU4QCZeZBanQpkbbU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735257a77d07cf188c762d8c64",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025257a77d07cf188c762d8c64",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515257a77d07cf188c762d8c64",
							width: 64,
						},
					],
					name: "20.000 Meilen unter dem Yeah",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5HK21vFGCSj9b81nLOP9Cr",
						},
						href: "https://api.spotify.com/v1/artists/5HK21vFGCSj9b81nLOP9Cr",
						name: "Captain Gips",
						uri: "spotify:artist:5HK21vFGCSj9b81nLOP9Cr",
					},
				],
				external_ids: {
					isrc: "DEBT91300244",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0KKzqlibM7xr2JUzq3ZcnK",
				},
				href: "https://api.spotify.com/v1/tracks/0KKzqlibM7xr2JUzq3ZcnK",
				id: "0KKzqlibM7xr2JUzq3ZcnK",
				name: "Hug Life",
				uri: "spotify:track:0KKzqlibM7xr2JUzq3ZcnK",
			},
		},
		{
			added_at: "2023-08-22T16:32:38Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/40AMggwArl7hpNsnntBeVG",
					},
					href: "https://api.spotify.com/v1/albums/40AMggwArl7hpNsnntBeVG",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e8d9e35d2e8fad2333f7ecfd",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e8d9e35d2e8fad2333f7ecfd",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e8d9e35d2e8fad2333f7ecfd",
							width: 64,
						},
					],
					name: "Klar zum Kentern",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5HK21vFGCSj9b81nLOP9Cr",
						},
						href: "https://api.spotify.com/v1/artists/5HK21vFGCSj9b81nLOP9Cr",
						name: "Captain Gips",
						uri: "spotify:artist:5HK21vFGCSj9b81nLOP9Cr",
					},
				],
				external_ids: {
					isrc: "DEBT91700144",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6189YfwccIXeRD9SIf6T10",
				},
				href: "https://api.spotify.com/v1/tracks/6189YfwccIXeRD9SIf6T10",
				id: "6189YfwccIXeRD9SIf6T10",
				name: "Menschheit",
				uri: "spotify:track:6189YfwccIXeRD9SIf6T10",
			},
		},
		{
			added_at: "2023-08-22T16:32:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/72iatovpFrTUeaa96qh2Or",
					},
					href: "https://api.spotify.com/v1/albums/72iatovpFrTUeaa96qh2Or",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737a7f8347414a2406e309b4a7",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027a7f8347414a2406e309b4a7",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517a7f8347414a2406e309b4a7",
							width: 64,
						},
					],
					name: "Rollerdrome (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5SUvXyFcsFsYH0WQ2cNFJb",
						},
						href: "https://api.spotify.com/v1/artists/5SUvXyFcsFsYH0WQ2cNFJb",
						name: "Electric Dragon",
						uri: "spotify:artist:5SUvXyFcsFsYH0WQ2cNFJb",
					},
				],
				external_ids: {
					isrc: "TCAGG2299523",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4RRSdg2Fp0txQcgmnGHzLx",
				},
				href: "https://api.spotify.com/v1/tracks/4RRSdg2Fp0txQcgmnGHzLx",
				id: "4RRSdg2Fp0txQcgmnGHzLx",
				name: "Echo Basin",
				uri: "spotify:track:4RRSdg2Fp0txQcgmnGHzLx",
			},
		},
		{
			added_at: "2023-08-22T16:32:57Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0OQHXsY35RMMxQVGVvC6Tl",
					},
					href: "https://api.spotify.com/v1/albums/0OQHXsY35RMMxQVGVvC6Tl",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273fda1055760c5a977698b2c9a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02fda1055760c5a977698b2c9a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851fda1055760c5a977698b2c9a",
							width: 64,
						},
					],
					name: "Flight Of The Nebers",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0hIPi7k8V7xPPyYcH2kW9y",
						},
						href: "https://api.spotify.com/v1/artists/0hIPi7k8V7xPPyYcH2kW9y",
						name: "Koloto",
						uri: "spotify:artist:0hIPi7k8V7xPPyYcH2kW9y",
					},
				],
				external_ids: {
					isrc: "USA2P2015341",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5N2yY4Ii0USViC0mKBeJlg",
				},
				href: "https://api.spotify.com/v1/tracks/5N2yY4Ii0USViC0mKBeJlg",
				id: "5N2yY4Ii0USViC0mKBeJlg",
				name: "Flight Of The Nebers",
				uri: "spotify:track:5N2yY4Ii0USViC0mKBeJlg",
			},
		},
		{
			added_at: "2023-08-22T16:33:16Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2ieqvJJtuBrJW2USuiwBJ6",
					},
					href: "https://api.spotify.com/v1/albums/2ieqvJJtuBrJW2USuiwBJ6",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737dbdd611df8cc545b09c8f84",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027dbdd611df8cc545b09c8f84",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517dbdd611df8cc545b09c8f84",
							width: 64,
						},
					],
					name: "Grow Your Garden",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3xbmS6qcRWTyILBoaqAPT4",
						},
						href: "https://api.spotify.com/v1/artists/3xbmS6qcRWTyILBoaqAPT4",
						name: "ANIMA!",
						uri: "spotify:artist:3xbmS6qcRWTyILBoaqAPT4",
					},
				],
				external_ids: {
					isrc: "GBMA21927248",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2oq3h6o4hdbb0a8QTLPn7K",
				},
				href: "https://api.spotify.com/v1/tracks/2oq3h6o4hdbb0a8QTLPn7K",
				id: "2oq3h6o4hdbb0a8QTLPn7K",
				name: "Streaks",
				uri: "spotify:track:2oq3h6o4hdbb0a8QTLPn7K",
			},
		},
		{
			added_at: "2023-08-22T16:33:31Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4dRZnHwDrkhKNGZhRgzykl",
					},
					href: "https://api.spotify.com/v1/albums/4dRZnHwDrkhKNGZhRgzykl",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273994a5d54c967ee8ba811e834",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02994a5d54c967ee8ba811e834",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851994a5d54c967ee8ba811e834",
							width: 64,
						},
					],
					name: "This Land Is Your Landfill",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7EwwyzTYEM8e0a8i1lKPk0",
						},
						href: "https://api.spotify.com/v1/artists/7EwwyzTYEM8e0a8i1lKPk0",
						name: "The Homeless Gospel Choir",
						uri: "spotify:artist:7EwwyzTYEM8e0a8i1lKPk0",
					},
				],
				external_ids: {
					isrc: "TCAEO1918382",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/01PSIV99JJld6qs0xzjYwS",
				},
				href: "https://api.spotify.com/v1/tracks/01PSIV99JJld6qs0xzjYwS",
				id: "01PSIV99JJld6qs0xzjYwS",
				name: "Punk as Fuck",
				uri: "spotify:track:01PSIV99JJld6qs0xzjYwS",
			},
		},
		{
			added_at: "2023-08-22T16:33:41Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5aAfgCIEc9zBKbwFO6jixe",
					},
					href: "https://api.spotify.com/v1/albums/5aAfgCIEc9zBKbwFO6jixe",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27310120527b23679a5c93c82b2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0210120527b23679a5c93c82b2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485110120527b23679a5c93c82b2",
							width: 64,
						},
					],
					name: "The Original Motion Picture Soundtrack",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1dWEYMPtNmvSVaDNLgB6NV",
						},
						href: "https://api.spotify.com/v1/artists/1dWEYMPtNmvSVaDNLgB6NV",
						name: "Saint Motel",
						uri: "spotify:artist:1dWEYMPtNmvSVaDNLgB6NV",
					},
				],
				external_ids: {
					isrc: "USAT22000985",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5K43AHQPTJTqlyRZ3uBGKz",
				},
				href: "https://api.spotify.com/v1/tracks/5K43AHQPTJTqlyRZ3uBGKz",
				id: "5K43AHQPTJTqlyRZ3uBGKz",
				name: "A Good Song Never Dies",
				uri: "spotify:track:5K43AHQPTJTqlyRZ3uBGKz",
			},
		},
		{
			added_at: "2023-08-22T16:33:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1I3rBU8JnZCc0Dobd29JXI",
					},
					href: "https://api.spotify.com/v1/albums/1I3rBU8JnZCc0Dobd29JXI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f66d98fd5a43f4320f62af67",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f66d98fd5a43f4320f62af67",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f66d98fd5a43f4320f62af67",
							width: 64,
						},
					],
					name: "Channel the Spirits (Special Edition)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0Z5FMozvx15nUSUA6a9kkU",
						},
						href: "https://api.spotify.com/v1/artists/0Z5FMozvx15nUSUA6a9kkU",
						name: "The Comet Is Coming",
						uri: "spotify:artist:0Z5FMozvx15nUSUA6a9kkU",
					},
				],
				external_ids: {
					isrc: "GBCKB1510401",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2oETXgIQG8AfNngB8TefLd",
				},
				href: "https://api.spotify.com/v1/tracks/2oETXgIQG8AfNngB8TefLd",
				id: "2oETXgIQG8AfNngB8TefLd",
				name: "Neon Baby",
				uri: "spotify:track:2oETXgIQG8AfNngB8TefLd",
			},
		},
		{
			added_at: "2023-08-22T16:35:12Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5KxXgnho6NNYk7MlAvz1j3",
					},
					href: "https://api.spotify.com/v1/albums/5KxXgnho6NNYk7MlAvz1j3",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27351b142e33f55e62b549891a3",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0251b142e33f55e62b549891a3",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485151b142e33f55e62b549891a3",
							width: 64,
						},
					],
					name: "Sunshine Fruit",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0BchEmsNc1BNnt1rzHkGD2",
						},
						href: "https://api.spotify.com/v1/artists/0BchEmsNc1BNnt1rzHkGD2",
						name: "Bear Garden",
						uri: "spotify:artist:0BchEmsNc1BNnt1rzHkGD2",
					},
				],
				external_ids: {
					isrc: "SE3T62004102",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5QxY7F5XUMg7RKHPpVSymc",
				},
				href: "https://api.spotify.com/v1/tracks/5QxY7F5XUMg7RKHPpVSymc",
				id: "5QxY7F5XUMg7RKHPpVSymc",
				name: "Electric Butterfly",
				uri: "spotify:track:5QxY7F5XUMg7RKHPpVSymc",
			},
		},
		{
			added_at: "2023-08-22T16:35:26Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1ikXR3naSvqHn5aej1Lxtw",
					},
					href: "https://api.spotify.com/v1/albums/1ikXR3naSvqHn5aej1Lxtw",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e745eb8df153e9751ed39aeb",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e745eb8df153e9751ed39aeb",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e745eb8df153e9751ed39aeb",
							width: 64,
						},
					],
					name: "Aliceband",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4r4F8WTxKS7hsSWVzlu6rY",
						},
						href: "https://api.spotify.com/v1/artists/4r4F8WTxKS7hsSWVzlu6rY",
						name: "AlicebanD",
						uri: "spotify:artist:4r4F8WTxKS7hsSWVzlu6rY",
					},
				],
				external_ids: {
					isrc: "TCAAX1110127",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2sWVKWb6hxcjOqb0m4KYMK",
				},
				href: "https://api.spotify.com/v1/tracks/2sWVKWb6hxcjOqb0m4KYMK",
				id: "2sWVKWb6hxcjOqb0m4KYMK",
				name: "Fire With Fire",
				uri: "spotify:track:2sWVKWb6hxcjOqb0m4KYMK",
			},
		},
		{
			added_at: "2023-08-22T16:35:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/13PNOP7VKrtWwQk5EIwU4z",
					},
					href: "https://api.spotify.com/v1/albums/13PNOP7VKrtWwQk5EIwU4z",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b3dda6c2e944579dba30d6ab",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b3dda6c2e944579dba30d6ab",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b3dda6c2e944579dba30d6ab",
							width: 64,
						},
					],
					name: "Troubadour",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/27JrHY7vnpdv1zEfe3F8FQ",
						},
						href: "https://api.spotify.com/v1/artists/27JrHY7vnpdv1zEfe3F8FQ",
						name: "Beken",
						uri: "spotify:artist:27JrHY7vnpdv1zEfe3F8FQ",
					},
				],
				external_ids: {
					isrc: "USR5C1500401",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5igPALpL3Ljrg65UPrFPSw",
				},
				href: "https://api.spotify.com/v1/tracks/5igPALpL3Ljrg65UPrFPSw",
				id: "5igPALpL3Ljrg65UPrFPSw",
				name: "Kote'w Te Ye",
				uri: "spotify:track:5igPALpL3Ljrg65UPrFPSw",
			},
		},
		{
			added_at: "2023-08-22T16:35:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/64M45unRUhuzlOYth6w5HB",
					},
					href: "https://api.spotify.com/v1/albums/64M45unRUhuzlOYth6w5HB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732f202886104bddfdb1b94010",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022f202886104bddfdb1b94010",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512f202886104bddfdb1b94010",
							width: 64,
						},
					],
					name: "Paulina",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1d6dwipPrsFSJVmFTTdFSS",
						},
						href: "https://api.spotify.com/v1/artists/1d6dwipPrsFSJVmFTTdFSS",
						name: "Paulina Rubio",
						uri: "spotify:artist:1d6dwipPrsFSJVmFTTdFSS",
					},
				],
				external_ids: {
					isrc: "MXF110000029",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0JAGODD5w6MeYQzA9lV6Zm",
				},
				href: "https://api.spotify.com/v1/tracks/0JAGODD5w6MeYQzA9lV6Zm",
				id: "0JAGODD5w6MeYQzA9lV6Zm",
				name: "Yo No Soy Esa Mujer",
				uri: "spotify:track:0JAGODD5w6MeYQzA9lV6Zm",
			},
		},
		{
			added_at: "2023-08-22T16:35:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3BIJimflJCEKdoMFSenabT",
					},
					href: "https://api.spotify.com/v1/albums/3BIJimflJCEKdoMFSenabT",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27353802ffe7441a90c997de234",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0253802ffe7441a90c997de234",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485153802ffe7441a90c997de234",
							width: 64,
						},
					],
					name: "The Rough Draft",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3icuKNh1iYRvYPiEkxiAfR",
						},
						href: "https://api.spotify.com/v1/artists/3icuKNh1iYRvYPiEkxiAfR",
						name: "Bug Hunter",
						uri: "spotify:artist:3icuKNh1iYRvYPiEkxiAfR",
					},
				],
				external_ids: {
					isrc: "QM9AA1854921",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6spNMZ5CIqjITkRDhI3xMP",
				},
				href: "https://api.spotify.com/v1/tracks/6spNMZ5CIqjITkRDhI3xMP",
				id: "6spNMZ5CIqjITkRDhI3xMP",
				name: "Dear McCracken",
				uri: "spotify:track:6spNMZ5CIqjITkRDhI3xMP",
			},
		},
		{
			added_at: "2023-08-22T16:36:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2WUO9qjrNDe1F8NQKmOXzk",
					},
					href: "https://api.spotify.com/v1/albums/2WUO9qjrNDe1F8NQKmOXzk",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732d8eb653ec7fb4f87d6289f2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022d8eb653ec7fb4f87d6289f2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512d8eb653ec7fb4f87d6289f2",
							width: 64,
						},
					],
					name: "Dung Họa",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2l0cdSl2y1u8TuqyO0X5Rf",
						},
						href: "https://api.spotify.com/v1/artists/2l0cdSl2y1u8TuqyO0X5Rf",
						name: "Limebócx",
						uri: "spotify:artist:2l0cdSl2y1u8TuqyO0X5Rf",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/74AO3S2ahQ4knFMk4eRVx3",
						},
						href: "https://api.spotify.com/v1/artists/74AO3S2ahQ4knFMk4eRVx3",
						name: "Mỹ Hương violin",
						uri: "spotify:artist:74AO3S2ahQ4knFMk4eRVx3",
					},
				],
				external_ids: {
					isrc: "FR2X42366549",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5mKoGjVbAcBKt2JafDAeWG",
				},
				href: "https://api.spotify.com/v1/tracks/5mKoGjVbAcBKt2JafDAeWG",
				id: "5mKoGjVbAcBKt2JafDAeWG",
				name: "Dung Họa",
				uri: "spotify:track:5mKoGjVbAcBKt2JafDAeWG",
			},
		},
		{
			added_at: "2023-08-22T16:36:14Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2HPj0XZe9WduSsyKTQqgVa",
					},
					href: "https://api.spotify.com/v1/albums/2HPj0XZe9WduSsyKTQqgVa",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e81fd3b9a7230db447f38182",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e81fd3b9a7230db447f38182",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e81fd3b9a7230db447f38182",
							width: 64,
						},
					],
					name: "Every Summertime",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2kxP07DLgs4xlWz8YHlvfh",
						},
						href: "https://api.spotify.com/v1/artists/2kxP07DLgs4xlWz8YHlvfh",
						name: "NIKI",
						uri: "spotify:artist:2kxP07DLgs4xlWz8YHlvfh",
					},
				],
				external_ids: {
					isrc: "USUM72114018",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/68HocO7fx9z0MgDU0ZPHro",
				},
				href: "https://api.spotify.com/v1/tracks/68HocO7fx9z0MgDU0ZPHro",
				id: "68HocO7fx9z0MgDU0ZPHro",
				name: "Every Summertime",
				uri: "spotify:track:68HocO7fx9z0MgDU0ZPHro",
			},
		},
		{
			added_at: "2023-08-22T16:36:24Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6ABkacBzpf0AQ7z7xfUtt2",
					},
					href: "https://api.spotify.com/v1/albums/6ABkacBzpf0AQ7z7xfUtt2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27321bb7fbfbfcd13f63642800d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0221bb7fbfbfcd13f63642800d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485121bb7fbfbfcd13f63642800d",
							width: 64,
						},
					],
					name: "Always EP (Deluxe Edition)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3W9UldYu0xJcaOAw2SUTDI",
						},
						href: "https://api.spotify.com/v1/artists/3W9UldYu0xJcaOAw2SUTDI",
						name: "Panama",
						uri: "spotify:artist:3W9UldYu0xJcaOAw2SUTDI",
					},
				],
				external_ids: {
					isrc: "QMCE31400011",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5sQiOH50GFnYnXNSFoRTDt",
				},
				href: "https://api.spotify.com/v1/tracks/5sQiOH50GFnYnXNSFoRTDt",
				id: "5sQiOH50GFnYnXNSFoRTDt",
				name: "Strange Feeling - Bonus Track",
				uri: "spotify:track:5sQiOH50GFnYnXNSFoRTDt",
			},
		},
		{
			added_at: "2023-08-22T16:36:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2r5bU9ElJzqdL8SqaYmnJb",
					},
					href: "https://api.spotify.com/v1/albums/2r5bU9ElJzqdL8SqaYmnJb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273eace6ba651fa2cec2ac54504",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02eace6ba651fa2cec2ac54504",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851eace6ba651fa2cec2ac54504",
							width: 64,
						},
					],
					name: "Four Walls",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "CAODP2000148",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5VP9puvojeTWH74PwpE0ui",
				},
				href: "https://api.spotify.com/v1/tracks/5VP9puvojeTWH74PwpE0ui",
				id: "5VP9puvojeTWH74PwpE0ui",
				name: "Four Walls",
				uri: "spotify:track:5VP9puvojeTWH74PwpE0ui",
			},
		},
		{
			added_at: "2023-08-22T16:36:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6wCBTlewEYkiAFNjLAipAo",
					},
					href: "https://api.spotify.com/v1/albums/6wCBTlewEYkiAFNjLAipAo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27319c16aeb518313c0300eed45",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0219c16aeb518313c0300eed45",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485119c16aeb518313c0300eed45",
							width: 64,
						},
					],
					name: "*1",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0iak64YD6N2iatxR5wBQl9",
						},
						href: "https://api.spotify.com/v1/artists/0iak64YD6N2iatxR5wBQl9",
						name: "Rắn Cạp Đuôi",
						uri: "spotify:artist:0iak64YD6N2iatxR5wBQl9",
					},
				],
				external_ids: {
					isrc: "FRX282316344",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5OYU6O5WaEkU3SS5BhH61z",
				},
				href: "https://api.spotify.com/v1/tracks/5OYU6O5WaEkU3SS5BhH61z",
				id: "5OYU6O5WaEkU3SS5BhH61z",
				name: "Bloody",
				uri: "spotify:track:5OYU6O5WaEkU3SS5BhH61z",
			},
		},
		{
			added_at: "2023-08-22T16:37:00Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7ABmvPTcdUzQ7DXne08U09",
					},
					href: "https://api.spotify.com/v1/albums/7ABmvPTcdUzQ7DXne08U09",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27343975cd482165bc6adcd18ea",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0243975cd482165bc6adcd18ea",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485143975cd482165bc6adcd18ea",
							width: 64,
						},
					],
					name: "Use Both Hands",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/1UkSzqpG6xLmQxFjjKFsCT",
						},
						href: "https://api.spotify.com/v1/artists/1UkSzqpG6xLmQxFjjKFsCT",
						name: "Mark Aaron James",
						uri: "spotify:artist:1UkSzqpG6xLmQxFjjKFsCT",
					},
				],
				external_ids: {
					isrc: "uscgh0728005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0r3BpuU26H5lGXMqW0hpI4",
				},
				href: "https://api.spotify.com/v1/tracks/0r3BpuU26H5lGXMqW0hpI4",
				id: "0r3BpuU26H5lGXMqW0hpI4",
				name: "This Song Would Be Better",
				uri: "spotify:track:0r3BpuU26H5lGXMqW0hpI4",
			},
		},
		{
			added_at: "2023-08-22T16:37:33Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0WSTozVo7k9jTBUT1jnBcs",
					},
					href: "https://api.spotify.com/v1/albums/0WSTozVo7k9jTBUT1jnBcs",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732aa8828ae7bcb97b35ffda70",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022aa8828ae7bcb97b35ffda70",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512aa8828ae7bcb97b35ffda70",
							width: 64,
						},
					],
					name: "Gotan Project live",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/44ejFPE33H5aOInxNV2BFP",
						},
						href: "https://api.spotify.com/v1/artists/44ejFPE33H5aOInxNV2BFP",
						name: "Gotan Project",
						uri: "spotify:artist:44ejFPE33H5aOInxNV2BFP",
					},
				],
				external_ids: {
					isrc: "FR99S0800007",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/23V9Hdg4pyi6AjSvcw3Uft",
				},
				href: "https://api.spotify.com/v1/tracks/23V9Hdg4pyi6AjSvcw3Uft",
				id: "23V9Hdg4pyi6AjSvcw3Uft",
				name: "Nocturna",
				uri: "spotify:track:23V9Hdg4pyi6AjSvcw3Uft",
			},
		},
		{
			added_at: "2023-08-22T16:37:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Y1NBg01R5TmJzpOMUUe9m",
					},
					href: "https://api.spotify.com/v1/albums/5Y1NBg01R5TmJzpOMUUe9m",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27397aee9cf18cb14a883d89c87",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0297aee9cf18cb14a883d89c87",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485197aee9cf18cb14a883d89c87",
							width: 64,
						},
					],
					name: "Midnight Finger Gymnastics",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3LAvXwhlQccG7ztT1NgVUO",
						},
						href: "https://api.spotify.com/v1/artists/3LAvXwhlQccG7ztT1NgVUO",
						name: "Sixfingerz",
						uri: "spotify:artist:3LAvXwhlQccG7ztT1NgVUO",
					},
				],
				external_ids: {
					isrc: "USEAX1100106",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3K7ecgy6yxPLmdF7OxSlIG",
				},
				href: "https://api.spotify.com/v1/tracks/3K7ecgy6yxPLmdF7OxSlIG",
				id: "3K7ecgy6yxPLmdF7OxSlIG",
				name: "Law Of Nature",
				uri: "spotify:track:3K7ecgy6yxPLmdF7OxSlIG",
			},
		},
		{
			added_at: "2023-08-22T16:37:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7a02313ZcVHqmWvWzJehgP",
					},
					href: "https://api.spotify.com/v1/albums/7a02313ZcVHqmWvWzJehgP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27333ac2c655fd3197651194375",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0233ac2c655fd3197651194375",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485133ac2c655fd3197651194375",
							width: 64,
						},
					],
					name: "Nicotine Hallelujah",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "CAODP2000102",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0kh2ILdkMZIstWUDyAXZ6Y",
				},
				href: "https://api.spotify.com/v1/tracks/0kh2ILdkMZIstWUDyAXZ6Y",
				id: "0kh2ILdkMZIstWUDyAXZ6Y",
				name: "Nicotine Hallelujah",
				uri: "spotify:track:0kh2ILdkMZIstWUDyAXZ6Y",
			},
		},
		{
			added_at: "2023-08-22T16:38:02Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7c0DRALsdT9K7FLQBTR9PS",
					},
					href: "https://api.spotify.com/v1/albums/7c0DRALsdT9K7FLQBTR9PS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b5f0f447f0b9d080d970b758",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b5f0f447f0b9d080d970b758",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b5f0f447f0b9d080d970b758",
							width: 64,
						},
					],
					name: "Gliss Riffer",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5Z3IWpvwOvoaWodujHw7xh",
						},
						href: "https://api.spotify.com/v1/artists/5Z3IWpvwOvoaWodujHw7xh",
						name: "Dan Deacon",
						uri: "spotify:artist:5Z3IWpvwOvoaWodujHw7xh",
					},
				],
				external_ids: {
					isrc: "GBCEL1400553",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/69L4d5HlE0YOCwWFYVFGoW",
				},
				href: "https://api.spotify.com/v1/tracks/69L4d5HlE0YOCwWFYVFGoW",
				id: "69L4d5HlE0YOCwWFYVFGoW",
				name: "When I Was Done Dying",
				uri: "spotify:track:69L4d5HlE0YOCwWFYVFGoW",
			},
		},
	],
};

var project201 = {
	items: [
		{
			added_at: "2023-08-22T16:38:11Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2kqn09pydzvKvB3xWbAxY4",
					},
					href: "https://api.spotify.com/v1/albums/2kqn09pydzvKvB3xWbAxY4",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27351245bae78fd3afa47e90453",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0251245bae78fd3afa47e90453",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485151245bae78fd3afa47e90453",
							width: 64,
						},
					],
					name: "This Unruly Mess I've Made",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5BcAKTbp20cv7tC5VqPFoC",
						},
						href: "https://api.spotify.com/v1/artists/5BcAKTbp20cv7tC5VqPFoC",
						name: "Macklemore & Ryan Lewis",
						uri: "spotify:artist:5BcAKTbp20cv7tC5VqPFoC",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3JhNCzhSMTxs9WLGJJxWOY",
						},
						href: "https://api.spotify.com/v1/artists/3JhNCzhSMTxs9WLGJJxWOY",
						name: "Macklemore",
						uri: "spotify:artist:3JhNCzhSMTxs9WLGJJxWOY",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4myTppRgh0rojLxx8RycOp",
						},
						href: "https://api.spotify.com/v1/artists/4myTppRgh0rojLxx8RycOp",
						name: "Ryan Lewis",
						uri: "spotify:artist:4myTppRgh0rojLxx8RycOp",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0AWhixY9hX7LEPyPMjh4O0",
						},
						href: "https://api.spotify.com/v1/artists/0AWhixY9hX7LEPyPMjh4O0",
						name: "Grandmaster Melle Mel",
						uri: "spotify:artist:0AWhixY9hX7LEPyPMjh4O0",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6QeZTS8BrU3r2TYJdA68j9",
						},
						href: "https://api.spotify.com/v1/artists/6QeZTS8BrU3r2TYJdA68j9",
						name: "Grandmaster Caz",
						uri: "spotify:artist:6QeZTS8BrU3r2TYJdA68j9",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2RE8NwNxsOyuNZDD0jRxHP",
						},
						href: "https://api.spotify.com/v1/artists/2RE8NwNxsOyuNZDD0jRxHP",
						name: "Kool Moe Dee",
						uri: "spotify:artist:2RE8NwNxsOyuNZDD0jRxHP",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3NoeRIxHApi6qe4yan2Vnn",
						},
						href: "https://api.spotify.com/v1/artists/3NoeRIxHApi6qe4yan2Vnn",
						name: "Eric Nally",
						uri: "spotify:artist:3NoeRIxHApi6qe4yan2Vnn",
					},
				],
				external_ids: {
					isrc: "GMM881500002",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5pfJsMwoRYKampPay8amX0",
				},
				href: "https://api.spotify.com/v1/tracks/5pfJsMwoRYKampPay8amX0",
				id: "5pfJsMwoRYKampPay8amX0",
				name: "Downtown (feat. Melle Mel, Grandmaster Caz, Kool Moe Dee & Eric Nally)",
				uri: "spotify:track:5pfJsMwoRYKampPay8amX0",
			},
		},
		{
			added_at: "2023-08-22T16:38:22Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/01JBsKfymmuyoCaW1lRcc0",
					},
					href: "https://api.spotify.com/v1/albums/01JBsKfymmuyoCaW1lRcc0",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733fc0b79cc851a7966765a936",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023fc0b79cc851a7966765a936",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513fc0b79cc851a7966765a936",
							width: 64,
						},
					],
					name: "The Church Of Rock And Roll",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5qRXoCC1CDTMTli9gplUvk",
						},
						href: "https://api.spotify.com/v1/artists/5qRXoCC1CDTMTli9gplUvk",
						name: "Foxy Shazam",
						uri: "spotify:artist:5qRXoCC1CDTMTli9gplUvk",
					},
				],
				external_ids: {
					isrc: "USCA21102586",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5um1zyc14xDWuBjHzChPGw",
				},
				href: "https://api.spotify.com/v1/tracks/5um1zyc14xDWuBjHzChPGw",
				id: "5um1zyc14xDWuBjHzChPGw",
				name: "Welcome To The Church Of Rock And Roll",
				uri: "spotify:track:5um1zyc14xDWuBjHzChPGw",
			},
		},
		{
			added_at: "2023-08-22T16:39:14Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6pA4M8vcJwQQUxQ7dQNgLU",
					},
					href: "https://api.spotify.com/v1/albums/6pA4M8vcJwQQUxQ7dQNgLU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738d7afde51da7d22c7d62a2c4",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028d7afde51da7d22c7d62a2c4",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518d7afde51da7d22c7d62a2c4",
							width: 64,
						},
					],
					name: "Acoustic Ghosts",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4CyxMgnF71FyOWADVWxJRE",
						},
						href: "https://api.spotify.com/v1/artists/4CyxMgnF71FyOWADVWxJRE",
						name: "Strawberry Girls",
						uri: "spotify:artist:4CyxMgnF71FyOWADVWxJRE",
					},
				],
				external_ids: {
					isrc: "TCADC1715939",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5mNbGr1hFdyXdEeIlJAkK9",
				},
				href: "https://api.spotify.com/v1/tracks/5mNbGr1hFdyXdEeIlJAkK9",
				id: "5mNbGr1hFdyXdEeIlJAkK9",
				name: "Black Night/Acoustic Circus",
				uri: "spotify:track:5mNbGr1hFdyXdEeIlJAkK9",
			},
		},
		{
			added_at: "2023-08-22T16:39:26Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2gCwP0rgutbXqiyPKB67SY",
					},
					href: "https://api.spotify.com/v1/albums/2gCwP0rgutbXqiyPKB67SY",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730fb3c6dd499bba33a7f56f6e",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020fb3c6dd499bba33a7f56f6e",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510fb3c6dd499bba33a7f56f6e",
							width: 64,
						},
					],
					name: "More Skin With Milk-Mouth (2015 Remaster)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5wGMwXlBLMpuJzRpPxNFjq",
						},
						href: "https://api.spotify.com/v1/artists/5wGMwXlBLMpuJzRpPxNFjq",
						name: "Giraffes? Giraffes!",
						uri: "spotify:artist:5wGMwXlBLMpuJzRpPxNFjq",
					},
				],
				external_ids: {
					isrc: "TCACE1548537",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/54oLh4FPlncvCGOSi1DDCF",
				},
				href: "https://api.spotify.com/v1/tracks/54oLh4FPlncvCGOSi1DDCF",
				id: "54oLh4FPlncvCGOSi1DDCF",
				name: "When the Catholic Girls Go Camping, the Nicotine Vampires Rule Supreme.",
				uri: "spotify:track:54oLh4FPlncvCGOSi1DDCF",
			},
		},
		{
			added_at: "2023-08-22T16:39:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0Vw5tMKZRXhnI36TemPb94",
					},
					href: "https://api.spotify.com/v1/albums/0Vw5tMKZRXhnI36TemPb94",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739533304e22957c0c4d396912",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029533304e22957c0c4d396912",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519533304e22957c0c4d396912",
							width: 64,
						},
					],
					name: "Birthday",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2wp6i8BxLF3UrF1J3LY4WC",
						},
						href: "https://api.spotify.com/v1/artists/2wp6i8BxLF3UrF1J3LY4WC",
						name: "Berry Sakharof",
						uri: "spotify:artist:2wp6i8BxLF3UrF1J3LY4WC",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6S2tas4z6DyIklBajDqJxI",
						},
						href: "https://api.spotify.com/v1/artists/6S2tas4z6DyIklBajDqJxI",
						name: "Infected Mushroom",
						uri: "spotify:artist:6S2tas4z6DyIklBajDqJxI",
					},
				],
				external_ids: {
					isrc: "IL1040200940",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3jtXHIznBsnK5qPLVAdXbv",
				},
				href: "https://api.spotify.com/v1/tracks/3jtXHIznBsnK5qPLVAdXbv",
				id: "3jtXHIznBsnK5qPLVAdXbv",
				name: "יומולדת - Infected Mushroom Remix",
				uri: "spotify:track:3jtXHIznBsnK5qPLVAdXbv",
			},
		},
		{
			added_at: "2023-08-22T16:39:55Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0PV5y98BvK4aMYTjPuzp1Q",
					},
					href: "https://api.spotify.com/v1/albums/0PV5y98BvK4aMYTjPuzp1Q",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738e2e741d1e172f13f8c7977a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028e2e741d1e172f13f8c7977a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518e2e741d1e172f13f8c7977a",
							width: 64,
						},
					],
					name: "The Craft: Legacy (Original Motion Picture Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/78O8fX6Y0BZhQQHWNhHqUc",
						},
						href: "https://api.spotify.com/v1/artists/78O8fX6Y0BZhQQHWNhHqUc",
						name: "Heather Christian",
						uri: "spotify:artist:78O8fX6Y0BZhQQHWNhHqUc",
					},
				],
				external_ids: {
					isrc: "US4DG2000382",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4FpYOA5LJtfZBoQpRnlJbm",
				},
				href: "https://api.spotify.com/v1/tracks/4FpYOA5LJtfZBoQpRnlJbm",
				id: "4FpYOA5LJtfZBoQpRnlJbm",
				name: "Air Fire Water Earth",
				uri: "spotify:track:4FpYOA5LJtfZBoQpRnlJbm",
			},
		},
		{
			added_at: "2023-08-22T16:57:41Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0qgZwHN3MHsIHkaFfvbQ1O",
					},
					href: "https://api.spotify.com/v1/albums/0qgZwHN3MHsIHkaFfvbQ1O",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738c65a4d6f2af19794eb4dac9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028c65a4d6f2af19794eb4dac9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518c65a4d6f2af19794eb4dac9",
							width: 64,
						},
					],
					name: "Kiss the Sky EP",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7zmjsG1AEAWaSWbk6ncs7p",
						},
						href: "https://api.spotify.com/v1/artists/7zmjsG1AEAWaSWbk6ncs7p",
						name: "Shawn Lee's Ping Pong Orchestra vs. Nino Moschella",
						uri: "spotify:artist:7zmjsG1AEAWaSWbk6ncs7p",
					},
				],
				external_ids: {
					isrc: "USUR40620501",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/17zlPFbT0pzb2FxNqK2Bcm",
				},
				href: "https://api.spotify.com/v1/tracks/17zlPFbT0pzb2FxNqK2Bcm",
				id: "17zlPFbT0pzb2FxNqK2Bcm",
				name: "Kiss the Sky",
				uri: "spotify:track:17zlPFbT0pzb2FxNqK2Bcm",
			},
		},
		{
			added_at: "2023-08-30T21:05:59Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3nNCbRE0bNLmxA5YvLazKN",
					},
					href: "https://api.spotify.com/v1/albums/3nNCbRE0bNLmxA5YvLazKN",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27328c13b6324c4239404c75963",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0228c13b6324c4239404c75963",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485128c13b6324c4239404c75963",
							width: 64,
						},
					],
					name: "It's Okay (To Punch Nazis)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2vfwEEEv5PVpGMMnC5jajB",
						},
						href: "https://api.spotify.com/v1/artists/2vfwEEEv5PVpGMMnC5jajB",
						name: "Cheap Perfume",
						uri: "spotify:artist:2vfwEEEv5PVpGMMnC5jajB",
					},
				],
				external_ids: {
					isrc: "ushm81711048",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/24BexGKYvuQPv2W1ObGYmw",
				},
				href: "https://api.spotify.com/v1/tracks/24BexGKYvuQPv2W1ObGYmw",
				id: "24BexGKYvuQPv2W1ObGYmw",
				name: "It's Okay (To Punch Nazis)",
				uri: "spotify:track:24BexGKYvuQPv2W1ObGYmw",
			},
		},
		{
			added_at: "2023-08-30T21:06:29Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6qlgab1OZOy1SKldK9yCqB",
					},
					href: "https://api.spotify.com/v1/albums/6qlgab1OZOy1SKldK9yCqB",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273c459a6a87f12e2dc4a85edb0",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02c459a6a87f12e2dc4a85edb0",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851c459a6a87f12e2dc4a85edb0",
							width: 64,
						},
					],
					name: "Attention! Blah Blah Blah",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4I6LjrgKVERp2HF7y5LbkF",
						},
						href: "https://api.spotify.com/v1/artists/4I6LjrgKVERp2HF7y5LbkF",
						name: "Atom And His Package",
						uri: "spotify:artist:4I6LjrgKVERp2HF7y5LbkF",
					},
				],
				external_ids: {
					isrc: "USHR20320024",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0Ln29RgpKG8QvpECfW5n1j",
				},
				href: "https://api.spotify.com/v1/tracks/0Ln29RgpKG8QvpECfW5n1j",
				id: "0Ln29RgpKG8QvpECfW5n1j",
				name: "I’m Downright Amazed At What I Can Destroy With Just A Hammer",
				uri: "spotify:track:0Ln29RgpKG8QvpECfW5n1j",
			},
		},
		{
			added_at: "2023-08-30T21:06:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1xEQPZwolZHAHSVwrtjoyP",
					},
					href: "https://api.spotify.com/v1/albums/1xEQPZwolZHAHSVwrtjoyP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738c56dbccfaa82e7f3ea8b546",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028c56dbccfaa82e7f3ea8b546",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518c56dbccfaa82e7f3ea8b546",
							width: 64,
						},
					],
					name: "Blasphemous: Wounds of Eventide (Original Game Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5t8oeNB7ScFOsV5Jkr0EtE",
						},
						href: "https://api.spotify.com/v1/artists/5t8oeNB7ScFOsV5Jkr0EtE",
						name: "Carlos Viola",
						uri: "spotify:artist:5t8oeNB7ScFOsV5Jkr0EtE",
					},
				],
				external_ids: {
					isrc: "QZDA62274847",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/35qkwnnlbohFTDGUaOKhCT",
				},
				href: "https://api.spotify.com/v1/tracks/35qkwnnlbohFTDGUaOKhCT",
				id: "35qkwnnlbohFTDGUaOKhCT",
				name: "Su Beso de Plata - Redux",
				uri: "spotify:track:35qkwnnlbohFTDGUaOKhCT",
			},
		},
		{
			added_at: "2023-08-30T21:06:51Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0Cszki2XilOcAL7rhOrxS9",
					},
					href: "https://api.spotify.com/v1/albums/0Cszki2XilOcAL7rhOrxS9",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f1de60132dfb506bdc987e55",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f1de60132dfb506bdc987e55",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f1de60132dfb506bdc987e55",
							width: 64,
						},
					],
					name: "Cirqlation",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0Akzjllih1lP7k60c8Dtct",
						},
						href: "https://api.spotify.com/v1/artists/0Akzjllih1lP7k60c8Dtct",
						name: "Magna Carda",
						uri: "spotify:artist:0Akzjllih1lP7k60c8Dtct",
					},
				],
				external_ids: {
					isrc: "QMPKX1622495",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/21sficAs0W3Swr2kyQ75ps",
				},
				href: "https://api.spotify.com/v1/tracks/21sficAs0W3Swr2kyQ75ps",
				id: "21sficAs0W3Swr2kyQ75ps",
				name: "The Root",
				uri: "spotify:track:21sficAs0W3Swr2kyQ75ps",
			},
		},
		{
			added_at: "2023-08-31T15:40:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/44OLN0q78wTRrMcAWzSDLy",
					},
					href: "https://api.spotify.com/v1/albums/44OLN0q78wTRrMcAWzSDLy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273519d6ccbae52c975ba0bf038",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02519d6ccbae52c975ba0bf038",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851519d6ccbae52c975ba0bf038",
							width: 64,
						},
					],
					name: "Dirty Gold (Deluxe)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2cyyGl4qnHZL0o16t0fpJl",
						},
						href: "https://api.spotify.com/v1/artists/2cyyGl4qnHZL0o16t0fpJl",
						name: "Angel Haze",
						uri: "spotify:artist:2cyyGl4qnHZL0o16t0fpJl",
					},
				],
				external_ids: {
					isrc: "GBUM71206251",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/15mKdoeoLQr6F8cFdko7Aa",
				},
				href: "https://api.spotify.com/v1/tracks/15mKdoeoLQr6F8cFdko7Aa",
				id: "15mKdoeoLQr6F8cFdko7Aa",
				name: "New York",
				uri: "spotify:track:15mKdoeoLQr6F8cFdko7Aa",
			},
		},
		{
			added_at: "2023-10-18T22:01:18Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/49FNw6nAX8qqPV9GRyIU92",
					},
					href: "https://api.spotify.com/v1/albums/49FNw6nAX8qqPV9GRyIU92",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273211ed68c04d130b732645338",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02211ed68c04d130b732645338",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851211ed68c04d130b732645338",
							width: 64,
						},
					],
					name: "Grenier Meets Archie Pelago (Spotify Exclusive)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7udtezs8qz3QA2pyDrbts5",
						},
						href: "https://api.spotify.com/v1/artists/7udtezs8qz3QA2pyDrbts5",
						name: "Grenier",
						uri: "spotify:artist:7udtezs8qz3QA2pyDrbts5",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7gnhLS9jREoMeVTNj2MCnl",
						},
						href: "https://api.spotify.com/v1/artists/7gnhLS9jREoMeVTNj2MCnl",
						name: "Archie Pelago",
						uri: "spotify:artist:7gnhLS9jREoMeVTNj2MCnl",
					},
				],
				external_ids: {
					isrc: "GBJGV1120107",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0JwLG9lr3Lwcax0UMwUqim",
				},
				href: "https://api.spotify.com/v1/tracks/0JwLG9lr3Lwcax0UMwUqim",
				id: "0JwLG9lr3Lwcax0UMwUqim",
				name: "Tower of Joined Hand",
				uri: "spotify:track:0JwLG9lr3Lwcax0UMwUqim",
			},
		},
		{
			added_at: "2023-10-18T22:01:27Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1n2rvPE3u3EUWTRuGvBU6D",
					},
					href: "https://api.spotify.com/v1/albums/1n2rvPE3u3EUWTRuGvBU6D",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e618d513f959a5d306c67196",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e618d513f959a5d306c67196",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e618d513f959a5d306c67196",
							width: 64,
						},
					],
					name: "Rockhill",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3rwE7hh0DnwpsapVBpzofH",
						},
						href: "https://api.spotify.com/v1/artists/3rwE7hh0DnwpsapVBpzofH",
						name: "Beltaine",
						uri: "spotify:artist:3rwE7hh0DnwpsapVBpzofH",
					},
				],
				external_ids: {
					isrc: "TCACG1538571",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/0UJ1pj6L70Kwu8Iq50Hp0H",
				},
				href: "https://api.spotify.com/v1/tracks/0UJ1pj6L70Kwu8Iq50Hp0H",
				id: "0UJ1pj6L70Kwu8Iq50Hp0H",
				name: "Rockhill",
				uri: "spotify:track:0UJ1pj6L70Kwu8Iq50Hp0H",
			},
		},
		{
			added_at: "2023-10-18T22:01:35Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3GN7FSrFZDEUo1j1GbFcCw",
					},
					href: "https://api.spotify.com/v1/albums/3GN7FSrFZDEUo1j1GbFcCw",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739dcc3279aa1728619ae2bcfe",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029dcc3279aa1728619ae2bcfe",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519dcc3279aa1728619ae2bcfe",
							width: 64,
						},
					],
					name: "The Closest EP",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6tcOJ8DRI6oaFcXgYBCnRc",
						},
						href: "https://api.spotify.com/v1/artists/6tcOJ8DRI6oaFcXgYBCnRc",
						name: "Jean du Voyage",
						uri: "spotify:artist:6tcOJ8DRI6oaFcXgYBCnRc",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/10Mq65D17BrcHPS8po0hKZ",
						},
						href: "https://api.spotify.com/v1/artists/10Mq65D17BrcHPS8po0hKZ",
						name: "Pierre Harmegnies",
						uri: "spotify:artist:10Mq65D17BrcHPS8po0hKZ",
					},
				],
				external_ids: {
					isrc: "FR92U1301190",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1prMopMAGX5cLYI8DeRPqT",
				},
				href: "https://api.spotify.com/v1/tracks/1prMopMAGX5cLYI8DeRPqT",
				id: "1prMopMAGX5cLYI8DeRPqT",
				name: "Prana",
				uri: "spotify:track:1prMopMAGX5cLYI8DeRPqT",
			},
		},
		{
			added_at: "2023-10-18T22:01:53Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6MGEAwh2nhb2AdKMUkbbqL",
					},
					href: "https://api.spotify.com/v1/albums/6MGEAwh2nhb2AdKMUkbbqL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273829a3027e8461825fd0bc513",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02829a3027e8461825fd0bc513",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851829a3027e8461825fd0bc513",
							width: 64,
						},
					],
					name: "Singles Only",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4jMnk0SNvD42VxO4WpFuoo",
						},
						href: "https://api.spotify.com/v1/artists/4jMnk0SNvD42VxO4WpFuoo",
						name: "Birdcloud",
						uri: "spotify:artist:4jMnk0SNvD42VxO4WpFuoo",
					},
				],
				external_ids: {
					isrc: "UST8K1651738",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5bNLJRESLGGO5HTEkVuMBl",
				},
				href: "https://api.spotify.com/v1/tracks/5bNLJRESLGGO5HTEkVuMBl",
				id: "5bNLJRESLGGO5HTEkVuMBl",
				name: "Bandit",
				uri: "spotify:track:5bNLJRESLGGO5HTEkVuMBl",
			},
		},
		{
			added_at: "2023-10-18T22:02:03Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5XOVEDosHm3bXwE8jWw2Tc",
					},
					href: "https://api.spotify.com/v1/albums/5XOVEDosHm3bXwE8jWw2Tc",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d0dc2e429ab7487e30e5f0e6",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d0dc2e429ab7487e30e5f0e6",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d0dc2e429ab7487e30e5f0e6",
							width: 64,
						},
					],
					name: "Addicted To Bad Ideas: Peter Lorre's Twentieth Century",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/72q9Jnu1lVJr0CgoKbICGs",
						},
						href: "https://api.spotify.com/v1/artists/72q9Jnu1lVJr0CgoKbICGs",
						name: "World / Inferno Friendship Society",
						uri: "spotify:artist:72q9Jnu1lVJr0CgoKbICGs",
					},
				],
				external_ids: {
					isrc: "QZK6M2245217",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1MUds3HEHVBrrIAQYouV8S",
				},
				href: "https://api.spotify.com/v1/tracks/1MUds3HEHVBrrIAQYouV8S",
				id: "1MUds3HEHVBrrIAQYouV8S",
				name: "Addicted To Bad Ideas",
				uri: "spotify:track:1MUds3HEHVBrrIAQYouV8S",
			},
		},
		{
			added_at: "2023-10-18T22:02:19Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6Q55ods6yVhg1035RgH2kU",
					},
					href: "https://api.spotify.com/v1/albums/6Q55ods6yVhg1035RgH2kU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273335e628ccdf95c5a4c5a4053",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02335e628ccdf95c5a4c5a4053",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851335e628ccdf95c5a4c5a4053",
							width: 64,
						},
					],
					name: "Pyre (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1",
						},
						href: "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
						name: "Darren Korb",
						uri: "spotify:artist:0ZMWrgLff357yxLyEU77a1",
					},
				],
				external_ids: {
					isrc: "TCADE1746756",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/12lroPHknN4YV3GgLM1nUi",
				},
				href: "https://api.spotify.com/v1/tracks/12lroPHknN4YV3GgLM1nUi",
				id: "12lroPHknN4YV3GgLM1nUi",
				name: "Grand Ceremony",
				uri: "spotify:track:12lroPHknN4YV3GgLM1nUi",
			},
		},
		{
			added_at: "2023-10-18T22:02:36Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/26vmJ6CjPxYWYYa2B4d9my",
					},
					href: "https://api.spotify.com/v1/albums/26vmJ6CjPxYWYYa2B4d9my",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a24eb1aa0c049e3ca5f0b162",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a24eb1aa0c049e3ca5f0b162",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a24eb1aa0c049e3ca5f0b162",
							width: 64,
						},
					],
					name: "Emergence",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0WSSKmoRbxqLf3MnXInQ2J",
						},
						href: "https://api.spotify.com/v1/artists/0WSSKmoRbxqLf3MnXInQ2J",
						name: "Max Cooper",
						uri: "spotify:artist:0WSSKmoRbxqLf3MnXInQ2J",
					},
				],
				external_ids: {
					isrc: "GB45A1600429",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1O2j6xoEmETsbTk9r8yyQO",
				},
				href: "https://api.spotify.com/v1/tracks/1O2j6xoEmETsbTk9r8yyQO",
				id: "1O2j6xoEmETsbTk9r8yyQO",
				name: "Order from Chaos",
				uri: "spotify:track:1O2j6xoEmETsbTk9r8yyQO",
			},
		},
		{
			added_at: "2023-10-18T22:02:45Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1BJtoy1VgHMMvotBwvylJ5",
					},
					href: "https://api.spotify.com/v1/albums/1BJtoy1VgHMMvotBwvylJ5",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e65b2a729914445d34777d23",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e65b2a729914445d34777d23",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e65b2a729914445d34777d23",
							width: 64,
						},
					],
					name: "Remember That You Will Die",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ",
						},
						href: "https://api.spotify.com/v1/artists/4vGrte8FDu062Ntj0RsPiZ",
						name: "Polyphia",
						uri: "spotify:artist:4vGrte8FDu062Ntj0RsPiZ",
					},
				],
				external_ids: {
					isrc: "QMRSZ2200026",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4iDH45ZVIdHzDhLYd1FyKF",
				},
				href: "https://api.spotify.com/v1/tracks/4iDH45ZVIdHzDhLYd1FyKF",
				id: "4iDH45ZVIdHzDhLYd1FyKF",
				name: "All Falls Apart",
				uri: "spotify:track:4iDH45ZVIdHzDhLYd1FyKF",
			},
		},
		{
			added_at: "2023-10-18T22:02:55Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0ntm3YaiXVkkGitWl2XASV",
					},
					href: "https://api.spotify.com/v1/albums/0ntm3YaiXVkkGitWl2XASV",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bca9c14dec8317c0edabf931",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bca9c14dec8317c0edabf931",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bca9c14dec8317c0edabf931",
							width: 64,
						},
					],
					name: "Symbol",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3ND5NWoKzlelYDDyWqSQpQ",
						},
						href: "https://api.spotify.com/v1/artists/3ND5NWoKzlelYDDyWqSQpQ",
						name: "Susumu Yokota",
						uri: "spotify:artist:3ND5NWoKzlelYDDyWqSQpQ",
					},
				],
				external_ids: {
					isrc: "GBDRC0504503",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5FpanmApDmOeQ2E3H6N8AH",
				},
				href: "https://api.spotify.com/v1/tracks/5FpanmApDmOeQ2E3H6N8AH",
				id: "5FpanmApDmOeQ2E3H6N8AH",
				name: "Traveller In The Wonderland",
				uri: "spotify:track:5FpanmApDmOeQ2E3H6N8AH",
			},
		},
		{
			added_at: "2023-10-18T22:03:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/5Rd4ogHVsbtlzrU8FrC0sQ",
					},
					href: "https://api.spotify.com/v1/albums/5Rd4ogHVsbtlzrU8FrC0sQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27385ba41a118e4d53232ef1636",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0285ba41a118e4d53232ef1636",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485185ba41a118e4d53232ef1636",
							width: 64,
						},
					],
					name: "elllegy",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6LtwY43IVeNpnireOVay0H",
						},
						href: "https://api.spotify.com/v1/artists/6LtwY43IVeNpnireOVay0H",
						name: "the olllam",
						uri: "spotify:artist:6LtwY43IVeNpnireOVay0H",
					},
				],
				external_ids: {
					isrc: "QZDA82213365",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7AZ71DEtcLeIQcHVCGNrxr",
				},
				href: "https://api.spotify.com/v1/tracks/7AZ71DEtcLeIQcHVCGNrxr",
				id: "7AZ71DEtcLeIQcHVCGNrxr",
				name: "with pure crystalll teeth",
				uri: "spotify:track:7AZ71DEtcLeIQcHVCGNrxr",
			},
		},
		{
			added_at: "2023-10-20T20:57:54Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6YBXNbKrrTTXT69qrH8O7A",
					},
					href: "https://api.spotify.com/v1/albums/6YBXNbKrrTTXT69qrH8O7A",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27388a9208210419166d932575f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0288a9208210419166d932575f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485188a9208210419166d932575f",
							width: 64,
						},
					],
					name: "Red-Eyed Soul",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/72q9Jnu1lVJr0CgoKbICGs",
						},
						href: "https://api.spotify.com/v1/artists/72q9Jnu1lVJr0CgoKbICGs",
						name: "World / Inferno Friendship Society",
						uri: "spotify:artist:72q9Jnu1lVJr0CgoKbICGs",
					},
				],
				external_ids: {
					isrc: "QZK6M2243736",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2qgYUpDfAmEN0jqi7rY8bJ",
				},
				href: "https://api.spotify.com/v1/tracks/2qgYUpDfAmEN0jqi7rY8bJ",
				id: "2qgYUpDfAmEN0jqi7rY8bJ",
				name: "Only Anarchists Are Pretty",
				uri: "spotify:track:2qgYUpDfAmEN0jqi7rY8bJ",
			},
		},
		{
			added_at: "2023-10-22T02:48:18Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/2n8z1ycW9toGdevL8hOGEI",
					},
					href: "https://api.spotify.com/v1/albums/2n8z1ycW9toGdevL8hOGEI",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27331c9521fcc73f742f23ccb7f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0231c9521fcc73f742f23ccb7f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485131c9521fcc73f742f23ccb7f",
							width: 64,
						},
					],
					name: "Don't Let Go",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6HomUrLEVWcZjlXQTEjMyb",
						},
						href: "https://api.spotify.com/v1/artists/6HomUrLEVWcZjlXQTEjMyb",
						name: "Ona Mafalda",
						uri: "spotify:artist:6HomUrLEVWcZjlXQTEjMyb",
					},
				],
				external_ids: {
					isrc: "TCACR1624662",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/10AERFrpIUShynsJYm9Ndx",
				},
				href: "https://api.spotify.com/v1/tracks/10AERFrpIUShynsJYm9Ndx",
				id: "10AERFrpIUShynsJYm9Ndx",
				name: "Don't Let Go",
				uri: "spotify:track:10AERFrpIUShynsJYm9Ndx",
			},
		},
		{
			added_at: "2023-10-31T03:08:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/38w8Y4sFtjMdPYVYzHozt5",
					},
					href: "https://api.spotify.com/v1/albums/38w8Y4sFtjMdPYVYzHozt5",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732dc93feae44e5d36bdb764ef",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022dc93feae44e5d36bdb764ef",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512dc93feae44e5d36bdb764ef",
							width: 64,
						},
					],
					name: "Outland",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5L6COTBfO2KjrJgFYe96Q7",
						},
						href: "https://api.spotify.com/v1/artists/5L6COTBfO2KjrJgFYe96Q7",
						name: "Dream Fiend",
						uri: "spotify:artist:5L6COTBfO2KjrJgFYe96Q7",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/67cjZDUWm5goNObfOPrZIY",
						},
						href: "https://api.spotify.com/v1/artists/67cjZDUWm5goNObfOPrZIY",
						name: "September 87",
						uri: "spotify:artist:67cjZDUWm5goNObfOPrZIY",
					},
				],
				external_ids: {
					isrc: "QZDA42008005",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4gPWWrsvQtFKMUmhvjanBh",
				},
				href: "https://api.spotify.com/v1/tracks/4gPWWrsvQtFKMUmhvjanBh",
				id: "4gPWWrsvQtFKMUmhvjanBh",
				name: "Lightyears",
				uri: "spotify:track:4gPWWrsvQtFKMUmhvjanBh",
			},
		},
		{
			added_at: "2023-10-31T15:57:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6K5RX7xasf8WdeQjapsThS",
					},
					href: "https://api.spotify.com/v1/albums/6K5RX7xasf8WdeQjapsThS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273033b871ae27b16ddd8139806",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02033b871ae27b16ddd8139806",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851033b871ae27b16ddd8139806",
							width: 64,
						},
					],
					name: "BEN",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3JhNCzhSMTxs9WLGJJxWOY",
						},
						href: "https://api.spotify.com/v1/artists/3JhNCzhSMTxs9WLGJJxWOY",
						name: "Macklemore",
						uri: "spotify:artist:3JhNCzhSMTxs9WLGJJxWOY",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2NjfBq1NflQcKSeiDooVjY",
						},
						href: "https://api.spotify.com/v1/artists/2NjfBq1NflQcKSeiDooVjY",
						name: "Tones And I",
						uri: "spotify:artist:2NjfBq1NflQcKSeiDooVjY",
					},
				],
				external_ids: {
					isrc: "ZZOPM2236812",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7ICMhHYyv1vM3S1XzcEFIq",
				},
				href: "https://api.spotify.com/v1/tracks/7ICMhHYyv1vM3S1XzcEFIq",
				id: "7ICMhHYyv1vM3S1XzcEFIq",
				name: "CHANT (feat. Tones And I)",
				uri: "spotify:track:7ICMhHYyv1vM3S1XzcEFIq",
			},
		},
		{
			added_at: "2023-11-01T17:24:13Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1VGVJdmvOSRK2w9RKXk18A",
					},
					href: "https://api.spotify.com/v1/albums/1VGVJdmvOSRK2w9RKXk18A",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a91a5b301baac1f46e6f30eb",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a91a5b301baac1f46e6f30eb",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a91a5b301baac1f46e6f30eb",
							width: 64,
						},
					],
					name: "Cyberpunk 2077: Radio, Vol. 2 (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2PmIyxmEFsNfQJjEifPDZC",
						},
						href: "https://api.spotify.com/v1/artists/2PmIyxmEFsNfQJjEifPDZC",
						name: "RAT BOY",
						uri: "spotify:artist:2PmIyxmEFsNfQJjEifPDZC",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0Zdln8zZsLgVQswhycjCuo",
						},
						href: "https://api.spotify.com/v1/artists/0Zdln8zZsLgVQswhycjCuo",
						name: "IBDY",
						uri: "spotify:artist:0Zdln8zZsLgVQswhycjCuo",
					},
				],
				external_ids: {
					isrc: "USLS52081703",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4mn5HdatHKN7iFGDes9G8i",
				},
				href: "https://api.spotify.com/v1/tracks/4mn5HdatHKN7iFGDes9G8i",
				id: "4mn5HdatHKN7iFGDes9G8i",
				name: "Who's Ready for Tomorrow",
				uri: "spotify:track:4mn5HdatHKN7iFGDes9G8i",
			},
		},
		{
			added_at: "2023-11-07T19:05:44Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7K5tfkdeToVwZaEnEv2atb",
					},
					href: "https://api.spotify.com/v1/albums/7K5tfkdeToVwZaEnEv2atb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737cbbe70010ebc7a98970e6be",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027cbbe70010ebc7a98970e6be",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517cbbe70010ebc7a98970e6be",
							width: 64,
						},
					],
					name: "Mantra",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6tcOJ8DRI6oaFcXgYBCnRc",
						},
						href: "https://api.spotify.com/v1/artists/6tcOJ8DRI6oaFcXgYBCnRc",
						name: "Jean du Voyage",
						uri: "spotify:artist:6tcOJ8DRI6oaFcXgYBCnRc",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4CLu1F6TvdlrRlMck1zIU4",
						},
						href: "https://api.spotify.com/v1/artists/4CLu1F6TvdlrRlMck1zIU4",
						name: "Isla",
						uri: "spotify:artist:4CLu1F6TvdlrRlMck1zIU4",
					},
				],
				external_ids: {
					isrc: "FR92U1600490",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/7H1vroKsgKo3vNSigda3Dz",
				},
				href: "https://api.spotify.com/v1/tracks/7H1vroKsgKo3vNSigda3Dz",
				id: "7H1vroKsgKo3vNSigda3Dz",
				name: "Om",
				uri: "spotify:track:7H1vroKsgKo3vNSigda3Dz",
			},
		},
		{
			added_at: "2023-11-07T19:05:34Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/54V9uFgQMrZzmksTPijwOs",
					},
					href: "https://api.spotify.com/v1/albums/54V9uFgQMrZzmksTPijwOs",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273df9e44da64f179b3854b5e07",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02df9e44da64f179b3854b5e07",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851df9e44da64f179b3854b5e07",
							width: 64,
						},
					],
					name: "FantomenK",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2H11tig8QJ8eV3D04ocjQv",
						},
						href: "https://api.spotify.com/v1/artists/2H11tig8QJ8eV3D04ocjQv",
						name: "FantomenK",
						uri: "spotify:artist:2H11tig8QJ8eV3D04ocjQv",
					},
				],
				external_ids: {
					isrc: "SEYOK1105730",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1Srpv2y8O0hBqn18LY6ddt",
				},
				href: "https://api.spotify.com/v1/tracks/1Srpv2y8O0hBqn18LY6ddt",
				id: "1Srpv2y8O0hBqn18LY6ddt",
				name: "Virgin Birds",
				uri: "spotify:track:1Srpv2y8O0hBqn18LY6ddt",
			},
		},
		{
			added_at: "2023-11-07T19:04:25Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/6Q55ods6yVhg1035RgH2kU",
					},
					href: "https://api.spotify.com/v1/albums/6Q55ods6yVhg1035RgH2kU",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273335e628ccdf95c5a4c5a4053",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02335e628ccdf95c5a4c5a4053",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851335e628ccdf95c5a4c5a4053",
							width: 64,
						},
					],
					name: "Pyre (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1",
						},
						href: "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
						name: "Darren Korb",
						uri: "spotify:artist:0ZMWrgLff357yxLyEU77a1",
					},
				],
				external_ids: {
					isrc: "TCADE1746667",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2iEp3xkGgZuaHQLxIC8Zld",
				},
				href: "https://api.spotify.com/v1/tracks/2iEp3xkGgZuaHQLxIC8Zld",
				id: "2iEp3xkGgZuaHQLxIC8Zld",
				name: "Path to Glory",
				uri: "spotify:track:2iEp3xkGgZuaHQLxIC8Zld",
			},
		},
		{
			added_at: "2023-11-10T22:37:52Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/4YxLz63paBRbnabZDmaJJq",
					},
					href: "https://api.spotify.com/v1/albums/4YxLz63paBRbnabZDmaJJq",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273abcb34bbdb65c4212d4ceffa",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02abcb34bbdb65c4212d4ceffa",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851abcb34bbdb65c4212d4ceffa",
							width: 64,
						},
					],
					name: "LATE METAL",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6DvfCp1uaEFdsi11vbyxcS",
						},
						href: "https://api.spotify.com/v1/artists/6DvfCp1uaEFdsi11vbyxcS",
						name: "Thomas Roussel",
						uri: "spotify:artist:6DvfCp1uaEFdsi11vbyxcS",
					},
				],
				external_ids: {
					isrc: "FR9W12210588",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/5haXRR03DCfK2vvutdbArt",
				},
				href: "https://api.spotify.com/v1/tracks/5haXRR03DCfK2vvutdbArt",
				id: "5haXRR03DCfK2vvutdbArt",
				name: "LATE METAL",
				uri: "spotify:track:5haXRR03DCfK2vvutdbArt",
			},
		},
		{
			added_at: "2023-11-20T22:06:06Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/1XWCws077Z4B9SwwUzOAfo",
					},
					href: "https://api.spotify.com/v1/albums/1XWCws077Z4B9SwwUzOAfo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27305145e64b7be6d3da12deb37",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0205145e64b7be6d3da12deb37",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485105145e64b7be6d3da12deb37",
							width: 64,
						},
					],
					name: "S3NS",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0NSO0g40h9CTj13hKPskeb",
						},
						href: "https://api.spotify.com/v1/artists/0NSO0g40h9CTj13hKPskeb",
						name: "Ibrahim Maalouf",
						uri: "spotify:artist:0NSO0g40h9CTj13hKPskeb",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0Idg159PTZKon9ZGAeCLjR",
						},
						href: "https://api.spotify.com/v1/artists/0Idg159PTZKon9ZGAeCLjR",
						name: "Harold López-Nussa",
						uri: "spotify:artist:0Idg159PTZKon9ZGAeCLjR",
					},
				],
				external_ids: {
					isrc: "FR8PH1900330",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/4MOCTiC5mMrJuhLFSNjiIM",
				},
				href: "https://api.spotify.com/v1/tracks/4MOCTiC5mMrJuhLFSNjiIM",
				id: "4MOCTiC5mMrJuhLFSNjiIM",
				name: "Una Rosa Blanca",
				uri: "spotify:track:4MOCTiC5mMrJuhLFSNjiIM",
			},
		},
		{
			added_at: "2023-11-27T22:37:40Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/0Xox4nfLxKS3cpLJjpyWyu",
					},
					href: "https://api.spotify.com/v1/albums/0Xox4nfLxKS3cpLJjpyWyu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732395708aec8aea41937298db",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022395708aec8aea41937298db",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512395708aec8aea41937298db",
							width: 64,
						},
					],
					name: "Something // Way",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/0JGEXkcPcLHPna9FTWapHn",
						},
						href: "https://api.spotify.com/v1/artists/0JGEXkcPcLHPna9FTWapHn",
						name: "Päter",
						uri: "spotify:artist:0JGEXkcPcLHPna9FTWapHn",
					},
				],
				external_ids: {
					isrc: "CAODP2000108",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/2ssgfMup21vKJtdH4H14UC",
				},
				href: "https://api.spotify.com/v1/tracks/2ssgfMup21vKJtdH4H14UC",
				id: "2ssgfMup21vKJtdH4H14UC",
				name: "Something // Way",
				uri: "spotify:track:2ssgfMup21vKJtdH4H14UC",
			},
		},
		{
			added_at: "2023-12-01T00:07:21Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/7AwM3PKHC1ytGnTHUz93RE",
					},
					href: "https://api.spotify.com/v1/albums/7AwM3PKHC1ytGnTHUz93RE",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27390bf2b2581e4fd423efa3192",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0290bf2b2581e4fd423efa3192",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485190bf2b2581e4fd423efa3192",
							width: 64,
						},
					],
					name: "Business",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/56FMPucjgkmjixJ76WKFjk",
						},
						href: "https://api.spotify.com/v1/artists/56FMPucjgkmjixJ76WKFjk",
						name: "Jet Lag Gemini",
						uri: "spotify:artist:56FMPucjgkmjixJ76WKFjk",
					},
				],
				external_ids: {
					isrc: "US4K30600018",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/6B1wJDdF9WeOkUzGVKXblI",
				},
				href: "https://api.spotify.com/v1/tracks/6B1wJDdF9WeOkUzGVKXblI",
				id: "6B1wJDdF9WeOkUzGVKXblI",
				name: "Don't Leave Me Hanging",
				uri: "spotify:track:6B1wJDdF9WeOkUzGVKXblI",
			},
		},
		{
			added_at: "2023-12-06T18:48:46Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/3gT18SfuM7NII3Ab55AznQ",
					},
					href: "https://api.spotify.com/v1/albums/3gT18SfuM7NII3Ab55AznQ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e3243d4f602537b8951c6b7a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e3243d4f602537b8951c6b7a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e3243d4f602537b8951c6b7a",
							width: 64,
						},
					],
					name: "Em",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/2BAhRYk5QrGfs5KNo9gHr4",
						},
						href: "https://api.spotify.com/v1/artists/2BAhRYk5QrGfs5KNo9gHr4",
						name: "Đá Số Tới",
						uri: "spotify:artist:2BAhRYk5QrGfs5KNo9gHr4",
					},
				],
				external_ids: {
					isrc: "VNA0M1908747",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/1UVoU1n7QWGJfhaSUNuFlf",
				},
				href: "https://api.spotify.com/v1/tracks/1UVoU1n7QWGJfhaSUNuFlf",
				id: "1UVoU1n7QWGJfhaSUNuFlf",
				name: "Em",
				uri: "spotify:track:1UVoU1n7QWGJfhaSUNuFlf",
			},
		},
		{
			added_at: "2023-12-13T21:08:57Z",
			added_by: {
				id: "aramzs",
			},
			track: {
				album: {
					external_urls: {
						spotify:
							"https://open.spotify.com/album/72iatovpFrTUeaa96qh2Or",
					},
					href: "https://api.spotify.com/v1/albums/72iatovpFrTUeaa96qh2Or",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2737a7f8347414a2406e309b4a7",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e027a7f8347414a2406e309b4a7",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048517a7f8347414a2406e309b4a7",
							width: 64,
						},
					],
					name: "Rollerdrome (Original Soundtrack)",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/5SUvXyFcsFsYH0WQ2cNFJb",
						},
						href: "https://api.spotify.com/v1/artists/5SUvXyFcsFsYH0WQ2cNFJb",
						name: "Electric Dragon",
						uri: "spotify:artist:5SUvXyFcsFsYH0WQ2cNFJb",
					},
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/359GzoMEPYlm349fhv6YHo",
						},
						href: "https://api.spotify.com/v1/artists/359GzoMEPYlm349fhv6YHo",
						name: "Cartridge 1987",
						uri: "spotify:artist:359GzoMEPYlm349fhv6YHo",
					},
				],
				external_ids: {
					isrc: "TCAGH2205068",
				},
				external_urls: {
					spotify:
						"https://open.spotify.com/track/3UfDSlvREHwBUjUkmucQuU",
				},
				href: "https://api.spotify.com/v1/tracks/3UfDSlvREHwBUjUkmucQuU",
				id: "3UfDSlvREHwBUjUkmucQuU",
				name: "Kara's Theme (Cartridge 1987 Remix)",
				uri: "spotify:track:3UfDSlvREHwBUjUkmucQuU",
			},
		},
	],
};

var whole = new Set([
	...from61.items,
	...from61_51.items,
	...timj.items,
	...timj51.items,
	...timj101.items,
	...project.items,
	...project51.items,
	...project101.items,
	...project151.items,
	...project201.items,
]);

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
whole.forEach(async (track) => {
	++c;
	//console.log(c, track.track.name);
	// 453 total
	if (c > 425 && c < 429) {
		console.log(c, track.track.name);
		// c > 419 && c < 441) {
		let playlistNumber = JSON.stringify(c);
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
				`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LASTFM_API_KEY}&artist=${artists[0]}&track=${track.track.name}&format=json`,
				{
					headers: {
						"User-Agent":
							"Song Obsessed/1.0 ( http://aramzs.github.io )",
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					console.log("LASTFM Data", data);
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
				.catch((error) =>
					console.error("\x1b[33m  Error: \x1b[0m", error)
				);
		});
		let ytlink = await ytcheck;
		//console.log("artistsObject", artistsObject);
		let tags = new Set();
		if (artistsObject?.artists?.length > 0) {
			let artist = artistsObject.artists[0];
			if (artist.disambiguation) {
				tags.add(artist.disambiguation);
			}
			if (artist.tags) {
				artist.tags.forEach((tag) => {
					if (tag?.name != "_edit") {
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
		if (lastFMData.track.toptags.hasOwnProperty("tag") > 0) {
			lastFMData.track.toptags.tag.forEach((tag) => {
				tags.add(tag.name);
			});
		}
		let tagsArray = Array.from(tags);
		var YAMLTags = tagsArray.join(`
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
			let fileStructureName = "./src/img/" + filename + `.${filetype}`;
			if (fs.existsSync(fileStructureName)) {
				return localImageName;
			}
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
		};
		let localImageFileName = "";
		let imageUrl = "";
		if (image?.url) {
			console.log("imageurl", image.url);
			var sluggedAlbum = slugify(`${track.track.album.name}`, {
				lower: true,
				strict: true,
				locale: "en",
			});
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
			await processImageUrl(image["#text"], "png");
		}
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
		console.log("spotifyTrack", spotifyTrack);
		let writeOptions = { flag: "w" };
		// writeOptions = { flag: "wx" }; // Once we start writing stuff into the posts we don't want to overwrite them.
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
lastfm: ${lastFMData.track.url}
---

A song I plan to write more about.
		`;
		console.log(mdMode);
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
