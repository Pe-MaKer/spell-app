import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👉 Passe den base-Pfad an:
export default defineConfig({
  plugins: [react()],
  base: "/spelling-app/", // ⬅️ wichtig für GitHub Pages!
})
