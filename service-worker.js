// All on Red! Level 4 v0.2 — disable stale offline caching.
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.registration.unregister()));
