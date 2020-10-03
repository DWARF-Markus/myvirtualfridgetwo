export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myvirtualfridgetwo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDhK2ljPBd57gXstFwT6KPpiY0HMx8wRdw',
          authDomain: 'my-virtual-fridge-two.firebaseapp.com',
          databaseURL: 'https://my-virtual-fridge-two.firebaseio.com',
          projectId: 'my-virtual-fridge-two',
          storageBucket: 'my-virtual-fridge-two.appspot.com',
          messagingSenderId: '1025995564052',
          appId: '1:1025995564052:web:f52a6baab7797644577301',
          measurementId: 'G-Z8H2DCP8YH',
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          realtimeDb: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true,
        },
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
