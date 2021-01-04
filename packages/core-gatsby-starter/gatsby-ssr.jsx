import { GatsbySSR } from 'gatsby';
import React from 'react';
import { Layout } from './src/layouts/layout';
import { Providers } from './src/layouts/providers';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};