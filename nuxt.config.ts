import { Configuration } from '@nuxt/types'

const title = 'Rule of Three ⚡'
const dek = 'Simple and Fast Rule of three tool ⚡'

const config: Configuration = {
  mode: 'universal',
  head: {
    title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: dek },
      { name: 'twitter:card', hid: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', hid: 'twitter:site', content: '@jefer590' },
      { name: 'twitter:title', hid: 'twitter:title', content: title },
      { name: 'twitter:text:title', hid: 'twitter:text:title', content: title },
      { name: 'twitter:description', hid: 'twitter:description', content: dek },
      { name: 'og:title', hid: 'og:title', content: title }
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
