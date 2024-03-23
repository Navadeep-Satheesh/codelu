import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        target: 'http://192.168.119.49:5000',
=======
        target: 'http://192.168.233.170:5000',
>>>>>>> ee69e11b8ea423c128f2fe4774747b771930b106
=======
        target: 'http://192.168.5.71:5000',
>>>>>>> b27222762ae6e6db3f0e1f5002e5a4cc4b905031
=======
        target: 'http://192.168.119.49:5000',
>>>>>>> 78bf8c23f220048da12cc8adebc04e55980d84c0
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
