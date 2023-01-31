import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "../types/config";

export const buildPlugins = ({patch}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin(
      { template: patch.html }
    ),
    new webpack.ProgressPlugin()
  ]
}