import { PageProps } from 'gatsby';
import React from 'react';
import { Box, Divider, Flex, Text } from 'theme-ui';

function Footer(_: Omit<PageProps, 'children'>): JSX.Element {
  return (
    <Box>
      <Divider sx={{ margin: 0 }} />
      <Flex
        as='footer'
        padding={3}
        sx={{ alignItems: 'center', flexDirection: 'column', flexShrink: 0 }}
      >
        <Text sx={{ fontSize: '0.9rem' }}>© A. Giret {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
