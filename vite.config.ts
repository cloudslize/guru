import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
const isProd = process.env.NODE_ENV === 'production';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: isProd ? '/guru/' : '/', // 👈 use '/guru/' only in production
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.PNG', '**/*.Png', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
}));
