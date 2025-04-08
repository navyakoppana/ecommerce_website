import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures Vite generates files inside "dist"
    emptyOutDir: true, // Clears previous builds before creating a new one
  },
})
