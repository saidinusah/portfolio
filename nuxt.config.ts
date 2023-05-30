// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            meta: [{

            }],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com"', crossorigin: 'anonymous' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,600&display=swap"' },
            ]
        }


    },

    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '~/assets/css/index.css',
    ],
})


// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,600&display=swap" rel="stylesheet">