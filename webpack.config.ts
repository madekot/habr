import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/types/config";

const patch: BuildPaths  = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = 'development' === mode;
const PORT = 3000;

const config = buildWebpackConfig({
  mode: 'development',
  patch,
  isDev,
  port: PORT
});

export default config;