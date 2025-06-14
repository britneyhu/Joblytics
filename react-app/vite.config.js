import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, './index.html'),
        addApp: resolve(__dirname, './addapp.html'),
        editApp: resolve(__dirname, './editapp.html'),
        allApps: resolve(__dirname, './allapps.html'),
        formFillers: resolve(__dirname, './formfillers.html'),
      }
    }
  }
})
