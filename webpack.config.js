const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
 

module.exports = {
    entry: {
        app: [
        './src/index.js']
    },
    output: {
        path: __dirname + "dist",
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    },
    // module: {
    //     rules: [{
    //         test: /\.html$/,
    //         use: [
    //             {
    //                 loader: "html-loader",
    //                 options: { minimize: true }
    //             }
    //         ]
    //     }]
    // },
module: {
    rules: [
      {
        test: /\.html$/, // tells webpack to use this loader for all ".html" files
        loader: 'html-loader'
    },
        {
            test: /\.(png|jpg|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'],
                
              },
            
            }
          }
      ]}
      ,

    plugins: [
        new HtmlWebpackPlugin(), 
        new FaviconsWebpackPlugin('./public/images/favicon.png')


    ]
}


