module.exports = {
  siteMetadata: {
    title: "Will's first Gatsby site",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
  'gatsby-transformer-remark'
  ],
            
};
