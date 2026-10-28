import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'hru-terminal-banner',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          setTimeout(() => {
            console.log('\n  ======================================================');
            console.log('   🎓 HR UNIVERSITY (HRU) — CAMPUS OS ACTIVE');
            console.log('   ➜  Local URL:   http://localhost:5173/');
            console.log('   ➜  Skip Intro:  http://localhost:5173/?nointro');
            console.log('  ======================================================\n');
          }, 150);
        });
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
  },
});
