/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      assets: "/src/assets/*",
      app: "/src/app/index",
      "app-router": "/src/app/router/index",
      "app-store": "/src/app/store/index",
      pages: "/src/pages/index",
      widgets: "/src/widgets/index",
      features: "/src/features/index",
      entities: "/src/entities/index",
      "shared-ui": "/src/shared/ui/index",
      "shared-lib": "/src/shared/lib/index",
      "shared-model": "/src/shared/model/index",
      "test": "/src/test/index"
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
});
