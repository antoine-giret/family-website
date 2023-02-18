import env from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

import { linkResolver } from './src/link-resolver';

env.config({ path: '.env' });

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Family Website',
    // FIXME:
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Nunito Sans',
            file: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: require('./src/theme'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './src/gatsby-types.ts',
        documentPaths: ['./src/**/*.{ts,tsx}'],
      },
    },
  ],
};

export default config;
