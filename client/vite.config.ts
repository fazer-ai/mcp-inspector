import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: [
      "**/__tests__/**/*.{js,ts,jsx,tsx}",
      "**/?(*.)+(spec|test).{js,ts,jsx,tsx}",
    ],
    exclude: [...configDefaults.exclude, "dist", "bin"],
    coverage: {
      exclude: [
        "/node_modules/",
        "/dist/",
        "/bin/",
        "**/*.config.{js,ts,cjs,mjs}",
      ],
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
