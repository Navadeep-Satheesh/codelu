import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://192.168.119.49:5000',
=======
        target: 'http://192.168.233.170:5000',
>>>>>>> ee69e11b8ea423c128f2fe4774747b771930b106
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
