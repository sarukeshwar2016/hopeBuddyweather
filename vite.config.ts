import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",       // Accept connections from all IPs (for LAN/dev testing)
    port: 8080,        // Use port 8080
  },
  plugins: [react()], // Use SWC-based React plugin for faster builds
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Enables import like @/lib/weather
    },
  },
}));
