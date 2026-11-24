import { defineConfig, pluginSsg } from "minista";
import path from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/portfolio/" : "/",
  plugins: [pluginSsg()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          if (filename.endsWith("_mixins.scss")) {
            return content;
          }
          return `@use "@/styles/mixins" as *;\n${content}`;
        },
      },
    },
  },
}));
