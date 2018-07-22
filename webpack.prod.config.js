const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyes-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";

const VENDOR_LIBS = [
  'react', 'faker', 'redux', 'react-redux', 'react-loadable',
  'react-dom', 'redux-form', 'bootstrap', 'jquery',
  "isomorphic-fetch", "msalx", "redux-saga", "react-router"
];

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname),
    publicPath: '/ModernOA/',
    // publicPath: '/',
    filename: 'build/[name].[chunkhash].js'
  },
  // devtool: debug ? 'source-map' : 'nosources-source-map',
  devtool: 'nosources-source-map',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ['transform-object-rest-spread']
      }
    },
    {
      test: /\.(scss)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].css',
          outputPath: 'build/css/'
        }
      },
      {
        loader: 'extract-loader'
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    },
  
    {
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
      test: /\.css$/
    },
    {
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: { limit: 40000 }
        },
        'image-webpack-loader'
      ]
    }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

    new ExtractTextPlugin('build/style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new HTMLWebpackPlugin(
      {
        template: 'src/app/templates/index.html'
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      sourceMap: false,
      // Compression specific options
      uglifyOptions: {
        // Eliminate comments
        comments: false,

        compress: {
          // remove warnings
          warnings: false,

          // Drop console statements
          drop_console: true,
        }
      },

    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
