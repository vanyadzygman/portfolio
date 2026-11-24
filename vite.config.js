import { defineConfig, pluginSsg } from "minista";
import path from "path";

export default defineConfig({
  plugins: [pluginSsg()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          // Не добавляем @use в сам файл _mixins.scss
          if (filename.endsWith("_mixins.scss")) {
            return content;
          }
          return `@use "@/styles/utils/mixins" as *;\n${content}`;
        },
      },
    },
  },
});
