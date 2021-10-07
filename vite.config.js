import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue(), VitePWA({
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: '蝦皮分潤後台',
      short_name: 'SB',
      description: '蝦皮分潤後台',
      theme_color: '#555555',
      icons: [
        {
          src: 'pwa-192x192.jpg',
          sizes: '192x192',
          type: 'image/jpg'
        },
        {
          src: 'pwa-512x512.jpg',
          sizes: '512x512',
          type: 'image/jpg'
        },
        {
          src: 'pwa-512x512.jpg',
          sizes: '512x512',
          type: 'image/jpg',
          purpose: 'any maskable',
        }
      ]
    }
  })],
  server: {
    port: 8080
  }
})
