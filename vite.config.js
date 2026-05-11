import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9], speed: 4 },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
    sitemap({
      hostname: "https://www.caixadaguarevestimentos.com.br",
      dynamicRoutes: ["/", "/impermeabilizacao"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
