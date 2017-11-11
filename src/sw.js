(function(){

  this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/assets/app.js',
          '/styles/assets/1.jpg',
          '/styles/assets/2.jpg',
          '/styles/assets/3.jpg'
        ]);
      })
    );
  });

  this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(resp) {
        return resp || fetch(event.request).then(function(response) {
            return caches.open('v1').then(function(cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          });
      })
    );
  });

})();

