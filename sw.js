self.addEventListener("install", e => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", e => {
  // Futuro: cache offline
});