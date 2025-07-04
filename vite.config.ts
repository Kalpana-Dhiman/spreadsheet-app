import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/spreadsheet-app/", // ✅ IMPORTANT
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});

