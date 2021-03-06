const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", 
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
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
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true, //all requests sent to index.htlm, so that deep links will be handled by react-router
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
};
