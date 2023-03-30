const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    mode: argv.mode === 'development' ? 'development' : 'production',
    entry: "./index.js",
    performance: {
      hints: false,
      // assess
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    output: {
      clean: true,
      publicPath: '/',
      path: path.resolve(__dirname, "public"),
      filename: "main.js",
    },
    target: "web",
    devServer: {
      port: "9500",
      static: ["./public"],
      historyApiFallback: true,
      open: true,
      hot: true,
      liveReload: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(webp|png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        publicPath: '/',
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(argv.mode === 'production'),
      }),
    ],
  }
};
