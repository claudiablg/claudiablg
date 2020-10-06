require('source-map-support').install();

// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.
require('ts-node').register({
  project: '../core-gatsby-config/src/tsconfig/tsconfig.gatsby-config.json',
});

/**
 * DO NOT EDIT THIS FILE DIRECTLY
 * Edit the source file at `./gatsby-config.ts`
 */
module.exports = require('./gatsby-config.ts');
