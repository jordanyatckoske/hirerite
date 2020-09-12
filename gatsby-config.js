/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hirerite",
    description:
      "We build teams and help you hire the right people through our software and trusted recruiting history.",
    url: "https://www.hirerite.io", // No trailing slash allowed!
    image: "/hireriteLogo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
          },
          {
            family: `Muli`,
          },
        ],
      },
    },
  ],
}
