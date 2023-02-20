import { graphql, HeadProps } from 'gatsby';
import React from 'react';

import { HomeQuery } from '../gatsby-types';

function TripsPage(): JSX.Element {
  return <></>;
}

export default TripsPage;

export function Head({ data: { prismicHome } }: HeadProps<HomeQuery>) {
  return (
    <>
      <title>{prismicHome?.data.page_title?.text || 'Our bike trips | Family Website'}</title>
      {prismicHome?.data.page_description?.text && (
        <meta name='description' content={prismicHome.data.page_description.text} />
      )}
    </>
  );
}

export const query = graphql`
  query Trips {
    prismicTrips {
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
`;
