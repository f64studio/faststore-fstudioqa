
module.exports = {
  seo: {
  "title": "F64",
  "description": "A fast and performant store framework",
  "titleTemplate": "F64 | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "fstudioqa",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "RON",
      symbol: "lei",
    },
    locale: "ro-RO",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "ROU",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://fstudioqa.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/obiective%20foto",
    search: "/s?q=Canon",
    pdp: "/canon-ef-50mm-f-1-8-stm/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/canon-ef-50mm-f-1-8-stm/p",
      collection: "/obiective%20foto",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/canon-ef-50mm-f-1-8-stm/p",
      collection: "/obiective%20foto",
      collection_filtered: "/obiective%20foto/?category-1=obiective%20foto&brand=Canon&facets=category-1%2Cbrand%27",
      search: "/s?q=Canon",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://fstudioqa.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
