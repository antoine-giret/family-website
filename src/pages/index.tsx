import React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import { Heading } from 'theme-ui';

import { HomeHeadQuery } from '../gatsby-types';

function IndexPage(): JSX.Element {
  return (
    <>
      <Heading as='h2'>Hello World</Heading>
    </>
  );
}

export default IndexPage;

export const Head: HeadFC = () => {
  const { prismicHome } = useStaticQuery<HomeHeadQuery>(graphql`
    query HomeHead {
      prismicHome {
        data {
          page_title {
            text
          }
          page_description {
            text
          }
        }
      }
    }
  `);

  return (
    <>
      <title>{prismicHome?.data.page_title?.text || 'Family Website'}</title>
      {prismicHome?.data.page_description?.text && (
        <meta name='description' content={prismicHome.data.page_description.text} />
      )}
    </>
  );
};
