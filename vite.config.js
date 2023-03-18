import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         base: '/',
         includeAssets: ['assets/favicon.ico', 'robots.txt'],
         srcDir: 'src',
         strategies: 'injectManifest',
         filename: 'sw.js',
         manifest: {
            name: 'F1 Predictions',
            short_name: 'F1 Predictions',
            theme_color: '#e10600',
            start_url: '/',
            display: 'standalone',
            background_color: '#e10600',
            icons: [
               {
                  src: 'assets/android-chrome-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: '/assets/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
               {
                  src: 'assets/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
               },
            ],
         },
      }),
   ],

   server: {
      open: true,
      port: 3000,
   },

   build: {
      target: 'esnext',
   },
});
