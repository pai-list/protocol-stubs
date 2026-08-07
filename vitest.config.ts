import { defineConfig } from "vitest/config";

export default defineConfig({
  root: __dirname,
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  css: {
    postcss: {},
  },
  test: {
    globals: true,
    environment: "node",
    include: ["src/__tests__/**/*.test.ts"],
  },
});
