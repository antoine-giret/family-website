import { Link, PageProps } from 'gatsby';
import React from 'react';
import { Box, Flex, Heading, Text } from 'theme-ui';

function Header(_: Omit<PageProps, 'children'>): JSX.Element {
  return (
    <Flex
      as='header'
      paddingX={3}
      paddingY={4}
      sx={{ alignItems: 'center', flexDirection: 'column', flexShrink: 0, gap: 3 }}
    >
      <Box
        paddingX={2}
        paddingY={1}
        sx={{ border: '2px solid var(--theme-ui-colors-primary)', borderRadius: 4 }}
      >
        <Heading as='h1'>Family Website</Heading>
      </Box>
      <Flex sx={{ columnGap: 4, flexWrap: 'wrap', rowGap: 2 }}>
        <Link
          activeStyle={{ borderBottom: '1px solid var(--theme-ui-colors-primary)' }}
          style={{
            borderBottom: '2px solid transparent',
            color: 'inherit',
            fontSize: '1.1rem',
            textDecoration: 'none',
          }}
          to='/'
        >
          <Text>Link A</Text>
        </Link>
        <Link
          activeStyle={{ borderBottom: '1px solid var(--theme-ui-colors-primary)' }}
          style={{
            borderBottom: '2px solid transparent',
            color: 'inherit',
            fontSize: '1.1rem',
            textDecoration: 'none',
          }}
          to='/foo'
        >
          Link B
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
