import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: process.env.NODE_ENV === "production" ?
      "/vue3-shop-h5" : "/",
    plugins: [
      vue(),
      UnoCSS(),
      vueJsx(),
      viteMockServe({
        mockPath: './mock',
        localEnabled: true,
        prodEnabled: false,
      })
    ],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      }
    },
    server: {
      host: true,
      // port: 8991,
      proxy: {
        '/app': {
          target: 'https://app-cn.smileteeth.cn',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/app/, ''),
        },
        '/dev': {
          target: 'https://dev.smileteeth.cn',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/dev/, ''),
        }
      },
    },
  }
})
