// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    ssr: true,
    router: {
        options: {
            strict: false
        }
    },
    app: {
        head: {
            title: 'Отель Славянка Саяногорск',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                { name: 'description', content: 'Одна из лучших гостиниц в Хакасии в самом сердце Саяногорска' },
                { name: 'keywords', content: 'гостиница, отель, саяногорск, отдых, бронь' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'robots', content: 'index,follow' },
                { property: 'og:title', content: 'Отель Славянка Саяногорск' },
                { property: 'og:description', content: 'Одна из лучших гостиниц в Хакасии в самом сердце Саяногорска' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://slavyanka-sayanogorsk.ru' },
                { property: 'og:image', content: '/images/slavyanka-sayanogors.jpg' },
                { name: 'twitter:image', content: '/images/slavyanka-sayanogors.jpg' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
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
            allowedHosts: ['localhost', 'slavyanka-sayanogorsk.ru'],
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