const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

module.exports = {
    entry: {
        home:  __dirname + '/src/app/index.js',  
        search:  __dirname + '/src/app/search.js'    
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    watch: true,
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ],
                exclude: [
                  /node_modules/
                ]
            },
            {
                test: /\.html/,
                use: {
                    loader: 'html-loader'
                    }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: 'images/'
                    }
                  }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/public/index.html',
            chunks: ['styles', 'home']
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: __dirname + '/src/public/search.html',
            chunks: ['styles', 'home', 'search']
        }),
        new HtmlWebpackPlugin({
            filename: 'share-idea.html',
            template: __dirname + '/src/public/share-idea.html',
            chunks: ['styles', 'home']
        }),
        new HtmlWebpackPlugin({
            filename: 'find-project-partner.html',
            template: __dirname + '/src/public/find-project-partner.html',
            chunks: ['styles', 'home']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({})  // minify the chunk
    ],
    devServer: {
        contentBase: './src/public',
        port: 7700,
    } 
  };