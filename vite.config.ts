import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

checker({
  eslint: {
    lintCommand: "eslint .",
  },
});
