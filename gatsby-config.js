module.exports = {
  siteMetadata: {
    title: 'Mangu | A Gatsby + Netlify CMS Demo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      // make sure to keep it last in the array
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          "Referrer-Policy: strict-origin-when-cross-origin",
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          "Content-Security-Policy: default-src 'self' 'unsafe-inline'",
          "Feature-Policy: vibrate 'none';  microphone 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'self'; fullscreen 'self'; payment 'self'; usermedia 'self'; sync-xhr 'self'; geolocation 'self'; midi 'self'; notifications 'self'; push 'self';",
          "A-Music-Hacker: '(¬‿¬) If you are reading this, send a message to someone[at]example[dot]com and mention this header.'",
        ],
        headers: {
          "/admin/*": [
            "Cache-Control: must-revalidate, no-cache, no-store, pre-check=0, post-check=0, max-age=0, s-maxage=0",
            "Expires: 0",
            "Pragma: no-cache",
          ],
          "/blog/*": [
            "Cache-Control: no-cache",
          ]
        },
      }
    }
  ],
}
