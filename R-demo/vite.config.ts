import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import baseUrlPlugin from "./src/plugin/baseUrl";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 
  plugins: [react(),baseUrlPlugin(4*2048)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    port: 9999,
  },
});
