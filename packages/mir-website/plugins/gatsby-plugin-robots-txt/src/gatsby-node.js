/* eslint-disable */

'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.onPostBuild = onPostBuild;

var _fs = _interopRequireDefault(require('fs'));

var _generateRobotstxt = _interopRequireDefault(require('generate-robotstxt'));

var _path = _interopRequireDefault(require('path'));

var _url = _interopRequireDefault(require('url'));

const publicPath = './public';
const defaultEnv = 'development';
const defaultOptions = {
  output: '/robots.txt',
  query: `{
    site {
      siteMetadata {
        siteUrl
      }
    }
  }`,
};

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    _fs.default.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function runQuery(handler, query) {
  return handler(query).then((res) => {
    if (res.errors) {
      throw new Error(res.errors.join(', '));
    }

    return res.data;
  });
}

const getOptions = (pluginOptions) => {
  const options = { ...pluginOptions };
  delete options.plugins;
  const { env = {}, resolveEnv = () => process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV } = options;
  const envOptions = env[resolveEnv()] || env[defaultEnv] || {};
  delete options.env;
  delete options.resolveEnv;
  return { ...options, ...envOptions };
};

async function onPostBuild({ graphql }, pluginOptions) {
  const userOptions = getOptions(pluginOptions);
  const mergedOptions = { ...defaultOptions, ...userOptions };

  if (
    !Object.prototype.hasOwnProperty.call(mergedOptions, 'host') ||
    !Object.prototype.hasOwnProperty.call(mergedOptions, 'sitemap')
  ) {
    const {
      site: {
        siteMetadata: { siteUrl },
      },
    } = await runQuery(graphql, mergedOptions.query);
    mergedOptions.host = siteUrl;
    mergedOptions.sitemap = _url.default.resolve(siteUrl, 'sitemap.xml');
  }

  const { policy, sitemap, host, output, configFile } = mergedOptions;
  const content = await (0, _generateRobotstxt.default)({
    policy,
    sitemap,
    host,
    configFile,
  });

  const filename = _path.default.join(publicPath, output);

  return await writeFile(_path.default.resolve(filename), content);
}
//# sourceMappingURL=gatsby-node.js.map
