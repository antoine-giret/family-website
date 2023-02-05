import { PageProps } from 'gatsby';
import React from 'react';
import { Box } from 'theme-ui';

function Footer(_: Omit<PageProps, 'children'>): JSX.Element {
  return <Box as='footer'>Footer</Box>;
}

export default Footer;
