import { HeadFC } from 'gatsby';
import * as React from 'react';
import { Heading } from 'theme-ui';

// TODO:
function NotFoundPage(): JSX.Element {
  return (
    <>
      <Heading as='h2'>404 Not found</Heading>
    </>
  );
}

export default NotFoundPage;

export const Head: HeadFC = () => {
  return <title>Not found | Family Website</title>;
};
