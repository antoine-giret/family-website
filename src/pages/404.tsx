import { HeadFC } from 'gatsby';
import * as React from 'react';

// TODO:
function NotFoundPage(): JSX.Element {
  return (
    <main>
      <h1>404 Not found</h1>
    </main>
  );
}

export default NotFoundPage;

export const Head: HeadFC = () => {
  return <title>Not found | Family Website</title>;
};
