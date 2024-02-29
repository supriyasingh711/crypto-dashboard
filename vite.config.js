import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:"./docs"
  },
  base:"/crypto-dashboard/",
  plugins: [react()],
})
