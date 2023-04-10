var CACHE_NAME = "offline";
var OFFLINE_URL = "/nms/page/www-offline-v1.html";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.add(
        new Request(OFFLINE_URL, {
          cache: "reload",
        })
      );
    })
  );
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  if ("navigationPreload" in self.registration) {
    event.waitUntil(self.registration.navigationPreload.enable());
  }

  self.clients.claim();
});
self.addEventListener("fetch", function (event) {
  if (event.request.mode === "navigate") {
    var p;
    if (event.preloadResponse) {
      p = event.preloadResponse.then(function (preloadResponse) {
        if (preloadResponse) {
          return preloadResponse;
        }

        return fetch(event.request);
      });
    } else {
      p = fetch(event.request);
    }

    p = p.catch(function (error) {
      return caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(OFFLINE_URL);
      });
    });
    event.respondWith(p);
  }
});
