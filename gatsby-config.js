// var admin = require("firebase-admin")
// var serviceAccount = require("./firebase-key.json")

// console.log("Cred--------------", admin.credential.cert(serviceAccount))

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Books",
            collection: "Book",
            map: doc => {
              return {
                title: doc.title,
                description: doc.description,
                // author___NODE: doc.author.id,
              }
            },
          },
        ],
      },
    },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
