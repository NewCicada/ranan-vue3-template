import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'

// your plugin installation
Components({
  resolvers:[
    ElementPlusResolver(),
  ]
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    AutoImport({
      dts: true, // or a custom path
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    Components({/*option*/}),
      // ⚠️ Vue must be placed after VueRouter()
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
