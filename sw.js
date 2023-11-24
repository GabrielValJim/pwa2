const CACHE_NAME = 'mi-cache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll([
                    '/',
                    'info.html',
                    'plataformas.html',
                    'images/icon.png',
					'images/Ejemplo1.jpg',
					'images/Ejemplo2.jpg'
                ]);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (event.request.url.includes('parametros.html')) {
                    return fetch(event.request);
                }

                return response || fetch(event.request);
            })
    );
});