import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';

import Layout from './src/layout';

export function wrapPageElement({ element, props }: WrapPageElementBrowserArgs) {
  return <Layout {...props}>{element}</Layout>;
}
