module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://aditya.portalnesia.com", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Putu Aditya Portfolio", // Used in manifest.json
          shortName: "Aditya Portfolio", // Used in manifest.json
          startUrl: ".", // Used in manifest.json
          backgroundColor: "#2f6f4e", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "standalone", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
           path: "/blog", // Defines the slug for the blog listing page
           usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
