import React from 'react';
import type { HeadFC } from 'gatsby';
import { Heading } from 'theme-ui';

function IndexPage(): JSX.Element {
  return (
    <>
      <Heading as='h1'>Hello World</Heading>
    </>
  );
}

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Family Website</title>;
};
