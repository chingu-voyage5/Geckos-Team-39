const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENV = process.env.APP_ENV;
const isTest = ENV === 'test'
const isProd = ENV === 'prod';

function setDevTool() {  // function to set dev-tool depending on environment
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'inline-source-map';
    } else {
      return 'eval-source-map';
    }
}

const config = {
    entry: __dirname + "/src/app/index.js", 
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: '/'
    },
    mode: 'development',
    devtool: setDevTool(),
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                  /node_modules/
                ]
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new Dotenv({
            path: './some.env', // load this now instead of the ones in '.env'
            safe: false
        })
    ],
    devServer: {
        contentBase: './src/public',
        port: 7700,
    } 
  };

// Minify and copy assets in production
if(isProd) {  // plugins to use in a production environment
    config.plugins.push(
        // new UglifyJSPlugin(),  // minify the chunk
        new CopyWebpackPlugin([{  // copy assets to public folder
          from: __dirname + '/src/public'
        }])
    );
};

module.exports = config;