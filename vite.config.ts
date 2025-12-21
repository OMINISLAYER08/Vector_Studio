import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    server: {
      host: "::",
      port: 8080,
      allowedHosts: ['localhost', '127.0.0.1', '*.ngrok-free.dev'],
      hmr: {
        host: 'astylar-autochthonously-albertine.ngrok-free.dev', // Explicitly set HMR host for ngrok
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
  console.log('Vite server config:', config.server); // Added for debugging
  return config;
});
