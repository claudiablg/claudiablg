import { GatsbyNode } from 'gatsby';
import { createPagesFunction, onCreatePageFunction } from './src/create-pages';
import { createSchemaCustomizationFn } from './src/create-schema-customization';
import { onCreateBabelConfigFunction } from './src/on-create-babel-config';
import { onCreateWebpackConfigFunction } from './src/on-create-webpack-config';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = onCreateBabelConfigFunction;
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  onCreateWebpackConfigFunction;
export const createPages: GatsbyNode['createPages'] = createPagesFunction;
export const onCreatePage: GatsbyNode['onCreatePage'] = onCreatePageFunction;
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  createSchemaCustomizationFn;
