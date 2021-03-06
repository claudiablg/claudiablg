import Gatsby from 'gatsby';

/**
 * Return a `gatsby-plugin-loadable-components-ssr` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-loadable-components-ssr/
 * @see https://loadable-components.com/
 *
 * @deprecated switched to react v18
 */
export function getGatsbyPluginLoadableComponents(): Gatsby.PluginRef {
  return undefined as any;
  // return {
  //   resolve: `gatsby-plugin-loadable-components-ssr`,
  //   options: {
  //     // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
  //     // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
  //     useHydrate: true,
  //   },
  // };
}
