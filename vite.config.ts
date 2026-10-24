import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base for maximum compatibility across GitHub Pages, Vercel, Netlify, and custom domains
  base: './',
})
