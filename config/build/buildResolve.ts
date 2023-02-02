import webpack from "webpack";
import {BuildOptions} from "./types/config";


export const buildResolve = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.patch.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}