import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            }
          ]
        ],
      }
    }
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader': MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPatch: string) => Boolean(resPatch.includes('.module.')),
              localIdentName: isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]',
            },
          },
        },
        "sass-loader",
      ],
    }

  return [
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}