self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('xray-scanner-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/xray_scanner_readings_editable.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});