const CACHE_KEYS = {
	PRE_CACHE: `precache-${VERSION}`,
	RUNTIME: `runtime-${VERSION}`,
};

// add any urls that you don't want to be cached
const EXCLUDED_URLS = [];

// add any urls that you want cached when the service worker is installed
const PRE_CACHE_URLS = ["/img/glass-horn-240.jpg", "/img/glass-horn-640.jpg"];

// add any hosts that you want to bypass
const IGNORED_HOSTS = ["localhost"];

const addItemsToCache = (cacheName, items = []) => {
	caches.open(cacheName).then((cache) => cache.addAll(items));
};

self.addEventListener("install", () => {
	self.skipWaiting();

	addItemsToCache(CACHE_KEYS.PRE_CACHE, PRE_CACHE_URLS);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				cacheNames.filter(
					(item) => !Object.values(CACHE_KEYS).includes(item)
				)
			)
			.then((itemsToDelete) =>
				Promise.all(itemsToDelete.map((item) => caches.delete(item)))
			)
			.then(() => self.clients.claim())
	);
});

self.addEventListener("fetch", (event) => {
	const { hostname } = new URL(event.request.url);

	// if it's an ignored host, do nothing
	if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
		return;
	}

	// if it's an excluded url, do nothing
	if (EXCLUDED_URLS.some((page) => event.request.url.indexOf(page) > -1)) {
		return;
	}
	var url = event.request.url;
	if (
		(url && url.startsWith("chrome-extension")) ||
		url.includes("extension") ||
		!(url.indexOf("http") === 0)
	) {
	} else {
		// return from cache, falling back to network
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}

				return caches.open(CACHE_KEYS.RUNTIME).then((cache) =>
					fetch(event.request).then((response) => {
						return cache
							.put(event.request, response.clone())
							.then(() => response);
					})
				);
			})
		);
	}
});
