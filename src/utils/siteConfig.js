// Default Website Schema
const schemaOrgJSONLD = [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: 'https://mangu.netlify.com',
    name: 'Default Title',
    alternateName: 'Alt Title',
  },
]

module.exports = {
  siteTitle: 'Mangu',
  siteTitleAlt: 'Mangu Demo Site', // This allows an alternative site title for SEO schema.
  publisher: 'Mangu Networks', // Organization name used for SEO schema
  siteDescription: 'A starter template to build amazing static websites with GatsbyJS and NetlifyCMS',
  siteUrl: 'https://mangu.netlify.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  author: 'Fullstackman', // Author for RSS author segment and SEO schema
  authorUrl: 'https://mangu.netlify.com/about', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@fullstackman', // Change for Twitter Cards
  shortTitle: 'Mangu Site', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/img/logo.png', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 400, // Change to the width of your default share image
  shareImageHeight: 400, // Change to the height of your default share image
  siteLogo: '/img/logo.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e1e1e1', // Used for Offline Manifest
  themeColor: '#FD461E', // Used for Offline Manifest
  copyright: 'Copyright © 2018 Mangu', // Copyright string for the RSS feed
  schemaObject: schemaOrgJSONLD,
}
