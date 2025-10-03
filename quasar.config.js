// quasar.config.js
import { defineConfig } from '#q-app/wrappers'

export default defineConfig((ctx) => {
  return {
    boot: [
      'axios' // เรียกใช้ boot file axios
    ],

    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      // ชื่อ repo ของคุณ + / นำหน้าและปิดท้าย
      publicPath: '/VersionControl2/',

      // hash mode เพื่อใช้งานบน GitHub Pages ได้โดยไม่ต้อง config server
      vueRouterMode: 'hash',

      esbuildTarget: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      }
    },

    devServer: {
      server: { type: 'http' },
      open: true
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],

    ssr: { prodPort: 3000, middlewares: ['render'], pwa: false },

    pwa: { workboxMode: 'GenerateSW' },

    cordova: {},
    capacitor: { hideSplashscreen: true },

    electron: { bundler: 'packager', preloadScripts: ['electron-preload'] },
    bex: { extraScripts: [] }
  }
})
