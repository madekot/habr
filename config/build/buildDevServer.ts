import {BuildOptions} from "../types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  console.log('test')
  return {
    port: options.port,
    open: true
  }
}