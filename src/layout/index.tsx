import { PageProps } from 'gatsby';
import React, { ReactElement } from 'react';
import { Box, Flex } from 'theme-ui';

import Footer from './footer';
import Header from './header';

function Layout({
  children,
  ...props
}: Omit<PageProps, 'children'> & { children: ReactElement }): JSX.Element {
  return (
    <Flex sx={{ flexDirection: 'column', height: '100vh' }}>
      <Header {...props} />
      <Box as='main' sx={{ flexGrow: 1, padding: 4 }}>
        {children}
      </Box>
      <Footer {...props} />
    </Flex>
  );
}

export default Layout;
