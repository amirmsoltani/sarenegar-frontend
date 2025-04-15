import { resolve } from "node:path";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Seizure',
        short_name: 'Seizure',
        description: 'Recording seizure events to present to the doctor',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        style: "compressed",
        api: "modern-compiler",
        additionalData: `@use "@/styles/mixins.scss" as *;`,
      },
    },
  },
});
