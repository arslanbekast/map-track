import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api': 'https://gpstest.autotracker.site',
      '/session': 'https://login.pve-srv1.autotracker.site/api',
    },
  },
})
