'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.onCreateWebpackConfig = exports.onCreateBabelConfig = void 0;
const webpack_config_1 = require('./webpack.config');
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-treat',
    options: {},
  });
};
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);
  actions.setWebpackConfig(
    webpack_config_1.createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXRzYnktbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBNkQ7QUFFN0Q7Ozs7R0FJRztBQUVVLFFBQUEsbUJBQW1CLEdBQXNDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0lBQ3BGLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDckIsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQXdDLENBQUMsRUFDekUsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sR0FDUixFQUFFLEVBQUU7SUFDSCxNQUFNLFlBQVksR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLDBDQUF5QixDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRzYnlOb2RlIH0gZnJvbSAnZ2F0c2J5JztcbmltcG9ydCB7IGNyZWF0ZUdhdHNieVdlYnBhY2tDb25maWcgfSBmcm9tICcuL3dlYnBhY2suY29uZmlnJztcblxuLyoqXG4gKiBHYXRzYnkgTm9kZSBDb25maWd1cmF0aW9uXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5nYXRzYnlqcy5jb20vZG9jcy9ub2RlLWFwaXMvXG4gKi9cblxuZXhwb3J0IGNvbnN0IG9uQ3JlYXRlQmFiZWxDb25maWc6IEdhdHNieU5vZGVbJ29uQ3JlYXRlQmFiZWxDb25maWcnXSA9ICh7IGFjdGlvbnMgfSkgPT4ge1xuICBhY3Rpb25zLnNldEJhYmVsUGx1Z2luKHtcbiAgICBuYW1lOiAnYmFiZWwtcGx1Z2luLXRyZWF0JyxcbiAgICBvcHRpb25zOiB7fSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25DcmVhdGVXZWJwYWNrQ29uZmlnOiBHYXRzYnlOb2RlWydvbkNyZWF0ZVdlYnBhY2tDb25maWcnXSA9ICh7XG4gIHN0YWdlLFxuICBydWxlcyxcbiAgbG9hZGVycyxcbiAgcGx1Z2lucyxcbiAgYWN0aW9ucyxcbn0pID0+IHtcbiAgY29uc3QgaXNQcm9kdWN0aW9uID0gc3RhZ2UgIT09IGBkZXZlbG9wYDtcbiAgY29uc3QgaXNTU1IgPSBzdGFnZS5pbmNsdWRlcyhgaHRtbGApO1xuICBhY3Rpb25zLnNldFdlYnBhY2tDb25maWcoY3JlYXRlR2F0c2J5V2VicGFja0NvbmZpZyh7IGlzUHJvZHVjdGlvbiwgc3RhZ2UsIGlzU1NSLCBsb2FkZXJzLCBwbHVnaW5zIH0pKTtcbn07XG4iXX0=
