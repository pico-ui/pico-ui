/// <reference types="vitest" />
import { resolve } from "node:path";
import { defineConfig, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    rollupOptions: {
      external: ["tailwindcss/plugin", "tailwindcss/lib/util/normalizeScreens", "lodash.merge"],
    },
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      formats: ["es", "cjs"],
      fileName: (format, name) => (format === "cjs" ? `${name}.cjs` : `${name}.js`),
    },
  },
  test: {
    coverage: {
      exclude: ["**/testing.ts"],
    },
  },
}) satisfies UserConfig;