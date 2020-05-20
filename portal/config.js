const sidebarConfig = require('../content/sidebar.config');

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://learn.winningproduct.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://audit.winningproduct.com/assets/img/logo@2x.png',
    logoLink: 'https://winningproduct.com/',
    title:
      "<a href='https://winningproduct.com'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/winningproduct/learn-portal',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: sidebarConfig.forcedNavOrder,
    links: [{ text: 'WinningProduct', link: 'https://winningproduct.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'Winning Product| Learn',
    description: 'WinningProduct Learn Portal ',
    ogImage: null,
    docsLocation: 'https://github.com/winningproduct/learn-portal/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Winning Product Learn',
      short_name: 'WPLearn',
      start_url: '/',
      background_color: '#8e44ad',
      theme_color: '#8e44ad',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
