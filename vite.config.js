import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub project pages live under https://<user>.github.io/<repo>/ */
function productionBase() {
  const explicit = process.env.VITE_BASE_PATH?.trim();
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`;
  }
  const ghRepo = process.env.GITHUB_REPOSITORY;
  if (ghRepo) {
    const [owner, name] = ghRepo.split('/');
    if (name) {
      // user/org Pages repo → https://<owner>.github.io/ (assets at /, not /repo/)
      if (owner && name === `${owner}.github.io`) return '/';
      return `/${name}/`;
    }
  }
  return '/';
}

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? productionBase() : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@design-system': path.resolve(__dirname, 'design-system'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
}));
