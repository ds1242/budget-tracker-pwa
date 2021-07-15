const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'v1';
const CACHE_NAME = APP_PREFIX + VERSION;

// files to cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/serivce-worker.js',
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
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Your files were cached successfully');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
    self.skipWaiting();
});