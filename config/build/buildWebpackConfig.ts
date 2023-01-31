import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {BuildOptions} from "../types/config";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {patch, mode} = options
  return {
    mode,
    entry: patch.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: patch.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve(),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
    // devServer: buildDevServer(options),
  }
}