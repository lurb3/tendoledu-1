module.exports = {
  siteMetadata: {
    title: 'Tendoledu',
    description: "Tendoledu",
    author: 'Tendoledu',
    twitter: 'tendoledu',
    github: 'tendoledu',
    siteUrl: 'https://tendoledu.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tendoledu.com',
        sitemap: 'https://tendoledu.com/tendoledu.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            // 'Raleway',
            // 'Montserrat',
            // 'medium-content-sans-serif-font',
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // 'Segoe UI',
            // 'Roboto',
            // 'Oxygen',
            'Ubuntu',
            // 'Cantarell',
            // 'Open Sans',
            // 'Helvetica Neue',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tendoledu',
        short_name: 'Tendoledu',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/T.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#remove
    'gatsby-plugin-offline',
  ],
};
