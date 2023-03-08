require("dotenv/config")
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Kiel Cummings`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Dallen Hoyal`,
    siteUrl: `https://kielcummings.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    { 
      resolve: "gatsby-plugin-image",
      options: {
        formats: [`webp`],
        placeholder: `BLURRED`,
        quality: 90
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, "src"),
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            "removeViewBox",
            "removeDimensions",
            "removeRasterImages",
            "reusePaths",
            "removeUselessDefs",
            {
              name: "cleanupIDs",
              active: false,
            },
            {
              name: "prefixIds",
              active: false,
            },
            {
              name: "collapseGroups",
              active: false,
            },
          ],
        },
      },
    },
  ],
}
