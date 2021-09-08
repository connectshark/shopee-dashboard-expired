import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue(), VitePWA({})],
  server: {
    port: 8080
  }
})
