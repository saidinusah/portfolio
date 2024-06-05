// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: 'https://fonts.gstatic.com"',
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,600&display=swap"',
        },
      ],
      title: "Inusah Said: Software Developer (Frontend Web Developer)",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      meta: [
        {
          name: "description",
          content: "Inusah Said's portfolio",
        },
        {
          name: "keywords",
          content: "Web Developer, Tech, Frontend Developer, Ghana",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "theme-color",
          content: "#111111",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "Inusah Said: Software Developer (Frontend Web Developer)",
        },
        {
          name: "og:description",
          content:
            "Inusah Said: Software Developer (Frontend Web Developer) based in Ghana",
        },
        {
          property: "og:image",
          content: "https://saidinusah.vercel.app/android-chrome-512x512.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://saidinusah.vercel.app",
        },
        { name: "twitter:site", content: "@1nusah" },
        { name: "twitter:creator", content: "@1nusah" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  css: ["~/assets/css/index.css"],
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  ssr: true,
});
