const CACHE_NAME = "toetsweek-douwe-v3";
const URLS_TO_CACHE = [
  "./","./index.html","./frans_u45.html","./engels_zinnen_u45.html",
  "./engels_phrases_u45.html","./engelse_grammatica_1vwo.html",
  "./latijn_basiswoorden.html","./nederlands_begrippen.html",
  "./biologie_thema4.html","./manifest.json","./icon-192.png","./icon-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
