export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lms',
    titleTemplate: '%s | Luz María Sánchez',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/icons/css/fontello.css',
    '~/assets/icons/css/animation.css',
    '~/assets/styles/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/prototypes.js' },
    { src: '~/plugins/click-outside.client.js' },
    { src: '~/plugins/dayjs.js' },
    { src: '~/plugins/vue-gallery.js', mode: "client" },
    { src: "~/plugins/vue-masonry-css", mode: "client" },
    { src: "~/plugins/analytics.client", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap',
    [
      'nuxt-i18n',
      {
        baseUrl: 'https://www.luzmariasanchez.com',
        seo: false,
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
          },
          {
            code: 'es',
            iso: 'es-ES',
            name: 'Español',
          },
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          onlyOnRoot: true,
          fallbackLocale: 'en',
        },
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: require('./locales/en.json'),
            es: require('./locales/es.json'),
          },
        },
      }
    ]
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // styleResources module configuration
  styleResources: {
    less: './assets/styles/vars/*.less'
  },

  // dayjs module configuration
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: []
  },

  // sitemap module configuration
  sitemap: {
    hostname: 'https://www.luzmariasanchez.com',
    path: '/sitemap.xml',
    gzip: true,
    routes: [
      '/',
      '/collections',
      '/commissions',
      '/grants',
      '/prizes',
      '/residencies',
      '/works',
      '/bio',
      '/contact',
      '/search',

      '/es/',
      '/es/colecciones',
      '/es/comisiones',
      '/es/becas',
      '/es/premios',
      '/es/residencias',
      '/es/proyectos',
      '/es/bio',
      '/es/contacto',
      '/es/buscar',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
