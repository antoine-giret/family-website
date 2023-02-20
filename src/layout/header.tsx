import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Flex, Heading, Text } from 'theme-ui';

import { HeaderQuery } from '../gatsby-types';

function Header(_: Omit<PageProps, 'children'>): JSX.Element {
  const { prismicHeader } = useStaticQuery<HeaderQuery>(graphql`
    query Header {
      prismicHeader {
        data {
          title {
            text
          }
          nav_links {
            link {
              url
            }
            label {
              text
            }
          }
        }
      }
    }
  `);

  console.log(prismicHeader);

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'fr' }} />
      <Flex
        as='header'
        paddingX={3}
        paddingY={4}
        sx={{ alignItems: 'center', flexDirection: 'column', flexShrink: 0, gap: 3 }}
      >
        <Box
          paddingX={2}
          paddingY={1}
          sx={{ border: '2px solid var(--theme-ui-colors-primary)', borderRadius: 16 }}
        >
          <Heading as='h1'>{prismicHeader?.data.title?.text || 'Family Website'}</Heading>
        </Box>
        {prismicHeader?.data && (
          <Flex sx={{ columnGap: 4, flexWrap: 'wrap', rowGap: 2 }}>
            {prismicHeader.data.nav_links?.map(
              (link, index) =>
                link && (
                  <Link
                    activeStyle={{ borderBottom: '2px solid var(--theme-ui-colors-primary)' }}
                    key={index}
                    style={{
                      borderBottom: '2px solid transparent',
                      color: 'inherit',
                      fontSize: '1.1rem',
                      textDecoration: 'none',
                    }}
                    to={link.link?.url || '/'}
                  >
                    <Text>{link.label?.text || `Page ${index}`}</Text>
                  </Link>
                ),
            )}
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Header;
