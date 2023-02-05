import { PageProps } from 'gatsby';
import React from 'react';
import { Box } from 'theme-ui';

function Header(_: Omit<PageProps, 'children'>): JSX.Element {
  return <Box as='header'>Header</Box>;
}

export default Header;
