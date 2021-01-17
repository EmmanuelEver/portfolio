module.exports = {
  siteMetadata: {
    title: `Emmanuel Telewik`,
    description: `Hi, I'm Emmanuel Telewik, A web developer from the Philippines, I work part-time at developer branded and kraftora`,
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/src/images/logo.png", // Path to your image you placed in the 'static' folder
    author: `@dalbong`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emmanuel Telewik`,
        short_name: `ever`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
}
