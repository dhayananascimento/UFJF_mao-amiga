import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mão Amiga',
        short_name: 'MaoAmiga',
        description: 'Sistema interativo de apoio à assistência de pessoas em situação de rua.',
        theme_color: '#ffffff'
      }
    })
  ],
})
