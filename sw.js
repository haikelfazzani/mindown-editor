importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{ url: '/index.html', revision: 'abcd1234' },]);

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({ cacheName: 'images' })
  );

  workbox.routing.registerRoute(
    /\.(?:css)$/,
    new workbox.strategies.CacheFirst({ cacheName: 'css-resources' })
  );

  workbox.routing.registerRoute(
    new RegExp('/scripts/'),
    new workbox.strategies.CacheFirst({ cacheName: 'js-resources' })
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