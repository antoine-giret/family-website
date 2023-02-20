import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Box, Flex, Heading, Text } from 'theme-ui';

import { HomeQuery } from '../gatsby-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function IndexPage({ data: { prismicHome, allPrismicResume } }: PageProps<HomeQuery>): JSX.Element {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 5 }}>
      <Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
        <Heading
          as='h2'
          dangerouslySetInnerHTML={{ __html: prismicHome?.data.baseline?.html || 'Hello World' }}
          sx={{ fontSize: '1.5rem', textAlign: 'center', p: { margin: 0 } }}
        />
      </Flex>
      {allPrismicResume.nodes.length > 0 && (
        <Flex sx={{ flexDirection: 'column', gap: 4 }}>
          <Heading
            as='h3'
            dangerouslySetInnerHTML={{
              __html: prismicHome?.data.about_title?.html || 'Who are we?',
            }}
            sx={{ fontSize: '1.25rem', p: { margin: 0 } }}
          />
          {allPrismicResume.nodes.map(
            ({ uid, data: { avatar: _avatar, first_name, abstract } }) => {
              const image = _avatar && getImage(_avatar);

              return (
                <Flex
                  key={uid}
                  sx={{
                    alignItems: ['center', 'flex-start'],
                    border: '1px solid #ccc',
                    borderRadius: 16,
                    flexDirection: ['column', 'row'],
                    gap: 4,
                    padding: 4,
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    {image ? (
                      <GatsbyImage
                        alt={_avatar.alt || 'Avatar'}
                        image={image}
                        imgStyle={{ borderRadius: 50 }}
                        style={{ borderRadius: 50 }}
                      />
                    ) : (
                      <Box sx={{ borderRadius: 50, height: 100, width: 100 }} />
                    )}
                  </Box>
                  <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
                    {first_name?.text && (
                      <Heading as='h6' sx={{ fontSize: '1.15rem' }}>
                        {first_name.text}
                      </Heading>
                    )}
                    {abstract?.html && <Text dangerouslySetInnerHTML={{ __html: abstract.html }} />}
                  </Flex>
                </Flex>
              );
            },
          )}
        </Flex>
      )}
    </Flex>
  );
}

export default IndexPage;

export function Head({ data: { prismicHome } }: HeadProps<HomeQuery>) {
  return (
    <>
      <title>{prismicHome?.data.page_title?.text || 'Family Website'}</title>
      {prismicHome?.data.page_description?.text && (
        <meta name='description' content={prismicHome.data.page_description.text} />
      )}
    </>
  );
}

export const query = graphql`
  query Home {
    prismicHome {
      data {
        page_title {
          text
        }
        page_description {
          text
        }
        baseline {
          html
        }
        about_title {
          html
        }
      }
    }
    allPrismicResume {
      nodes {
        uid
        data {
          avatar {
            alt
            gatsbyImageData(width: 100, placeholder: BLURRED)
          }
          first_name {
            text
          }
          abstract {
            html
          }
          social_links {
            icon {
              alt
              gatsbyImageData(width: 24, placeholder: BLURRED)
            }
            link {
              url
              target
            }
          }
        }
      }
    }
  }
`;
