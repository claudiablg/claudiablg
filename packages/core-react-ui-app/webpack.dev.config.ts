delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import { extractCssLoader } from '@newrade/core-webpack-config';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TreatPlugin from 'treat/webpack-plugin';
import * as tsloader from 'ts-loader';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import WebpackOptions from 'webpack/declarations/WebpackOptions';

dotenv.config();

const config: WebpackOptions.WebpackOptions = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    port: '8001',
  },
  module: {
    rules: [
      extractCssLoader,
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json',
              logLevel: 'WARN',
              projectReferences: true,
            } as Partial<tsloader.Options>,
          },
        ],
      },
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
        logLevel: 'WARN',
      }),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin([{ from: '../../node_modules/graphql-voyager/dist/voyager.worker.js' }]),
    new (webpack as any).DefinePlugin({
      NODE_ENV: process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('development'),
      NODE_VERSION: process.env.version ? JSON.stringify(process.env.version) : JSON.stringify('unknown'),
      GRAPH_CMS_API_URL_MIR: JSON.stringify(process.env.GRAPH_CMS_API_URL_MIR),
      GRAPH_CMS_AUTH_TOKEN_MIR: JSON.stringify(process.env.GRAPH_CMS_AUTH_TOKEN_MIR),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
    new MiniCssExtractPlugin(),
  ],
};

export default config;