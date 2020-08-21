const siteMetadata = require('./config/metadata');

module.exports = {
    siteMetadata,
    plugins: [
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: [`**/styles.js`],
            },
        },
        {
            resolve: `@rocketseat/gatsby-theme-docs`,
            options: {
                configPath: `src/config`,
                docsPath: `src/docs`,
                githubUrl: `https://github.com/rocketseat/gatsby-themes`,
                baseDir: `examples/gatsby-theme-docs`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rocketseat Gatsby Themes`,
                short_name: `RS Gatsby Themes`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // trackingId: ``,
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://rocketdocs.netlify.com`,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `#7159c1`,
                // Disable the loading spinner.
                showSpinner: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
                // Enables Google Optimize Experiment ID
                experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'example.com',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.example.com`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: process.env.NODE_ENV !== 'production',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`, // Tem que ser o último
    ],
};
