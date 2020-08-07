require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        siteTitle: `Zildo Reviews`,
        siteTitleAlt: `Zip's Dildo Reviews`,
        siteUrl: `https://zildonts.noelle.moe/`,
        siteDescription: `See what Zip has to say about their delicious dildos, excellent eggs, and sensual sex toys.`,
        author: `@flowerdicks_`
    },
    plugins: [{
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                basePath: "/",
                blogPath: "/reviews",
                navigation: [{
                        title: `Reviews`,
                        slug: `/reviews`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [{
                        name: `Twitter`,
                        url: `https://twitter.com/flowerdicks_`,
                    },
                    {
                        name: `Patreon`,
                        url: `https://www.patreon.com/Flowerdicks`,
                    },
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [{
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}