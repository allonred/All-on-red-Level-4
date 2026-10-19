// All on Red! Level 4 early playable prototype v0.1.
// Unregister stale service workers so GitHub Pages updates are immediate.
self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.registration.unregister()));
