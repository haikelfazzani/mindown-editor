importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{ url: '/index.html', revision: 'abcd1234' },]);
  
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css|html)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );


  // Cache the underlying font files with a cache-first strategy for 1 year.
  // https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css
  workbox.routing.registerRoute(
    /^https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.4.1\/css\/bootstrap.min.css/,
    new workbox.strategies.CacheFirst({
      cacheName: 'bootstrap',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  // https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css
  workbox.routing.registerRoute(
    'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
    new workbox.strategies.StaleWhileRevalidate({ cacheName: 'fontawesome' }),
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}