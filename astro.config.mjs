import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap"; // ここでsitemapをインポート
import relativeLinks from "astro-relative-links";


export default defineConfig({
  // site: "", // サイトのURLを設定する場合はここに入力
  base: "", // 相対パスに設定
  trailingSlash: 'always',
  integrations: [sitemap()],
  integrations: [relativeLinks()],
  compressHTML: false,


  vite: {
    define: {
      "import.meta.env.BASE_PATH": JSON.stringify(""),
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/src/sass/_styles.scss" as *;',
        },
      },
    },

    build: {
      minify: false,
      emptyOutDir: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/[name].js`,
          chunkFileNames: `assets/js/[name].js`,
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0] ?? "";
            const sourceStr = assetInfo.source?.toString() ?? "";
            const extType = fileName.split(".").at(-1)?.toLowerCase() ?? "";

            // 画像ファイルの処理
            if (/\.(gif|jpeg|jpg|png|svg|webp)$/.test(fileName)) {
              return "assets/img/[name]-[hash][extname]";
            }

            // global.scssの処理
            if (fileName.includes("global.scss")) {
              return "assets/css/global.css";
            }

            // CSSファイルの処理
            if (extType === "css") {
              const firstLine = sourceStr
                .split("\n")
                .find((line) => line.includes("buildOutputFile:"));

              if (firstLine) {
                const outputName = firstLine
                  .split("buildOutputFile:")[1]
                  .trim()
                  .replace(/['";]/g, "");
                return `assets/css/${outputName}[extname]`;
              }
              return `assets/css/${fileName.replace("-index", "")}`;
            }

            // JSファイルの処理
            if (extType === "js") {
              return "assets/js/[name]-[hash][extname]";
            }

            return `assets/${extType}/[name]-[hash][extname]`;
          },
        },
      },
    },
  },
  build: {
    assetsInlineLimit: 0,
    format: "file",
  },
});
