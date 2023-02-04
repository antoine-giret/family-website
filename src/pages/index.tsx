import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

function IndexPage(): JSX.Element {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Family Website</title>;
};
