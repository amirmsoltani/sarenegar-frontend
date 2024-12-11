import { resolve } from "node:path";
// vite
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({ include: ["path"] }),
    svgr({
      include: "**/*.svg",
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "@/styles/mixins.scss";`,
      },
    },
  },
});
