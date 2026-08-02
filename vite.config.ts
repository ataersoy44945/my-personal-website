import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/kick': {
        target: 'https://kick.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/api\/kick/, '/api/v2/channels'),
        headers: {
          'User-Agent':
            'Mozilla/5.0 (compatible; AtaPortfolio/1.0; +https://ataersoy.com)',
        },
      },
    },
  },
})
