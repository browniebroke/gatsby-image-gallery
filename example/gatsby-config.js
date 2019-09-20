module.exports = {
  siteMetadata: {
    title: `Example for Gallery`,
    description: `Just a simple example page to demo the gatsby-image-gallery.`,
    author: `@browniebroke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
