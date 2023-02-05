import { PageProps } from 'gatsby';
import React, { ReactElement } from 'react';
import { Box } from 'theme-ui';

import Footer from './footer';
import Header from './header';

function Layout({
  children,
  ...props
}: Omit<PageProps, 'children'> & { children: ReactElement }): JSX.Element {
  return (
    <Box>
      <Header {...props} />
      <Box as='main'>{children}</Box>
      <Footer {...props} />
    </Box>
  );
}

export default Layout;
