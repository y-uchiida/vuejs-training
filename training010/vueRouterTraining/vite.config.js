import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /* process.env を利用できるように、明示的にdefine に記述する */
  define: {
    'process.env': process.env
  }
})
