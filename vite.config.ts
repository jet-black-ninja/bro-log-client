import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

if (!process.env.VITE_SERVER_URL) {
  throw new Error('VITE_SERVER_URL is not defined in the environment variables');
}
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_URL,
        changeOrigin: true, // Ensures the host header matches the target URL
        secure: false, // Disable if your server is using an insecure connection (http instead of https)
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});
