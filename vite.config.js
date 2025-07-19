// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Toda requisição começando com /api será redirecionada
      '/api': {
        target: 'https://www.transparencia.ma.gov.br',
        changeOrigin: true,
        // não é necessário fazer rewrite, pois vamos manter o /api no path
      },
    },
  },
});
