/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: '古蒂的运动记录',
    siteUrl: 'https://www.strava.com/athletes/68463270',
    logo: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/68463270/26652976/1/large.jpg',
    description: 'JMGutiH Workouts Page',
    keywords: 'Running, Skiing, Soccer',
    navLinks: [
      {
        name: 'Garmin',
        url: 'https://connect.garmin.com/modern/profile/8d8a6944-a883-4466-a8a5-3f3d8035d66b',
      },
      {
        name: 'Strava',
        url: 'https://www.strava.com/athletes/68463270',
      },
      {
        name: 'About',
        url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-vercel',
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: '.',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
