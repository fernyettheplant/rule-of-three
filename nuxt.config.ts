import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'Rule of Three ⚡',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simple and Fast Rule of three tool ⚡' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa'
  ],
  modules: [
  ],
  build: {
    extend (_config, _ctx) {
    }
  },
  typescript: {
  },
  pwa: {
    workbox: {
    }
  }
}

export default config
