// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  router: {
    options: {
        strict: false
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
    vite: {
        server: {
            allowedHosts: ['localhost', 'legenda-camps.ru'],
        },
    },
    css: ['~/assets/css/main.css'],
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: '/usr/app/public/icons'
            },
        ],
    },
    strapi: {
        url: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        admin: '/admin',
        version: 'v5',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
    runtimeConfig: {
        strapiToken: process.env.NUXT_STRAPI_TOKEN || '',
        public: {
            strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
        }
    }
})