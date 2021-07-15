const CACHE_NAME = 'budget-tracker-v1'
const DATA_CACHE_NAME = 'data-budget-tracker-v1';

// files to cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '/css/styles.css',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
    '/js/idb.js',
    '/js/index.js'
];

// install service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached successfully');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});


//  activate the serivce worker and remove old data from the cache
self.addEventListener('activate', function(event) {
    console.log('service worker activated')
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if(key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/api/transaction')) {
        event.respondWith(
          caches
            .open(DATA_CACHE_NAME)
            .then(cache => {
              console.log(cache);
              return fetch(event.request)
                .then(response => {
                  if (response.status === 200) {
                    cache.put(event.request.url, response.clone());
                  }
                  return response;
                })
                .catch(err => {
                  console.log(err);
                  return cache.match(event.request);
                })
            })
            .catch(error => console.log(error))
        );
      } else {
        event.respondWith(
          fetch(event.request)
            .catch(error => {
              console.log(error);
              return caches.match(event.request).then(response => {
                if (response) {
                  return response;
                } else if (event.request.headers.get('accept').includes('text/html')) {
                  return caches.match(event.request.url);
                }
              })
            })
        )
      }
});