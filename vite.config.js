import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         base: '/',
         includeAssets: ['favicon.ico'],
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
                  src: 'android-chrome-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: '/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
               {
                  src: 'android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
               },
            ],
         },
      }),
   ],
   build: {
      target: 'esnext',
   },
});
