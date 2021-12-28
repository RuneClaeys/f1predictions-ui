import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

self.addEventListener('message', (event) => {
   if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

precacheAndRoute(self.__WB_MANIFEST);

const apiURL = `^${import.meta.env.VITE_API_BASE_URL}/`;

registerRoute(
   new RegExp(apiURL),
   new StaleWhileRevalidate({
      plugins: [
         new CacheableResponsePlugin({
            statuses: [0, 200],
         }),
      ],
   })
);
