importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{ url: '/index.html', revision: 'abcd1234' },]);

  workbox.routing.registerRoute(
    /\.(?:html)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'html-pages', plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1000,
          maxAgeSeconds: 31536000
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1000,
          maxAgeSeconds: 31536000
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /\.(?:css|js)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "assets",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1000,
          maxAgeSeconds: 31536000
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
    new workbox.strategies.NetworkFirst({ cacheName: 'bootstrap' }),
  );

  workbox.routing.registerRoute(
    'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
    new workbox.strategies.NetworkFirst({ cacheName: 'fontawesome' }),
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}