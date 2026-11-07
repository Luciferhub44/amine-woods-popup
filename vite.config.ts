/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generateIcsContent } from './src/utils/calendar';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ics-calendar-headers',
      configureServer(server) {
        server.middlewares.use('/amine-woods-popup-poznan.ics', (_req, res) => {
          const ics = generateIcsContent();
          res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
          res.setHeader('Content-Disposition', 'inline; filename="amine-woods-popup-poznan.ics"');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(ics);
        });
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
