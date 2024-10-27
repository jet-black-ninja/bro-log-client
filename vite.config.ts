import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_URL,
        changeOrigin: true, // Ensures the host header matches the target URL
        secure: false, // Disable if your server is using an insecure connection (http instead of https)
      },
    },
  },
  plugins: [react()],
  base: "/bro-log/",
});
