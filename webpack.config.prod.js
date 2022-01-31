const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [new HtmlWebpackPlugin({ title: "Bouncing Ball", template: "./src/index.html"})],
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, //run bable on js files & webpack will bundle it up 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            root: __dirname
          }
        }, 
      }, 
      { test: /(\.css)$/, 
        use: ["style-loader", "css-loader"], //allows importing css just like js & webpack will bundle it in one css file 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(glb|gltf)$/,
        loader: "file-loader",
      },
    ],
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
    hints: 'warning',
    assetFilter: function(assetFilename) {
      return !assetFilename.endsWith('.glb');
    },
  },
  optimization: {
    moduleIds: 'hashed',
        runtimeChunk: 'single',
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        },
    },
  }
};
