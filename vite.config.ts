import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify,{ transformAssetUrls } from 'vite-plugin-vuetify'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify({
      autoImport:true,
    }),
    UnoCSS()
  ],
  server:{
    port: 7898,
    host:'0.0.0.0'
  },
  resolve:{
    alias: [{
      find: '@',
      replacement: resolve(__dirname, './src')
    }]
  }

})
