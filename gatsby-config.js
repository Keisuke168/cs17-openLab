module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "cs17-openlab",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'event',
        path: `${__dirname}/src/images/event/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reserches',
        path: `${__dirname}/reserches/`,
      },
    },
  ],
};
